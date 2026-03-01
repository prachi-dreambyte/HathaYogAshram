import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const BodyAsanaAlignment = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '📐',
      title: 'Correct Posture',
      description: 'Master precise alignment for optimal pose execution'
    },
    {
      icon: '⚙️',
      title: 'Biomechanics',
      description: 'Understand body mechanics for efficient movement'
    },
    {
      icon: '🛡️',
      title: 'Injury Prevention',
      description: 'Practice safely with proper structural support'
    },
    {
      icon: '📈',
      title: 'Effectiveness',
      description: 'Maximize benefits through refined alignment'
    }
  ];

  const poses = [
    { name: 'Mountain Pose Alignment', sanskrit: 'Tadasana Samanam' },
    { name: 'Warrior I Precision', sanskrit: 'Virabhadrasana I' },
    { name: 'Triangle Pose Geometry', sanskrit: 'Trikonasana' },
    { name: 'Downward Dog Refinement', sanskrit: 'Adho Mukha Svanasana' },
    { name: 'Chair Pose Structure', sanskrit: 'Utkatasana' },
    { name: 'Plank Pose Foundation', sanskrit: 'Phalakasana' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Precision Practice</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Body & Asana Alignment
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Body and asana alignment training emphasizes correct posture, biomechanics, 
                and adjustments to prevent injury and deepen the effectiveness of each pose.
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
            <h2 className={styles.sectionTitle}>Alignment-Focused Asanas</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Precision-based approach to foundational poses</p>
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
                <img src={Practice} alt="Body & Asana Alignment Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🎯</div>
                  <div>
                    <h5>Alignment Principles</h5>
                    <p>Learn foundational cues for proper structural positioning</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔧</div>
                  <div>
                    <h5>Mindful Adjustments</h5>
                    <p>Refine poses through subtle modifications and awareness</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>📊</div>
                  <div>
                    <h5>Body Mechanics</h5>
                    <p>Apply biomechanical knowledge for sustainable practice</p>
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
                <h2 className="text-white mb-3">Begin Your Body & Asana Alignment Journey</h2>
                <p className="text-white mb-0">
                  Master the art of precision and discover the power of proper alignment
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

export default BodyAsanaAlignment;