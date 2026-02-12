import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const Bandhas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🔒',
      title: 'Energy Locks',
      description: 'Regulate and direct pranic flow through internal seals'
    },
    {
      icon: '💪',
      title: 'Core Stability',
      description: 'Strengthen and stabilize deep core musculature'
    },
    {
      icon: '🎯',
      title: 'Focus',
      description: 'Enhance mental concentration and awareness'
    },
    {
      icon: '⚡',
      title: 'Control',
      description: 'Master energetic control and breath retention'
    }
  ];

  const bandhas = [
    { name: 'Mula Bandha', sanskrit: 'Root Lock' },
    { name: 'Uddiyana Bandha', sanskrit: 'Abdominal Lock' },
    { name: 'Jalandhara Bandha', sanskrit: 'Throat Lock' },
    { name: 'Maha Bandha', sanskrit: 'Great Lock' },
    { name: 'Pada Bandha', sanskrit: 'Foot Lock' },
    { name: 'Hasta Bandha', sanskrit: 'Hand Lock' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Internal Energy Locks</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Bandhas
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Bandhas are internal energy locks that regulate prana flow, stabilize 
                the core, and enhance strength, focus, and energetic control during 
                practice through precise neuromuscular engagement.
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

      {/* Bandhas Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Essential Bandhas</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Master the art of internal energy locks</p>
          </div>
          <div className="row g-4">
            {bandhas.map((bandha, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{bandha.name}</h4>
                    <p className={styles.poseSanskrit}>{bandha.sanskrit}</p>
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
                <img src={Practice} alt="Bandhas practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🧘</div>
                  <div>
                    <h5>Muscle Engagement</h5>
                    <p>Activate specific muscle groups to create internal seals</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌬️</div>
                  <div>
                    <h5>Breath Integration</h5>
                    <p>Coordinate locks with pranayama for optimal energy flow</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔄</div>
                  <div>
                    <h5>Progressive Training</h5>
                    <p>Build strength and control through gradual practice</p>
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
                <h2 className="text-white mb-3">Unlock Your Inner Power</h2>
                <p className="text-white-50 mb-0">
                  Master the bandhas and discover advanced control over your energy and body
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

export default Bandhas;