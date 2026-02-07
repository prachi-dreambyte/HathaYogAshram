import React, { useState } from 'react';
import styles from '../../assets/styles/retreatlinks/Yoga10DaysRetreat.module.css';
import { Link, useNavigate } from 'react-router-dom';
import BooksSection from 'components/MyBooks/Bookssection';

const Yoga10DaysRetreat = () => {
  const [selectedYoga, setSelectedYoga] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const activities = [
    'Everyday Yoga Classes',
    'River Ganga Aarti Visit',
    'Rishikesh Bazaar Visit',
    'Weekend Excursion',
    'Bungee Jumping',
    'Waterfall Tracking',
    'Single/Sharing Accommodation',
    'River Rafting',
    'Trekking',
    'Ancient Cave Visit',
    'Temple visit',
    'Evening Satsang',
    'Daily Three Times Vegetarian Meals, Herbal Tea',
    'Ayurvedic Massage (on demand)',
  ];

  const yogaStyles = [
    {
      icon: '🧘',
      title: 'Yoga Asanas',
      description:
        'Elevate your well-being with expert-led yoga asanas at yoga retreat in Rishikesh that enhance physical strength, mental clarity, and energy flow.',
      fullDescription:
        'Whether you are on a vacation or on a yoga course, amenities make your life a little easier when you are away from home. To make sure that the students enjoy their stay, HathaYogashram Yoga Retreat Center provides them with neat and clean rooms.',
      image:
        'https://images.pexels.com/photos/3822945/pexels-photo-3822945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🍎',
      title: 'Balanced Diet',
      description:
        'Nourish your body with wholesome vegetarian meals prepared with fresh, organic ingredients.',
      fullDescription:
        'Our carefully curated menu includes organic vegetables, fresh fruits, whole grains, and herbal teas that support your wellness journey. All meals are prepared with love and mindfulness.',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🧘‍♀️',
      title: 'Meditation',
      description:
        'Experience profound peace through guided meditation sessions.',
      fullDescription:
        'Daily meditation practices help you connect with your inner self, reduce stress, and achieve mental clarity. Our experienced teachers guide you through various meditation techniques.',
      image:
        'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🕉️',
      title: 'Ganga Arti Visit',
      description:
        'Witness the mesmerizing Ganga Aarti ceremony on the banks of the holy Ganges.',
      fullDescription:
        'Experience the divine evening Ganga Aarti, a spiritual ceremony that takes place on the banks of the sacred river Ganges. This enchanting ritual will leave you with lasting memories.',
      image:
        'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🏔️',
      title: 'Weekend Activities',
      description:
        'Explore the beautiful surroundings of Rishikesh with guided excursions.',
      fullDescription:
        'Weekend adventures include trekking in the Himalayas, visiting ancient temples, exploring waterfalls, and experiencing the thrill of river rafting in the holy Ganges.',
      image:
        'https://images.pexels.com/photos/3822632/pexels-photo-3822632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const whyChooseReasons = [
    {
      icon: '⚡',
      title: 'Efficiency',
      description:
        'Condensed 10-day format fits busy schedules, delivering yoga and meditation essence.',
    },
    {
      icon: '🙏',
      title: 'Authenticity',
      description:
        "Immerse in Rishikesh's yogic wisdom with experienced instructors.",
    },
    {
      icon: '💚',
      title: 'Holistic Wellness',
      description:
        'Explore Hatha Yoga, Pranayama, Meditation, Mudra, and Mantra Chanting for mind-body balance.',
    },
    {
      icon: '🍽️',
      title: 'Culinary Delights',
      description:
        'Indulge in nourishing meals that complement your wellness journey.',
    },
    {
      icon: '🌄',
      title: "Nature's Embrace",
      description: "Renewal against Rishikesh's stunning backdrop.",
    },
    {
      icon: '🎯',
      title: 'Weekend Adventures',
      description:
        'Enhance your experience with guided trips to local attractions.',
    },
    {
      icon: '👥',
      title: 'Meaningful Bonds',
      description: 'Form lasting friendships with like-minded participants.',
    },
  ];

  const faqs = [
    {
      question: 'What can I expect from a 10-day yoga retreat in India?',
      answer:
        "A 10-day yoga retreat in India offers daily yoga and meditation sessions, healthy Ayurvedic meals, serene natural surroundings, and spiritual teachings. Expect inner peace, physical rejuvenation, detoxification, and cultural immersion. It's a transformative experience, ideal for self-discovery, stress relief, and reconnecting with mind, body, and spirit.",
    },
    {
      question:
        'Can a 10-day yoga retreat in India help with stress and anxiety relief?',
      answer:
        'Yes, our retreat is specifically designed to reduce stress and anxiety through daily yoga practice, meditation sessions, breathing exercises, and the peaceful Himalayan environment. Many guests report significant improvements in their mental wellbeing.',
    },
    {
      question:
        'Is 10 days enough for a transformational yoga retreat experience?',
      answer:
        "Absolutely! While longer retreats offer extended benefits, 10 days is sufficient for a transformative experience. You'll develop a solid yoga foundation, reset your mind and body, and gain tools for continuing your practice at home.",
    },
    {
      question:
        'What are the benefits of attending a 10-day yoga retreat in India?',
      answer:
        'Benefits include improved flexibility and strength, reduced stress, better sleep, enhanced mental clarity, spiritual growth, cultural immersion, detoxification through healthy meals, and connection with like-minded individuals in a supportive environment.',
    },
    {
      question: 'What is included in the retreat package?',
      answer:
        'The package includes accommodation (private or shared), daily yoga classes, meditation sessions, three vegetarian meals per day, herbal tea, weekend excursions, Ganga Aarti visit, and various adventure activities like trekking and river rafting.',
    },
    {
      question:
        'What kind of people usually attend 10-day yoga retreats in India?',
      answer:
        'Our retreats attract a diverse group including beginners and experienced practitioners, working professionals seeking respite, spiritual seekers, wellness enthusiasts, and anyone looking for personal transformation and inner peace.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <section className={styles.pageBanner}></section>
      <section className={styles.bxox}>
        <div className="container"></div>
      </section>

      {/* Hero Section with Floating Elements */}
      <section className={styles.heroSection}>
        {/* Animated Background Elements */}
        <div className={styles.heroBackground}>
          <div
            className={styles.floatingElement}
            style={{ top: '10%', left: '5%' }}
          >
            <svg className={styles.yogaVector} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#f0e7ff" opacity="0.5" />
              <text x="50" y="65" textAnchor="middle" fontSize="40">
                🧘
              </text>
            </svg>
          </div>
          <div
            className={styles.floatingElement}
            style={{ top: '20%', right: '10%' }}
          >
            <svg className={styles.yogaVector} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#fce7f3" opacity="0.5" />
              <text x="50" y="65" textAnchor="middle" fontSize="35">
                🕉️
              </text>
            </svg>
          </div>
          <div
            className={styles.floatingElement}
            style={{ bottom: '15%', left: '8%' }}
          >
            <svg className={styles.yogaVector} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" fill="#e0f2fe" opacity="0.5" />
              <text x="50" y="63" textAnchor="middle" fontSize="30">
                🪷
              </text>
            </svg>
          </div>
          <div
            className={styles.floatingElement}
            style={{ bottom: '20%', right: '5%' }}
          >
            <svg className={styles.yogaVector} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="#fef3c7" opacity="0.5" />
              <text x="50" y="64" textAnchor="middle" fontSize="32">
                ☀️
              </text>
            </svg>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>
              <span className={styles.tagIcon}>🏔️</span>
              <span>Rishikesh, India - World Capital of Yoga</span>
            </div>

            <div className={styles.bannerContent}>
              <h2 className={styles.bannerTitle}>
                10 Days Yoga Retreat in Rishikesh
              </h2>
              <p className={styles.bannerSubtitle}>
                Rejuvenate your mind, body & soul with authentic yogic practices
              </p>
              <Link to="/BookingForm" className={styles.bannerButton}>
                Enquire Now →
              </Link>
            </div>

            <p className={styles.heroDescription}>
              Experience rejuvenation in just 10 days at{' '}
              <Link to="#" className={styles.heroLink}>
                Hatha Yogashram
              </Link>{' '}
              Meditation and Yoga Retreat in Rishikesh. Dive into Hatha Yoga,
              Pranayama, Meditation, Mudra, and Mantra Chanting for a holistic
              wellness journey.
            </p>

            <div className={styles.heroFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>Daily Yoga Classes</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>Ganga Aarti Visit</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>Weekend Adventures</span>
              </div>
            </div>

            <div className={styles.pricingBox}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Choose Your Package</h3>
                <div className={styles.saveBadge}>Save 10%</div>
              </div>

              <div className={styles.priceRow}>
                <div className={styles.priceInfo}>
                  <h3 className={styles.priceType}>Private Room</h3>
                  <p className={styles.priceDesc}>
                    Perfect for privacy & comfort
                  </p>
                </div>
                <div className={styles.priceAmount}>
                  <div className={styles.priceMain}>
                    <span className={styles.currentPrice}>₹40,000</span>
                    <span className={styles.dollarPrice}>($464)</span>
                  </div>
                  <span className={styles.oldPrice}>₹44,000</span>
                </div>
              </div>

              <div className={styles.priceRow}>
                <div className={styles.priceInfo}>
                  <h3 className={styles.priceType}>Shared Room</h3>
                  <p className={styles.priceDesc}>Connect with fellow yogis</p>
                </div>
                <div className={styles.priceAmount}>
                  <div className={styles.priceMain}>
                    <span className={styles.currentPrice}>₹31,000</span>
                    <span className={styles.dollarPrice}>($359)</span>
                  </div>
                  <span className={styles.oldPrice}>₹35,000</span>
                </div>
              </div>
            </div>

            <button
              className={styles.bookButton}
              onClick={() => navigate('/BookingForm')}
            >
              <span>Book Your Spot Now</span>
              <span className={styles.buttonArrow}>→</span>
            </button>

            <div className={styles.trustSignals}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>👥</span>
                <span>500+ Happy Students</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🏆</span>
                <span>Yoga Alliance Certified</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
              <div className={styles.imageBadge}>
                <span>✨ Authentic Experience</span>
              </div>
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Yoga Retreat in Rishikesh"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayIcon}>🧘‍♀️</div>
                  <p>Join 500+ Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* What You Get Section */}
        <section className={styles.whatYouGetSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Package Includes</span>
            <h2 className={styles.sectionTitle}>What You Get</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need for a transformative retreat experience
            </p>
          </div>

          <div className={styles.whatYouGetGrid}>
            <div className={styles.activitiesColumn}>
              <div className={styles.activitiesHeader}>
                <h3 className={styles.activitiesTitle}>
                  <span className={styles.titleIcon}>✨</span>
                  Included Activities
                </h3>
              </div>

              <div className={styles.activitiesList}>
                {activities.map((activity, index) => (
                  <div key={index} className={styles.activityItem}>
                    <div className={styles.checkIconWrapper}>
                      <svg className={styles.checkIcon} viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="9" fill="url(#gradient)" />
                        <path
                          d="M6 10l3 3 5-6"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#c026d3" />
                            <stop offset="100%" stopColor="#9333ea" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className={styles.activityText}>{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoColumn}>
              <div className={styles.activityImageWrapper}>
                <img
                  src="https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Retreat Activities"
                  className={styles.activityImage}
                />
                <div className={styles.imageGradient}></div>
              </div>

              <div className={styles.mustKnowBox}>
                <h3 className={styles.mustKnowTitle}>
                  <span className={styles.infoIconWrapper}>ℹ️</span>
                  Important Information
                </h3>
                <div className={styles.mustKnowContent}>
                  <div className={styles.mustKnowItem}>
                    <div className={styles.mustKnowIconBox}>
                      <svg
                        className={styles.mustKnowIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.mustKnowTextWrapper}>
                      <h4>Check-In</h4>
                      <p className={styles.mustKnowText}>
                        Any Thursday Night (Report by Friday Morning/Afternoon)
                      </p>
                    </div>
                  </div>

                  <div className={styles.mustKnowItem}>
                    <div className={styles.mustKnowIconBox}>
                      <svg
                        className={styles.mustKnowIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.mustKnowTextWrapper}>
                      <h4>Check-Out</h4>
                      <p className={styles.mustKnowText}>
                        Based on your Friday reporting date and time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yoga Style Section */}
        <section className={styles.yogaStyleSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Approach</span>
            <h2 className={styles.sectionTitle}>Yoga Styles & Practices</h2>
            <p className={styles.yogaSubtitle}>
              Hatha Yoga • Pranayama • Meditation • Mudra • Mantra Chanting
            </p>
          </div>

          <div className={styles.yogaStyleGrid}>
            {/* IMAGE */}
            <div className={styles.yogaVideoWrapper}>
              <img
                src={yogaStyles[selectedYoga].image}
                alt={yogaStyles[selectedYoga].title}
                className={styles.yogaVideo}
              />
              <div className={styles.imageLabel}>
                <span className={styles.imageLabelIcon}>
                  {yogaStyles[selectedYoga].icon}
                </span>
                <span>{yogaStyles[selectedYoga].title}</span>
              </div>
            </div>

            {/* TABS */}
            <div className={styles.yogaStyleButtons}>
              {yogaStyles.map((style, index) => (
                <button
                  key={index}
                  className={`${styles.yogaStyleButton} ${
                    selectedYoga === index ? styles.yogaStyleButtonActive : ''
                  }`}
                  onClick={() => setSelectedYoga(index)}
                >
                  <span className={styles.yogaStyleIcon}>{style.icon}</span>
                  <div className={styles.yogaStyleInfo}>
                    <span className={styles.yogaStyleName}>{style.title}</span>
                    <span className={styles.yogaStyleDesc}>
                      {style.description}
                    </span>
                  </div>
                  <span className={styles.yogaStyleArrow}>→</span>
                </button>
              ))}
            </div>

            {/* DESCRIPTION (IMAGE KE NEECHAY) */}
            <div className={styles.yogaDescription}>
              <h4 className={styles.yogaDescTitle}>
                About {yogaStyles[selectedYoga].title}
              </h4>
              <p className={styles.yogaDescriptionText}>
                {yogaStyles[selectedYoga].fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseSection}>
          <div className="container">
            {/* Header */}
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Why Us</span>
              <h2 className={styles.sectionTitle}>
                Why Choose{' '}
                <span className={styles.highlightText}>Hatha Yogashram</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Your trusted partner for authentic yoga retreat in Rishikesh
              </p>
            </div>

            {/* Content */}
            <div className="row align-items-start g-5">
              {/* LEFT → POINTS */}
              <div className="col-12 col-md-6">
                <div className={styles.reasonsList}>
                  {whyChooseReasons.map((reason, index) => (
                    <div key={index} className={styles.reasonItem}>
                      <div className={styles.reasonIcon}>{reason.icon}</div>
                      <div className={styles.reasonContent}>
                        <h3 className={styles.reasonTitle}>{reason.title}</h3>
                        <p className={styles.reasonText}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT → IMAGE */}
              <div className="col-12 col-md-6">
                <div className={styles.whyChooseImageWrapper}>
                  <img
                    src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Why Choose Us"
                    className={styles.whyChooseImage}
                  />

                  <div className={styles.statsOverlay}>
                    <div className={styles.statItem}>
                      <h3>500+</h3>
                      <p>Happy Students</p>
                    </div>
                    <div className={styles.statItem}>
                      <h3>10+</h3>
                      <p>Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.retreatButtons}>
              <Link to="/5-days-yoga-retreat" className={styles.retreatButton}>
                <span>5 Day Yoga Retreat</span>
                <span className={styles.buttonArrow}>→</span>
              </Link>
              <Link to="/20-days-yoga-retreat" className={styles.retreatButton}>
                <span>20 Day Yoga Retreat</span>
                <span className={styles.buttonArrow}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaPattern}></div>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>
                🕉️ Yoga Alliance® Certified
              </span>
              <h2 className={styles.ctaTitle}>Ready to Transform Your Life?</h2>
              <p className={styles.ctaDescription}>
                Embark on your yogic journey with India's most trusted yoga
                teacher training school in Rishikesh
              </p>
              <button
                className={styles.ctaButton}
                onClick={() => navigate('/BookingForm')}
              >
                <span>Book Your Retreat Now</span>
                <svg
                  className={styles.ctaButtonIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <p className={styles.ctaNote}>
                🎁 Limited slots available - Book now to secure your spot!
              </p>
            </div>
          </div>
        </section>
        <BooksSection />
        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>FAQ</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our retreat
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openFaq === index ? styles.faqItemOpen : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <span className={styles.faqNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.faqQuestionText}>{faq.question}</span>
                  <svg
                    className={styles.faqIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Yoga10DaysRetreat;
