import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../assets/styles/Homepage/WhatWeOffer.module.css";
import { FaBook, FaAward, FaUserGraduate, FaTimes } from "react-icons/fa";
import dividerIcon from "../../assets/images/linedesign.png";

// Import your images here
import intensiveImage from "../../assets/images/choose.webp";
import certificationImage from "../../assets/images/ChooseTeacher.webp";
import instructorImage from "../../assets/images/trainer.webp";

const data = [
  {
    icon: <FaBook />,
    title: "Intensive\nFormat",
    text:
      "Immerse yourself in our intensive format to achieve rapid progress and deepen your practice over an accelerated timeframe.",
    image: intensiveImage,
    modalContent: {
      title: "Intensive Format",
      description:
        "Our intensive yoga format is designed for those who want to dive deep into their practice and achieve transformative results in a shorter timeframe. This immersive experience allows you to fully dedicate yourself to learning and growing.",
      features: [
        "Daily intensive practice sessions",
        "Accelerated learning curriculum",
        "Deep dive into yoga philosophy",
        "Comprehensive asana practice",
        "Meditation and pranayama techniques",
        "Personal growth and self-discovery",
      ],
    },
  },
  {
    icon: <FaAward />,
    title: "Yoga Teacher\nCertification",
    text:
      "Become a certified yoga instructor in just 4 weeks with our comprehensive training program.",
    image: certificationImage,
    modalContent: {
      title: "Yoga Teacher Certification",
      description:
        "Transform your passion for yoga into a rewarding career with our comprehensive 4-week teacher training certification program. Gain the knowledge, skills, and confidence to teach yoga professionally.",
      features: [
        "200-hour Yoga Alliance certified program",
        "Complete in just 4 weeks",
        "Learn anatomy and physiology",
        "Teaching methodology and practice",
        "Business of yoga guidance",
        "Lifetime support and mentorship",
      ],
    },
  },
  {
    icon: <FaUserGraduate />,
    title: "Experienced\nInstructor",
    text:
      "Benefit from the expertise of a seasoned yoga instructor with years of practice and teaching, ensuring high-quality guidance and support.",
    image: instructorImage,
    modalContent: {
      title: "Experienced Instructor",
      description:
        "Learn from highly experienced yoga instructors who bring years of practice, teaching expertise, and deep understanding of yoga philosophy. Our instructors are dedicated to your growth and success.",
      features: [
        "15+ years of teaching experience",
        "Internationally certified instructors",
        "Personalized attention and guidance",
        "Expert knowledge of yoga styles",
        "Compassionate and supportive approach",
        "Continuous professional development",
      ],
    },
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

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const iconHover = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4 },
  },
};

const modalVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const WhatWeOffer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (item) => {
    setSelectedCard(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = "auto";
  };

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
          <h2 className={styles.heading}>What We Offer ?</h2>

          {/* Divider */}
          <div className={styles.divider}>
            <span className={styles.line} />
            <img
              src={dividerIcon}
              alt="Yoga Divider"
              className={styles.dividerImage}
            />
            <span className={styles.line} />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div className={styles.cards} variants={containerVariant}>
          {data.map((item, index) => (
            <motion.div
              className={styles.card}
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => openModal(item)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") openModal(item);
              }}
            >
              <div className={styles.iconWrapper}>
                <motion.div
                  className={styles.icon}
                  variants={iconHover}
                  whileHover="hover"
                >
                  {item.icon}
                </motion.div>
              </div>

              <h3 className={styles.cardTitle}>
                {item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>

              <p className={styles.cardText}>{item.text}</p>

              <div className={styles.learnMore}>Learn More →</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Overlay */}
            <motion.div
              className={styles.modalOverlay}
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className={styles.modalWrapper}
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div className={styles.modalContainer}>
                <div className={styles.modal}>
                {/* Close Button */}
                <button
                  className={styles.closeButton}
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>

                <div className={styles.modalContent}>
                  {/* Left Side - Content */}
                  <div className={styles.modalLeft}>
                    <div className={styles.modalIconWrapper}>
                      <div className={styles.modalIcon}>{selectedCard.icon}</div>
                    </div>

                    <h2 className={styles.modalTitle}>
                      {selectedCard.modalContent.title}
                    </h2>

                    <p className={styles.modalDescription}>
                      {selectedCard.modalContent.description}
                    </p>

                    <div className={styles.modalFeatures}>
                      <h4 className={styles.featuresTitle}>Key Features:</h4>
                      <ul className={styles.featuresList}>
                        {selectedCard.modalContent.features.map(
                          (feature, idx) => (
                            <li key={idx} className={styles.featureItem}>
                              <span className={styles.featureBullet}>✓</span>
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <button className={styles.ctaButton}>
                      Get Started Today
                    </button>
                  </div>

                  {/* Right Side - Image */}
                  <div className={styles.modalRight}>
                    <div className={styles.modalImageWrapper}>
                      <img
                        src={selectedCard.image}
                        alt={selectedCard.modalContent.title}
                        className={styles.modalImage}
                      />
                      <div className={styles.imageOverlay}></div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default WhatWeOffer;