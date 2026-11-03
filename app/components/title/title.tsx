import React from "react";
import styles from "./title.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <div className={styles.title}>
          <div className={styles.name}>ALI HOSSEINI</div>
          <div className={styles.dividerWrap}>
            <div className={styles.divider} aria-hidden />
          </div>
          <div className={styles.descWrap}>
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
