import Image from "next/image";
import styles from "./generator.module.css";

export default function GeneratedImage({ prompt, imageUrl }) {
  return (
    <div className={`${styles.imageWrapper} ${imageUrl && styles.ready}`}>
      {imageUrl && <Image src={imageUrl} quality={100} fill alt={prompt} />}
    </div>
  );
}
