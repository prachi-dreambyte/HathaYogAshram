import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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

const API_BASE = "http://localhost:8000/api";
const ASSET_BASE = "http://localhost:8000";

const toAssetUrl = (value) => {
  if (!value) return "";
  if (typeof value !== "string") return value;
  if (value.startsWith("http") || value.startsWith("data:")) return value;
  return `${ASSET_BASE}/${value.replace(/^\/+/, "")}`;
};

const DEFAULT_COURSES = [
  {
    images: [img1, img2, img3, img4],
    title: "100 Hours Yoga Teacher Training",
    duration: "10 Days",
    privateRoom: "$612",
    sharedRoom: "$400",
    certification: "Yoga Alliance USA",
    style: "Multi-Style Hatha",
    path: "/course/100-hour-yttc",
  },
  {
    images: [img2, img1, img3, img4],
    title: "200 Hours Yoga Teacher Training",
    duration: "24 Days",
    privateRoom: "$1270",
    sharedRoom: "$980",
    certification: "RYT-200 Certified",
    style: "Hatha & Ashtanga",
    path: "/course/200-hour-yttc",
  },
  {
    images: [img3, img2, img1, img4],
    title: "300 Hours Yoga Teacher Training",
    duration: "28 Days",
    privateRoom: "$1480",
    sharedRoom: "$1150",
    certification: "RYT-300 Certified",
    style: "Advanced Multi-Style",
    path: "/course/300-hour-yttc",
  },
  {
    images: [img4, img1, img2, img3],
    title: "500 Hours Yoga Teacher Training",
    duration: "56 Days",
    privateRoom: "$2350",
    sharedRoom: "$1900",
    certification: "RYT-500 Certified",
    style: "Complete Mastery",
    path: "/course/500-hour-yttc",
  },
  {
    images: [img1, img3, img2, img4],
    title: "100 Hour Kundalini Yoga Training",
    duration: "14 Days",
    privateRoom: "$749",
    sharedRoom: "$599",
    certification: "Foundation Certificate",
    style: "Kundalini Energy",
    path: "/kundalini-100",
  },
  {
    images: [img2, img4, img1, img3],
    title: "200 Hour Kundalini Yoga Training",
    duration: "25 Days",
    privateRoom: "$1199",
    sharedRoom: "$999",
    certification: "RYT-200 Kundalini",
    style: "Chakra Awakening",
    path: "/kundalini-200",
  },
  {
    images: [img3, img1, img4, img2],
    title: "300 Hour Kundalini Yoga Training",
    duration: "28 Days",
    privateRoom: "$1699",
    sharedRoom: "$1399",
    certification: "RYT-300 Kundalini",
    style: "Advanced Kundalini",
    path: "/kundalini-300",
  },
  {
    images: [img4, img2, img3, img1],
    title: "Vedic Mantra Chanting Course",
    duration: "7 Days",
    privateRoom: "$450",
    sharedRoom: "$350",
    certification: "Mantra Certificate",
    style: "Sacred Chanting",
    path: "/vedic-mantra",
  },
];

/* ===================== */
/* Image Slider Component */
/* ===================== */
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout for next slide
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, images.length]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.sliderImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
  const [courses, setCourses] = useState(DEFAULT_COURSES);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${API_BASE}/courses`, {
          params: { homeSection: "teacher-training" },
        });
        const items = res.data?.data || [];
        if (!items.length) return;

        const mapped = items.map((course) => {
          const training = course.teacherTraining || {};
          const images = (training.images || course.home?.images || course.gallery || [])
            .map((img) => toAssetUrl(img))
            .filter(Boolean);

          return {
            images: images.length ? images : [img1, img2, img3, img4],
            title: training.title || course.title || "Yoga Teacher Training",
            duration: training.duration || course.duration || "",
            privateRoom: training.privateRoom || course.home?.privateRoom || "",
            sharedRoom: training.sharedRoom || course.home?.sharedRoom || "",
            certification: training.certification || course.home?.certification || "",
            style: training.style || course.home?.style || "",
            path: training.path || course.legacyPath || (course.slug ? `/course/${course.slug}` : "/BookingForm"),
          };
        });

        setCourses(mapped);
      } catch (error) {
        console.error("Failed to load teacher training courses", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div className={styles.headingWrapper} variants={headingVariant}>
          <h2 className={styles.heading}>
            <span>Yoga Teacher</span> Training Certification*
          </h2>
          <div className={styles.divider}>
            <img src={dividerImg} alt="yoga divider" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div className={styles.cardGrid} variants={gridVariant}>
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
              <ImageSlider images={item.images} />

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
                  <FaCertificate /> Certification: {item.certification}
                </li>
                <li>
                  <FaUser /> Style: {item.style}
                </li>
                <li>
                  <FaCalendarAlt /> Date: 1st of every month
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
                  onClick={() => navigate("/BookingForm")}
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
