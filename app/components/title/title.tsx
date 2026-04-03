import React from "react";
import styles from "./title.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <div className={styles.title}>
          <div className={styles.name}>ALI HOSSEINI</div>
          <div className={styles.divider}></div>
          <div className={styles.desc}>
            Design Engineer, passionate about
            <br></br>the <strong>science</strong> behind brand identity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
