import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import styles from '../../assets/styles/Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpenDropdown(null); // ✅ sirf subtab band
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("touchstart", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, []);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className={styles.topHeader}>
        <div className={styles.topContainer}>
          <div className={styles.topLeft}>
            <span>📍 Manzil Balaknath Road Upper Tapovan Rishikesh</span>
            <span>📞 +91 9335606336</span>
          </div>

          <div className={styles.topRight}>
            <span className={styles.yogaId}>Yoga Alliance ID: 401771</span>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/profile.php?id=100095297992781"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/hathayogashram/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header className={styles.header}>
        <div className={styles.container} ref={navRef}>

          {/* LEFT MENU */}
          <nav className={styles.desktopNav}>
            <Link to="/" onClick={closeAll}>Home</Link>

            {/* ABOUT */}
            <div
              className={styles.dropdownWrap}
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button onClick={() => toggleDropdown('about')}>
                About ▾
              </button>

              <AnimatePresence>
                {openDropdown === 'about' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/Our-Founder" onClick={closeAll}>Founder</Link>
                    <Link to="/teachers" onClick={closeAll}>Our Teachers</Link>
                    <Link to="/Our-School" onClick={closeAll}>Our School</Link>
                    <Link to="/Accommodation-Food" onClick={closeAll}>Accommodation</Link>
                     <Link to="/blog" onClick={closeAll}>Blog</Link>
                    <Link to="/gallery" onClick={closeAll}>Gallery</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RISHIKESH TTC */}
            <div
              className={styles.dropdownWrap}
              onMouseEnter={() => setOpenDropdown('rishikesh')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button onClick={() => toggleDropdown('rishikesh')}>
                Rishikesh TTC ▾
              </button>

              <AnimatePresence>
                {openDropdown === 'rishikesh' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/YogaCourse100" onClick={closeAll}>100 Hour TTC</Link>
                    <Link to="/YogaCourse200" onClick={closeAll}>200 Hour TTC</Link>
                    <Link to="/YogaCourse300" onClick={closeAll}>300 Hour TTC</Link>
                    <Link to="/YogaCourse500" onClick={closeAll}>500 Hour TTC</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SHORT COURSE */}
            <div
              className={styles.dropdownWrap}
              onMouseEnter={() => setOpenDropdown('short')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button onClick={() => toggleDropdown('short')}>
                Short Course ▾
              </button>

              <AnimatePresence>
                {openDropdown === 'short' && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Link to="/" onClick={closeAll}>Meditation</Link>
                    <Link to="/" onClick={closeAll}>Pranayama</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* LOGO */}
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Yoga Logo" />
            </Link>
          </div>

          {/* RIGHT MENU */}
          <nav className={styles.desktopNav}>
           <div
  className={styles.dropdownWrap}
  onMouseEnter={() => setOpenDropdown("online")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  <button onClick={() => toggleDropdown("online")}>
    Online Courses ▾
  </button>

  <AnimatePresence>
    {openDropdown === "online" && (
      <motion.div
        className={styles.dropdown}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        <Link to="/Online-YTTC" onClick={closeAll}>Online YTTC</Link>
        <Link to="/Yoga-Online" onClick={closeAll}>Yoga Online</Link>
       
      </motion.div>
    )}
  </AnimatePresence>
</div>

            <Link to="/" onClick={closeAll}>Payment</Link>
            <Link to="/contact-us" onClick={closeAll}>Contact</Link>
            <Link to="/BookingForm" className={styles.applyBtn} onClick={closeAll}>
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
      <Link to="/" onClick={closeAll}>Home</Link>

      {/* ===== ABOUT DROPDOWN ===== */}
      <div
        className={styles.mobileTitle}
        onClick={() => toggleDropdown("about")}
      >
        About ▾
      </div>

      <AnimatePresence>
        {openDropdown === "about" && (
          <motion.div
            className={styles.subMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <Link to="/Our-Founder" onClick={closeAll}>Founder</Link>
            <Link to="/teachers" onClick={closeAll}>Our Teachers</Link>
            <Link to="/Our-School" onClick={closeAll}>Our School</Link>
            <Link to="/Accommodation-Food" onClick={closeAll}>Accommodation</Link>
            <Link to="/blog" onClick={closeAll}>Blog</Link>
            <Link to="/gallery" onClick={closeAll}>Gallery</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== RISHIKESH TTC ===== */}
      <div
        className={styles.mobileTitle}
        onClick={() => toggleDropdown("rishikesh")}
      >
        Rishikesh TTC ▾
      </div>

      <AnimatePresence>
        {openDropdown === "rishikesh" && (
          <motion.div
            className={styles.subMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <Link to="/YogaCourse100" onClick={closeAll}>100 Hour TTC</Link>
            <Link to="/YogaCourse200" onClick={closeAll}>200 Hour TTC</Link>
            <Link to="/YogaCourse300" onClick={closeAll}>300 Hour TTC</Link>
            <Link to="/YogaCourse500" onClick={closeAll}>500 Hour TTC</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== SHORT COURSE ===== */}
      <div
        className={styles.mobileTitle}
        onClick={() => toggleDropdown("short")}
      >
        Short Course ▾
      </div>

      <AnimatePresence>
        {openDropdown === "short" && (
          <motion.div
            className={styles.subMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <Link to="/" onClick={closeAll}>Meditation</Link>
            <Link to="/" onClick={closeAll}>Pranayama</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <Link to="/" onClick={closeAll}>Online Courses</Link>
      <Link to="/" onClick={closeAll}>Payment</Link>
      <Link to="/contact-us" onClick={closeAll}>Contact</Link>

      <Link to="/BookingForm" className={styles.applyBtn} onClick={closeAll}>
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