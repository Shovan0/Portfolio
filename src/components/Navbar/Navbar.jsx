import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import close from "../../../public/assets/nav/closeIcon.png"
import menu from "../../../public/assets/nav/menuIcon.png"


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the menu if the click is outside the nav element
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Only add the listener if the menu is open
    if (menuOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts or menuOpen changes
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]); // Re-run effect when menuOpen state changes

  return (
    <nav className={styles.navbar} ref={navRef}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? close : menu}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};