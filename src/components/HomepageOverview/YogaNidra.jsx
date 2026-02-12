import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const YogaNidra = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '😴',
      title: 'Physical Rest',
      description: 'Release muscular tension and restore body vitality'
    },
    {
      icon: '🧠',
      title: 'Mental Rest',
      description: 'Calm racing thoughts and refresh the mind'
    },
    {
      icon: '💚',
      title: 'Emotional Rest',
      description: 'Process emotions and achieve inner peace'
    },
    {
      icon: '👁️',
      title: 'Conscious Awareness',
      description: 'Remain aware while deeply relaxed and rejuvenated'
    }
  ];

  const poses = [
    { name: 'Body Scanning', sanskrit: 'Sharira Samvedana' },
    { name: 'Breath Awareness', sanskrit: 'Shwasa Pratyahara' },
    { name: 'Visualization', sanskrit: 'Bhavana' },
    { name: 'Sankalpa Setting', sanskrit: 'Sankalpa' },
    { name: 'Rotation of Consciousness', sanskrit: 'Chetana Parivartan' },
    { name: 'Deep Relaxation', sanskrit: 'Shavasana Nidra' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Yogic Sleep</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Yoga Nidra
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Yoga Nidra is a systematic relaxation technique that brings deep physical, 
                mental, and emotional rest while maintaining conscious awareness.
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
            <h2 className={styles.sectionTitle}>Nidra Stages</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Systematic journey through conscious relaxation</p>
          </div>
          <div className="row g-4">
            {poses.map((pose, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
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
                <img src={Practice} alt="Yoga Nidra Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🛌</div>
                  <div>
                    <h5>Guided Relaxation</h5>
                    <p>Follow systematic instructions to reach deep rest states</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌊</div>
                  <div>
                    <h5>Borderline Consciousness</h5>
                    <p>Experience the threshold between waking and sleeping</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌸</div>
                  <div>
                    <h5>Intention Planting</h5>
                    <p>Set positive sankalpa to transform subconscious patterns</p>
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
                <h2 className="text-white mb-3">Begin Your Yoga Nidra Journey</h2>
                <p className="text-white-50 mb-0">
                  Experience profound rest and restoration through conscious relaxation
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

export default YogaNidra;