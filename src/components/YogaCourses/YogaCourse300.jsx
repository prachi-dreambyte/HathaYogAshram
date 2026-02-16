import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/YogaCourse/300Hours.module.css';
import Refund from 'components/Refund/refund';
import Hours24 from 'components/Hours24/Hours24';
import TeacherHours from 'components/TeacherHours/TeacherHours';
import heroVideo from '../../assets/images/300hrs.webp';
import BooksSection from 'components/MyBooks/Bookssection';
import Form300 from './Form300';

export default function YogaCourse300() {
  const navigate = useNavigate();

  const whyRishikesh = [
    {
      icon: '🏔️',
      title: 'Yoga Capital of World',
      description:
        'Rishikesh provides the authentic energy and spiritual depth essential for advanced study.',
    },
    {
      icon: '🕉️',
      title: 'Sacred Ganges River',
      description:
        'Advanced practice alongside the holy Ganges deepens spiritual connection and transformation.',
    },
    {
      icon: '🧘‍♂️',
      title: 'Traditional Lineage',
      description:
        'Learn from masters preserving ancient Himalayan yoga traditions for advanced practitioners.',
    },
    {
      icon: '🌿',
      title: 'Natural Sanctuary',
      description:
        'Serene Himalayan environment perfect for deep practice, meditation, and self-discovery.',
    },
  ];

  const curriculumBreakdown = [
    { subject: 'Advanced Asana & Techniques', hours: 80, color: '#C41E3A' },
    { subject: 'Teaching Methodology', hours: 50, color: '#8B1538' },
    { subject: 'Yoga Philosophy', hours: 50, color: '#C41E3A' },
    { subject: 'Anatomy & Yoga Therapy', hours: 45, color: '#8B1538' },
    { subject: 'Pranayama & Energy Work', hours: 35, color: '#C41E3A' },
    { subject: 'Meditation & Mindfulness', hours: 30, color: '#8B1538' },
    { subject: 'Specialized Workshops', hours: 20, color: '#C41E3A' },
  ];

  const detailedCurriculum = [
    {
      category: 'Advanced Asana & Techniques (80 Hours)',
      items: [
        'Ashtanga Vinyasa Intermediate Series',
        'Advanced Hatha & Therapeutic Alignment',
        'Mastery of Inversions & Arm Balances',
        'Deep Backbends & Peak Pose Sequencing',
        'Yin & Restorative Yoga for Deep Release',
        'Advanced Adjustments & Prop Usage',
      ],
    },
    {
      category: 'Teaching Methodology (50 Hours)',
      items: [
        'Intelligent Sequencing for Advanced Classes',
        'Art of Verbal Cueing & Demonstration',
        'Advanced Hands-On Adjustments',
        'Teaching Meditation & Pranayama',
        'Holding Transformational Space',
        'Therapeutic Sequencing Principles',
      ],
    },
    {
      category: 'Yoga Philosophy (50 Hours)',
      items: [
        "Patanjali's Yoga Sutras: Vibhuti & Kaivalya Pada",
        'Bhagavad Gita: Path of Devotion & Discernment',
        'Hatha Yog Pradipika: Tantra & Energetics',
        'Advanced Chakra & Nadis System',
        'Teaching Ethics for Advanced Teachers',
        'Philosophy as Living Practice',
      ],
    },
    {
      category: 'Anatomy & Yoga Therapy (45 Hours)',
      items: [
        'Biomechanics of Complex Asanas',
        'Physiology of Pranayama & Nervous System',
        'Yoga Therapy for Common Ailments',
        'Injury Prevention & Management',
        'Assessing & Creating Therapeutic Sequences',
        'Advanced Energetic Anatomy',
      ],
    },
    {
      category: 'Pranayama & Energy Work (35 Hours)',
      items: [
        'Advanced Pranayama Techniques',
        'Bandhas & Mudras Mastery',
        'Nadishodhana & Kapalabhati',
        'Energy Channel Awakening',
        'Pranayama for Meditation',
        'Teaching Advanced Breathwork',
      ],
    },
    {
      category: 'Meditation & Specialization (30 Hours)',
      items: [
        'Advanced Himalayan Meditation',
        'Yoga Nidra & Deep Relaxation',
        'Mantra Chanting & Nada Yoga',
        'Ayurveda Fundamentals for Yogis',
        'Introduction to Prenatal Adjustments',
        'Meditation Teaching Mastery',
      ],
    },
  ];

  const dailySchedule = [
    { time: '5:30 AM', activity: 'Wake Up & Herbal Tea' },
    { time: '6:00 AM', activity: 'Advanced Pranayama, Meditation & Mantra' },
    { time: '7:30 AM', activity: 'Advanced Asana Practice (Ashtanga/Hatha)' },
    { time: '9:30 AM', activity: 'Nutritious Vegetarian Breakfast' },
    { time: '10:30 AM', activity: 'Philosophy / Anatomy & Physiology Lecture' },
    { time: '1:00 PM', activity: 'Sattvic Lunch & Rest' },
    {
      time: '3:00 PM',
      activity: 'Teaching Methodology / Yoga Therapy / Alignment Lab',
    },
    {
      time: '4:30 PM',
      activity: 'Advanced Workshop (Inversions, Backbends, Yin)',
    },
    { time: '6:30 PM', activity: 'Meditation / Yoga Nidra / Kirtan' },
    { time: '7:30 PM', activity: 'Light Dinner' },
    {
      time: '8:30 PM',
      activity: 'Self-Study / Integration / Satsang (Discourse)',
    },
  ];

  const roomOptions = [
    {
      type: 'Shared Room',
      price: '$1499',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w-600&h=400&fit=crop',
      features: [
        'Double occupancy',
        'Attached bathroom',
        'Garden view',
        'Daily housekeeping',
        'Wi-Fi access',
        'Study space',
      ],
    },
    {
      type: 'Private Room',
      price: '$1799',
      image:
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w-600&h=400&fit=crop',
      features: [
        'Single occupancy',
        'Private bathroom',
        'Mountain view',
        'Daily housekeeping',
        'Wi-Fi access',
        'Study desk',
        'Meditation corner',
      ],
    },
  ];

  const mealPlan = [
    {
      time: 'Breakfast',
      items: [
        'Fresh seasonal fruits',
        'Oatmeal or porridge',
        'Herbal teas',
        'Whole grain toast',
        'Yogurt',
        'Nuts & seeds',
      ],
    },
    {
      time: 'Lunch',
      items: [
        'Seasonal vegetables',
        'Dal (lentil soup)',
        'Brown rice/quinoa',
        'Chapati (whole wheat bread)',
        'Fresh salad',
        'Ayurvedic preparations',
      ],
    },
    {
      time: 'Dinner',
      items: [
        'Light vegetable soup',
        'Khichdi (rice & lentil dish)',
        'Steamed vegetables',
        'Herbal tea',
        'Weekly dessert',
        'Fermented foods',
      ],
    },
  ];

  const includedItems = [
    '28 nights accommodation (shared or private)',
    'Three nutritious vegetarian meals daily',
    'All advanced course materials and manuals',
    'Yoga mat and specialized props',
    'Weekend excursions to sacred sites',
    'Airport pickup from Dehradun',
    'Yoga Alliance RYT-300 certificate',
    'RYT-500 registration pathway',
    'Kirtan nights & cultural programs',
    'Traditional fire ceremony',
    'Ayurvedic consultation',
    'Lifetime alumni community access',
  ];

  const investmentOptions = [
    {
      type: 'Standard Enrollment',
      price: '1499',
      period: 'per person',
      features: [
        'Shared accommodation',
        'Full advanced course access',
        'All meals included',
        'Course materials',
        'RYT-300 certificate',
        'RYT-500 pathway',
      ],
      badge: 'Most Popular',
    },
    {
      type: 'Private Room Upgrade',
      price: '1799',
      period: 'per person',
      features: [
        'Private room',
        'Full advanced course access',
        'All meals included',
        'Course materials',
        'RYT-300 certificate',
        'RYT-500 pathway',
        'Extra therapy sessions',
      ],
      featured: true,
    },
    {
      type: 'Early Bird Special',
      price: '1299',
      period: 'per person',
      features: [
        'Shared accommodation',
        'Full advanced course access',
        'All meals included',
        'Course materials',
        'RYT-300 certificate',
        'RYT-500 pathway',
        'Free Ayurvedic massage & consultation',
      ],
      badge: 'Save $200',
    },
  ];

  const faqs = [
    {
      q: 'What are the prerequisites for this course?',
      a: 'A 200-hour Yoga Teacher Training Certificate from a Yoga Alliance Registered School (or equivalent) is required.',
    },
    {
      q: 'Will this course qualify me for RYT-500?',
      a: 'Yes, successful completion grants you RYT-300 certification. Combined with your RYT-200, you become eligible for RYT-500 registration.',
    },
    {
      q: 'What level of practice is required?',
      a: 'This is an intermediate to advanced course. Students should have a consistent personal practice and be comfortable with foundational asanas.',
    },
    {
      q: 'Is this course suitable for yoga therapy specialization?',
      a: 'Yes, the curriculum includes comprehensive yoga therapy components ideal for teachers wanting to specialize in therapeutic applications.',
    },
    {
      q: 'What is the difference between 200-hour and 300-hour training?',
      a: 'The 300-hour is an advanced training focusing on mastery, specialization, and deeper philosophical understanding, building upon 200-hour foundations.',
    },
    {
      q: 'Can I extend my stay for personal retreat?',
      a: 'Yes, we can help arrange extended accommodation before or after the course for personal practice integration.',
    },
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      country: 'Canada',
      text: 'The 300-hour training transformed me from a teacher to a guide. The depth of philosophy and advanced asana work was exactly what I needed to break through my plateau.',
    },
    {
      name: 'Sophie Laurent',
      country: 'France',
      text: 'This advanced training gave me the confidence to teach therapeutic yoga. The teachers are true masters, and the Rishikesh energy made all the difference.',
    },
    {
      name: 'Rajiv Mehta',
      country: 'UK',
      text: 'Completing the RYT-300 here was a career milestone. The curriculum is perfectly balanced between ancient wisdom and modern teaching applications.',
    },
  ];

  return (
    <div className={styles.yogaPage}>
      {/* Banner Image */}
      <div>
        <img src={heroVideo} alt="300 Hour Yoga Teacher Training" />
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>
              Deepen Your Practice & Master the Art of Teaching
            </p>
            <h1 className={styles.heroTitle}>
              300-Hour Advanced Yoga Teacher Training in Rishikesh, India
            </h1>
            <div className={styles.heroBadges}>
              <span className={styles.badgeItem}>
                📜 Yoga Alliance USA RYT-300
              </span>
              <span className={styles.badgeItem}>⏱️ 28 Days Intensive</span>
              <span className={styles.badgeItem}>📍 Rishikesh, Himalayas</span>
              <span className={styles.badgeItem}>🎓 RYT-500 Pathway</span>
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <button className={`${styles.ctaButton} ${styles.primary}`}>
                Apply Now for 2024
              </button>
              <button className={`${styles.ctaButton} ${styles.secondary}`}>
                Download Advanced Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 1. COURSE OVERVIEW - Most Important First */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Course Overview</h2>
            <p className={styles.sectionSubtitle}>
              Transformative advanced residential program for dedicated teachers
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <p className={styles.leadText}>
                The{' '}
                <strong>300-Hour Advanced Yoga Teacher Training Course</strong>{' '}
                is a comprehensive residential program designed for certified
                teachers and dedicated practitioners seeking mastery. This
                immersive 28-day experience in Rishikesh—the yoga capital of the
                world—bridges profound ancient wisdom with modern therapeutic
                applications, transforming you from a competent teacher to a
                confident guide.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📅</div>
                <h4>Duration</h4>
                <p>28 Days Intensive</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📊</div>
                <h4>Level</h4>
                <p>Intermediate to Advanced</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>🏆</div>
                <h4>Certification</h4>
                <p>Yoga Alliance RYT-300</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>🎯</div>
                <h4>Pathway</h4>
                <p>RYT-500 Eligibility</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className={styles.infoBox}>
                <h4>What You Will Gain:</h4>
                <ul className={styles.curriculumList}>
                  <li>
                    Globally recognized Yoga Alliance RYT-300 certification
                    (RYT-500 pathway)
                  </li>
                  <li>
                    Mastery of advanced asana, sequencing, and therapeutic
                    applications
                  </li>
                  <li>
                    Deep scholarly understanding of yoga philosophy as a living
                    practice
                  </li>
                  <li>
                    Skills to teach advanced classes, workshops, and therapeutic
                    sessions
                  </li>
                  <li>
                    Personal transformation and breakthrough in your own
                    practice
                  </li>
                  <li>
                    Confidence to guide students through profound transformation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED ADVANCED CURRICULUM */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Advanced Curriculum</h2>
            <p className={styles.sectionSubtitle}>
              300+ hours of specialized mastery training
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <div className={styles.curriculumBreakdown}>
                <h4 className="mb-4">Curriculum Hours Breakdown</h4>
                {curriculumBreakdown.map((subject, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>{subject.subject}</span>
                      <span className={styles.subjectHours}>
                        {subject.hours} Hours
                      </span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${(subject.hours / 300) * 100}%`,
                          backgroundColor: subject.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4">
            {detailedCurriculum.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={styles.curriculumCard}>
                  <h3 className={styles.curriculumTitle}>{item.category}</h3>
                  <ul className={styles.curriculumList}>
                    {item.items.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE OUR ADVANCED TRAINING */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Advanced Training?
            </h2>
            <p className={styles.sectionSubtitle}>
              From competent teacher to masterful guide
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className={styles.featureCard}>
                <div className={styles.iconBox}>🏫</div>
                <h4>Lineage-Based Mastery</h4>
                <p>
                  Learn from Indian masters carrying forward authentic
                  traditions, combined with modern therapeutic understanding for
                  today's students.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.featureCard}>
                <div className={styles.iconBox}>📚</div>
                <h4>Depth Over Breadth</h4>
                <p>
                  300+ hours focused on mastery, specialization, and deep
                  understanding rather than just covering more topics.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.featureCard}>
                <div className={styles.iconBox}>👥</div>
                <h4>Therapeutic Focus</h4>
                <p>
                  Strong emphasis on yoga therapy, anatomy, and creating
                  therapeutic sequences for real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Form300/>

      {/* 4. WHY RISHIKESH */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>
              Why Rishikesh for Advanced Study?
            </h2>
            <p className={styles.sectionSubtitle}>
              The living classroom for deep transformation
            </p>
          </div>
          <div className="row g-4">
            {whyRishikesh.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={styles.featureCard}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DAILY SCHEDULE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Daily Schedule</h2>
            <p className={styles.sectionSubtitle}>
              A day in your advanced transformative journey
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {dailySchedule.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                  <div className={styles.scheduleTime}>{item.time}</div>
                  <div className={styles.scheduleActivity}>{item.activity}</div>
                </div>
              ))}
              <p className="text-center mt-4">
                <em>
                  Sundays are half-days for rest, Ganga visits, and optional
                  local excursions.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Hours24 />

      <TeacherHours />

      {/* 6. ACCOMMODATION & FACILITIES */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Accommodation & Facilities</h2>
            <p className={styles.sectionSubtitle}>
              Your serene home for advanced study in the Himalayas
            </p>
          </div>

          <div className="row g-4 mb-5">
            {roomOptions.map((room, index) => (
              <div key={index} className="col-lg-6">
                <div className={styles.roomOption}>
                  <img
                    src={room.image}
                    alt={room.type}
                    className={styles.roomImage}
                  />
                  <div className={styles.roomDetails}>
                    <h4 className={styles.roomType}>
                      {room.type} - {room.price}
                    </h4>
                    <ul className={styles.roomFeatures}>
                      {room.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className={styles.infoBox}>
                <h4>Advanced Training Facilities Include:</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className={styles.curriculumList}>
                      <li>Spacious advanced yoga shalas with props</li>
                      <li>Meditation halls & outdoor sacred spaces</li>
                      <li>Advanced yoga therapy library</li>
                      <li>Private consultation rooms</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className={styles.curriculumList}>
                      <li>24/7 security & dedicated support</li>
                      <li>Wi-Fi access in common areas</li>
                      <li>Laundry service</li>
                      <li>Ayurvedic consultation room</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEAL PLAN */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Nourishing Sattvic Meals</h2>
            <p className={styles.sectionSubtitle}>
              Food as medicine for advanced practice
            </p>
          </div>

          <div className="row g-4">
            {mealPlan.map((meal, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={styles.menuCard}>
                  <h4 className={styles.mealTime}>{meal.time}</h4>
                  {meal.items.map((item, idx) => (
                    <div key={idx} className={styles.menuItem}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className={styles.infoBox}>
                <h4>Our Advanced Food Philosophy</h4>
                <p>
                  For advanced practice, nutrition is crucial. Our kitchen
                  prepares fresh, nutrient-dense vegetarian meals following
                  sattvic and Ayurvedic principles. Meals are specifically
                  designed to support intense practice, enhance mental clarity,
                  and promote healing.
                </p>
                <p className="mt-3">
                  <strong>Special diets accommodated:</strong> Vegan,
                  gluten-free, dairy-free, Ayurvedic diets, and allergy-specific
                  meals available with advance notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT'S INCLUDED */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>What's Included</h2>
            <p className={styles.sectionSubtitle}>
              Complete package for advanced transformation
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <div className={styles.includedItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INVESTMENT OPTIONS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>
              Investment & Payment Options
            </h2>
            <p className={styles.sectionSubtitle}>
              Choose your path to mastery
            </p>
          </div>

          <div className="row g-4">
            {investmentOptions.map((option, index) => (
              <div key={index} className="col-lg-4">
                <div
                  className={`${styles.investmentCard} ${option.featured ? styles.featured : ''}`}
                >
                  {option.badge && (
                    <div className={styles.paymentBadge}>{option.badge}</div>
                  )}
                  <h4>{option.type}</h4>
                  <div className={styles.price}>
                    <sup className={styles.priceCurrency}>$</sup>
                    {option.price}
                    <sub className={styles.pricePeriod}>/{option.period}</sub>
                  </div>
                  <ul className={styles.curriculumList}>
                    {option.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className={`${styles.ctaButton} ${styles.primary} mt-3`}
                  >
                    Book This Option
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className={styles.infoBox}>
                <h4>Advanced Training Payment Information</h4>
                <p>
                  <strong>Early Bird:</strong> $200 off if booked 90+ days in
                  advance
                </p>
                <p>
                  <strong>Payment Plans:</strong> Flexible installment plans
                  available
                </p>
                <p>
                  <strong>Deposit:</strong> $500 secures your spot
                  (non-refundable)
                </p>
                <p>
                  <strong>Final Payment:</strong> Due 45 days before course
                  start
                </p>
                <p>
                  <strong>RYT-500 Registration:</strong> We guide you through
                  the complete registration process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>
              What Our Advanced Graduates Say
            </h2>
            <p className={styles.sectionSubtitle}>
              From teachers who transformed into guides
            </p>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}></div>
                    <div>
                      <h5 className={styles.authorName}>{testimonial.name}</h5>
                      <small className={styles.authorCountry}>
                        {testimonial.country}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Refund />

      {/* 11. FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>Advanced Training FAQs</h2>
            <p className={styles.sectionSubtitle}>
              Answers for dedicated teachers
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>{faq.q}</h4>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BooksSection />
      {/* 12. FINAL CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Your Journey to Mastery Awaits</h2>
          <p className={styles.ctaSubtitle}>
            This 300-hour advanced training is your evolution from teacher to
            guide. You'll leave not just with an advanced certificate, but with
            the depth, confidence, and wisdom to facilitate profound
            transformation in yourself and others.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button
              className={`${styles.ctaButton} ${styles.primary} ${styles.large}`}
              onClick={() => navigate('/BookingForm')}
            >
              Apply Now for 2024
            </button>
            <button
              className={`${styles.ctaButton} ${styles.secondary} ${styles.large}`}
              onClick={() => navigate('/contact-us')}
            >
              Schedule a Call
            </button>
            <button
              className={`${styles.ctaButton} ${styles.secondary} ${styles.large}`}
            >
              Download Syllabus
            </button>
          </div>
          <p className="mt-4">
            📅 <strong>Upcoming Advanced Batches:</strong> March 1–28 | April
            1–28 | May 1–28
          </p>
          <p className="mt-2">
            <strong>Prerequisite:</strong> 200-hour YTTC certificate required
          </p>
        </div>
      </section>
    </div>
  );
}
