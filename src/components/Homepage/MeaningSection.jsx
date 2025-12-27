import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/styles/Homepage/MeaningSection.module.css';
import meaningImg from '../../assets/images/b8407a78c8f9a7b9c44d8e5ee10d1fa0.jpg';

/* ================= VARIANTS ================= */

// Image animation
const imageAnim = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

// Content container (stagger)
const contentContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Text animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const MeaningSection = () => {
  return (
    <section className={styles.meaningSection}>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-lg-6 p-0">
            <motion.div
              className={styles.imageWrapper}
              variants={imageAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={meaningImg} alt="Yoga Practice" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <motion.div
              className={styles.content}
              variants={contentContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.h2 variants={fadeUp}>
                Meaning beyond movement
              </motion.h2>

              <motion.p variants={fadeUp}>
                From starting your day to nourishing a healing journey, Glo
                empowers you to live well. Through mindful movement and
                conscious breath, each practice helps you slow down, release
                tension, and restore balance within. Whether you’re seeking
                strength, stillness, or clarity, your mat becomes a space to
                reconnect with yourself. You can even download go-to classes to
                practice outdoors and on the road.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeaningSection;
