"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./generator.module.css";

export default function GeneratedImage({ prompt, imageUrl, isProcessing }) {
  const [isReady, setIsReady] = useState(!isProcessing);
  useEffect(() => {
    if(isProcessing) setIsReady(false);
  }, [isProcessing]);

  return (
    <div className={`${styles.imageWrapper} ${isReady ? styles.ready: styles.notReady}`}>
      {imageUrl && (
        <a href={imageUrl} target="_blank">
          <Image
            src={imageUrl}
            quality={100}
            onLoad={() => setIsReady(true)}
            fill
            priority
            sizes="100vw"
            alt={prompt || "AI Generated image"}
          />
        </a>
      )}
    </div>
  );
}
