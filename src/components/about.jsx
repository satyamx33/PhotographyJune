import React from 'react';
import styles from './about.module.css';
import aboutImage from '../Assets/fallback.png'; // Update path as needed

const AboutSection = () => {
  return (
    <section id = "about" className={styles.aboutWrapper}>
      <div className={styles.seven}>
      <h1>About Me</h1>
      </div>
      <div className={styles['l-img-r-txt']}>
        <div
          className={styles['l-img-r-txt_img']}
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>
        <div className={styles['l-img-r-txt_txt']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates
          accusamus laudantium nam unde voluptatum eum fugiat suscipit ipsum culpa
          cumque facere, amet, quia accusantium, voluptate impedit iste? Voluptatum,
          illo.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
