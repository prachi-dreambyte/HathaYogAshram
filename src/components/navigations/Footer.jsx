import React from "react";
import styles from "../../assets/styles/Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>

      <div className="container position-relative">
        <div className="row gy-5">

          {/* BRAND */}
          <div className="col-lg-4 col-md-6">
            <img src={logo} alt="Hatha Yoga Ashram" className={styles.logo} />
            <p className={styles.desc}>
              Hatha Yoga Ashram, founded in 2017 in Rishikesh, India, is one of the
              most trusted yoga teacher training schools. We offer traditional
              Hatha, Ashtanga, Kundalini, Meditation and Pranayama practices
              rooted in ancient yogic wisdom.
            </p>
            <p className={styles.desc}>
              Our mission is to spread authentic yoga teachings across the
              world and help students experience holistic transformation of
              body, mind and soul.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6">
            <h5 className={styles.title}>Quick Links</h5>
            <ul className={styles.list}>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Teachers</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* YOGA COURSES */}
          <div className="col-lg-2 col-md-6">
            <h5 className={styles.title}>Yoga Courses</h5>
            <ul className={styles.list}>
              <li>100 Hour Yoga TTC</li>
              <li>200 Hour Yoga TTC</li>
              <li>300 Hour Yoga TTC</li>
              <li>500 Hour Yoga TTC</li>
              <li>Kundalini Yoga TTC</li>
              <li>Online Yoga TTC</li>
            </ul>
          </div>

          {/* RETREATS */}
          <div className="col-lg-2 col-md-6">
            <h5 className={styles.title}>Yoga Retreats</h5>
            <ul className={styles.list}>
              <li>Yoga Retreat in Rishikesh</li>
              <li>5 Days Yoga Retreat</li>
              <li>10 Days Yoga Retreat</li>
              <li>20 Days Yoga Retreat</li>
              <li>Meditation Retreat</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-2 col-md-6">
            <h5 className={styles.title}>Registered Office</h5>
            <ul className={styles.contact}>
              <li><FaMapMarkerAlt /> Upper Tapovan, Rishikesh, Uttarakhand – 249192</li>
              <li><FaPhoneAlt /> +91 9335606336</li>
              <li><FaEnvelope /> info@hathayogashram.com</li>
              <li><FaClock /> 7:00 AM – 7:00 PM</li>
            </ul>

            <div className={styles.socials}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* KEYWORDS */}
        <div className={styles.keywords}>
          <span>Yoga School in Rishikesh</span>
          <span>Best Yoga Teacher Training India</span>
          <span>200 Hour Yoga TTC</span>
          <span>300 Hour Yoga TTC</span>
          <span>Yoga Retreats in India</span>
          <span>Online Yoga Teacher Training</span>
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} Hatha Yoga Ashram. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
