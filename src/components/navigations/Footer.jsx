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
        >
          <motion.div className="col-md-2 col-sm-6" variants={columnItem}>
           <div className="pt-3">
             <p className={styles.tagline}>
                Hatha Yog Ashram, founded in 2017 in Rishikesh, India, is one of the most trusted yoga teacher training schools.
                We offer traditional Hatha, Ashtanga, Kundalini, Meditation and Pranayama practices rooted in ancient yogic wisdom.
              </p>
           </div>
          </motion.div>
          {/* COLUMN 1 - QUICK LINKS */}
          <motion.div className="col-md-2 col-sm-6" variants={columnItem}>
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
          
           {/* <motion.div className="col-md-1 col-sm-6" variants={columnItem}>
   
          </motion.div> */}
             {/* COLUMN 3 - KUNDALINI COURSES */}
          <motion.div className="col-md-1 col-sm-6" variants={columnItem}>
            <h5 className={styles.title}>Kundalini Yoga</h5>
            <ul className={styles.list}>
              <li><Link to="/kundalini-100">100 Hour</Link></li>
              <li><Link to="/kundalini-200">200 Hour</Link></li>
              <li><Link to="/kundalini-300">300 Hour</Link></li>
            </ul>
          </motion.div>
         
          {/* COLUMN 2 - YOGA COURSES */}
          <motion.div className="col-md-3 col-sm-6" variants={columnItem}>
            <div className={styles.Display}>
              <div className={styles.topSection}>
              <div className={styles.logoContainer}>
                <img src={logo} alt="Hatha Yog Ashram" className={styles.logo} />
              </div>
            </div>
            <div>
              <h5 className={styles.title}>Yoga Courses</h5>
            <ul className={styles.list}>
              <li><Link to="/YinYoga">Yin Yoga</Link></li>
              <li><Link to="/vedic-mantra">Vedic Mantra</Link></li>
              <li><Link to="/YogaCourse100">100 Hour TTC</Link></li>
              <li><Link to="/YogaCourse200">200 Hour TTC</Link></li>
              <li><Link to="/YogaCourse300">300 Hour TTC</Link></li>
              <li><Link to="/YogaCourse500">500 Hour TTC</Link></li>
            </ul>
            </div>
            </div>
          </motion.div>
          {/* COLUMN 4 - YOGA RETREATS */}
          <motion.div className="col-md-2 col-sm-6" variants={columnItem}>
            <h5 className={styles.title}>Yoga Retreats</h5>
            <ul className={styles.list}>
              <li><Link to="/meditation-retreat">Yoga Retreat</Link></li>
              <li><Link to="/5-days-yoga-retreat">5 Days</Link></li>
              <li><Link to="/10-days-yoga-retreat">10 Days</Link></li>
              <li><Link to="/20-days-yoga-retreat">20 Days</Link></li>
            </ul>
          </motion.div>         

          {/* COLUMN 6 - CONTACT INFO */}
          <motion.div className="col-md-2 col-sm-6" variants={columnItem}>
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
        <motion.div className={styles.keywords} variants={columnItem}>
          <span>Yoga School in Rishikesh</span>
          <span>Best Yoga Teacher Training India</span>
          <span>200 Hour Yoga TTC</span>
          <span>300 Hour Yoga TTC</span>
          <span>Yoga Retreats in India</span>
          <span>Kundalini Awakening</span>
          <span>Meditation Retreats</span>
        </motion.div>

        {/* BOTTOM */}
        <motion.div className={styles.bottom} variants={columnItem}>
          <p>© {new Date().getFullYear()} Hatha Yog Ashram | Coming under Yog Ashram | All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;