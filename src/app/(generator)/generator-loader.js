"use client";
import React, { startTransition, useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { getProgress } from "../actions/replicate";
import { useParams } from "next/navigation";

import styles from "./generator.module.css";

const POLLING_INTERVAL = 500;

export default function GeneratorLoader({ isProcessing }) {
  const params = useParams();
  const [shouldPoll, setShouldPoll] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setShouldPoll(isProcessing);
    setProgress(0);
  }, [isProcessing]);

  useInterval(
    async () => {
      setShouldPoll(false); //Do not poll while we are processing
      const data = await getProgress(params.id);
      // const data = { isProcessing: true, progress: 0 };
      console.log("Progress: ", data.progress);
      startTransition(() => {
        setShouldPoll(data.isProcessing);
        setProgress(data.progress);
      });
    },
    shouldPoll ? POLLING_INTERVAL : null
  );

  return (
    <>
      <div className={`${styles.progress} ${isProcessing?styles.processing:''}`}>
        {isProcessing && <div>Processing: {progress}</div>}
      </div>
    </>
  );
}
