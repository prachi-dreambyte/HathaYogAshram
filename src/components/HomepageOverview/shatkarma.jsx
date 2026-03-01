import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const Shatkarma = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🌿',
      title: 'Detoxification',
      description: 'Cleanse toxins and impurities from the body systems'
    },
    {
      icon: '💧',
      title: 'Internal Purification',
      description: 'Purify digestive, respiratory, and nasal passages'
    },
    {
      icon: '✨',
      title: 'Energy Activation',
      description: 'Prepare the body for advanced pranayama and meditation'
    },
    {
      icon: '🔄',
      title: 'System Balance',
      description: 'Restore equilibrium in bodily functions and doshas'
    }
  ];

  const poses = [
    { name: 'Nasal Cleansing', sanskrit: 'Jala Neti' },
    { name: 'Digestive Fire', sanskrit: 'Agni Sara' },
    { name: 'Skull Shining Breath', sanskrit: 'Kapalabhati' },
    { name: 'Abdominal Churning', sanskrit: 'Nauli' },
    { name: 'Eye Cleansing', sanskrit: 'Trataka' },
    { name: 'Intestinal Wash', sanskrit: 'Shankhaprakshalana' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Purification Practice</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Shatkarma (Body Cleansing Detox)
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Shatkarma consists of yogic cleansing techniques that detoxify the body, 
                purify internal systems, and prepare practitioners for higher yogic practices.
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
            <h2 className={styles.sectionTitle}>Six Cleansing Techniques</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Traditional methods for internal purification</p>
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
                <img src={Practice} alt="Shatkarma Cleansing Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🧘‍♂️</div>
                  <div>
                    <h5>Traditional Cleansing</h5>
                    <p>Learn authentic techniques passed down through lineages</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌊</div>
                  <div>
                    <h5>System Purification</h5>
                    <p>Target specific organs and pathways for deep cleansing</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔮</div>
                  <div>
                    <h5>Higher Preparation</h5>
                    <p>Create the foundation for advanced pranayama and meditation</p>
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
                <h2 className="text-white mb-3">Begin Your Shatkarma Journey</h2>
                <p className="text-white mb-0">
                  Purify your body and mind with ancient yogic cleansing techniques
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

export default Shatkarma;