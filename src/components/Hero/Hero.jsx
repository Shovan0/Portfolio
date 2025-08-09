import React from 'react'
import styles from "./Hero.module.css";
// import { getImageUrl } from '../../utils'
import hero from "../../../public/assets/hero/me.jpg"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Shovan</h1>
            <p className={styles.description}>I'm a full-stack developer with freashers using React and NodeJS. Reach out if you'd like to learn more!</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shovannath2001@gmail.com&su=Portfolio%20Contact&body=Hi%20Shovan%2C%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              Contact Me
            </a>

        </div>
        <img src={hero} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
  )
}
