import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const YogaTherapy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🩺',
      title: 'Physical Recovery',
      description: 'Support healing and rehabilitation through targeted asana'
    },
    {
      icon: '🧠',
      title: 'Mental Health',
      description: 'Address anxiety, depression, and emotional wellbeing'
    },
    {
      icon: '💚',
      title: 'Chronic Conditions',
      description: 'Manage long-term health challenges holistically'
    },
    {
      icon: '🌈',
      title: 'Holistic Care',
      description: 'Integrate mind-body practices for complete wellness'
    }
  ];

  const approaches = [
    { name: 'Asana Therapy', sanskrit: 'Therapeutic Postures' },
    { name: 'Pranayama', sanskrit: 'Breath Regulation' },
    { name: 'Yoga Nidra', sanskrit: 'Yogic Sleep' },
    { name: 'Mindfulness', sanskrit: 'Dhyana Practice' },
    { name: 'Restorative Yoga', sanskrit: 'Supportive Poses' },
    { name: 'Somatic Awareness', sanskrit: 'Body Consciousness' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Therapeutic Practice</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Yoga Therapy
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Yoga therapy applies yogic tools such as asana, pranayama, relaxation, 
                and mindfulness to support physical recovery, mental health, and chronic 
                conditions through personalized therapeutic interventions.
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

      {/* Approaches Section */}
      <section className={`py-5 ${styles.posesSection}`}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className={styles.sectionTitle}>Therapeutic Approaches</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Evidence-based methods for healing and recovery</p>
          </div>
          <div className="row g-4">
            {approaches.map((approach, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.poseCard}>
                  <div className={styles.poseCardInner}>
                    <div className={styles.poseNumber}>{String(index + 1).padStart(2, '0')}</div>
                    <h4 className={styles.poseName}>{approach.name}</h4>
                    <p className={styles.poseSanskrit}>{approach.sanskrit}</p>
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
                <img src={Practice} alt="Yoga therapy practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📋</div>
                  <div>
                    <h5>Personalized Assessment</h5>
                    <p>Individual evaluation to address specific health concerns</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🎯</div>
                  <div>
                    <h5>Targeted Interventions</h5>
                    <p>Customized practices tailored to therapeutic goals</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📈</div>
                  <div>
                    <h5>Progress Monitoring</h5>
                    <p>Track improvements and adjust practices as needed</p>
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
                <h2 className="text-white mb-3">Start Your Healing Journey</h2>
                <p className="text-white-50 mb-0">
                  Experience the transformative power of yoga therapy for your health and wellbeing
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

export default YogaTherapy;