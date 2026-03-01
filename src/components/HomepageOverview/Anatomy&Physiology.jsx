import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const AnatomyPhysiology = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🦴',
      title: 'Skeletal Knowledge',
      description: 'Understand joints, bones, and spine alignment principles'
    },
    {
      icon: '💪',
      title: 'Muscular System',
      description: 'Learn muscle engagement and safe strengthening techniques'
    },
    {
      icon: '🛡️',
      title: 'Injury Prevention',
      description: 'Practice intelligently to avoid strain and overuse'
    },
    {
      icon: '🧬',
      title: 'Body Systems',
      description: 'Explore how yoga affects nervous, respiratory, and circulatory systems'
    }
  ];

  const poses = [
    { name: 'Spinal Alignment', sanskrit: 'Tadasana Analysis' },
    { name: 'Hip Joint Mechanics', sanskrit: 'Virabhadrasana Study' },
    { name: 'Shoulder Girdle Function', sanskrit: 'Adho Mukha Svanasana' },
    { name: 'Core Engagement', sanskrit: 'Navasana Anatomy' },
    { name: 'Knee Safety', sanskrit: 'Virasana Principles' },
    { name: 'Breath Mechanics', sanskrit: 'Pranayama Science' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Scientific Foundation</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Anatomy & Physiology
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Anatomy and physiology provide a scientific understanding of muscles, joints, 
                spine, and body systems to ensure safe, intelligent, and sustainable yoga practice.
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
            <h2 className={styles.sectionTitle}>Key Anatomical Concepts</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Essential knowledge for intelligent practice</p>
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
                <img src={Practice} alt="Anatomy & Physiology in Yoga"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔬</div>
                  <div>
                    <h5>Biomechanical Analysis</h5>
                    <p>Study how poses affect joints, muscles, and connective tissue</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🧠</div>
                  <div>
                    <h5>Nervous System Integration</h5>
                    <p>Understand the mind-body connection through neuroscience</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>❤️</div>
                  <div>
                    <h5>Physiological Effects</h5>
                    <p>Learn how practice influences breath, circulation, and health</p>
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
                <h2 className="text-white mb-3">Begin Your Anatomy & Physiology Journey</h2>
                <p className="text-white mb-0">
                  Deepen your practice with scientific understanding and intelligent movement
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

export default AnatomyPhysiology;