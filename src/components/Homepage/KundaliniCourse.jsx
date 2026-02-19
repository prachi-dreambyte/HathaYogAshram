import React from "react";
import { motion } from "framer-motion";
import styles from "../../assets/styles/Homepage/KundaliniCourse.module.css";
import kundaliniImg from "../../assets/images/Yoga1.jpg"; // replace with actual image
import { useNavigate } from "react-router-dom";
/* ======================== */
/* Framer Motion Variants   */
/* ======================== */

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

/* ======================== */
/* Course Data              */
/* ======================== */

const courses = [
  {
    title: "100-Hour Kundalini Yoga",
    label: "Foundation Course",
    price: "599",
    duration: "14 Days",
    date: "2nd of every month",
    badge: "Beginner",
    detailsRoute: "/100-hour-kundalini-yoga",
  },
  {
    title: "200-Hour Kundalini Yoga",
    label: "Teacher Training Course",
    price: "980",
    duration: "24 Days",
    date: "2nd of every month",
    badge: "Popular",
    detailsRoute: "/200-hour-kundalini-yoga",
  },
  {
    title: "300-Hour Kundalini Yoga",
    label: "Advanced Teacher Training",
    price: "1150",
    duration: "28 Days",
    date: "2nd of every month",
    badge: "Advanced",
    detailsRoute: "/300-hour-kundalini-yoga",
  },
];

/* ======================== */
/* Main Section             */
/* ======================== */

const KundaliniCourses = () => {
  const navigate = useNavigate();

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
          <motion.div className={styles.imageBox} variants={imageVariant}>
            <img src={kundaliniImg} alt="Kundalini Yoga Teacher Training" />
          </motion.div>

          {/* Right Content */}
          <motion.div className={styles.contentBox} variants={contentVariant}>

            {/* Header */}
            <motion.h2 className={styles.mainTitle} variants={fadeUp}>
               Hatha Kundalini Courses Rishikesh No.1
            </motion.h2>
            <motion.p className={styles.mainSubtitle} variants={fadeUp}>
              Teacher Training Courses
            </motion.p>
            <motion.p className={styles.mainDescription} variants={fadeUp}>
              Kundalini Yoga is a powerful and transformative practice that awakens
              the dormant energy at the base of the spine, guiding it upward through
              the chakras to achieve higher states of consciousness. Whether you are
              a complete beginner or an experienced practitioner, we have a course
              designed to support your journey.
            </motion.p>

            <motion.hr className={styles.divider} variants={fadeUp} />

            {/* Three Course Columns */}
            <motion.div className={styles.coursesRow} variants={fadeUp}>
              {courses.map((course, index) => (
                <React.Fragment key={course.title}>
                  <div className={styles.courseCol}>

                    {/* Badge */}
                    <span className={`${styles.badge} ${styles[`badge${course.badge}`]}`}>
                      {course.badge}
                    </span>

                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <p className={styles.courseLabel}>{course.label}</p>

                    <div className={styles.price}>
                      <span>$</span>{course.price}
                    </div>

                    <div className={styles.infoRow}>
                      <span className={styles.icon}>📅</span>
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.icon}>📅</span>
                      <span><strong>Date:</strong> {course.date}</span>
                    </div>

                    <div className={styles.btnGroup}>
                      <motion.button
                        className={styles.outlineBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(course.detailsRoute)}
                      >
                        More Details
                      </motion.button>
                      <motion.button
                        className={styles.fillBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/BookingForm")}
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>

                  {/* Vertical divider between columns */}
                  {index < courses.length - 1 && (
                    <div className={styles.verticalDivider} />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default KundaliniCourses;