import GeneratorForm from "@/app/(generator)/generator-form";
import GeneratorImage from "@/app/(generator)/generator-image";
import GeneratorLoader from "@/app/(generator)/generator-loader";
import { getImage } from "@/app/actions/replicate";

import styles from "./image.module.css";

export default async function Page({ params: { id } }) {
  console.log("Image page: ", id);
  const { imageUrl, prompt, error, isProcessing } = await getImage(id);
  return (
    <>
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
