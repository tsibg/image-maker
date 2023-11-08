"use client";
import React, { startTransition, useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { getProgress } from "../../actions/replicate";
import { useParams } from "next/navigation";

import styles from "./generator.module.css";

const POLLING_INTERVAL = 500;

export default function GeneratorLoader({ isProcessing }) {
  const params = useParams();
  const [shouldPoll, setShouldPoll] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setShouldPoll(isProcessing);
    if (isProcessing) {
      setProgress(0);
      setStatus("loading");
    }
  }, [isProcessing]);

  useInterval(
    async () => {
      setShouldPoll(false);

      const data = await getProgress(params.id);
      // const data = { isProcessing: false, progress: 0, progressText: "Loading...", };
      console.log("Get Progress: ", data.progress);

      startTransition(() => {
        setShouldPoll(data.isProcessing);
        setProgress(data.progress);
        setStatus(data.status);
      });
    },
    shouldPoll ? POLLING_INTERVAL : null
  );

  return (
    <>
      {isProcessing && (
        <div className={`${styles.progress} ${isProcessing ? styles.processing : ''}`}>
          <div className={styles.pulse}></div>
          <div className={styles.indicator}>

            <div className={`${styles.perc} ${progress == 0 ? styles.infinity : null}`}>{progress ? progress + "%" : "∞"}</div>
            <div>{status}</div>
          </div>
        </div>
      )}
    </>
  )
}
