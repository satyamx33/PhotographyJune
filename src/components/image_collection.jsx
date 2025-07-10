import React from 'react';
import { Link } from 'react-router-dom';
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

const portfolioData = [
  { id: 1, img: About1, title: 'Food', route: 'food' },
  { id: 2, img: About2, title: 'Product', route: 'product' },
  { id: 3, img: About3, title: 'Fashion', route: 'fashion' },
  { id: 4, img: About4, title: 'Car', route: 'car' },
  { id: 5, img: About5, title: 'Gym', route: 'gym' },
  { id: 6, img: About6, title: 'Concerts', route: 'concerts' },
  { id: 7, img: About7, title: 'Property', route: 'property' },
  { id: 8, img: About8, title: 'Weddings', route: 'weddings' },
  { id: 9, img: About9, title: 'Meetings', route: 'meetings' },
  { id: 10, img: About10, title: 'Party', route: 'party' },
];

const ImageCollection = () => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.section__header}>
        <h1 className={styles.section__title}>Portfolio Collection</h1>
      </div>
      <div className={styles.portfolioGrid}>
        {portfolioData.map((item) => (
          <div className={styles.portfolioItem} key={item.id}>
            <Link
              to={`/portfolio/${item.route}`}
              className={styles.portfolioLink}
              aria-label={`View ${item.title} portfolio`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={item.img}
                  alt={`${item.title} Portfolio`}
                  className={styles.portfolioImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.portfolioTitle}>{item.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCollection;