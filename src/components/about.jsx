import React from 'react';
import styles from './about.module.css';
import aboutImage from '../Assets/abts.png'; // Update path as needed

const AboutSection = () => {
  return (
    <section id = "about" className={styles.aboutWrapper}>
      <div className={styles.seven}>
      <h1>About Us</h1>
      </div>
      <div className={styles['l-img-r-txt']}>
        <div
          className={styles['l-img-r-txt_img']}
          style={{ backgroundImage: `url(${aboutImage})` }}
        ></div>
        <div className={styles['l-img-r-txt_txt']}>
          <p>At MrPotraits, we believe every moment holds a story worth capturing. Founded with passion and purpose, our mission is simple - "We Capture What You Want."</p>
          <p>We specialize in professional photo graphy and cinematic videography tailored to your vision. Weather it's a wedding, potrait session, corporate event, p roduct shoot, or promotional video, we delever high-quality visuals that reflect authenticity, emotion, and creativity.</p>
          <p>With a keen eye for detail and a commitment to excellence, we work closely with our clients to understand their needs and bring ideas to life - beautifully and memorabaly.</p>
          <p>From concepts to final edit our team ensures a smooth and collaborative experience that results in visuals you'll be proud to share.
          <br/> Let us tell yours story - "One Frame at a Time".</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
