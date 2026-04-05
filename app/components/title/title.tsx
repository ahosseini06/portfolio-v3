"use client";

import React, { useEffect, useState } from "react";
import styles from "./title.module.css";

const PHASE_DIVIDER_MS = 780;
const PHASE_DESC_MS = 1480;

export default function Title() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setPhase(2);
      return;
    }

    const t1 = window.setTimeout(() => setPhase(1), PHASE_DIVIDER_MS);
    const t2 = window.setTimeout(() => setPhase(2), PHASE_DESC_MS);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <div
          className={`${styles.title} ${phase >= 1 ? styles.titleSpaced : ""}`}
        >
          <div className={styles.name}>ALI HOSSEINI</div>
          <div
            className={`${styles.dividerWrap} ${phase >= 1 ? styles.dividerWrapVisible : ""}`}
          >
            <div
              className={`${styles.divider} ${phase >= 1 ? styles.dividerDrawing : ""}`}
              aria-hidden
            />
          </div>
          <div
            className={`${styles.descWrap} ${phase >= 2 ? styles.descWrapOpen : ""}`}
          >
            <div className={styles.desc}>
              Design Engineer, passionate about
              <br />
              the <strong>science</strong> behind brand identity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
