import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/styles/Footer.module.css';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import logo1 from '../../assets/images/logo1.png';

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const footerFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const columnContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const columnItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      variants={footerFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.overlay}></div>

      <div className="container-fluid">

        {/* 6 COLUMNS SECTION */}
        <motion.div
          className="row"
          variants={columnContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* COLUMN 1 - TAGLINE */}
          <motion.div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" variants={columnItem}>
            <div className={styles.taglineWrapper}>
              <p className={styles.tagline}>
                Hatha Yog Ashram, founded in 2017 in Rishikesh, India, is one of the most trusted yoga teacher training schools.
                We offer traditional Hatha, Ashtanga, Kundalini, Meditation and Pranayama practices rooted in ancient yogic wisdom.
              </p>
            </div>
            {/* logo centered below tagline */}
            <div className={styles.logoWrapper}>
              <img src={logo} alt="Hatha Yog Ashram" className={styles.logo} />
            </div>
          </motion.div>

          {/* COLUMN 2 - QUICK LINKS */}
          <motion.div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12" variants={columnItem}>
            <h5 className={styles.title}>Quick Links</h5>
            <ul className={styles.list}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/teachers">Our Teachers</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 3 - KUNDALINI COURSES */}
          <motion.div className="col-xl-1 col-lg-2 col-md-6 col-sm-6 col-12" variants={columnItem}>
            <h5 className={styles.title}>Kundalini Yoga</h5>
            <ul className={styles.list}>
              <li><Link to="/kundalini-100">100 Hour</Link></li>
              <li><Link to="/kundalini-200">200 Hour</Link></li>
              <li><Link to="/kundalini-300">300 Hour</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 4 - YOGA COURSES */}
          <motion.div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12" variants={columnItem}>
            <div className={styles.coursesSection}>
              <h5 className={styles.title}>Yoga Courses</h5>
              <ul className={styles.list}>
                <li><Link to="/YinYoga">Yin Yoga</Link></li>
                <li><Link to="/vedic-mantra">Vedic Mantra</Link></li>
                <li><Link to="/course/100-hour-yttc">100 Hour TTC</Link></li>
                <li><Link to="/course/200-hour-yttc">200 Hour TTC</Link></li>
                <li><Link to="/course/300-hour-yttc">300 Hour TTC</Link></li>
                <li><Link to="/course/500-hour-yttc">500 Hour TTC</Link></li>
              </ul>
            </div>
          </motion.div>

          {/* COLUMN 5 - YOGA RETREATS */}
          <motion.div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12" variants={columnItem}>
            <h5 className={styles.title}>Yoga Retreats</h5>
            <ul className={styles.list}>
              <li><Link to="/meditation-retreat">Yoga Retreat</Link></li>
              <li><Link to="/5-days-yoga-retreat">5 Days</Link></li>
              <li><Link to="/10-days-yoga-retreat">10 Days</Link></li>
              <li><Link to="/20-days-yoga-retreat">20 Days</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 6 - CONTACT INFO */}
          <motion.div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12" variants={columnItem}>
            <h5 className={styles.title}>Contact</h5>
            <ul className={styles.contact}>
              <li>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Upper Tapovan</span>
              </li>
              <li>
                <FaPhoneAlt className={styles.icon} />
                <span>+91 9335606336</span>
              </li>
              <li>
                <FaEnvelope className={styles.icon} />
                <span>info@hathayogashram.com</span>
              </li>
              <li>
                <FaClock className={styles.icon} />
                <span>7AM – 7PM</span>
              </li>
            </ul>
            {/* logo1 centered below contact list */}
            <div className={styles.logoWrapper}>
              <img src={logo1} alt="Hatha Yog Ashram" className={styles.logo1} />
            </div>
            <p className={styles.trustText}>YogAshram Trust.</p> 
            {/* Social Media */}
            <div className={styles.socials}>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/profile.php?id=100095297992781"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/hathayogashram/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

        </motion.div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* KEYWORDS */}
        <motion.div
          className={styles.keywords}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span>Yoga School in Rishikesh</span>
          <span>Best Yoga Teacher Training India</span>
          <span>200 Hour Yoga TTC</span>
          <span>300 Hour Yoga TTC</span>
          <span>Yoga Retreats in India</span>
          <span>Kundalini Awakening</span>
          <span>Meditation Retreats</span>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>© {new Date().getFullYear()} Hatha Yog Ashram | Coming under Yog Ashram | All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
