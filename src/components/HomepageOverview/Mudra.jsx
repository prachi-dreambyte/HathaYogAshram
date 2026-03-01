import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const Mudra = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '⚡',
      title: 'Pranic Energy',
      description: 'Redirect and balance vital life force throughout the body'
    },
    {
      icon: '🧘‍♀️',
      title: 'Meditation',
      description: 'Deepen meditative states and enhance concentration'
    },
    {
      icon: '💫',
      title: 'Healing',
      description: 'Support natural healing processes and emotional balance'
    },
    {
      icon: '🌸',
      title: 'Mind-Body',
      description: 'Cultivate deeper awareness of inner energy flows'
    }
  ];

  const mudras = [
    { name: 'Gyan Mudra', sanskrit: 'Gesture of Knowledge' },
    { name: 'Anjali Mudra', sanskrit: 'Prayer Seal' },
    { name: 'Dhyana Mudra', sanskrit: 'Meditation Gesture' },
    { name: 'Prana Mudra', sanskrit: 'Life Force Seal' },
    { name: 'Apana Mudra', sanskrit: 'Downward Energy' },
    { name: 'Shuni Mudra', sanskrit: 'Seal of Patience' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Sacred Hand Gestures</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Mudra
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Mudras are symbolic hand gestures that redirect pranic energy, 
                enhance meditation, support healing, and deepen mind–body awareness 
                through ancient yogic wisdom and energetic channeling.
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

      {/* Mudras Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Essential Mudras</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Sacred gestures for energy transformation</p>
          </div>
          <div className="row g-4">
            {mudras.map((mudra, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{mudra.name}</h4>
                    <p className={styles.poseSanskrit}>{mudra.sanskrit}</p>
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
                <img src={Practice} alt="Mudra practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🙏</div>
                  <div>
                    <h5>Hand Positioning</h5>
                    <p>Learn precise finger placements to activate energy meridians</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌀</div>
                  <div>
                    <h5>Energy Flow</h5>
                    <p>Channel prana through specific nadis and chakra centers</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>✨</div>
                  <div>
                    <h5>Intention & Focus</h5>
                    <p>Combine gestures with breath and mindful awareness</p>
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
                <h2 className="text-white mb-3">Master the Art of Mudras</h2>
                <p className="text-white mb-0">
                  Unlock the ancient wisdom of sacred hand gestures for healing and transformation
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

export default Mudra;