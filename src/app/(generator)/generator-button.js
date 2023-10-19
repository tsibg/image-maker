'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function GeneratorButton() {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} type="submit">
      Go
    </button>
  );
}
