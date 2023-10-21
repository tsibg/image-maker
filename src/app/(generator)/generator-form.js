"use client";

import { experimental_useFormState as useFormState } from "react-dom";
import GeneratorButton from "./generator-button";
import GeneratedImage from "./generated-image";
import styles from "./generator.module.css";

const initialState = {
  error: null,
  prompt: "Sea of clouds",
  imageUrl: null, //"https://pbxt.replicate.delivery/NHBuxq2DHeVFH69mhjVpesD9V4Qxecf62kfvpPysOE9sdd9NC/out-0.png"
};

export default function GeneratorForm({ handleSubmit }) {
  const [state, formAction] = useFormState(handleSubmit, initialState);
  const { prompt, imageUrl, error } = state;

  return (
    <>
      <GeneratedImage prompt={prompt} imageUrl={imageUrl} />
      <div>
        <p className={styles.description}>
          {error ? (
            <span className={styles.error}>{error}</span>
          ) : (
            "Generate an image with SDXL. Enter few words to begin the magic!"
          )}
        </p>
        <form className={styles.form} action={formAction}>
          <input type="text" name="prompt" required placeholder={prompt} />
          <GeneratorButton />
        </form>
      </div>
    </>
  );
}
