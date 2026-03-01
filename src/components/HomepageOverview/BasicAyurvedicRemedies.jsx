import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const BasicAyurvedicRemedies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🌿',
      title: 'Natural Healing',
      description: 'Harness the power of herbs and natural remedies'
    },
    {
      icon: '🍽️',
      title: 'Diet Awareness',
      description: 'Understand food as medicine for your constitution'
    },
    {
      icon: '☀️',
      title: 'Daily Routines',
      description: 'Establish healthy rhythms aligned with nature'
    },
    {
      icon: '⚖️',
      title: 'Balance',
      description: 'Maintain harmony of body, mind, and spirit'
    }
  ];

  const remedies = [
    { name: 'Dinacharya', sanskrit: 'Daily Routine Practice' },
    { name: 'Ritucharya', sanskrit: 'Seasonal Regimen' },
    { name: 'Herbal Remedies', sanskrit: 'Aushadhi Chikitsa' },
    { name: 'Dietary Guidelines', sanskrit: 'Ahara Niyama' },
    { name: 'Oil Pulling', sanskrit: 'Gandusha' },
    { name: 'Tongue Scraping', sanskrit: 'Jihwa Prakshalana' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Natural Wellness</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Basic Ayurvedic Remedies
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Basic Ayurvedic remedies introduce natural healing methods using lifestyle 
                guidance, diet awareness, herbs, and daily routines to maintain balance 
                and wellbeing through time-tested ancient wisdom.
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

      {/* Remedies Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Essential Practices</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Foundational remedies for holistic wellness</p>
          </div>
          <div className="row g-4">
            {remedies.map((remedy, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{remedy.name}</h4>
                    <p className={styles.poseSanskrit}>{remedy.sanskrit}</p>
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
                <img src={Practice} alt="Ayurvedic practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌱</div>
                  <div>
                    <h5>Herbal Knowledge</h5>
                    <p>Learn therapeutic properties of common Ayurvedic herbs</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🕐</div>
                  <div>
                    <h5>Lifestyle Rhythms</h5>
                    <p>Align daily activities with natural circadian cycles</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🥗</div>
                  <div>
                    <h5>Mindful Nutrition</h5>
                    <p>Discover foods that balance your unique constitution</p>
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
                <h2 className="text-white mb-3">Begin Your Ayurvedic Journey</h2>
                <p className="text-white mb-0">
                  Discover natural healing and balance through ancient Ayurvedic wisdom
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

export default BasicAyurvedicRemedies;