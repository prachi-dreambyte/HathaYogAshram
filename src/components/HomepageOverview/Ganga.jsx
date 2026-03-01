import React, { useState } from 'react';
import styles from '../../assets/styles/HomepageOverview/Asana.module.css';
import Practice from '../../assets/images/images.jpg';

const PracticeAtGanga = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: '🙏',
      title: 'Spiritual Environment',
      description: 'Practice in the sacred presence of Mother Ganga'
    },
    {
      icon: '🧘‍♀️',
      title: 'Enhanced Meditation',
      description: 'Deepen practice in a naturally meditative setting'
    },
    {
      icon: '💧',
      title: 'Purification',
      description: 'Cleanse body, mind, and spirit by the holy waters'
    },
    {
      icon: '✨',
      title: 'Inner Transformation',
      description: 'Experience profound shifts in sacred energy'
    }
  ];

  const poses = [
    { name: 'Sunrise Meditation', sanskrit: 'Surya Dhyana' },
    { name: 'River Flow Practice', sanskrit: 'Ganga Sadhana' },
    { name: 'Sacred Asana', sanskrit: 'Pavitra Asana' },
    { name: 'Ganga Aarti Yoga', sanskrit: 'Aarti Yoga' },
    { name: 'Contemplation by Water', sanskrit: 'Jala Dhyana' },
    { name: 'Evening Reflection', sanskrit: 'Sandhya Sadhana' }
  ];

  return (
    <div className={styles.hathaYogaPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>Sacred Setting</div>
              <h1 className={`display-3 fw-bold mb-4 ${styles.heroTitle}`}>
                Practice at The Bank of Ganga ji
              </h1>
              <p className={`lead ${styles.heroDescription}`}>
                Practicing yoga at the sacred bank of the Ganga provides a deeply spiritual 
                environment that enhances meditation, purification, and inner transformation.
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
            <h2 className={styles.sectionTitle}>Sacred Practices by the Ganga</h2>
            <div className={`${styles.titleUnderline} bg-white`}></div>
            <p className="text-white-50 mt-3">Rituals and practices at the holy riverside</p>
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
                <img src={Practice} alt="Practice at Ganga Bank"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className={`${styles.sectionTitle} mb-4`}>The Practice</h2>
              <div className={styles.practiceContent}>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌅</div>
                  <div>
                    <h5>Dawn Practice</h5>
                    <p>Begin your day with yoga as the sun rises over the Ganga</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🕉️</div>
                  <div>
                    <h5>Sacred Rituals</h5>
                    <p>Participate in traditional ceremonies and spiritual practices</p>
                  </div>
                </div>
                <div className={styles.practiceItem}>
                  <div className={styles.practiceIcon}>🌊</div>
                  <div>
                    <h5>River Connection</h5>
                    <p>Harmonize with the eternal flow of the holy river</p>
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
                <h2 className="text-white mb-3">Begin Your Practice at The Bank of Ganga ji</h2>
                <p className="text-white mb-0">
                  Experience the transformative power of yoga in this sacred spiritual sanctuary
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

export default PracticeAtGanga;