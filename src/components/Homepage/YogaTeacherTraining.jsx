import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/YogaTeacherTraining.module.css";
import dividerImg from "../../assets/images/linedesign.png";

import {
  FaClock,
  FaDollarSign,
  FaCertificate,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";

import img1 from "../../assets/images/courses/1.png";
import img2 from "../../assets/images/courses/2.png";
import img3 from "../../assets/images/courses/3.png";
import img4 from "../../assets/images/courses/4.png";

const courses = [
  {
    image: img1,
    title: "100 Hours Yoga Teacher Training",
    duration: "10 Days",
    privateRoom: "$612",
    sharedRoom: "$400",
    path: "/YogaCourse100",
  },
  {
    image: img2,
    title: "200 Hours Yoga Teacher Training",
    duration: "24 Days",
    privateRoom: "$1270",
    sharedRoom: "$980",
    path: "/YogaCourse200",
  },
  {
    image: img3,
    title: "300 Hours Yoga Teacher Training",
    duration: "28 Days",
    privateRoom: "$1480",
    sharedRoom: "$1150",
    path: "/YogaCourse300",
  },
  {
    image: img4,
    title: "500 Hours Yoga Teacher Training",
    duration: "56 Days",
    privateRoom: "$2350",
    sharedRoom: "$1900",
    path: "/YogaCourse500",
  },
  {
    image: img4,
    title: "200 Kundlani Yoga Teacher Training",
    duration: "56 Days",
    privateRoom: "$2350",
    sharedRoom: "$1900",
    path: "/kundalini-200",
  },
  {
    image: img4,
    title: "300 Kundlani Yoga Teacher Training",
    duration: "56 Days",
    privateRoom: "$2350",
    sharedRoom: "$1900",
    path: "/kundalini-300",
  },
];


/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const headingVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const YogaTeacherTraining = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">

        {/* Heading */}
        <motion.div
          className={styles.headingWrapper}
          variants={headingVariant}
        >
          <h2 className={styles.heading}>
            <span>Yoga Teacher</span> Training Certification*
          </h2>
          <div className={styles.divider}>
            <img src={dividerImg} alt="yoga divider" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.cardGrid}
          variants={gridVariant}
        >
          {courses.map((item, index) => (
            <motion.div
              className={styles.card}
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <ul className={styles.infoList}>
                <li>
                  <FaClock /> Duration: {item.duration}
                </li>
                <li>
                  <FaDollarSign /> Private Room: {item.privateRoom}
                </li>
                <li>
                  <FaDollarSign /> Shared Room: {item.sharedRoom}
                </li>
                <li>
                  <FaCertificate /> Certification: Yoga Alliance USA
                </li>
                <li>
                  <FaUser /> Style: Multi-Style
                </li>
                <li>
                  <FaCalendarAlt /> Date: 2nd of every month
                </li>
              </ul>

             <div className={styles.buttonGroup}>
  <motion.button
    className={styles.outlineBtn}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate(item.path)}
  >
    Course Details
  </motion.button>

  <motion.button
    className={styles.outlineBtn}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate('/BookingForm')}
  >
    Book Now
  </motion.button>
</div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default YogaTeacherTraining;
