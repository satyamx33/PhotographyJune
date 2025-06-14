import React from 'react';
import styles from './header.module.css';
import fallbackImg from '../Assets/fallback.png';
import videoSrc from '../Assets/db0230f7-e124-4f97-b251-5c4397b6364e.mp4';
import whitelogo from '../Assets/White_Logo_PNG (1).png';

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <img src={fallbackImg} alt="Fallback" className={styles.fallbackImage} />
      <div className={styles.overlay}>
        <img src={whitelogo} alt="Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
