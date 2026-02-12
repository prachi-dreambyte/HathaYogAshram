import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const VedantaPhilosophy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🔍',
      title: 'Self-Realization',
      description: 'Discover your true nature beyond body and mind'
    },
    {
      icon: '🌌',
      title: 'Universal Truth',
      description: 'Understand the nature of reality and consciousness'
    },
    {
      icon: '📖',
      title: 'Upanishadic Wisdom',
      description: 'Study ancient teachings on the nature of existence'
    },
    {
      icon: '🛤️',
      title: 'Eightfold Path',
      description: 'Follow the systematic journey to enlightenment'
    }
  ];

  const poses = [
    { name: 'Ethical Restraints', sanskrit: 'Yama' },
    { name: 'Observances', sanskrit: 'Niyama' },
    { name: 'Physical Posture', sanskrit: 'Asana' },
    { name: 'Breath Control', sanskrit: 'Pranayama' },
    { name: 'Sense Withdrawal', sanskrit: 'Pratyahara' },
    { name: 'Concentration', sanskrit: 'Dharana' },
    { name: 'Meditation', sanskrit: 'Dhyana' },
    { name: 'Absorption', sanskrit: 'Samadhi' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Ancient Wisdom</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Vedanta Philosophy & Maharishi Patanjali's 8 Limbs
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Vedanta philosophy explores self-realization and universal truth through the 
                teachings of the Upanishads and the eightfold path of yoga described by Maharishi Patanjali.
              </p>
              <div className={`mt-5 ${styles.heroButtons}`}>
                <button className={`btn btn-primary btn-lg me-3 ${styles.pulseBtn}`}>
                  Start Your Journey
                </button>
                <button className={`btn btn-outline-light btn-lg ${styles.btnOutlineCustom}`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-5 ${styles.benefitsSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Core Benefits</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div 
                  className={`${styles.benefitCard} ${hoveredCard === index ? styles.active : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                  <div className={styles.benefitGlow}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poses Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Ashtanga: The Eight Limbs</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Patanjali's systematic path to liberation</p>
          </div>
          <div className="row g-4">
            {poses.map((pose, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{pose.name}</h4>
                    <p className={styles.poseSanskrit}>{pose.sanskrit}</p>
                    <div className={styles.poseBorder}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className={`py-5 ${styles.practiceSection}`}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className={styles.practiceImageWrapper}>
                <img src={Practice} alt="Vedanta Philosophy Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📚</div>
                  <div>
                    <h5>Scriptural Study</h5>
                    <p>Explore Yoga Sutras, Upanishads, and Vedantic texts</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🧘‍♂️</div>
                  <div>
                    <h5>Progressive Practice</h5>
                    <p>Move through the eight limbs systematically</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>💡</div>
                  <div>
                    <h5>Philosophical Inquiry</h5>
                    <p>Contemplate the nature of self and reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-5 ${styles.ctaSection}`}>
        <div className="container py-5">
          <div className={styles.ctaCard}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="text-white mb-3">Begin Your Vedanta Philosophy Journey</h2>
                <p className="text-white-50 mb-0">
                  Discover timeless wisdom and the complete path to self-realization
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <button className={`btn btn-light btn-lg ${styles.ctaButton}`}>
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VedantaPhilosophy;