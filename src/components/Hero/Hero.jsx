import React from "react";

import styles from "./Hero.module.css";
import { hero } from "../../utils";

export const Hero = () => {




  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>

          I'AM <br /> Abd Al-RAHMAN KHALEEL

        </h1>
        <p className={styles.description}>
          I'm a Full-Stack Developer using React and
          NodeJS.<br /> Reach out if you'd like to learn more!
        </p>

        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={hero}
        alt="H"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero
