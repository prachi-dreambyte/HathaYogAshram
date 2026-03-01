import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/YogaAliiance.module.css";
// import heroVideo from "../../assets/videos/VID-20241125-WA0084.mp4";
const API = "http://localhost:8000/api/teacher-training";

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

const YogaAlliance = () => {
   const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      if (res.data.data.length > 0) {
        setData(res.data.data[0]); // take first record
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  if (!data) return null;
  return (
    <motion.section
      className={styles.hero}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <motion.div
          className={styles.content}
          variants={staggerContainer}
        >
          <motion.span className={styles.subTitle} variants={fadeUp}>
            {/* Learn with Yoga Alliance® Certified School of Hatha Yog Teacher Training Rishikesh */}
            {data.mainHeading}
          </motion.span>

          <motion.h1 className={styles.title} variants={fadeUp}>
            {/* Best Yoga Teacher <br />
            <span>Training in India</span> */}{data.subHeading}
          </motion.h1>

          <motion.p className={styles.boldText} variants={fadeUp}>
            Most Authentic Yoga Alliance Registered School
            {/* {data.paragraph} */}
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Are you dreaming of becoming a certified yoga instructor? Are you
            searching for the top yoga teacher training in Rishikesh, India?
            {/* {data.paragraph} */}
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Look no further than <strong>Hatha Yogashram</strong>. We are the{" "}
            <span className={styles.highlight}>
              best online yoga teacher training
            </span>{" "}
            school in India dedicated to offering authentic education in yoga.
            Our aim is to preserve and share the ancient wisdom of yoga,
            guiding individuals on a transformative journey of
            self-discovery.
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Start Your Yoga Career With One Of The Oldest Hatha Yog Teachers
            Training School In India. Become Certified Yoga Instructor with Yoga Alliance USA Certification®.
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Hatha Yog Ashram is a Yoga Alliance Registered Yoga School (RYS).
            Our Teacher Training Course (TTC) follows the guidelines set by Yoga
            Alliance, USA for RYS200, as well other training courses, and our
            Advanced 300-hour Teacher Training Course (ATTC) follows the
            guidelines for RYS300.
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Upon completion, our graduates can apply for Registered Yoga Teacher (RYT)
            status with Yoga Alliance. This credential is earned by yoga teachers
            whose training and teaching experience meet the rigorous standards set
            by Yoga Alliance.
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Choose from various Yoga Courses offered by Hatha Yogashram. Our Yoga
            Teacher Training Courses include{" "}
            <span className={styles.highlight}>200 Hour</span>,{" "}
            <span className={styles.highlight}>300 Hour</span>, and{" "}
            <span className={styles.highlight}>500 Hour Yoga Teacher Training in Rishikesh</span>,
            as well as 5, 10, and 20 Days{" "}
            <span className={styles.highlight}>Yoga Retreats in India</span>. All
            courses are registered with Yoga Alliance.
          </motion.p>

          <motion.p className={styles.desc} variants={fadeUp}>
            Join our Hatha Ashtanga Yoga Teacher Training in Rishikesh, India, at
            Hatha Yogashram and embark on a journey of self-development and
            transformation.
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
          className={styles.videoWrapper}
          variants={videoAnim}
        >
          <video
            className={styles.video}
            src={`http://localhost:8000/uploads/videos/${data.video}`}
            controls
            playsInline
            preload="metadata"
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default YogaAlliance;