import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../assets/styles/Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      {/* ===== TOP HEADER ===== */}
<div className={styles.topHeader}>
  <div className={styles.topContainer}>
    
    {/* LEFT */}
    <div className={styles.topLeft}>
      <span>
        <span className={styles.icon}>📍</span>
        Manzil Balaknath Road Upper Tapovan Rishikesh
      </span>

      <span>
        <span className={styles.icon}>📞</span>
        +91 9335606336
      </span>
    </div>

    {/* RIGHT */}
    <div className={styles.topRight}>
      <span className={styles.yogaId}>
        Yoga Alliance ID: 401771
      </span>

      <div className={styles.social}>
        <Link to="#" className={styles.socialIcon}>
          <FaFacebookF />
        </Link>
        <Link to="#" className={styles.socialIcon}>
          <FaInstagram />
        </Link>
      </div>
    </div>

  </div>
</div>


      {/* ===== MAIN HEADER ===== */}
      <header className={styles.header}>
        <div className={styles.container}>

          {/* LEFT MENU */}
          <nav className={styles.desktopNav}>
            <Link to="/">Home</Link>

            {/* ABOUT */}
            <div className={styles.dropdownWrap}>
              <button onClick={() => toggleDropdown("about")}>
                About ▾
              </button>
              <AnimatePresence>
                {openDropdown === "about" && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/">Founder</Link>
                    <Link to="/">Our Teachers</Link>
                    <Link to="/">Accommodation</Link>
                    <Link to="/">Gallery</Link>
                    <Link to="/">FAQs</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RISHIKESH TTC */}
            <div className={styles.dropdownWrap}>
              <button onClick={() => toggleDropdown("rishikesh")}>
                Rishikesh TTC ▾
              </button>
              <AnimatePresence>
                {openDropdown === "rishikesh" && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/">200 Hour TTC</Link>
                    <Link to="/">300 Hour TTC</Link>
                    <Link to="/">500 Hour TTC</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SHORT COURSE */}
            <div className={styles.dropdownWrap}>
              <button onClick={() => toggleDropdown("short")}>
                Short Course ▾
              </button>
              <AnimatePresence>
                {openDropdown === "short" && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/">Meditation</Link>
                    <Link to="/">Pranayama</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* LOGO */}
          <div className={styles.logo}>
            <img src={logo} alt="Yoga Logo" />
          </div>

          {/* RIGHT MENU */}
          <nav className={styles.desktopNav}>
            <Link to="/">Online Courses</Link>
            <Link to="/">Payment</Link>
            <Link to="/">Contact</Link>

            <Link to="/apply" className={styles.applyBtn}>
              Apply Today
            </Link>
          </nav>

          {/* HAMBURGER */}
          <div
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Rishikesh TTC</Link>
              <Link to="/">Short Course</Link>
              <Link to="/">Online Courses</Link>
              <Link to="/">Payment</Link>
              <Link to="/">Contact</Link>
              <Link to="/apply" className={styles.applyBtn}>
                Apply Today
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
