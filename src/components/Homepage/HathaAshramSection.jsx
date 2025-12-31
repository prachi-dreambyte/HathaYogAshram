import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/HathaAshramSection.module.css";
import dividerImg from "../../assets/images/linedesign.png";
import yogaAlliance from "../../assets/images/yoga-alliance-logo-1-e1725693185665.jpg";
import rys200 from "../../assets/images/yoga-alliance-logo-2.jpg";
import rys300 from "../../assets/images/yoga-alliance-logo-3.jpg";
import yacep from "../../assets/images/yoga-alliance-logo-4.jpg";
import rpyts from "../../assets/images/yoga-alliance-logo-5.jpg";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HathaAshramSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">

        {/* ===== HEADING ===== */}
        <motion.div
          className={styles.headingWrapper}
          variants={fadeUp}
        >
          <h2>Best Hatha Yoga Ashram In Rishikesh, India</h2>
          <span className={styles.divider}>
            <img src={dividerImg} alt="divider" />
          </span>
        </motion.div>

        {/* ===== CONTENT (TOP) ===== */}
        <motion.div
          className={styles.content}
          variants={staggerContainer}
        >
          <motion.p className={styles.highlight} variants={fadeUp}>
            Rishikesh is the sacred land of yogic living and spiritual
            awakening.
          </motion.p>

          <motion.p variants={fadeUp}>
            Surrounded by the Himalayan mountains and blessed by the holy river
            Ganga, Rishikesh offers a naturally serene and powerful environment
            for the practice of traditional Hatha Yoga.
          </motion.p>

          <motion.p variants={fadeUp}>
            For centuries, sages and yogis have practiced tapasya and meditation
            in this sacred land to attain self-realization and inner peace.
          </motion.p>

          <motion.p variants={fadeUp}>
            Our Hatha Yoga Ashram follows the traditional Guru–Shishya
            (Teacher–Student) lineage, offering authentic yogic teachings rooted
            in discipline, simplicity, and awareness.
          </motion.p>
        </motion.div>

        {/* ===== CERTIFICATIONS ===== */}
        <motion.div
          className={styles.certifications}
          variants={staggerContainer}
        >
          {[yogaAlliance, rys200, rys300, yacep, rpyts].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="Yoga Alliance Certification"
              variants={logoFade}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </motion.div>

        {/* ===== CONTENT (BOTTOM) ===== */}
        <motion.div
          className={styles.content}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp}>
            The primary focus of our ashram is the systematic practice of
            traditional Hatha Yoga.
          </motion.p>

          <motion.p variants={fadeUp}>
            Along with physical practice, students are introduced to Yoga
            Philosophy, Anatomy & Physiology, Ayurveda basics, mantra chanting,
            and mindfulness practices.
          </motion.p>

          <motion.p variants={fadeUp}>
            Our teachers are highly experienced practitioners dedicated to
            preserving the purity of classical Hatha Yoga.
          </motion.p>

          <motion.p variants={fadeUp}>
            This Hatha Yoga Ashram is a place where students not only learn yoga
            techniques but also experience yogic living.
          </motion.p>

          <motion.p variants={fadeUp}>
            In our Hatha Yoga Teacher Training courses in Rishikesh, India,
            students cultivate physical strength, mental stability, and
            spiritual awareness.
          </motion.p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HathaAshramSection;
