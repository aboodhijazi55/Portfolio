import React from "react";

import styles from "./About.module.css";
import skills from "../../data/skills.json"
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>

                My Front-End skills are : <span> HTML5 | CSS3 | JavaScript | React | EJS | NextJs | Material UI | Bootstrap | jQuery.</span>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                My Back-End skills are : <span> Node | Express | PostgreSQL | SQL | REST | git | NPM.</span>
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
export default About