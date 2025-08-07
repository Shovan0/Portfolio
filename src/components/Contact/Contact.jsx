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
                <a href="mailto:shovannath2001@gmail.com">shovannath2001@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={linkedin} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/shovan-nath-308620280/">www.linkedin.com/in/shovan-nath</a>
            </li>

            <li className={styles.link}>
                <img src={github} alt="Github Icon" />
                <a href="https://github.com/Shovan0">github.com/Shovan</a>
            </li>
        </ul>
    </footer>
  )
}
