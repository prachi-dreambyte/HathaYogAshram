import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import styles from "../../assets/styles/Homepage/Ayurveda.module.css";
import AyurvedaTeaserImg from "../../assets/images/SHIRODHARA.jpg";

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

const API_BASE = "http://localhost:8000/api";

const DEFAULT_COURSES = [
  {
    title: "5 Days Ayurveda Courses",
    label: "Introduction to Ayurveda",
    price: "299",
    duration: "5 Days",
    date: "2nd of every month",
    badge: "Beginner",
    detailsRoute: "/ayurveda-foundation",
  },
  {
    title: "10 Days Ayurveda Courses",
    label: "Wellness & Lifestyle Course",
    price: "649",
    duration: "10 Days",
    date: "2nd of every month",
    badge: "Popular",
    detailsRoute: "/ayurveda-practitioner",
  },
  {
    title: "15 Days Ayurveda Courses",
    label: "Advanced Healing Training",
    price: "950",
    duration: "15 Days",
    date: "2nd of every month",
    badge: "Advanced",
    detailsRoute: "/ayurveda-therapist",
  },
];

/* ======================== */
/* Main Section             */
/* ======================== */

const AyurvedaTeaser = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(DEFAULT_COURSES);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${API_BASE}/courses`, {
          params: { homeSection: "ayurveda" },
        });
        const items = res.data?.data || [];
        if (!items.length) return;

        const mapped = items.map((course) => {
          const details = course.ayurveda || {};
          return {
            title: details.title || course.title || "",
            label: details.label || course.shortTitle || "",
            price: details.price || course.card?.price || "",
            duration: details.duration || course.duration || "",
            date: details.date || course.home?.date || "",
            badge: details.badge || course.home?.badge || "Beginner",
            detailsRoute: details.detailsRoute || course.legacyPath || (course.slug ? `/course/${course.slug}` : "/BookingForm"),
          };
        });

        setCourses(mapped);
      } catch (error) {
        console.error("Failed to load ayurveda courses", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <motion.section
      className={styles.teaserSection}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={`container ${styles.cardWrapper}`}>
        <div className={styles.card}>
          {/* Left Image */}
          <motion.div className={styles.imageBox} variants={imageVariant}>
            <img
              src={AyurvedaTeaserImg}
              alt="Ayurveda – the science of life"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div className={styles.contentBox} variants={contentVariant}>
            {/* Header */}
            <motion.h2 className={styles.mainTitle} variants={fadeUp}>
              <FaLeaf className={styles.titleIcon} />
              Discover Ayurveda Courses
            </motion.h2>
            <motion.p className={styles.mainSubtitle} variants={fadeUp}>
              Ayurveda Wellness & Healing Programs
            </motion.p>
            <motion.p className={styles.mainDescription} variants={fadeUp}>
              Ayurveda, the ancient "science of life," offers a holistic path to
              balance your body, mind, and spirit. At Hatha Yogashram, we
              integrate Ayurveda deeply into our yoga teacher trainings and
              therapies — from the three doshas and Dinacharya to Shirodhara and
              seasonal practices.
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

export default AyurvedaTeaser;
