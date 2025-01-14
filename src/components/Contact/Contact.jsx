import React from "react";

import styles from "./Contact.module.css";
import { icon, github, linkedin, email } from "../../utils";
import Email from "./Email/Email";
export const Contact = () => {
  return (<>


    <div className={styles.container}>


      <footer id="contact"  >
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img className={styles.icon} src={email} alt="Email icon" />
            <a href="mailto:abodh778@gamil.com">abodh778@gamil.com</a>
          </li>
          <li className={styles.link}>
            <img
              className={styles.icon}
              src={linkedin}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/abd-al-rahman-khaleel/">linkedin.com/in/abd-al-rahman-khaleel</a>
          </li>
          <li className={styles.link}>
            <img className={styles.icon} src={github} alt="Github icon" />
            <a href="https://github.com/aboodhijazi55">github.com/aboodhijazi55</a>
          </li>
        </ul>
      </footer>
      <Email className="email" />
    </div>
  </>);
};
export default Contact