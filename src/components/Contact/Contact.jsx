import React from 'react'
import Gmail from "../../../public/assets/contact/emailIcon.png"
import github from "../../../public/assets/contact/githubIcon.png"
import linkedin from "../../../public/assets/contact/linkedinIcon.png"

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={Gmail} alt="Email Icon" />
                <a href="mailto:dipanwitadas2442004@gmail.com">dipanwitadas2442004@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={linkedin} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/dipanwita-das-115621280/">https://www.linkedin.com/in/dipanwita-das-115621280/</a>
            </li>

            <li className={styles.link}>
                <img src={github} alt="Github Icon" />
                <a href="https://github.com/DipanwitaDas">https://github.com/DipanwitaDas</a>
            </li>
        </ul>
    </footer>
  )
}
