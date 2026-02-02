import React, { useState } from 'react';
import styles from '../../assets/styles/retreatlinks/Yoga20DaysRetreat.module.css';
import { Link } from 'react-router-dom';

const Yoga20DaysRetreat = () => {
  const [selectedYoga, setSelectedYoga] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const activities = [
    'Daily Yoga Classes',
    'Pranayama Sessions',
    'Meditation Practice',
    'Mudra & Mantra Chanting',
    'Ganga Aarti Visit',
    'Ancient Peeth Visits',
    'Waterfall Trekking',
    'Ganga River Visits',
    'Evening Satsang',
    'Night Meditation / Yog Nidra',
    'Temple Visits',
    'Weekend Excursions',
    'Three Vegetarian Meals Daily',
    'Herbal Tea',
    'Ayurvedic Massage (on demand)',
    'Bungee Jumping',
    'River Rafting',
    'Trekking Adventures',
    'Rishikesh Bazaar Visit',
    'Ancient Cave Exploration',
  ];

  const dailySchedule = [
    {
      time: 'Morning',
      activities: ['Morning Yoga Class', 'Pranayama Session', 'Breakfast'],
    },
    {
      time: 'Daytime',
      activities: [
        'Visit to Ancient Peeth',
        'Visit to The Gangaji',
        'Waterfall Visit',
        '(Lunch - personal expense)',
      ],
    },
    {
      time: 'Evening',
      activities: [
        'Evening Ganga Aarti at different Bank',
        'Night Meditation / Yog Nidra Session',
        'Dinner',
        'Stay at King Size Bed',
      ],
    },
  ];

  const yogaStyles = [
    {
      icon: '🧘',
      title: 'Hatha Yoga',
      description:
        'Traditional Hatha Yoga for physical strength and flexibility',
      fullDescription:
        'Dive deep into the traditional practice of Hatha Yoga. Our 20-day retreat focuses on asanas (postures), pranayama (breathing techniques), and meditation to bring complete harmony between body and mind. Experience transformative practices under the guidance of our master teachers.',
      image:
        'https://images.pexels.com/photos/3822945/pexels-photo-3822945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🕉️',
      title: 'Pranayama',
      description: 'Breathing techniques for energy and vitality',
      fullDescription:
        'Learn ancient pranayama techniques to control and enhance your life force energy. These breathing exercises help in detoxifying the body, calming the mind, and increasing overall vitality. Perfect for reducing stress and improving lung capacity.',
      image:
        'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🧘‍♀️',
      title: 'Meditation',
      description: 'Deep meditation for mental clarity and peace',
      fullDescription:
        'Experience profound meditation sessions that help you connect with your inner self. Our guided meditation practices include techniques for stress reduction, mindfulness, and spiritual growth. Perfect for achieving mental clarity and inner peace.',
      image:
        'https://images.pexels.com/photos/3822632/pexels-photo-3822632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🙏',
      title: 'Mudra & Mantra',
      description: 'Sacred gestures and chanting for spiritual growth',
      fullDescription:
        'Learn the science of Mudras (sacred hand gestures) and Mantra chanting. These ancient practices help in channeling energy, improving concentration, and connecting with higher consciousness. Experience the vibrational healing of sacred sounds.',
      image:
        'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: '🏔️',
      title: 'Spiritual Visits',
      description: 'Pilgrimage to ancient spiritual sites',
      fullDescription:
        'Visit ancient Peeths, temples, and sacred sites around Rishikesh. Experience the spiritual energy of these holy places and participate in traditional rituals. This includes evening Ganga Aarti at different banks of the holy river.',
      image:
        'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const teachers = [
    {
      name: 'HathaYogi SatyaPrakasha',
      role: 'Founder / Master Teacher',
      experience: '16 years teaching experience',
      certification: 'Yoga Alliance RYS*600hrs',
      expertise: 'Vedanta, Philosophy',
    },
    {
      name: 'Vinay Kaushik',
      role: 'Senior Yoga Teacher',
      experience: '15+ years teaching experience',
      certification: 'Yoga Alliance RYS*600hrs',
      expertise: 'Hatha Yoga, Ashtanga',
    },
    {
      name: 'Sushant Yogi',
      role: 'Former Head of Yoga at Ananda',
      experience: '15+ years teaching experience',
      certification: 'Yoga Alliance RYS*500hrs',
      expertise: 'Meditation, Yoga Therapy',
    },
    {
      name: 'Dilwar Rawat',
      role: 'Yoga Master',
      experience: '10+ years teaching experience',
      certification: 'Yoga Alliance RYS*700hrs',
      expertise: 'Advanced Asanas, Pranayama',
    },
  ];

  const foodOptions = [
    'Vegetarian Sattvic Diet',
    'Vegan Options Available',
    'Gluten-free Meals',
    'No Garlic & Onions',
    'Fresh Organic Ingredients',
    'Herbal Teas',
    'Ayurvedic Drinks',
    'Special Dietary Requirements on Request',
  ];

  const accommodationFeatures = [
    'Private Rooms Available',
    'Shared Room Options',
    'King Size Beds',
    'Separate Balcony with Mountain View',
    'Air Conditioner (additional cost)',
    'Room Heater (additional cost)',
    'Attached Bathrooms',
    'Hot & Cold Water',
    'Clean Bedding Provided',
    'Wi-Fi Available',
  ];

  const whyChooseReasons = [
    {
      icon: '⏳',
      title: 'Extended Duration',
      description: '20 days for deep transformation and lasting change',
    },
    {
      icon: '🎯',
      title: 'Comprehensive Program',
      description:
        'Covers all aspects of yoga: Asana, Pranayama, Meditation, Mudra, Mantra',
    },
    {
      icon: '🏔️',
      title: 'Sacred Location',
      description:
        'Situated at the Gate of Himalayas where yogis have meditated for centuries',
    },
    {
      icon: '🍃',
      title: 'Sattvic Lifestyle',
      description:
        'Follow traditional yogic diet and lifestyle for complete detox',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Teachers',
      description: 'Learn from experienced Yoga Alliance certified instructors',
    },
    {
      icon: '🔄',
      title: 'Holistic Approach',
      description:
        'Balance of physical practice, spiritual growth, and adventure',
    },
    {
      icon: '🏠',
      title: 'Comfortable Stay',
      description:
        'Live a life of minimalism with comfortable amenities surrounded by nature',
    },
  ];

  const pricingPackages = [
    {
      type: 'Private Room',
      description: 'Perfect for privacy & personal space',
      priceINR: '₹85,000',
      priceUSD: '($985)',
      perDayINR: '₹9,000 per day',
      features: [
        'King Size Bed',
        'Private Balcony',
        'Personal Space',
        'Peaceful Environment',
      ],
    },
    {
      type: 'Shared Room',
      description: 'Connect with fellow spiritual seekers',
      priceINR: '₹64,000',
      priceUSD: '($742)',
      perDayINR: '₹7,000 per day',
      features: [
        'Twin Sharing',
        'Community Living',
        'Shared Experiences',
        'Cost Effective',
      ],
    },
  ];

  const faqs = [
    {
      question:
        'What makes the 20-day retreat different from shorter retreats?',
      answer:
        "The 20-day retreat allows for deep, transformative changes. You have time to establish a strong daily practice, detoxify your body completely, and experience profound spiritual growth. It's perfect for those seeking major life changes or deeper yoga understanding.",
    },
    {
      question: 'What is included in the retreat package?',
      answer:
        'Package includes accommodation (private/shared), daily yoga classes, pranayama sessions, meditation, mudra & mantra chanting, three vegetarian meals daily, herbal tea, all spiritual visits, weekend excursions, adventure activities, and evening satsang.',
    },
    {
      question: 'What is the check-in and check-out process?',
      answer:
        'Check-in is any Thursday night (must report by Friday morning/afternoon). Check-out date and time are decided based on your Friday reporting date. The retreat is designed for 20 full days of immersive experience.',
    },
    {
      question: 'What is a Sattvic diet and why is it followed?',
      answer:
        'A Sattvic diet is a yogic diet without garlic and onions, focused on purity and lightness. It helps in meditation, keeps emotions balanced, and supports spiritual practices. We also offer classes on Sattvic food preparation.',
    },
    {
      question: 'Are adventure activities included?',
      answer:
        'Yes! The retreat includes bungee jumping, river rafting, waterfall trekking, and other weekend adventures. These activities are designed to complement your spiritual journey with physical excitement.',
    },
    {
      question: 'What should I bring for the retreat?',
      answer:
        'Bring comfortable yoga clothes, meditation shawl, personal toiletries, water bottle, notebook, and an open mind. All yoga mats and props are provided. Detailed packing list will be sent after booking.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Page Banner */}
      <section className={styles.pageBanner}>
       
      </section>
       

      {/* Hero Section */}
      <section className={styles.heroSection}>
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
                20
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
                🕉️
              </text>
            </svg>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>
              <span className={styles.tagIcon}>🏔️</span>
              <span>Himalayan Foothills • Banks of Ganga</span>
            </div>

            <h1 className={styles.heroTitle}>
              20 Days Transformative
              <span className={styles.heroHighlight}> Yoga Retreat</span>
            </h1>
             <p className={styles.bannerSubtitle}>
              Deep transformation through extended yogic practices in the
              Himalayas
            </p>
            <Link to="/contact" className={styles.bannerButton}>
              Enquire Now →
            </Link>

            <p className={styles.heroDescription}>
              Experience complete rejuvenation in 20 days at{' '}
              <Link to="#" className={styles.heroLink}>
                Hatha Yogashram
              </Link>{' '}
              in Rishikesh, India. Dive deep into Hatha Yoga, Pranayama,
              Meditation, Mudra, and Mantra Chanting for a holistic wellness
              journey that creates lasting transformation.
            </p>

            <div className={styles.heroFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>20 Days Immersive Experience</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>Ancient Yogic Practices</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span>Spiritual & Adventure Activities</span>
              </div>
            </div>

            {/* Daily Schedule */}
            <div className={styles.scheduleBox}>
              <h3 className={styles.scheduleTitle}>Daily Schedule</h3>
              <div className={styles.scheduleGrid}>
                {dailySchedule.map((schedule, index) => (
                  <div key={index} className={styles.scheduleCard}>
                    <div className={styles.scheduleTime}>
                      <span className={styles.timeIcon}>
                        {index === 0 ? '🌅' : index === 1 ? '☀️' : '🌙'}
                      </span>
                      <h4>{schedule.time}</h4>
                    </div>
                    <ul className={styles.scheduleActivities}>
                      {schedule.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className={styles.pricingContainer}>
              <div className={styles.pricingHeader}>
                <h3>Choose Your Package</h3>
                <div className={styles.durationBadge}>20 Days Program</div>
              </div>

              <div className={styles.pricingGrid}>
                {pricingPackages.map((pkg, index) => (
                  <div key={index} className={styles.pricingCard}>
                    <div className={styles.packageHeader}>
                      <h4>{pkg.type}</h4>
                      <p>{pkg.description}</p>
                    </div>

                    <div className={styles.packagePrice}>
                      <div className={styles.mainPrice}>
                        <span className={styles.priceINR}>{pkg.priceINR}</span>
                        <span className={styles.priceUSD}>{pkg.priceUSD}</span>
                      </div>
                      <div className={styles.perDayPrice}>{pkg.perDayINR}</div>
                    </div>

                    <ul className={styles.packageFeatures}>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className={styles.featureCheck}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={styles.packageButton}>
                      Book {pkg.type}
                      <span className={styles.buttonArrow}>→</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.bookButton}>
              <span>Reserve Your Spot Now</span>
              <span className={styles.buttonArrow}>→</span>
            </button>

            <div className={styles.trustSignals}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>👥</span>
                <span>1000+ Transformations</span>
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
                <span>✨ Deep Transformation</span>
              </div>
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="20 Days Yoga Retreat in Rishikesh"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayIcon}>🧘‍♂️</div>
                  <p>20 Days • Life Changing Experience</p>
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
            <span className={styles.sectionBadge}>Complete Package</span>
            <h2 className={styles.sectionTitle}>What You Get in 20 Days</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive journey through yoga, spirituality, and adventure
            </p>
          </div>

          <div className={styles.whatYouGetGrid}>
            <div className={styles.activitiesColumn}>
              <div className={styles.activitiesHeader}>
                <h3 className={styles.activitiesTitle}>
                  <span className={styles.titleIcon}>✨</span>
                  Included Activities & Benefits
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
                  alt="20 Days Retreat Activities"
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
                        Based on your Friday reporting date (20 days after
                        check-in)
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
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.mustKnowTextWrapper}>
                      <h4>Location</h4>
                      <p className={styles.mustKnowText}>
                        Hatha Yogashram, Rishikesh - Gate of Himalayas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yoga Practices Section */}
        <section className={styles.yogaStyleSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Yogic Practices</span>
            <h2 className={styles.sectionTitle}>Yoga Styles & Practices</h2>
            <p className={styles.yogaSubtitle}>
              Hatha Yoga • Pranayama • Meditation • Mudra • Mantra Chanting
            </p>
          </div>

          <div className={styles.yogaStyleGrid}>
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

        {/* Teachers Section */}
        <section className={styles.teachersSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Meet Our Guides</span>
            <h2 className={styles.sectionTitle}>Our Core Teachers</h2>
            <p className={styles.sectionSubtitle}>
              Expert instructors dedicated to your transformation
            </p>
          </div>

          <div className={styles.teachersGrid}>
            {teachers.map((teacher, index) => (
              <div key={index} className={styles.teacherCard}>
                <div className={styles.teacherImage}>
                  <div className={styles.teacherIcon}>
                    {index === 0
                      ? '🧘'
                      : index === 1
                        ? '🙏'
                        : index === 2
                          ? '🕉️'
                          : '☀️'}
                  </div>
                </div>
                <div className={styles.teacherInfo}>
                  <h3 className={styles.teacherName}>{teacher.name}</h3>
                  <p className={styles.teacherRole}>{teacher.role}</p>
                  <div className={styles.teacherDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>⏳</span>
                      <span>{teacher.experience}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>📜</span>
                      <span>{teacher.certification}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>🎯</span>
                      <span>{teacher.expertise}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Food & Accommodation Section */}
        <section className={styles.foodAccommodationSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Living Experience</span>
            <h2 className={styles.sectionTitle}>Food & Accommodation</h2>
            <p className={styles.sectionSubtitle}>
              Sattvic living in the lap of Himalayas
            </p>
          </div>

          <div className={styles.foodAccommodationGrid}>
            {/* Food Column */}
            <div className={styles.foodColumn}>
              <div className={styles.foodHeader}>
                <h3 className={styles.foodTitle}>
                  <span className={styles.foodIcon}>🍃</span>
                  Sattvic Diet
                </h3>
                <p className={styles.foodDescription}>
                  A Sattvic diet practiced for years by yogis, prepared without
                  garlic and onions to keep emotions balanced.
                </p>
              </div>

              <div className={styles.foodList}>
                <h4>What's Included:</h4>
                <div className={styles.foodItems}>
                  {foodOptions.map((item, index) => (
                    <div key={index} className={styles.foodItem}>
                      <span className={styles.foodCheck}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accommodation Column */}
            <div className={styles.accommodationColumn}>
              <div className={styles.accommodationHeader}>
                <h3 className={styles.accommodationTitle}>
                  <span className={styles.accommodationIcon}>🏠</span>
                  Comfortable Stay
                </h3>
                <p className={styles.accommodationDescription}>
                  Live a life of minimalism with comfortable amenities
                  surrounded by nature at the Gate of Himalayas.
                </p>
              </div>

              <div className={styles.accommodationList}>
                <h4>Accommodation Features:</h4>
                <div className={styles.accommodationItems}>
                  {accommodationFeatures.map((feature, index) => (
                    <div key={index} className={styles.accommodationItem}>
                      <span className={styles.accommodationCheck}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.livingImageWrapper}>
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sattvic Food and Accommodation"
              className={styles.livingImage}
            />
            <div className={styles.livingOverlay}>
              <div className={styles.overlayText}>
                <h3>Atam Sukha: Wellness Retreats</h3>
                <p>
                  Ideal for individuals and couples to experience Indian
                  wellness science Ayurveda through rare massages and treatments
                  using freshly picked herbs from Himalayan foothills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>
                Why <span className={styles.highlightText}>20 Days</span> at
                Hatha Yogashram?
              </h2>
              <p className={styles.sectionSubtitle}>
                Your journey to complete transformation
              </p>
            </div>

            <div className="row align-items-start g-5">
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

              <div className="col-12 col-md-6">
                <div className={styles.whyChooseImageWrapper}>
                  <img
                    src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Why Choose 20 Days Retreat"
                    className={styles.whyChooseImage}
                  />
                  <div className={styles.statsOverlay}>
                    <div className={styles.statItem}>
                      <h3>20</h3>
                      <p>Days of Transformation</p>
                    </div>
                    <div className={styles.statItem}>
                      <h3>1000+</h3>
                      <p>Lives Changed</p>
                    </div>
                    <div className={styles.statItem}>
                      <h3>16+</h3>
                      <p>Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.retreatButtons}>
              <Link to="/10-days-retreat" className={styles.retreatButton}>
                <span>10 Day Yoga Retreat</span>
                <span className={styles.buttonArrow}>→</span>
              </Link>
              <Link to="/contact" className={styles.retreatButton}>
                <span>Custom Retreat</span>
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
                🕉️ Mother Ganga • Himalayan Foothills
              </span>
              <h2 className={styles.ctaTitle}>
                Ready for Life Transformation?
              </h2>
              <p className={styles.ctaDescription}>
                Embark on a 20-day journey that will change your body, mind, and
                soul forever. Experience the Indian science of wellness Ayurveda
                in its purest form.
              </p>
              <button className={styles.ctaButton}>
                <span>Book Your 20-Day Retreat</span>
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
                🎁 Limited to 20 participants per batch • Book early for best
                dates!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>FAQ</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything about our 20-day transformative retreat
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

export default Yoga20DaysRetreat;
