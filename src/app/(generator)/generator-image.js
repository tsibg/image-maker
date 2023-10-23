"use client";
import { useState } from "react";
import Image from "next/image";

import styles from "./generator.module.css";

export default function GeneratedImage({ prompt, imageUrl }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className={`${styles.imageWrapper} ${isReady ? styles.ready : "" }`}>
      {imageUrl && (
        <a href={imageUrl} target="_blank">
          <Image
            src={imageUrl}
            quality={100}
            onLoad={() => setIsReady(true)}
            width={1024}
            height={768}
            priority
            alt={prompt || "AI Generated image"}
          />
        </a>
      )}
    </div>
  );
}
