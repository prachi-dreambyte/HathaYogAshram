import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const VinyasaFlow = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '💪',
      title: 'Strength',
      description: 'Build full-body power through dynamic sequences'
    },
    {
      icon: '🤸',
      title: 'Flexibility',
      description: 'Enhance mobility with fluid, continuous movement'
    },
    {
      icon: '⚖️',
      title: 'Coordination',
      description: 'Develop grace and body control through flow'
    },
    {
      icon: '🌊',
      title: 'Flow Awareness',
      description: 'Cultivate meditative state through rhythmic practice'
    }
  ];

  const poses = [
    { name: 'Flowing Sun Salutation', sanskrit: 'Surya Namaskara Vinyasa' },
    { name: 'Warrior Flow', sanskrit: 'Virabhadrasana Vinyasa' },
    { name: 'Crescent to Twist', sanskrit: 'Anjaneyasana Parivrtta' },
    { name: 'Plank to Chaturanga', sanskrit: 'Phalakasana to Chaturanga' },
    { name: 'Up Dog to Down Dog', sanskrit: 'Urdhva Mukha to Adho Mukha' },
    { name: 'Standing Flow Sequence', sanskrit: 'Vinyasa Krama' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Flowing Movement</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Vinyasa Flow
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Vinyasa Flow links breath with movement in a continuous sequence, 
                enhancing strength, flexibility, coordination, and meditative flow awareness.
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
            <h2 className={styles.sectionTitle}>Flowing Sequences</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Dynamic transitions for continuous movement</p>
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
                <img src={Practice} alt="Vinyasa Flow Practice"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌬️</div>
                  <div>
                    <h5>Breath-Movement Sync</h5>
                    <p>Coordinate each movement with inhalation or exhalation</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🔄</div>
                  <div>
                    <h5>Creative Sequencing</h5>
                    <p>Explore endless variations of flowing transitions</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🧘‍♀️</div>
                  <div>
                    <h5>Moving Meditation</h5>
                    <p>Find stillness within motion and cultivate present awareness</p>
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
                <h2 className="text-white mb-3">Begin Your Vinyasa Flow Journey</h2>
                <p className="text-white-50 mb-0">
                  Experience the beauty of breath-synchronized movement and flow
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

export default VinyasaFlow;