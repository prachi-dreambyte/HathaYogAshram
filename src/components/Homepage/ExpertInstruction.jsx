import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../assets/styles/Homepage/ExpertInstruction.module.css';
import expertImg from '../../assets/images/532ec2a5eb70777a40ca295b69becb28.jpg';

/* ================= VARIANTS ================= */

// Image animation (right → left)
const imageAnim = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

// Content container (stagger list items)
const contentContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Text fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ExpertInstruction = () => {
  return (
    <section className={styles.expertSection}>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Content */}
          <div className="col-lg-6">
            <motion.div
              className={styles.content}
              variants={contentContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.h2 variants={fadeUp}>
                Expert instruction tailored to your needs
              </motion.h2>

              <motion.ul className={styles.list}>
                {[
                  '50+ of the world’s best teachers',
                  '9,000+ classes on-demand',
                  '25+ styles from 2–90 minute classes',
                  'Fresh content released daily',
                  'Classes for every level, from beginner to advanced',
                  'Personalized practices for strength, flexibility, and recovery',
                  'Meditation and breathwork for mental clarity and calm',
                  'Expert-guided programs for healing and mindfulness',
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeUp}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <motion.div
              className={styles.imageWrapper}
              variants={imageAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <img src={expertImg} alt="Expert Yoga Instruction" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertInstruction;
