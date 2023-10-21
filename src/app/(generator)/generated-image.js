import React, { Suspense } from "react";
import Image from "next/image";
import styles from "./generator.module.css";

export default function GeneratedImage({ isLoading, prompt, imageUrl }) {
  React.useEffect(() => {
    import("@dotlottie/player-component");
  });
  return (
    <div
      className={`${styles.imageWrapper} 
      ${imageUrl && styles.ready} 
      ${isLoading && styles.loading}`}
    >
      {!isLoading && (
        <dotlottie-player
          src="./lottie/loading.lottie"
          autoplay
          loop
          style={{ height: "100%", width: "100%" }}
        ></dotlottie-player>
      )}

      {imageUrl && <Image src={imageUrl} quality={100} fill alt={prompt} />}
    </div>
  );
}
