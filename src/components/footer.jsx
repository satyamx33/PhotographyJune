import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MR portraits. All rights reserved.</p>
    </footer>
  );
};

export default Footer;