import React from 'react';
import styles from '../../assets/styles/onlineyogacourse/Onlineyoga.module.css';
import { useNavigate } from 'react-router-dom';
import BooksSection from 'components/MyBooks/Bookssection';

const OnlineYoga = () => {
  const navigate = useNavigate();
  const yogaClasses = [
    {
      id: 1,
      title: 'Stress Management Yoga',
      time: '6PM - 7PM',
      price: '399',
      image:
        'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Family Yoga',
      time: '8AM - 9AM',
      price: '1299',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Beginners Yoga',
      time: '6AM - 7AM',
      price: '399',
      image:
        'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Yoga after 60s',
      time: '7AM - 8AM',
      price: '399',
      image:
        'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop',
    },
  ];

  const benefits = [
    '6AM - 7AM',
    'RYT and Certified Yoga Instructors with Years of Experience',
    'Ayurveda Indian Cooking Training Classes TTC',
    'Fun with Yoga',
    '24x7 Security',
    'Multi Style Yoga Teacher Training in Rishikesh',
    'Pleasant Accommodation',
    'Weekly Excursions',
  ];

  return (
    <div className={styles.container}>
      {/* Decorative Om Symbols */}
      <svg
        className={styles.omDecor1}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 Q130 40 140 70 Q150 100 140 130 Q130 160 100 180 Q70 160 60 130 Q50 100 60 70 Q70 40 100 20 M80 60 Q90 70 100 70 Q110 70 120 60 M85 90 Q92 100 100 105 Q108 100 115 90 M75 120 Q85 135 100 140 Q115 135 125 120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroBackground}>
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=800&fit=crop"
            alt="Woman doing yoga online"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.omSymbol}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 10 Q65 20 70 35 Q75 50 70 65 Q65 80 50 90 Q35 80 30 65 Q25 50 30 35 Q35 20 50 10 M40 30 Q45 35 50 35 Q55 35 60 30 M42.5 45 Q46 50 50 52.5 Q54 50 57.5 45 M37.5 60 Q42.5 67.5 50 70 Q57.5 67.5 62.5 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          <p className={styles.welcomeText}>Transform Your Life</p>
          <h1 className={styles.heroTitle}>
            Best Online Yoga <span className={styles.highlight}>Classes</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Yoga is commonly believed to be a physical practice. While asanas
            (postures) are important, yoga is a vast and deep subject that can
            dramatically improve the quality of our lives. If you've ever had a
            casual interest in yoga, or are considering pursuing a career as a
            yoga teacher, this course is meant for you.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate('/BookingForm')}
          >
            <span>Start Your Journey</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <svg
          className={styles.lotusDecor}
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M75 120 Q65 90 65 60 Q65 45 75 30" />
            <path d="M75 120 Q85 90 85 60 Q85 45 75 30" />
            <path d="M45 105 Q52.5 90 60 75" />
            <path d="M105 105 Q97.5 90 90 75" />
            <circle cx="75" cy="52.5" r="12" />
            <path d="M30 112.5 Q45 97.5 60 90" />
            <path d="M120 112.5 Q105 97.5 90 90" />
          </g>
        </svg>
      </section>

      {/* Choose Your Class Section */}
      <section className={styles.classesSection}>
        <div className={styles.sectionDivider}>
          <svg
            className={styles.yogaIcon}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="15" r="5" fill="currentColor" />
            <path
              d="M15 25 L25 20 L35 25 M25 20 L25 35 M20 35 L25 35 L30 35"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Choose Your Class and Slot</h2>
        </div>

        <div className={styles.classesGrid}>
          {yogaClasses.map((yogaClass) => (
            <div key={yogaClass.id} className={styles.classCard}>
              <div className={styles.classImageWrapper}>
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  className={styles.classImage}
                />
              </div>
              <div className={styles.classContent}>
                <h3 className={styles.classTitle}>{yogaClass.title}</h3>
                <p className={styles.classTime}>{yogaClass.time}</p>
                <p className={styles.classPrice}>Starting @{yogaClass.price}</p>
                <button
                  className={styles.bookButton}
                  onClick={() => navigate('/BookingForm')}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Mandala */}
        <div className={styles.mandalaLeft}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1" stroke="currentColor" strokeWidth="1" fill="none">
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="40" />
              <circle cx="100" cy="100" r="20" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
                  y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
                />
              ))}
            </g>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsImage}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop"
              alt="Yoga practice outdoors"
              className={styles.benefitsImg}
            />
            <div className={styles.imageFrame}></div>
          </div>

          <div className={styles.benefitsContent}>
            <div className={styles.sectionDivider}>
              <svg
                className={styles.yogaIcon}
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="15" r="5" fill="currentColor" />
                <path
                  d="M15 25 L25 20 L35 25 M25 20 L25 35 M20 35 L25 35 L30 35"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <h2 className={styles.benefitsTitle}>
              Benefits Of Yoga from{' '}
              <span className={styles.brandHighlight}>Hatha Yogashram</span>
            </h2>

            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Mandala Right */}
        <div className={styles.mandalaRight}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1" stroke="currentColor" strokeWidth="1" fill="none">
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="40" />
              <circle cx="100" cy="100" r="20" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
                  y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
                />
              ))}
            </g>
          </svg>
        </div>
      </section>

      <BooksSection />

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <div className={styles.ctaContent}>
          <svg
            className={styles.ctaOm}
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 12 Q78 24 84 42 Q90 60 84 78 Q78 96 60 108 Q42 96 36 78 Q30 60 36 42 Q42 24 60 12 M48 36 Q54 42 60 42 Q66 42 72 36 M51 54 Q55.2 60 60 63 Q64.8 60 69 54 M45 72 Q51 81 60 84 Q69 81 75 72"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>

          <h2 className={styles.ctaTitle}>
            Embark Your Yogic Journey with Yoga Alliance® Certified Yoga Teacher
            Training School in Rishikesh, India
          </h2>
          <button
            className={styles.ctaMainButton}
            onClick={() => navigate('/BookingForm')}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Bottom Om Decoration */}
      <svg
        className={styles.omDecor2}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 Q130 40 140 70 Q150 100 140 130 Q130 160 100 180 Q70 160 60 130 Q50 100 60 70 Q70 40 100 20 M80 60 Q90 70 100 70 Q110 70 120 60 M85 90 Q92 100 100 105 Q108 100 115 90 M75 120 Q85 135 100 140 Q115 135 125 120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

export default OnlineYoga;
