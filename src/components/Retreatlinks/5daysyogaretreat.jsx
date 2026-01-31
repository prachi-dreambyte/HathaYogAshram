import React, { useState } from 'react';
import styles from '../../assets/styles/retreatlinks/5daysyogaretreat.module.css';
import bannerimage from "../../assets/images/5DaysYogaRetreat.webp"

const YogaRetreat = () => {
  const features = [
    'Everyday Yoga Classes',
    'Everyday Mantra Recitation and Relaxation',
    'River Ganga Aarti Visit',
    'Rishikesh Bazaar Visit',
    'Daily three times vegetarian meals, herbal tea',
    'Ayurvedic Massage (on demand)',
    'Single/Sharing Accommodation',
  ];

  const benefits = [
    {
      icon: '🧘',
      title: 'Yoga Asanas',
      description:
        'Elevate your well-being with expert-led yoga asanas at yoga retreat in Rishikesh that enhance physical strength, mental clarity, and energy flow. Delve into postures that harmonize body and mind, fostering a rejuvenated sense of vitality and balance.',
      image:
        'https://images.pexels.com/photos/3822945/pexels-photo-3822945.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '🍎',
      title: 'Balanced Diet',
      description:
        'Nourish your body with wholesome vegetarian meals prepared with fresh, organic ingredients. Our sattvic diet supports your yoga practice and promotes inner balance.',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '🧘',
      title: 'Meditation',
      description:
        'Experience profound peace through guided meditation sessions. Learn ancient techniques to calm the mind, reduce stress, and connect with your inner self.',
      image:
        'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '🕉️',
      title: 'Ganga Arti Visit',
      description:
        'Witness the mesmerizing Ganga Aarti ceremony on the banks of the holy Ganges. Experience the spiritual energy and divine atmosphere of this ancient ritual.',
      image:
        'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: '🎯',
      title: 'Weekend Activities',
      description:
        'Explore the beautiful surroundings of Rishikesh with guided excursions, nature walks, and visits to nearby ashrams and spiritual sites.',
      image:
        'https://images.pexels.com/photos/3822632/pexels-photo-3822632.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const reasons = [
    {
      title: 'Efficiency:',
      description:
        'The condensed 5-day format fits busy schedules, delivering yoga and meditation essence.',
    },
    {
      title: 'Authenticity:',
      description:
        "Immerse in Rishikesh's yogic wisdom with experienced instructors.",
    },
    {
      title: 'Holistic Wellness:',
      description:
        'Explore Hatha Yoga, Pranayama, Meditation, Mudra, and Mantra Chanting for mind-body balance.',
    },
    {
      title: 'Culinary Delights:',
      description:
        'Indulge in nourishing meals that complement your wellness journey.',
    },
    {
      title: "Nature's Embrace:",
      description: "Renewal against Rishikesh's stunning backdrop.",
    },
    {
      title: 'Weekend Adventures:',
      description:
        'Enhance your experience with guided trips to local attractions.',
    },
    {
      title: 'Meaningful Bonds:',
      description: 'Form lasting friendships with like-minded participants.',
    },
  ];

 const faqs = [
  {
    question: '1. What can I expect from a 5-day yoga retreat in Rishikesh?',
    answer:
      'During a 5-day yoga retreat in Rishikesh at Hatha Yogashram, you can expect daily yoga asana classes, guided meditation sessions, pranayama practices, and nourishing sattvic vegetarian meals. The retreat also includes spiritual and cultural experiences such as Ganga Aarti, nature walks, and quiet reflection time, helping you relax, recharge, and reconnect with yourself.',
  },
  {
    question: '2. Is a 5-day yoga retreat enough to feel a transformation?',
    answer:
      'Yes, a 5-day yoga retreat can create a noticeable shift in your mental clarity, energy levels, and emotional balance. While deeper transformations take time, even a short retreat helps release stress, improve mindfulness, and offer a fresh perspective on your daily routine.',
  },
  {
    question: '3. What is the daily schedule like during the 5-day retreat?',
    answer:
      'The daily schedule typically begins with morning meditation and pranayama, followed by yoga asana practice. After breakfast, there may be philosophy sessions, workshops, or free time for rest and self-reflection. Evening activities often include gentle yoga, meditation, or cultural programs, creating a balanced and structured day.',
  },
  {
    question:
      '4. How do I prepare mentally and physically for a 5-day yoga retreat?',
    answer:
      'To prepare, try to maintain a light and balanced diet, stay hydrated, and gradually reduce caffeine or processed foods. Mentally, come with an open mind and a willingness to slow down. No advanced yoga experience is required—just a positive intention to learn and grow.',
  },
  {
    question:
      '5. Will I receive a certificate after completing the 5-day retreat?',
    answer:
      'Most 5-day yoga retreats focus on relaxation and personal well-being rather than formal certification. However, a participation certificate may be provided by Hatha Yogashram upon request. For certified courses, longer yoga teacher training programs are recommended.',
  },
  {
    question:
      '6. Is accommodation and food included in the 5-day yoga retreat package?',
    answer:
      'Yes, the 5-day yoga retreat package generally includes comfortable accommodation and three daily sattvic vegetarian meals. Herbal teas and purified drinking water are also provided, allowing you to focus fully on your practice and inner journey.',
  },
];


  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>

        {/* Background Yoga Elements */}
        <div className={styles.yogaElements}>
          <div className={styles.yogaPose1}>🧘</div>
          <div className={styles.yogaPose2}>🧘‍♀️</div>
          <div className={styles.yogaPose3}>🕉️</div>
          <div className={styles.lotusPattern}></div>
        </div>

        <img
          src={bannerimage}
          alt="Yoga Retreat"
          className={styles.heroImage}
        />
        
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.introGrid}>
            <div className={styles.introImageWrapper}>
              <div className={styles.imageFrame}></div>
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Yoga Practice"
                className={styles.introImage}
              />
            </div>
            <div className={styles.introTextContainer}>
              <p className={styles.introParagraph}>
                Life's demands may be endless, but your well-being deserves
                dedicated attention. Our thoughtfully crafted 5-Days Yoga
                Retreat in India, Hatha Yogashram is designed to offer you an
                immersive experience that packs a wealth of yogic wisdom and
                revitalization into a short span of time.
              </p>
              <p className={styles.introParagraph}>
                Discover a world of serenity, self-discovery, and rejuvenation
                amidst the enchanting surroundings of Rishikesh, often hailed as
                the global epicenter of yoga and spiritual enlightenment. If you
                are short on time but yearning to experience the profound
                benefits of yoga and meditation, our 5-Days Yoga and Meditation
                Retreat is tailor-made.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.pricingSection}>
          <div className={styles.pricingContainer}>
            <h2 className={styles.pricingTitle}>Package Details</h2>
            <div className={styles.pricingGrid}>
              <div className={styles.priceCard}>
                <div className={styles.priceCardIcon}>🏠</div>
                <h3 className={styles.roomType}>Private Room</h3>
                <div className={styles.priceWrapper}>
                  <span className={styles.currentPrice}>₹22500</span>
                  <span className={styles.oldPrice}>₹25000</span>
                </div>
              </div>
              <div className={styles.priceCard}>
                <div className={styles.priceCardIcon}>👥</div>
                <h3 className={styles.roomType}>Shared</h3>
                <div className={styles.priceWrapper}>
                  <span className={styles.currentPrice}>₹15500</span>
                  <span className={styles.oldPrice}>₹17000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className={styles.whatYouGetSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <svg
                className={styles.sectionIcon}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>What You Get</h2>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featuresList}>
              {features.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  <svg
                    className={styles.checkIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={styles.featureText}>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.mustKnowBox}>
              <h3 className={styles.mustKnowTitle}>Must Know:</h3>
              <div className={styles.mustKnowContent}>
                <div className={styles.mustKnowItem}>
                  <svg
                    className={styles.infoIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className={styles.mustKnowText}>
                    <strong>Check-In:</strong> Any Thursday Night (One Must
                    Report by Friday Morning/Afternoon)
                  </p>
                </div>
                <div className={styles.mustKnowItem}>
                  <svg
                    className={styles.infoIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className={styles.mustKnowText}>
                    <strong>Check-Out:</strong> The assigned check-out date and
                    time are decided based on the Friday Reporting Date and
                    Time)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yoga Style Section - INTERACTIVE */}
        <section className={styles.yogaStyleSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <svg
                className={styles.sectionIcon}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Yoga Style</h2>
            <p className={styles.yogaSubtitle}>
              Hatha Yoga, Pranayama, Meditation, Mudra, and Mantra Chanting
            </p>
          </div>

          <div className={styles.yogaGrid}>
            <div className={styles.yogaImageWrapper}>
              <div className={styles.imageFrame}></div>
              <img
                src={benefits[selectedBenefit].image}
                alt={benefits[selectedBenefit].title}
                className={styles.yogaImage}
                key={selectedBenefit}
              />
            </div>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <button
                  key={index}
                  className={`${styles.benefitCard} ${selectedBenefit === index ? styles.benefitCardActive : ''}`}
                  onClick={() => setSelectedBenefit(index)}
                >
                  <h3 className={styles.benefitTitle}>
                    {benefit.icon} {benefit.title}
                  </h3>
                  {selectedBenefit === index && benefit.description && (
                    <p className={styles.benefitText}>{benefit.description}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.accommodationBox}>
            <p className={styles.introParagraph}>
              Whether you are on a vacation or on an Online Yoga Classes,
              amenities make your life a little easier when you are away from
              home. To make sure that the students enjoy their stay,
              HathaYogashram Yoga Retreat Center provides them with neat and
              clean rooms. They basically provide two types of accommodation
              which are private and twin shared rooms and students, according to
              their preference, can choose their accommodation.
            </p>
            <p className={styles.accommodationText}>
              In the room, clean bedsheets, blankets, and pillows will be
              provided. Each room has an air-conditioner and an attached
              bathroom with cold and hot water facilities. This retreat campus
              also has Wi-Fi service available.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseSection}>
          <h2 className={styles.whyChooseTitle}>
            Why Choose Us{' '}
            <span className={styles.whyChooseHighlight}>
              for Yoga Retreat in Rishikesh*
            </span>
          </h2>

          <div className={styles.whyChooseGrid}>
            <div className={styles.reasonsList}>
              {reasons.map((reason, index) => (
                <div key={index} className={styles.reasonItem}>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonText}>{reason.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.whyChooseImageWrapper}>
              <div className={styles.imageFrame}></div>
              <img
                src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Yoga Pose"
                className={styles.whyChooseImage}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaPattern}></div>
            <h2 className={styles.ctaTitle}>
              Embark Your Yogic Journey with Yoga Alliance® Certified Yoga
              Teacher Training School in Rishikesh, India
            </h2>
            <button className={styles.ctaButton}>
              <span>Book Now</span>
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.question}</span>
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
                </summary>
                {faq.answer && <p className={styles.faqAnswer}>{faq.answer}</p>}
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default YogaRetreat;
