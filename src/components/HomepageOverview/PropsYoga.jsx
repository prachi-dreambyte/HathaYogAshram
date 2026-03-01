import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const PropsYoga = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🎯',
      title: 'Alignment',
      description: 'Perfect your posture with proper support and guidance'
    },
    {
      icon: '♿',
      title: 'Accessibility',
      description: 'Make yoga available for all bodies and abilities'
    },
    {
      icon: '🧘',
      title: 'Deeper Awareness',
      description: 'Enhance body consciousness through supported practice'
    },
    {
      icon: '🛡️',
      title: 'Injury-Free',
      description: 'Practice safely with reduced risk and proper support'
    }
  ];

  const poses = [
    { name: 'Supported Bridge Pose', sanskrit: 'Setu Bandhasana' },
    { name: 'Chair Warrior', sanskrit: 'Virabhadrasana' },
    { name: 'Wall Downward Dog', sanskrit: 'Adho Mukha Svanasana' },
    { name: 'Strap-Assisted Forward Bend', sanskrit: 'Paschimottanasana' },
    { name: 'Block-Supported Triangle', sanskrit: 'Trikonasana' },
    { name: 'Wheel-Assisted Backbend', sanskrit: 'Chakrasana' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Supported Practice</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Props Yoga
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Props Yoga uses tools such as chair, yoga block, strap, wheel, and wall 
                to support alignment, accessibility, deeper awareness, and injury-free practice.
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
            <h2 className={styles.sectionTitle}>Supported Asanas</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Modified postures with prop assistance</p>
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
                <img src={Practice} alt="Props Yoga Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🪑</div>
                  <div>
                    <h5>Chair & Block Support</h5>
                    <p>Stabilize poses and build confidence with solid foundations</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔗</div>
                  <div>
                    <h5>Strap Assistance</h5>
                    <p>Extend reach and deepen stretches safely and effectively</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>⭕</div>
                  <div>
                    <h5>Wheel & Wall Practice</h5>
                    <p>Explore advanced poses with proper support and alignment</p>
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
                <h2 className="text-white mb-3">Begin Your Props Yoga Journey</h2>
                <p className="text-white mb-0">
                  Experience the freedom of accessible, safe, and supported practice
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

export default PropsYoga;