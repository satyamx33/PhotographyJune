import React from 'react';
import styles from './contacts.module.css'; // CSS module
import 'boxicons/css/boxicons.min.css'; // Import Boxicons globally (can also add via index.html or CDN)

const Contact = () => {
  return (
    <section className={`${styles.contact} ${styles.section}`} id="contact">
      <div className={styles.seven}>
      <h1 className={styles['section-title']}>Contact Me</h1>
      </div>
      <div className={`${styles['contact__container']} ${styles['bd-container']}`}>
        <div className={`${styles['contact__content']} ${styles['bd-grid']}`}>
          <div className={styles['contact__box']}>
            <i className={`bx bx-home ${styles['contact__icon']}`}></i>
            <h3 className={styles['contact__title']}>Location</h3>
            <span className={styles['contact__description']}>#123 BBSR - India</span>
          </div>

          <div className={styles['contact__box']}>
            <i className={`bx bx-phone ${styles['contact__icon']}`}></i>
            <h3 className={styles['contact__title']}>Phone</h3>
            <span className={styles['contact__description']}>9876543210</span>
          </div>

          <div className={styles['contact__box']}>
            <i className={`bx bx-envelope ${styles['contact__icon']}`}></i>
            <h3 className={styles['contact__title']}>Gmail</h3>
            <span className={styles['contact__description']}>abc@gmail.com</span>
          </div>

          <div className={styles['contact__box']}>
            <i className={`bx bx-chat ${styles['contact__icon']}`}></i>
            <h3 className={styles['contact__title']}>Socials</h3>
            <div>
              <a href="#" className={styles['contact__social']}><i className="bx bxl-instagram"></i></a>
              <a href="#" className={styles['contact__social']}><i className="bx bxl-twitter"></i></a>
              <a href="#" className={styles['contact__social']}><i className="bx bxl-snapchat"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
