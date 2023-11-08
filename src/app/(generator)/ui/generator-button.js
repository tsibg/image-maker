"use client";

import { useFormStatus } from "react-dom";

export default function GeneratorButton({ isProcessing }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending || isProcessing} type="submit">
      Go
    </button>
  );
}
