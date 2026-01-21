import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/Facilitiesbanner.module.css";
import bannerImage from "../../assets/images/banner3.png";

/* ===================== */
/* Animation Variants */
/* ===================== */

const bannerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const FacilitiesSection = () => {
  return (
    <motion.section
      className={styles.facilitiesSection}
      variants={bannerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* ===== TOP BANNER ===== */}
      <motion.div
        className={styles.topBanner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <motion.div
          className={styles.bannerOverlay}
          variants={staggerText}
        >
          <motion.h1 variants={textFadeUp}>Join Our School</motion.h1>

          <motion.h2 variants={textFadeUp}>
            Begin Your Journey with Our 200 Hour Hatha Yoga TTC
          </motion.h2>

          {/* CTA BUTTON */}
          <motion.button
            className={styles.bannerBtn}
            variants={textFadeUp}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FacilitiesSection;
