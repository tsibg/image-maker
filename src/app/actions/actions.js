"use server";

import Replicate from "replicate";
import replicateConfig from "@/config/replicate.config.js";

export async function generateImage(prompt) {
  console.log("generateImage ", prompt);
  const gluedPrompt =
    replicateConfig.promptPreffix + prompt + replicateConfig.promptSuffix;

  const replicate = new Replicate({
    // get your token from https://replicate.com/account
    auth: replicateConfig.auth, // defaults to process.env.REPLICATE_API_TOKEN
  });

  //Workaround for caching https://github.com/replicate/replicate-javascript/issues/136
  replicate.fetch = (url, options) => {
    return fetch(url, { ...options, cache: "no-store" });
  };

  const output = await replicate.run(
    replicateConfig.model,
    {
      input: {
        ...replicateConfig.defaultInput,
        prompt: gluedPrompt,
      },
    }
  );

  console.log("Output:", output);
  const imageUrl = output[0];

  return { prompt, imageUrl };
}
