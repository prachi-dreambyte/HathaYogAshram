import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/VedicMantraCourse.module.css";
import mantraImg from "../../assets/images/IMG_130.jpeg";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const contentVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const VedicMantraCourse = () => {
  return (
    <motion.section
      className={styles.section}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={`container ${styles.cardWrapper}`}>
        <div className={styles.card}>

          {/* Left Image */}
          <motion.div
            className={styles.imageBox}
            variants={imageVariant}
          >
            <img src={mantraImg} alt="Vedic Mantra Chanting" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className={styles.contentBox}
            variants={contentVariant}
          >
            <motion.h2 className={styles.title} variants={fadeUp}>
              Vedic Mantra Chanting
            </motion.h2>

            <motion.p className={styles.subtitle} variants={fadeUp}>
              Teacher Training Course
            </motion.p>

            <motion.h4 className={styles.feeLabel} variants={fadeUp}>
              Course Fee
            </motion.h4>

            <motion.div className={styles.price} variants={fadeUp}>
              <span>$</span> 175
            </motion.div>

            <motion.p className={styles.description} variants={fadeUp}>
              Mantra is a sacred utterance, a numinous sound, a syllable, a word
              or phonemes, or a group of words believed by practitioners to have
              religious, magical, or spiritual powers and to aid concentration.
              The word ‘Mantra’ has 2 parts: ‘Man’, which is the root of the
              Sanskrit word of mind; and ‘Tra’, which is the root of the word
              instrument. It is commonly translated to mean “an instrument or
              tool for the mind” or “that which when reflected upon, brings
              liberation.”
            </motion.p>

            <motion.div className={styles.dateRow} variants={fadeUp}>
              <span className={styles.calendarIcon}>📅</span>
              <strong>Date:</strong> 2nd of every month
            </motion.div>

            <motion.div className={styles.btnGroup} variants={fadeUp}>
              <motion.button
                className={styles.outlineBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More Details
              </motion.button>

              <motion.button
                className={styles.fillBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default VedicMantraCourse;
