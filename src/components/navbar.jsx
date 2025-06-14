import React from 'react';
import styles from './navbar.module.css';


const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#header" className={styles.navItem}>Home</a></li>
          <li><a href="#about" className={styles.navItem}>About</a></li>
          <li><a href="#portfolio" className={styles.navItem}>Portfolio</a></li>
          <li><a href="#contact" className={styles.navItem}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
