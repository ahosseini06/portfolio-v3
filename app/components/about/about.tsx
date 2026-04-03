import React from "react";
import styles from "./about.module.css";
import Gallery from "./gallery";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Hi, I&apos;m Ali. Before focusing on design engineering, I explored a
        wide range of disciplines and pursued them seriously. That continuous
        learning journey has shaped how I think and work — giving me the
        adaptability and perspective of someone with broad experience, while
        still maintaining the energy, curiosity, and ambition of someone early in
        their career. Here is an image gallery highlighting a few corners of my
        life outside of work!
      </p>
      <Gallery />
    </div>
  );
};

export default About;
