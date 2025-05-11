import React from 'react';
import styles from './image_collection.module.css';

import About1 from '../Assets/imagecollection/About1.jpg';
import About2 from '../Assets/imagecollection/About2.jpg';
import About3 from '../Assets/imagecollection/About3.jpg';
import About4 from '../Assets/imagecollection/About4.jpg';
import About5 from '../Assets/imagecollection/About5.jpg';
import About6 from '../Assets/imagecollection/About6.jpg';
import About7 from '../Assets/imagecollection/About7.jpg';
import About8 from '../Assets/imagecollection/About8.jpg';
import About9 from '../Assets/imagecollection/About9.jpg';
import About10 from '../Assets/imagecollection/About10.jpg';

const imagelist = [
  About1, About2, About3, About4, About5,
  About6, About7, About8, About9, About10,
];

const ImageCollection = () => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.seven}>
      <h1>Portfolio Collection</h1>
      </div>
      <ul className={styles.container}>
        {imagelist.map((imgUrl, index) => (
          <li className={styles.item} key={index}>
            <figure className={styles.figure}>
              <img
  src={imgUrl}
  alt={`Collection ${index + 1}`}
  className={styles.image}
  loading="lazy"
/>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageCollection;
