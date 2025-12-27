import React, { useState } from "react";
import styles from "../../assets/styles/Homepage/FaqSection.module.css";
import faqImg from "../../assets/images/f441aef8d915eb95e77a810815974a72.jpg";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What should I bring to my first class?",
    answer:
      "Strengthen your body, sharpen your mind, and live with balance. A healthy body fuels confidence.",
  },
  {
    question: "Can I join if I’m a beginner?",
    answer:
      "Absolutely! Our classes are designed for all levels, including complete beginners.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, we offer live and on-demand online sessions you can access anytime.",
  },
  {
    question: "How do I book private coaching?",
    answer:
      "You can book private coaching directly through our website or mobile app.",
  },
  {
    question: "Do I need to be spiritual to practice yoga?",
    answer:
      "Not at all. Yoga is for everyone and focuses on physical and mental wellbeing.",
  },
];

const imageAnim = {
  hidden: { opacity: 0, scale: 0.85, x: -60 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const contentAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="row align-items-center">

          {/* IMAGE */}
          <motion.div
            className="col-lg-5 mb-4 mb-lg-0"
            variants={imageAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src={faqImg} alt="Yoga FAQ" />
            </div>
          </motion.div>

          {/* FAQ CONTENT */}
          <motion.div
            className="col-lg-7"
            variants={contentAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.faqContent}>
              <h2>Frequently Asked Questions</h2>
              <p className={styles.subText}>
                Our experienced instructors are here to inspire, motivate, and
                help you grow one breath at a time.
              </p>

              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    {/* QUESTION */}
                    <div className={styles.question}>
                      <span>{faq.question}</span>

                      <motion.span
                        className={styles.icon}
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        +
                      </motion.span>
                    </div>

                    {/* ANSWER */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          className={styles.answer}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
