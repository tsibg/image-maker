import Link from "next/link";
import GeneratorForm from "@/app/(generator)/generator-form";
import GeneratorImage from "@/app/(generator)/generator-image";
import GeneratorLoader from "@/app/(generator)/generator-loader";
import { getImage } from "@/app/actions/replicate";

import styles from "./images.module.css";

export default async function Page({ params: { id } }) {
  console.log("Image page: ", id);
  const { imageUrl, prompt, error, isProcessing } = await getImage(id);
  return (
    <>
      <h1 className={styles.title}>
        <Link href="/">Image Maker.</Link>
      </h1>
      <div className={styles.imagePage}>
        <GeneratorImage isProcessing={isProcessing} imageUrl={imageUrl} promp={prompt} />
        <GeneratorLoader isProcessing={isProcessing} />
        <GeneratorForm
          isProcessing={isProcessing}
          error={error}
          defaultPrompt={prompt}
        />
      </div>
    </>
  );
}
