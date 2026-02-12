import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const AncientYogicPractices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🦵',
      title: 'Hip Opening',
      description: 'Release stored emotions and improve lower body flexibility'
    },
    {
      icon: '💪',
      title: 'Shoulder Opening',
      description: 'Relieve upper body tension and enhance range of motion'
    },
    {
      icon: '🌈',
      title: 'Deep Release',
      description: 'Unlock chronic tension patterns held in the body'
    },
    {
      icon: '🤸',
      title: 'Mobility',
      description: 'Enhance overall movement quality and joint health'
    }
  ];

  const poses = [
    { name: 'Pigeon Pose', sanskrit: 'Eka Pada Rajakapotasana' },
    { name: 'Cow Face Pose', sanskrit: 'Gomukhasana' },
    { name: 'Camel Pose', sanskrit: 'Ustrasana' },
    { name: 'Seated Forward Bend', sanskrit: 'Paschimottanasana' },
    { name: 'Monkey Pose', sanskrit: 'Hanumanasana' },
    { name: 'Lizard Pose', sanskrit: 'Utthan Pristhasana' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Timeless Wisdom</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Ancient Yogic Practices
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Ancient yogic practices include hip opening, shoulder opening, back bending, 
                forward bending, and leg splits to release deep tension and improve mobility.
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
            <h2 className={styles.sectionTitle}>Classical Asanas</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Time-honored postures for deep transformation</p>
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
                <img src={Practice} alt="Ancient Yogic Practices"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔓</div>
                  <div>
                    <h5>Hip & Shoulder Opening</h5>
                    <p>Target key areas to release stored tension and emotions</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌊</div>
                  <div>
                    <h5>Back & Forward Bending</h5>
                    <p>Balance the spine through complementary movements</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>✨</div>
                  <div>
                    <h5>Advanced Flexibility</h5>
                    <p>Progress toward splits and deep stretches with patience</p>
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
                <h2 className="text-white mb-3">Begin Your Ancient Yogic Journey</h2>
                <p className="text-white-50 mb-0">
                  Discover centuries-old practices for deep release and transformation
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

export default AncientYogicPractices;