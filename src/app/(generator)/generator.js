import GeneratorImage from "./generator-image";
import GeneratorForm from "./generator-form";

export default function Generator({ imageUrl, prompt }) {
  return (
    <>
      <GeneratorImage imageUrl={imageUrl} />
      <GeneratorForm defaultPrompt={prompt} />
    </>
  );
}
