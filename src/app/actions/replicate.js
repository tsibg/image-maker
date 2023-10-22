"use server";

import Replicate from "replicate";
import replicateConfig from "@/config/replicate.config.js";
import { redirect, notFound } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: replicateConfig.auth, // defaults to process.env.REPLICATE_API_TOKEN
});

export async function generateImage(prevState, formData) {
  const prompt = await formData.get("prompt");
  if (!prompt) return { error: "No prompt provided." };

  console.log("generateImage: ", prompt);

  const gluedPrompt =
    replicateConfig.promptPreffix + prompt + replicateConfig.promptSuffix;

  const res = await replicate.predictions
    .create({
      version: replicateConfig.version,
      input: {
        ...replicateConfig.defaultInput,
        prompt: gluedPrompt,
      },
    })
    .catch((error) => {
      console.log("[CREATE]Replicate Error:", error);
      return { error: error.message };
    });

  if (res.error) return res;
  redirect("/images/" + res.id);
}

export async function getImage(id) {
  console.log("getImage: ", id);
  replicate.fetch = (url, options) => {
    return fetch(url, {
      ...options,
      next: { tags: ["replicate", "image/" + id] },
    });
  };

  const res = await replicate.predictions
    .get(id)
    .then((imageData) => {
      // console.log("[Replicate] Image data: ", imageData);
      const imageUrl = imageData.output?.pop();
      const prompt = imageData.input?.prompt;
      const error = imageData.error;
      let progress = 100;
      const isProcessing =
        imageData.status === "processing" || imageData.status === "starting";
      
      return { imageUrl, prompt, isProcessing, error };
    })
    .catch((error) => {
      console.log("[GET]Replicate Error:", error);
      return {
        isProcessing: false,
        error: error.message,
      };
    });

  return res;
}

export async function getProgress(id) {
  console.log("[ACTION] getProgress: ", id);

  replicate.fetch = (url, options) => {
    return fetch(url, {
      ...options,
      cache: "no-store",
    });
  };
  const data = await replicate.predictions.get(id);
  const isProcessing =
    data.status === "processing" || data.status === "starting";
  if (!isProcessing) {
    revalidateTag("image/" + id);
    return { isProcessing, progress: data.status };
  }

  const log = data.logs?.split("\n");
  let progress = data.status;
  if (log && log.length > 1) {
    progress = log.slice(-2).shift();
    console.log(progress);
  }

  return { isProcessing, progress };
}
