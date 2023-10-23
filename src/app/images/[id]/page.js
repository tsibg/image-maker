import GeneratorForm from "@/app/(generator)/generator-form";
import GeneratorImage from "@/app/(generator)/generator-image";
import GeneratorLoader from "@/app/(generator)/generator-loader";
import { getImage } from "@/app/actions/replicate";

export default async function Page({ params: { id } }) {
  console.log("Image page: ", id);
  const { imageUrl, prompt, error, isProcessing } = await getImage(id);
  return (
    <>
      <GeneratorImage imageUrl={imageUrl} promp={prompt} />
      <GeneratorLoader isProcessing={isProcessing} />
      <GeneratorForm
        isProcessing={isProcessing}
        error={error}
        defaultPrompt={prompt}
      />
    </>
  );
}
