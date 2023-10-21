import GeneratorForm from "./generator-form";
import {generateImage} from "../actions/actions";

import styles from "./generator.module.css";

const handleSubmit = async (prevState, formData) => {
  "use server";
  const prompt = await formData.get("prompt");
  if (!prompt) return { error: "No prompt provided." };
  
  try {
  return await generateImage(prompt);
  } catch (error) {
    console.error(error);
    return { error: "Could not generate, please try again." };
  }
};

export default function Generator() {
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Image Generator.</h1>
      
      <GeneratorForm handleSubmit={handleSubmit} />
    </div>
  );
}
