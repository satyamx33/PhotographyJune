import React from 'react';
import styles from './contacts.module.css';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  return (
    <footer className={`${styles.contact} ${styles.section}`} id="contact">
      <div className={styles.section__header}>
        <h1 className={styles.section__title}>Capture The Moment</h1>
        <p className={styles.section__subtitle}>Let's create visual magic together</p>
      </div>
      
      <div className={styles.contact__container}>
        <div className={styles.contact__grid}>
          <div className={`${styles.contact__card} ${styles.card__glow}`}>
            <div className={styles.contact__icon__wrapper}>
              <i className={`bx bx-map ${styles.contact__icon}`}></i>
            </div>
            <h3 className={styles.contact__title}>Studio Location</h3>
            <span className={styles.contact__description}>#123 BBSR, India</span>
            <div className={styles.card__overlay}></div>
          </div>

          <div className={`${styles.contact__card} ${styles.card__glow}`}>
            <div className={styles.contact__icon__wrapper}>
              <i className={`bx bx-phone ${styles.contact__icon}`}></i>
            </div>
            <h3 className={styles.contact__title}>Call Me</h3>
            <a href="tel:9876543210" className={styles.contact__link}>+91 98765 43210</a>
            <div className={styles.card__overlay}></div>
          </div>

          <div className={`${styles.contact__card} ${styles.card__glow}`}>
            <div className={styles.contact__icon__wrapper}>
              <i className={`bx bx-envelope ${styles.contact__icon}`}></i>
            </div>
            <h3 className={styles.contact__title}>Email Me</h3>
            <a href="mailto:abc@gmail.com" className={styles.contact__link}>abc@gmail.com</a>
            <div className={styles.card__overlay}></div>
          </div>

          <div className={`${styles.contact__card} ${styles.card__glow}`}>
            <div className={styles.contact__icon__wrapper}>
              <i className={`bx bx-share-alt ${styles.contact__icon}`}></i>
            </div>
            <h3 className={styles.contact__title}>Socials</h3>
            <div className={styles.social__links}>
              <a href="#" className={styles.social__link} aria-label="Instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className={styles.social__link} aria-label="Twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className={styles.social__link} aria-label="Behance">
                <i className="bx bxl-behance"></i>
              </a>
            </div>
            <div className={styles.card__overlay}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;