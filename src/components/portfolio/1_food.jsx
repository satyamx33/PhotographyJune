import React from 'react';
import styles from './portfolio.module.css';

// Manually import each image
import About1 from '../../Assets/imagecollection/About1.jpg';
import About2 from '../../Assets/imagecollection/About2.jpg';
import About3 from '../../Assets/imagecollection/About3.jpg';
import About4 from '../../Assets/imagecollection/About4.jpg';
import About5 from '../../Assets/imagecollection/About5.jpg';
import About6 from '../../Assets/imagecollection/About6.jpg';
import About7 from '../../Assets/imagecollection/About7.jpg';
import About8 from '../../Assets/imagecollection/About8.jpg';
import About9 from '../../Assets/imagecollection/About9.jpg';
import About10 from '../../Assets/imagecollection/About10.jpg';

const Food = () => {
  // Create an array of all imported images
  const foodImages = [
    About1, About2, About3, About4, About5,
    About6, About7, About8, About9, About10
  ];

  return (
    <div className={styles.portfolioContainer}>
      <h2>Food Portfolio</h2>
      <div className={styles.masonryGrid}>
        {foodImages.map((image, index) => (
          <div key={`food-${index}`} className={styles.masonryItem}>
            <img 
              src={image} 
              alt={`Food ${index + 1}`}
              className={styles.masonryImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;