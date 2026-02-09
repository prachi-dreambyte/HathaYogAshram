import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/YogaIntro.module.css";
import yogaVideo from "../../assets/videos/hath-Yoga-Rishikesh.mp4";

/* ===================== */
/* Animation Variants */
/* ===================== */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

const videoAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const YogaIntro = () => {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="col-lg-6 col-md-12"
            variants={staggerContainer}
          >
            <motion.p className={styles.smallLabel} variants={fadeUp}>
              Yoga Alliance® Certified School
            </motion.p>

            <motion.h1 className={styles.heading} variants={fadeUp}>
              Learn with Yoga Alliance® Certified School of Hatha Yog
            </motion.h1>

            <motion.h2 className={styles.subHeading} variants={fadeUp}>
              Best Yoga Teacher Training in India
            </motion.h2>

            <motion.p className={styles.text} variants={fadeUp}>
              Are you dreaming of becoming a certified yoga instructor? Are you
              searching for the top yoga teacher training in Rishikesh, India?
            </motion.p>

            <motion.p className={styles.text} variants={fadeUp}>
              Look no further than <strong>Hatha Yogashram</strong>. We are the{" "}
              <span className={styles.highlight}>
                best online yoga teacher training
              </span>{" "}
              school in India dedicated to offering authentic education in yoga.
              Our aim is to preserve and share the ancient wisdom of yoga,
              guiding individuals on a transformative journey of
              self-discovery.
            </motion.p>

            <motion.p className={styles.text} variants={fadeUp}>
              Nestled in the serene surroundings of Rishikesh, Hatha Yogashram
              provides yoga teacher training and a transformative experience,
              empowering you to become a knowledgeable and confident yoga
              teacher.
            </motion.p>

            <motion.p className={styles.text} variants={fadeUp}>
              Explore our courses{" "}
              <span className={styles.highlight}>200 Hour</span>,{" "}
              <span className={styles.highlight}>300 Hour</span> &{" "}
              <span className={styles.highlight}>500 Hour</span> Yoga Teacher
              Training.
            </motion.p>

            <motion.button
              className={styles.button}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Know More
            </motion.button>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            className="col-lg-6 col-md-12 mt-4 mt-lg-0"
            variants={videoAnim}
          >
            <div className={styles.videoWrapper}>
              <video controls className={styles.video}>
                <source src={yogaVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default YogaIntro;
