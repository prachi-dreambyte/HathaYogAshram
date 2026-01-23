import React from 'react';
import styles from '../../assets/styles/YogaCourse/100Hours.module.css';
import Refund from 'components/Refund/refund';
import Hours24 from 'components/Hours24/Hours24';
import TeacherHours from 'components/TeacherHours/TeacherHours';
import heroVideo from '../../assets/images/200hrs.webp';

export default function YogaCourse200() {
  const schools = [
    {
      name: 'Himalayan Yoga Institute',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      description: 'Premier yoga school offering authentic 200-hour teacher training in Rishikesh.'
    },
    {
      name: 'Rishikesh Yogpeeth',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      description: 'Traditional ashram with 15+ years of excellence in yoga teacher training.'
    },
    {
      name: 'Sivananda Ashram',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop',
      description: 'World-renowned center for authentic Sivananda yoga training.'
    },
    {
      name: 'Parmarth Niketan',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop',
      description: 'Largest ashram in Rishikesh offering comprehensive yoga certification.'
    }
  ];

  const whyRishikesh = [
    {
      icon: '🏔️',
      title: 'Yoga Capital of World',
      description: 'Rishikesh is the global hub for authentic yoga learning and spiritual growth.'
    },
    {
      icon: '🕉️',
      title: 'Sacred Ganges River',
      description: 'Practice yoga alongside the holy Ganges, enhancing spiritual connection.'
    },
    {
      icon: '🧘‍♂️',
      title: 'Traditional Lineage',
      description: 'Learn from masters preserving ancient Himalayan yoga traditions.'
    },
    {
      icon: '🌿',
      title: 'Natural Sanctuary',
      description: 'Serene Himalayan environment perfect for deep practice and meditation.'
    }
  ];

  const courseFeatures = [
    { icon: '🎓', title: 'Yoga Alliance RYT-200', desc: 'Globally recognized certification' },
    { icon: '👨‍🏫', title: 'Expert Indian Masters', desc: '15-30+ years teaching experience' },
    { icon: '📚', title: 'Comprehensive Curriculum', desc: '200+ hours of intensive training' },
    { icon: '🏠', title: 'Ashram Living', desc: 'Traditional residential experience' },
    { icon: '🥗', title: 'Sattvic Vegetarian Meals', desc: '3 organic meals daily' },
    { icon: '👥', title: 'Small Group Size', desc: 'Maximum 15 students per batch' },
    { icon: '🔄', title: 'Lifetime Support', desc: 'Alumni community & job assistance' },
    { icon: '✈️', title: 'Airport Pickup', desc: 'Free pickup from Dehradun airport' }
  ];

  const curriculumBreakdown = [
    { subject: 'Asana Practice', hours: 60, color: '#8B4789' },
    { subject: 'Teaching Methodology', hours: 30, color: '#D4A5D4' },
    { subject: 'Yoga Philosophy', hours: 30, color: '#9C6B9A' },
    { subject: 'Anatomy & Physiology', hours: 25, color: '#B48CB2' },
    { subject: 'Pranayama & Breathwork', hours: 20, color: '#8B4789' },
    { subject: 'Meditation & Mindfulness', hours: 20, color: '#D4A5D4' },
    { subject: 'Special Workshops', hours: 15, color: '#9C6B9A' }
  ];

  const detailedCurriculum = [
    {
      category: 'Asana Mastery (60 Hours)',
      items: [
        'Hatha Yoga: 140+ traditional postures',
        'Ashtanga Vinyasa: Primary series',
        'Vinyasa Flow: Creative sequencing',
        'Alignment & Adjustment techniques',
        'Restorative & Yin Yoga',
        'Props usage and modifications'
      ]
    },
    {
      category: 'Teaching Methodology (30 Hours)',
      items: [
        'Class planning & sequencing',
        'Effective cueing & demonstration',
        'Hands-on adjustments',
        'Voice projection & presence',
        'Business of yoga',
        'Teaching practicums'
      ]
    },
    {
      category: 'Yoga Philosophy (30 Hours)',
      items: [
        'Yoga Sutras of Patanjali',
        'Bhagavad Gita teachings',
        'Eight Limbs of Yoga',
        'Chakras & Nadis system',
        'Yogic lifestyle & ethics',
        'History of yoga'
      ]
    },
    {
      category: 'Anatomy & Physiology (25 Hours)',
      items: [
        'Skeletal & muscular systems',
        'Respiratory & circulatory systems',
        'Injury prevention & modifications',
        'Energetic anatomy',
        'Therapeutic applications',
        'Aging & yoga'
      ]
    },
    {
      category: 'Pranayama (20 Hours)',
      items: [
        'Fundamental breathing techniques',
        'Advanced pranayama practices',
        'Nadishodhana purification',
        'Energy channel awakening',
        'Breath-body-mind connection',
        'Pranayama for meditation'
      ]
    },
    {
      category: 'Meditation (20 Hours)',
      items: [
        'Himalayan meditation techniques',
        'Yoga Nidra (yogic sleep)',
        'Mindfulness practices',
        'Mantra meditation',
        'Walking meditation',
        'Meditation teaching skills'
      ]
    }
  ];

  const dailySchedule = [
    { time: '5:30 AM', activity: 'Wake Up & Herbal Tea' },
    { time: '6:00 AM', activity: 'Pranayama & Meditation' },
    { time: '7:30 AM', activity: 'Hatha Yoga Asana Practice' },
    { time: '9:30 AM', activity: 'Breakfast' },
    { time: '10:30 AM', activity: 'Yoga Philosophy / Anatomy' },
    { time: '12:30 PM', activity: 'Teaching Methodology' },
    { time: '1:30 PM', activity: 'Lunch & Rest' },
    { time: '3:30 PM', activity: 'Ashtanga/Vinyasa Practice' },
    { time: '5:30 PM', activity: 'Workshop / Self-Study' },
    { time: '6:30 PM', activity: 'Dinner' },
    { time: '7:30 PM', activity: 'Satsang / Kirtan / Meditation' }
  ];

  const teachers = [
    {
      name: 'Yogacharya Ramesh',
      title: 'Lead Instructor | E-RYT 500',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w-600&h=400&fit=crop',
      bio: '15+ years teaching experience, trained in Himalayan tradition, specializes in Hatha and Ashtanga yoga.'
    },
    {
      name: 'Dr. Anjali Sharma',
      title: 'Philosophy & Anatomy Expert',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w-600&h=400&fit=crop',
      bio: 'PhD in Yoga Philosophy, certified yoga therapist, author of three books on yogic sciences.'
    },
    {
      name: 'Swami Devananda',
      title: 'Meditation & Pranayama Master',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w-600&h=400&fit=crop',
      bio: '30+ years in meditation practice, trained in traditional Himalayan meditation techniques.'
    }
  ];

  const roomOptions = [
    {
      type: 'Shared Room',
      price: '$999',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w-600&h=400&fit=crop',
      features: ['Double occupancy', 'Attached bathroom', 'Garden view', 'Daily housekeeping', 'Wi-Fi access']
    },
    {
      type: 'Private Room',
      price: '$1199',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w-600&h=400&fit=crop',
      features: ['Single occupancy', 'Private bathroom', 'Mountain view', 'Daily housekeeping', 'Wi-Fi access', 'Study desk']
    }
  ];

  const mealPlan = [
    {
      time: 'Breakfast',
      items: ['Fresh seasonal fruits', 'Oatmeal or porridge', 'Herbal teas', 'Whole grain toast', 'Yogurt']
    },
    {
      time: 'Lunch',
      items: ['Seasonal vegetables', 'Dal (lentil soup)', 'Brown rice', 'Chapati (whole wheat bread)', 'Fresh salad']
    },
    {
      time: 'Dinner',
      items: ['Light vegetable soup', 'Khichdi (rice & lentil dish)', 'Steamed vegetables', 'Herbal tea', 'Weekly dessert']
    }
  ];

  const includedItems = [
    '24 nights accommodation (shared or private)',
    'Three nutritious vegetarian meals daily',
    'All course materials and manuals',
    'Yoga mat and props',
    'Weekend excursions to sacred sites',
    'Airport pickup from Dehradun',
    'Yoga Alliance RYT-200 certificate',
    'Lifetime alumni community access',
    'Kirtan nights & cultural programs',
    'Traditional fire ceremony'
  ];

  const investmentOptions = [
    {
      type: 'Standard Enrollment',
      price: '999',
      period: 'per person',
      features: ['Shared accommodation', 'Full course access', 'All meals included', 'Course materials', 'Certificate'],
      badge: 'Most Popular'
    },
    {
      type: 'Private Room Upgrade',
      price: '1199',
      period: 'per person',
      features: ['Private room', 'Full course access', 'All meals included', 'Course materials', 'Certificate', 'Extra sessions'],
      featured: true
    },
    {
      type: 'Early Bird Special',
      price: '849',
      period: 'per person',
      features: ['Shared accommodation', 'Full course access', 'All meals included', 'Course materials', 'Certificate', 'Free Ayurvedic massage'],
      badge: 'Save $150'
    }
  ];

  const faqs = [
    {
      q: 'Is this course Yoga Alliance certified?',
      a: 'Yes, upon successful completion you receive a Yoga Alliance RYT-200 certificate, recognized worldwide.'
    },
    {
      q: 'What is the daily schedule like?',
      a: 'Daily schedule includes 6-8 hours of practice and study, with breaks for meals and rest. See detailed schedule above.'
    },
    {
      q: 'Do I need prior yoga experience?',
      a: 'No, the course is designed for beginners to intermediate practitioners. All levels are welcome.'
    },
    {
      q: 'What should I bring?',
      a: 'We provide a detailed packing list including comfortable yoga clothes, white outfit for ceremonies, journal, and personal items.'
    },
    {
      q: 'Is travel insurance required?',
      a: 'Yes, all students must have travel insurance covering medical emergencies and trip cancellation.'
    },
    {
      q: 'Can I extend my stay in Rishikesh?',
      a: 'Yes, we can help arrange extended accommodation before or after the course.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Thompson',
      country: 'Australia',
      text: 'This training completely transformed my life. The teachers are incredibly knowledgeable and supportive. Rishikesh is truly magical!'
    },
    {
      name: 'Marco Rossi',
      country: 'Italy',
      text: 'The 200-hour training exceeded all expectations. I arrived as a beginner and left as a confident teacher. The ashram environment was perfect.'
    },
    {
      name: 'Priya Patel',
      country: 'USA',
      text: 'Best investment I ever made. The comprehensive curriculum, authentic teaching, and beautiful location created a life-changing experience.'
    }
  ];

  return (
    <div className={styles.yogaPage}>
      {/* Banners */}
        <div>
           <img src={heroVideo} alt="img"/>
        </div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className={styles.heroTitle}>
                200-Hour Yoga Teacher Training in Rishikesh, India
              </h1>
              <p className={styles.heroSubtitle}>
                Yoga Alliance Certified (RYT-200) | Residential Program | Beginner to Intermediate
              </p>
              <div className={styles.heroBadges}>
                <span className={styles.badgeItem}>📜 Yoga Alliance USA RYT-200</span>
                <span className={styles.badgeItem}>⏱️ 24 Days Intensive</span>
                <span className={styles.badgeItem}>📍 Rishikesh, Himalayas</span>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <button className={`${styles.ctaButton} ${styles.primary}`}>Apply Now for 2024</button>
                <button className={`${styles.ctaButton} ${styles.secondary}`}>Download 2024 Brochure</button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className={styles.heroImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop" 
                  alt="200-Hour Yoga Teacher Training Rishikesh" 
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>🧘‍♂️ Course Overview</h2>
            <p className={styles.sectionSubtitle}>Transformative residential program for aspiring yoga teachers</p>
          </div>
          
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <p className={styles.leadText}>
                The <strong>200-Hour Yoga Teacher Training Course</strong> is a comprehensive residential program 
                designed for beginners and practitioners seeking to deepen their practice and become certified yoga teachers. 
                This immersive 24-day experience in Rishikesh—the yoga capital of the world—blends ancient teachings with modern methodology.
              </p>
            </div>
          </div>
          
          <div className="row g-4 mb-5">
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📅</div>
                <h4>Duration</h4>
                <p>24 Days Intensive</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📊</div>
                <h4>Level</h4>
                <p>Beginner to Intermediate</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>🏆</div>
                <h4>Certification</h4>
                <p>Yoga Alliance RYT-200</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>📍</div>
                <h4>Location</h4>
                <p>Rishikesh, Himalayas</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className={styles.infoBox}>
                <h4>What You Will Gain:</h4>
                <ul className={styles.curriculumList}>
                  <li>Globally recognized Yoga Alliance RYT-200 certification</li>
                  <li>Deep understanding of yoga philosophy, anatomy, and teaching methodology</li>
                  <li>Mastery of Hatha, Ashtanga, and Vinyasa Flow yoga styles</li>
                  <li>Personal transformation in a serene Himalayan setting</li>
                  <li>Skills to teach confidently anywhere in the world</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Refund/>

      {/* Why Choose Our School */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>✨ Why Choose Our School?</h2>
            <p className={styles.sectionSubtitle}>Authentic teaching in the heart of yoga's birthplace</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className={styles.featureCard}>
                <div className={styles.iconBox}>🏫</div>
                <h4>Authentic Teaching</h4>
                <p>Learn directly from experienced Indian masters in Rishikesh, where yoga originated. Our teachers carry forward traditions passed down through generations.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.featureCard}>
                <div className={styles.iconBox}>📚</div>
                <h4>Comprehensive Curriculum</h4>
                <p>200+ hours covering asana, pranayama, philosophy, anatomy, teaching methodology, meditation, and special workshops.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.featureCard}>
                <div className={styles.iconBox}>👥</div>
                <h4>Supportive Environment</h4>
                <p>Small class sizes for personalized attention. Peaceful ashram setting for deep learning and self-discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rishikesh */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>🏔️ Why Rishikesh?</h2>
            <p className={styles.sectionSubtitle}>More than a location - a transformative experience</p>
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
      {/* 24-Day Journey */}
      <Hours24/>
    
      {/* Detailed Curriculum */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>📚 Detailed Curriculum</h2>
            <p className={styles.sectionSubtitle}>200+ hours of comprehensive yoga education</p>
          </div>
          
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className={styles.curriculumBreakdown}>
                <h4 className="mb-4">Curriculum Hours Breakdown</h4>
                {curriculumBreakdown.map((subject, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>{subject.subject}</span>
                      <span className={styles.subjectHours}>{subject.hours} Hours</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ 
                          width: `${(subject.hours / 200) * 100}%`,
                          backgroundColor: subject.color
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

      {/* Daily Schedule */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>⏰ Daily Schedule</h2>
            <p className={styles.sectionSubtitle}>A typical day in your transformative journey</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {dailySchedule.map((item, index) => (
                <div key={index} className={styles.scheduleItem}>
                  <div className={styles.scheduleTime}>{item.time}</div>
                  <div className={styles.scheduleActivity}>{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Teachers */}
      <TeacherHours/>

      {/* Accommodation */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>🏠 Accommodation & Facilities</h2>
            <p className={styles.sectionSubtitle}>Your comfortable home in the Himalayas</p>
          </div>
          
          <div className="row g-4 mb-5">
            {roomOptions.map((room, index) => (
              <div key={index} className="col-lg-6">
                <div className={styles.roomOption}>
                  <img src={room.image} alt={room.type} className={styles.roomImage} />
                  <div className={styles.roomDetails}>
                    <h4 className={styles.roomType}>{room.type} - {room.price}</h4>
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
            <div className="col-lg-8 mx-auto">
              <div className={styles.infoBox}>
                <h4>Ashram Facilities Include:</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className={styles.curriculumList}>
                      <li>Spacious yoga shalas with natural light</li>
                      <li>Meditation halls & outdoor spaces</li>
                      <li>Library with yoga texts</li>
                      <li>Organic garden</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className={styles.curriculumList}>
                      <li>24/7 security & support</li>
                      <li>Wi-Fi access throughout</li>
                      <li>Laundry service</li>
                      <li>Ayurvedic consultation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plan */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>🥗 Nourishing Sattvic Meals</h2>
            <p className={styles.sectionSubtitle}>Food is medicine - fresh, organic, vegetarian meals</p>
          </div>
          
          <div className="row g-4">
            {mealPlan.map((meal, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={styles.menuCard}>
                  <h4 className={styles.mealTime}>{meal.time}</h4>
                  {meal.items.map((item, idx) => (
                    <div key={idx} className={styles.menuItem}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className={styles.infoBox}>
                <h4>Our Food Philosophy</h4>
                <p>We believe food is medicine. Our kitchen prepares fresh, nutritious vegetarian meals following sattvic principles. All meals are designed to support yoga practice, enhance digestion, and promote clarity of mind.</p>
                <p className="mt-3"><strong>Special diets accommodated:</strong> Vegan, gluten-free, dairy-free, and allergy-specific meals available with advance notice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>✅ What's Included</h2>
            <p className={styles.sectionSubtitle}>Complete package for a transformative experience</p>
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

      {/* Investment Options */}
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>💰 Investment & Payment Options</h2>
            <p className={styles.sectionSubtitle}>Choose the plan that works for you</p>
          </div>
          
          <div className="row g-4">
            {investmentOptions.map((option, index) => (
              <div key={index} className="col-lg-4">
                <div className={`${styles.investmentCard} ${option.featured ? styles.featured : ''}`}>
                  {option.badge && <div className={styles.paymentBadge}>{option.badge}</div>}
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
                  <button className={`${styles.ctaButton} ${styles.primary} mt-3`}>
                    Book This Option
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className={styles.infoBox}>
                <h4>Payment Information</h4>
                <p><strong>Early Bird:</strong> $150 off if booked 90+ days in advance</p>
                <p><strong>Payment Plans:</strong> Available - pay in installments</p>
                <p><strong>Deposit:</strong> $300 secures your spot (non-refundable)</p>
                <p><strong>Final Payment:</strong> Due 30 days before course start</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.section} ${styles.sectionPeach}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>📢 What Our Graduates Say</h2>
            <p className={styles.sectionSubtitle}>Hear from those who transformed their lives</p>
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
                      <small className={styles.authorCountry}>{testimonial.country}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionTitle}>❓ Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>Get answers to common questions</p>
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

      {/* Final CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>🎓 Your Transformation Awaits</h2>
          <p className={styles.ctaSubtitle}>
            This 200-hour training is more than a course—it's the beginning of a lifelong journey. 
            You'll leave not just with a certificate, but with confidence, community, and memories of a transformative experience.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className={`${styles.ctaButton} ${styles.primary} ${styles.large}`}>Apply Now for 2024</button>
            <button className={`${styles.ctaButton} ${styles.secondary} ${styles.large}`}>Schedule a Call</button>
          </div>
          <p className="mt-4">📅 <strong>Upcoming Batches:</strong> March 1–24 | April 1–24 | May 1–24</p>
        </div>
      </section>
    </div>
  );
}