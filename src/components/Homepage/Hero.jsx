import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Homepage/Hero.module.css';

// Slider Images
import hero1 from '../../assets/images/HomeBanner_V01.webp';
import hero2 from '../../assets/images/HomeBanner_V02.webp';
import hero3 from '../../assets/images/HomeBanner_V03.webp';

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [images.length]);


  return (
    <section className={styles.hero}>
      {/* Background Slider */}
      <div
        className={styles.bgImage}
        style={{
          backgroundImage: `url(${images[current]})`,
        }}
      />

      {/* Button */}
      <div className={styles.cardsWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/about" className={styles.learnMoreBtn}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
