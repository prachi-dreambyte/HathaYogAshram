import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/styles/Homepage/Hero.module.css';
import heroVideo from '../../assets/videos/Hatha Yogashram Best Yoga Teacher Training in India.mp4';

/* ================= VARIANTS ================= */

// Video
const videoAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.4 } },
};

// Overlay
const overlayAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, delay: 0.2 } },
};

// Heading (left → right)
const headingAnim = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

// Subtitle (fade + scale)
const subtitleAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.3 },
  },
};

// Cards container (stagger)
const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.6,
    },
  },
};

// Card (bottom → up)
const cardAnim = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* 🎥 Video */}
      <motion.video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        variants={videoAnim}
        initial="hidden"
        animate="show"
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </motion.video>

      {/* Overlay */}
      <motion.div
        className={styles.overlay}
        variants={overlayAnim}
        initial="hidden"
        animate="show"
      />

      {/* Center Content */}
      <div className="container h-100">
        <div className="row h-100 align-items-center text-center">
          <div className="col-12">
            <motion.h1
              className={styles.heading}
              variants={headingAnim}
              initial="hidden"
              animate="show"
            >
              More 
              yoga, <br />
              Better 
              world<span>®</span>
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              variants={subtitleAnim}
              initial="hidden"
              animate="show"
            >
              Where Are You on Your Yoga Journey?
            </motion.p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <motion.div
        className={styles.cardsWrapper}
        variants={cardsContainer}
        initial="hidden"
        animate="show"
      >
        <div className="container">
          <div className="row g-3">
            {[
              {
                text: 'I’m Curious About Yoga',
                title: 'Begin Your Practice',
                arrow: styles.arrow1,
              },
              {
                text: 'I Want to Teach Yoga',
                title: 'Get Your Credential',
                arrow: styles.arrow2,
              },
              {
                text: 'I’m a Yoga Teacher Ready to Grow',
                title: 'Explore Member Benefits',
                arrow: styles.arrow3,
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <motion.div
                  className={styles.card}
                  variants={cardAnim}
                  whileHover={{ y: -6 }}
                >
                  <div>
                    <small>{item.text}</small>
                    <h5>{item.title}</h5>
                  </div>

                  <motion.span
                    className={`${styles.arrow} ${item.arrow}`}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
