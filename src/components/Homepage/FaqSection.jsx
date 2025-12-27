import React, { useState } from "react";
import styles from "../../assets/styles/Homepage/FaqSection.module.css";
import faqImg from "../../assets/images/f441aef8d915eb95e77a810815974a72.jpg"; // replace image

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

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className={styles.imageWrapper}>
              <img src={faqImg} alt="Yoga FAQ" />
            </div>
          </div>

          {/* FAQ */}
          <div className="col-lg-7">
            <div className={styles.faqContent}>
              <h2>Frequently Ask Questions.</h2>
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
                    <div className={styles.question}>
                      <span>{faq.question}</span>
                      <span className={styles.icon}>
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    <div className={styles.answer}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
