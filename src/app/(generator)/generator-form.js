"use client";

import { useFormState } from "react-dom";
import { generateImage } from "../actions/replicate";

import GeneratorButton from "./generator-button";
import styles from "./generator.module.css";

const initialState = {
  error: null,
};

export default function GeneratorForm({
  defaultPrompt,
  error,
  isProcessing,
}) {
  const [state, formAction] = useFormState(generateImage, initialState);
  const errorMessage = state.error || error;
  return (
    <div>
      <p className={styles.description}>
        {errorMessage ? (
          <span className={styles.error}>{errorMessage}</span>
        ) : (
          "Generate an image with SDXL. Enter few words to begin the magic!"
        )}
      </p>
      <form className={styles.form} action={formAction}>
        <div className={styles.prompt}>
          <input
            type="text"
            name="prompt"
            disabled={isProcessing}
            required
            placeholder={defaultPrompt}
          />
        </div>
        <GeneratorButton isProcessing={isProcessing} />
      </form>
    </div>
  );
}
