import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/styles/Homepage/YogaSchool.module.css';

import ornament from '../../assets/images/linedesign.png';
import yoga1 from '../../assets/images/about-vys1.jpg';
import yoga2 from '../../assets/images/about-vys2.jpg';
import yoga3 from '../../assets/images/about-vys2.jpg';
import yoga4 from '../../assets/images/about-vys1.jpg';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const YogaSchool = () => {
  const infoData = [
    { icon: '👑', text: 'India’s No.1 Yoga School in Rishikesh' },
    { icon: '🎓', text: 'Certified by Yoga Alliance USA' },
    { icon: '🧘', text: 'International Yoga Asana Champions' },
    { icon: '🌍', text: 'Trusted by 13,000+ Students Worldwide' },
  ];
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
        <motion.h2 className={styles.heading} variants={fadeUp}>
          Namaste <br /> Welcome to Hatha Yoga Ashram
        </motion.h2>

        <motion.h3 className={styles.subTitle} variants={fadeUp}>
          Best Authentic Yoga School in Rishikesh, India
        </motion.h3>

        <motion.div className={styles.ornamentWrapper} variants={fadeUp}>
          <img src={ornament} alt="divider" className={styles.ornamentImage} />
        </motion.div>

        <motion.p className={styles.rating} variants={fadeUp}>
          ⭐ 5 Rated Yoga School
        </motion.p>

        {/* INFO CIRCLES */}
        <div className={styles.infoGrid}>
          {infoData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.infoCircle}
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
            >
              <span className={styles.circleIcon}>{item.icon}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className={styles.mainGrid}>
          {/* LEFT CONTENT */}
          <motion.div className={styles.content} variants={slideLeft}>
  <h3 className={styles.innerHeading}>
    Learn with Yoga Alliance® Certified School of Hatha Yoga Teacher
    Training in Rishikesh
  </h3>

  <p className={styles.highlightText}>
    Best Yoga Teacher Training in India · Most Authentic Yoga Alliance
    Registered School
  </p>

  <p>
    Begin your transformational yoga journey at Hatha Yoga Ashram, one of
    the most respected and traditional yoga schools in Rishikesh, the Yoga
    Capital of the World. Our school is rooted in the classical teachings of
    Hatha Yoga while embracing modern educational standards.
  </p>

  <p>
    Our Yoga Teacher Training Courses are thoughtfully designed to help
    students deepen their personal practice while gaining professional
    teaching skills. Each program focuses on yoga asanas, pranayama,
    meditation, yogic philosophy, anatomy, and teaching methodology.
  </p>

  <p>
    Hatha Yoga Ashram is a Yoga Alliance USA Registered Yoga School (RYS),
    offering internationally recognized certifications. Upon successful
    completion of the course, graduates are eligible to apply for
    Registered Yoga Teacher (RYT) certification with Yoga Alliance.
  </p>

  <p>
    Whether you are a beginner seeking self-growth or an experienced
    practitioner aiming to become a professional yoga teacher, our
    experienced instructors guide you with personalized attention,
    discipline, and compassion.
  </p>

  <p>
    Join a global community of yoga practitioners and teachers who have
    transformed their lives through authentic yogic education, self-
    discovery, and holistic well-being.
  </p>

  <div className={styles.buttons}>
  {[
    { label: '200 Hour Yoga TTC', path: '/YogaCourse200' },
    { label: '300 Hour Yoga TTC', path: '/YogaCourse300' },
    { label: '500 Hour Yoga TTC', path: '/YogaCourse500' },
  ].map((item, i) => (
    <motion.button
      key={i}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(item.path)}
    >
      {item.label}
    </motion.button>
  ))}
</div>

</motion.div>

          {/* RIGHT IMAGES */}
          <div className={styles.images}>
            {[yoga1, yoga2, yoga3, yoga4].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="Yoga Practice"
                custom={index}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default YogaSchool;
