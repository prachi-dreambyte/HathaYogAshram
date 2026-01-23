import React, { useState } from 'react';
import styles from '../../assets/styles/retreatlinks/YogaRetreatRishikesh.module.css';

const YogaRetreatRishikesh = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  const [showMoreTestimonials, setShowMoreTestimonials] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      rating: 5,
      text: 'Life-changing experience! The teachers are incredibly knowledgeable and caring. I came as a beginner and left with a deep understanding of yoga.',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Chen',
      country: 'Australia',
      rating: 5,
      text: 'The perfect balance of spiritual growth and physical practice. The food was amazing - healthy and delicious!',
      date: '1 month ago',
    },
    {
      name: 'Elena Rossi',
      country: 'Italy',
      rating: 5,
      text: 'The location is magical! Waking up to the sound of the Ganga and practicing yoga in such a serene environment was unforgettable.',
      date: '3 weeks ago',
    },
    {
      name: 'David Kim',
      country: 'South Korea',
      rating: 5,
      text: 'Professional, authentic, and transformative. The Ayurvedic treatments were exactly what I needed for my stress relief.',
      date: '2 months ago',
    },
    {
      name: 'Sophie Martin',
      country: 'France',
      rating: 5,
      text: 'Best decision I ever made! The schedule was perfectly balanced with practice, rest, and spiritual activities.',
      date: '1 week ago',
    },
    {
      name: 'Raj Patel',
      country: 'India',
      rating: 5,
      text: 'As an Indian, I can say this is authentic yoga taught with pure traditional knowledge. Highly recommended!',
      date: '3 months ago',
    },
  ];

  const faqs = [
    {
      question: 'Do I need to be experienced in yoga to join this retreat?',
      answer:
        'Not at all! Our retreat is open to all levels, including complete beginners. Our teachers provide personalized guidance based on your level and needs.',
    },
    {
      question: 'Is airport pickup included?',
      answer:
        'Yes, complimentary pickup from Dehradun Jolly Grant Airport (DED) is included. Drop-off can also be arranged at an additional charge.',
    },
    {
      question: 'What should I bring for the retreat?',
      answer:
        'Comfortable yoga clothes, a refillable water bottle, personal toiletries, and an open heart. Yoga mats are available on-site but feel free to bring your own.',
    },
    {
      question: 'Is this retreat suitable for solo travelers?',
      answer:
        "Absolutely! Many of our guests travel alone and leave with lifelong friends. You'll feel at home in our safe, inclusive, and supportive environment.",
    },
    {
      question: 'Are there any sightseeing or excursions included?',
      answer:
        'Yes! We offer Himalayan sunrise hikes, visits to local temples, Ganga Aarti at Parmarth Niketan, and nature walks—all included in the program.',
    },
    {
      question: 'Can I join the retreat for fewer or more days?',
      answer:
        "Yes, while our standard retreat runs for 7 days, we offer flexible options (minimum 3 days). Let us know your travel dates, and we'll guide you accordingly.",
    },
  ];

  const scheduleData = [
    {
      day: 'Day 1',
      title: 'Arrival & Intention Setting',
      activities: [
        '10:00 – 14:00: Arrival and check-in',
        '16:00 – 17:00: Opening Ceremony',
        '17:30 – 18:30: Gentle Hatha Yoga',
        '19:00 – 20:00: Dinner',
      ],
    },
    {
      day: 'Day 2',
      title: 'Detoxification Begins',
      activities: [
        '06:30 – 07:30: Asana',
        '07:45 – 08:45: Pranayama',
        '09:00 – 10:00: Breakfast',
        '10:30 – 12:30: Ayurvedic Therapy',
        '13:00 – 14:00: Lunch',
        '17:30 – 18:30: Evening Meditation',
        '19:00: Dinner',
      ],
    },
    {
      day: 'Day 3',
      title: 'Mind-Body Balance',
      activities: [
        '06:30 – 07:30: Yin Yoga',
        '07:45 – 08:45: Pranayama',
        '09:00 – 10:00: Breakfast',
        '10:30 – 12:30: Sound Bath',
        '13:00 – 14:00: Lunch',
        '17:30 – 18:30: Creative Session',
        '19:00: Dinner',
      ],
    },
    {
      day: 'Day 4',
      title: 'Emotional Healing & Stillness',
      activities: [
        '06:30 – 07:30: Slow Hatha Yoga',
        '07:45 – 08:45: Pranayama',
        '09:00 – 10:00: Breakfast',
        '10:30 – 12:30: Excursions',
        '13:00 – 14:00: Lunch',
        '17:30 – 18:30: Loving-Kindness Meditation',
        '19:00: Dinner',
      ],
    },
    {
      day: 'Day 5',
      title: 'Rejuvenation & Empowerment',
      activities: [
        '06:30 – 07:30: Dynamic Yoga Flow',
        '07:45 – 08:45: Pranayama',
        '09:00 – 10:00: Breakfast',
        '10:30 – 12:30: Excursions',
        '13:00 – 14:00: Lunch',
        '17:30 – 18:30: Kirtan',
        '19:00: Dinner',
      ],
    },
  ];

  const highlights = [
    {
      icon: '🧘',
      text: 'Daily Asana Classes to strengthen and balance the body',
    },
    { icon: '🕉️', text: 'Guided Meditation & Pranayama to calm the mind' },
    {
      icon: '🔥',
      text: 'Fire Ritual (Havan) – Purify intentions and transformation',
    },
    { icon: '🎨', text: 'Mandala Meditation – Connect with creativity' },
    { icon: '🎵', text: 'Sound Healing Sessions & Kirtan Evenings' },
    { icon: '🥗', text: 'Sattvic Meals with gluten-free & dairy-free options' },
    { icon: '🌄', text: 'Himalayan Sunrise Trek or Ganga Aarti Ceremony' },
    { icon: '📝', text: 'Self-Inquiry Circles & Journaling Practices' },
    { icon: '🏨', text: 'Comfortable Private or Twin-Shared Accommodations' },
    { icon: '⚕️', text: 'Ayurvedic Doctor Consultation & Therapies' },
    { icon: '📚', text: 'Ayurvedic Lifestyle Workshops' },
    { icon: '🍵', text: 'Detox Juices & Herbal Teas' },
    { icon: '👨‍🍳', text: 'Ayurvedic Cooking Classes' },
    { icon: '✨', text: 'Private Reiki Healing Sessions' },
    { icon: '🌀', text: 'Shatkarma (Yogic Cleansing) techniques' },
  ];

  const whyChoose = [
    {
      title: 'Authentic Yogic Experience',
      description:
        'Situated in the heart of Rishikesh near the holy Ganges and surrounded by Himalayan foothills, our retreat is rooted in traditional Hatha and Ashtanga yoga taught by Indian masters with decades of experience.',
      icon: '🏔️',
    },
    {
      title: 'Spiritual Ambience',
      description:
        "From daily aarti ceremonies to the healing hum of mantras, you'll find spiritual energy in every corner—Rishikesh is not just a place; it's a vibration that heals.",
      icon: '🕉️',
    },
    {
      title: 'Personalized & Inclusive',
      description:
        'We welcome all levels—from complete beginners to seasoned practitioners. Our small-group format ensures personal attention, emotional support, and spiritual depth.',
      icon: '👥',
    },
    {
      title: 'Holistic Wellness',
      description:
        "Beyond asanas, you'll experience pranayama, meditation, sound healing, yogic philosophy, and Ayurvedic practices designed to balance your entire being.",
      icon: '💚',
    },
    {
      title: 'All-Inclusive & Hassle-Free',
      description:
        'Airport pick-up, cozy rooms, nourishing food, excursions, and heartfelt teaching—everything is included so you can just be.',
      icon: '🎯',
    },
  ];

  const accommodationFeatures = [
    'Homely Atmosphere for inner growth',
    'Modern Amenities with cozy beds',
    'Clean bathrooms with filtered water',
    'Free Wi-Fi throughout',
    'Air Conditioning available (additional cost)',
    'Peaceful and quiet environment',
    'Close to sacred Ganga River',
    'Near historic ashrams',
  ];

  const foodOptions = [
    'Three Sattvic Meals Daily',
    'Vegetarian & Lacto-vegetarian options',
    'Vegan alternatives available',
    'Gluten-free meals',
    'Fresh seasonal produce',
    'Herbal teas & juices',
    'Ayurvedic cooking classes',
    'Organic fruits from local farms',
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>🏆</span>
            <span>Yoga Alliance Certified • Since 2010</span>
          </div>
          <h1 className={styles.heroTitle}>
            Yoga Retreat in <span className={styles.highlight}>Rishikesh</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the Best Accommodation and Food at Our Yoga School in the
            Yoga Capital of the World
          </p>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Happy Yogis</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.9</div>
              <div className={styles.statLabel}>Rating</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfaction</div>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              <span>Book Your Spot Now</span>
              <svg className={styles.buttonArrow} viewBox="0 0 24 24">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              <svg className={styles.playIcon} viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
              <span>Watch Experience</span>
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className={styles.navMenu}>
        <div className={styles.navContainer}>
          {[
            'overview',
            'highlights',
            'schedule',
            'accommodation',
            'food',
            'testimonials',
            'faq',
          ].map((item) => (
            <button
              key={item}
              className={`${styles.navItem} ${activeSection === item ? styles.activeNav : ''}`}
              onClick={() => setActiveSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Overview Section */}
        <section
          className={`${styles.section} ${activeSection === 'overview' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Welcome to</span>
            <h2 className={styles.sectionTitle}>Rishikesh Yogkulam</h2>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <div className={styles.overviewImage}>
                <div className={styles.imageOverlay}>
                  <span>🌊 Ganga River View</span>
                </div>
              </div>
              <div className={styles.overviewText}>
                <p>
                  Step into serenity with our wellness yoga retreat in
                  Rishikesh, India—a life-changing journey into holistic
                  healing, self-care, and inner peace. Nestled in the heart of
                  the Himalayas by the sacred Ganga River, Rishikesh is the
                  global capital of yoga, offering the perfect setting to
                  reconnect with your body, mind, and soul.
                </p>
                <p>
                  Whether you're seeking to reduce stress, improve flexibility,
                  or simply take a break from the busy world, our retreat
                  combines daily yoga, meditation, pranayama, nature walks,
                  Ayurvedic meals, and mindful living practices.
                </p>
              </div>
            </div>

            <div className={styles.whyChooseCard}>
              <h3 className={styles.whyChooseTitle}>Why Choose Our School?</h3>
              <div className={styles.whyChooseGrid}>
                {whyChoose.map((item, index) => (
                  <div key={index} className={styles.whyChooseItem}>
                    <div className={styles.whyChooseIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section
          className={`${styles.section} ${activeSection === 'highlights' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Experience</span>
            <h2 className={styles.sectionTitle}>Highlights of Yoga Retreat</h2>
          </div>

          <div className={styles.highlightsGrid}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{highlight.icon}</div>
                <p className={styles.highlightText}>{highlight.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section
          className={`${styles.section} ${activeSection === 'schedule' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Daily Program</span>
            <h2 className={styles.sectionTitle}>Retreat Schedule</h2>
            <p className={styles.sectionSubtitle}>
              A perfect blend of yoga, meditation, wellness activities, and
              spiritual experiences
            </p>
          </div>

          <div className={styles.scheduleContainer}>
            {scheduleData.map((day, index) => (
              <div key={index} className={styles.scheduleDay}>
                <div className={styles.dayHeader}>
                  <div className={styles.dayNumber}>{day.day}</div>
                  <h3 className={styles.dayTitle}>{day.title}</h3>
                </div>
                <div className={styles.activitiesList}>
                  {day.activities.map((activity, idx) => (
                    <div key={idx} className={styles.activityItem}>
                      <span className={styles.activityTime}>
                        {activity.split(':')[0] + ':' + activity.split(':')[1]}
                      </span>
                      <span className={styles.activityText}>
                        {activity.split(':').slice(2).join(':').trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.scheduleNote}>
            <div className={styles.noteIcon}>📝</div>
            <div>
              <h4>Important Note:</h4>
              <p>
                The retreat itinerary is tentative and designed to provide a
                general overview of the daily schedule. Exact timings may vary
                depending on group energy, weather conditions, or other
                considerations. We kindly ask for your flexibility and openness.
              </p>
            </div>
          </div>
        </section>

        {/* Accommodation Section */}
        <section
          className={`${styles.section} ${activeSection === 'accommodation' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Stay Comfortably</span>
            <h2 className={styles.sectionTitle}>Accommodation</h2>
          </div>

          <div className={styles.accommodationGrid}>
            <div className={styles.accommodationImage}>
              <div className={styles.imageBadge}>
                <span>🏔️ Mountain View Rooms</span>
              </div>
            </div>

            <div className={styles.accommodationDetails}>
              <h3>Your Home Away From Home</h3>
              <p>
                At Rishikesh Yogkulam, we understand how important a peaceful
                and comfortable environment is for your yoga teacher training
                journey. That's why we go above and beyond to provide
                thoughtfully designed accommodation that nurtures rest, focus,
                and balance.
              </p>

              <div className={styles.featuresGrid}>
                {accommodationFeatures.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 20 20">
                      <path
                        d="M16.67 5.38a1 1 0 00-1.41 0l-7.45 7.46-3.13-3.14a1 1 0 00-1.42 1.42l3.84 3.84a1 1 0 001.42 0l8.15-8.15a1 1 0 000-1.42z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.roomOptions}>
                <div className={styles.roomOption}>
                  <h4>Private Room</h4>
                  <p>Perfect for personal space and privacy</p>
                  <div className={styles.roomPrice}>$899</div>
                </div>
                <div className={styles.roomOption}>
                  <h4>Twin Shared</h4>
                  <p>Great for making new connections</p>
                  <div className={styles.roomPrice}>$699</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Section */}
        <section
          className={`${styles.section} ${activeSection === 'food' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Nourish Your Body</span>
            <h2 className={styles.sectionTitle}>Food & Dining</h2>
          </div>

          <div className={styles.foodGrid}>
            <div className={styles.foodContent}>
              <h3>Sattvic Meals for Holistic Wellness</h3>
              <p>
                Ditch the takeout and fuel your inner yogi! At Rishikesh
                Yogkulam®, we serve pure sattvic meals prepared with love by our
                dedicated kitchen team. We follow a vegetarian or
                lacto-vegetarian diet, aligned with the yogic principle of
                living in balance and harmony.
              </p>

              <div className={styles.foodFeatures}>
                {foodOptions.map((option, index) => (
                  <div key={index} className={styles.foodFeature}>
                    <span className={styles.foodIcon}>🥗</span>
                    <span>{option}</span>
                  </div>
                ))}
              </div>

              <div className={styles.chefMessage}>
                <div className={styles.chefAvatar}>
                  <span>👨‍🍳</span>
                </div>
                <div className={styles.chefText}>
                  <h4>Message From Chef Sunil</h4>
                  <p>
                    "Be it vegan, gluten-free, or specific dietary requirements,
                    you are served what you are comfortable consuming. We use
                    organic fruits and vegetables freshly sourced from our
                    farms. When our students eat healthy and fresh, the energy
                    they absorb through food is helpful in their training."
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.foodGallery}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryBadge}>Fresh Organic</div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryBadge}>Ayurvedic</div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryBadge}>Sattvic</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className={`${styles.section} ${activeSection === 'testimonials' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Reviews</span>
            <h2 className={styles.sectionTitle}>What Yogis Say</h2>
            <div className={styles.ratingBadge}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingText}>4.9/5 • 47 Reviews</span>
            </div>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials
              .slice(0, showMoreTestimonials ? testimonials.length : 3)
              .map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.avatar}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className={styles.testimonialName}>
                        {testimonial.name}
                      </h4>
                      <div className={styles.testimonialMeta}>
                        <span className={styles.country}>
                          {testimonial.country}
                        </span>
                        <span className={styles.date}>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.stars}>
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                </div>
              ))}
          </div>

          {!showMoreTestimonials && (
            <button
              className={styles.showMoreButton}
              onClick={() => setShowMoreTestimonials(true)}
            >
              Show More Reviews
            </button>
          )}
        </section>

        {/* FAQ Section */}
        <section
          className={`${styles.section} ${activeSection === 'faq' ? styles.activeSection : ''}`}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Help Center</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <span className={styles.questionNumber}>{index + 1}.</span>
                  <span className={styles.questionText}>{faq.question}</span>
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
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

        {/* Booking CTA */}
        <section className={styles.bookingSection}>
          <div className={styles.bookingCard}>
            <div className={styles.bookingContent}>
              <span className={styles.bookingBadge}>🚀 Limited Spots</span>
              <h2 className={styles.bookingTitle}>Ready for Transformation?</h2>
              <p className={styles.bookingText}>
                Join our next retreat and experience life-changing
                transformation in the yoga capital of the world.
              </p>

              <div className={styles.bookingSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div>
                    <h4>Click "Apply Now"</h4>
                    <p>Fill out the application form</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div>
                    <h4>Get Confirmation</h4>
                    <p>Receive acceptance email</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div>
                    <h4>Secure Your Spot</h4>
                    <p>Pay $200 deposit</p>
                  </div>
                </div>
              </div>

              <button className={styles.bookNowButton}>
                <span>Apply Now</span>
                <svg className={styles.bookArrow} viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.locationInfo}>
              <h3>Reach Us</h3>
              <div className={styles.locationDetails}>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>✈️</span>
                  <div>
                    <h4>Nearest Airport</h4>
                    <p>Dehradun (Jolly Grant Airport) - 35km</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>🚖</span>
                  <div>
                    <h4>Taxi Service</h4>
                    <p>Complimentary airport pickup included</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Jonk Village, near Ram Jhula, Rishikesh</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <a
                  href="mailto:rishikeshyogkulam@gmail.com"
                  className={styles.contactLink}
                >
                  ✉️ rishikeshyogkulam@gmail.com
                </a>
                <a
                  href="https://wa.me/919368154123"
                  className={styles.contactLink}
                >
                  📱 +91 9368154123
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YogaRetreatRishikesh;
