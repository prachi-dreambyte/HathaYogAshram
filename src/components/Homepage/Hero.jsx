import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Homepage/Hero.module.css';
import heroImage from '../../assets/images/HomeBanner_V01.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${heroImage})` }}
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
