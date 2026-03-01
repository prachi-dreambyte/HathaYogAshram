import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const FlexibilityTechniques = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🦴',
      title: 'Joint Mobility',
      description: 'Enhance joint range of motion and synovial fluid circulation'
    },
    {
      icon: '🧬',
      title: 'Fascia Release',
      description: 'Release tension in connective tissue for better movement'
    },
    {
      icon: '🎯',
      title: 'Injury Prevention',
      description: 'Reduce injury risk through improved muscle elasticity'
    },
    {
      icon: '🌟',
      title: 'Posture',
      description: 'Correct imbalances and achieve optimal body alignment'
    }
  ];

  const techniques = [
    { name: 'Dynamic Stretching', sanskrit: 'Active Movement Flow' },
    { name: 'Static Holds', sanskrit: 'Passive Muscle Elongation' },
    { name: 'PNF Stretching', sanskrit: 'Proprioceptive Neuromuscular' },
    { name: 'Myofascial Release', sanskrit: 'Foam Rolling Technique' },
    { name: 'Joint Mobilization', sanskrit: 'Controlled Articular Rotations' },
    { name: 'Ballistic Stretching', sanskrit: 'Momentum-Based Movement' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Advanced Mobility</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Flexibility Techniques
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Flexibility techniques focus on gradual muscle opening, joint mobility, 
                and fascia release to improve range of motion, posture, and injury prevention 
                through scientifically-backed stretching methodologies.
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

      {/* Techniques Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Core Techniques</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Essential methods for optimal flexibility</p>
          </div>
          <div className="row g-4">
            {techniques.map((technique, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{technique.name}</h4>
                    <p className={styles.poseSanskrit}>{technique.sanskrit}</p>
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
                <img src={Practice} alt="Flexibility practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔥</div>
                  <div>
                    <h5>Warm-Up Protocol</h5>
                    <p>Prepare muscles and joints with dynamic movement patterns</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>⏱️</div>
                  <div>
                    <h5>Progressive Loading</h5>
                    <p>Gradually increase stretch intensity for safe muscle adaptation</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🎯</div>
                  <div>
                    <h5>Targeted Release</h5>
                    <p>Focus on specific muscle groups and fascial restrictions</p>
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
                <h2 className="text-white mb-3">Transform Your Mobility Today</h2>
                <p className="text-white mb-0">
                  Join thousands who have unlocked their full range of motion through proven techniques
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

export default FlexibilityTechniques;