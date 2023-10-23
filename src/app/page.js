import GeneratorForm from "./(generator)/generator-form";
const defaultPrompt = "Sea of clouds";

export default function Page() {
 
  return (
      <GeneratorForm defaultPrompt={defaultPrompt} />
  );
}
