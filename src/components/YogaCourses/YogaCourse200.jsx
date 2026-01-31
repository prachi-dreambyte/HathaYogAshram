import React from 'react';
import styles from '../../assets/styles/YogaCourse/200Hours.module.css';
import Refund from 'components/Refund/refund';
import Hours24 from 'components/Hours24/Hours24';
import TeacherHours from 'components/TeacherHours/TeacherHours';
import heroVideo from '../../assets/images/200hrs.webp';

export default function YogaCourse200() {

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

  const curriculumBreakdown = [
    { subject: 'Asana Practice', hours: 60, color: '#C41E3A' },
    { subject: 'Teaching Methodology', hours: 30, color: '#D2691E' },
    { subject: 'Yoga Philosophy', hours: 30, color: '#C41E3A' },
    { subject: 'Anatomy & Physiology', hours: 25, color: '#D2691E' },
    { subject: 'Pranayama & Breathwork', hours: 20, color: '#C41E3A' },
    { subject: 'Meditation & Mindfulness', hours: 20, color: '#D2691E' },
    { subject: 'Special Workshops', hours: 15, color: '#C41E3A' }
  ];

  const detailedCurriculum = [
    {
      category: 'Asana Mastery',
      hours: '60 Hours',
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
      category: 'Teaching Methodology',
      hours: '30 Hours',
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
      category: 'Yoga Philosophy',
      hours: '30 Hours',
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
      category: 'Anatomy & Physiology',
      hours: '25 Hours',
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
      category: 'Pranayama',
      hours: '20 Hours',
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
      category: 'Meditation',
      hours: '20 Hours',
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
    <div className={styles.container}>
      {/* Banner Image */}
      <div className={styles.bannerWrapper}>
        <img src={heroVideo} alt="200 Hour Yoga Teacher Training" className={styles.bannerImage} />
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.quoteText}>
            Yoga Alliance Certified (RYT-200) | Residential Program | Beginner to Intermediate
          </p>
          <h1 className={styles.mainTitle}>
            200-Hour Yoga Teacher Training in Rishikesh, India
          </h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>200 Hour YTTC</span>
          </div>
        </div>
      </section>

      {/* 1. COURSE OVERVIEW - Most Important First */}
      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Course Overview</p>
          <h2 className={styles.sectionTitle}>
            Transformative Residential Program for Aspiring Yoga Teachers
          </h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.sectionDescription}>
            The <strong>200-Hour Yoga Teacher Training Course</strong> is a comprehensive residential program 
            designed for beginners and practitioners seeking to deepen their practice and become certified yoga teachers. 
            This immersive 24-day experience in Rishikesh—the yoga capital of the world—blends ancient teachings with modern methodology.
          </p>
        </div>

        {/* Info Grid */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Duration</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>24 Days Intensive</span>
              </div>
              <div className={styles.infoDetails}>
                <p>📅 24 Days intensive residential program</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>📅</div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Level</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>Beginner to Intermediate</span>
              </div>
              <div className={styles.infoDetails}>
                <p>📊 Suitable for all levels of practitioners</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>📊</div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Certification</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>Yoga Alliance RYT-200</span>
              </div>
              <div className={styles.infoDetails}>
                <p>🏆 Globally recognized certification</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>🏆</div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoContent}>
              <h3 className={styles.infoCardTitle}>Location</h3>
              <div className={styles.infoTags}>
                <span className={styles.infoTag}>Rishikesh, Himalayas</span>
              </div>
              <div className={styles.infoDetails}>
                <p>📍 Yoga capital of the world</p>
              </div>
            </div>
            <div className={styles.infoImageSection}>
              <div className={styles.infoIcon}>📍</div>
            </div>
          </div>
        </div>

        {/* What You Will Gain */}
        <div className={styles.gainsSection}>
          <h3 className={styles.gainsTitle}>What You Will Gain</h3>
          <div className={styles.gainsList}>
            <div className={styles.gainItem}>
              <span className={styles.gainIcon}>✓</span>
              <p>Globally recognized Yoga Alliance RYT-200 certification</p>
            </div>
            <div className={styles.gainItem}>
              <span className={styles.gainIcon}>✓</span>
              <p>Deep understanding of yoga philosophy, anatomy, and teaching methodology</p>
            </div>
            <div className={styles.gainItem}>
              <span className={styles.gainIcon}>✓</span>
              <p>Mastery of Hatha, Ashtanga, and Vinyasa Flow yoga styles</p>
            </div>
            <div className={styles.gainItem}>
              <span className={styles.gainIcon}>✓</span>
              <p>Personal transformation in a serene Himalayan setting</p>
            </div>
            <div className={styles.gainItem}>
              <span className={styles.gainIcon}>✓</span>
              <p>Skills to teach confidently anywhere in the world</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY RISHIKESH - Location Benefits */}
      <section className={styles.whyRishikeshSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Why Rishikesh?</p>
          <h2 className={styles.sectionTitle}>
            More Than a Location - A Transformative Experience
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.contentGrid}>
          {whyRishikesh.map((item, index) => (
            <div key={index} className={styles.contentCard}>
              <div className={styles.contentInfo}>
                <h3 className={styles.contentCardTitle}>{item.title}</h3>
                <div className={styles.contentTags}>
                  <span className={styles.contentTag}>{item.icon}</span>
                </div>
                <div className={styles.contentDescription}>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.contentIconSection}>
                <div className={styles.largeIcon}>{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DETAILED CURRICULUM - What You'll Learn */}
      <section className={styles.curriculumSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Detailed Curriculum</p>
          <h2 className={styles.sectionTitle}>
            200+ Hours of Comprehensive Yoga Education
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Curriculum Breakdown */}
        <div className={styles.breakdownSection}>
          <h3 className={styles.breakdownTitle}>Curriculum Hours Breakdown</h3>
          <div className={styles.breakdownGrid}>
            {curriculumBreakdown.map((subject, index) => (
              <div key={index} className={styles.breakdownItem}>
                <div className={styles.breakdownInfo}>
                  <span className={styles.subjectName}>{subject.subject}</span>
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

        {/* Detailed Curriculum Cards */}
        <div className={styles.curriculumGrid}>
          {detailedCurriculum.map((item, index) => (
            <div key={index} className={styles.curriculumCard}>
              <div className={styles.curriculumInfo}>
                <h3 className={styles.curriculumTitle}>{item.category}</h3>
                <div className={styles.curriculumHours}>
                  <span className={styles.hoursTag}>{item.hours}</span>
                </div>
                <div className={styles.curriculumContent}>
                  <ul className={styles.curriculumList}>
                    {item.items.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DAILY SCHEDULE */}
      <section className={styles.scheduleSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Daily Schedule</p>
          <h2 className={styles.sectionTitle}>
            A Typical Day in Your Transformative Journey
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.scheduleGrid}>
          {dailySchedule.map((item, index) => (
            <div key={index} className={styles.scheduleCard}>
              <div className={styles.scheduleInfo}>
                <h3 className={styles.scheduleTime}>{item.time}</h3>
                <div className={styles.scheduleActivity}>
                  <p>{item.activity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE OUR SCHOOL */}
      <section className={styles.whySchoolSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Why Choose Our School?</p>
          <h2 className={styles.sectionTitle}>
            Authentic Teaching in the Heart of Yoga's Birthplace
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.contentCard}>
            <div className={styles.contentInfo}>
              <h3 className={styles.contentCardTitle}>Authentic Teaching</h3>
              <div className={styles.contentTags}>
                <span className={styles.contentTag}>🏫</span>
              </div>
              <div className={styles.contentDescription}>
                <p>Learn directly from experienced Indian masters in Rishikesh, where yoga originated. Our teachers carry forward traditions passed down through generations.</p>
              </div>
            </div>
            <div className={styles.contentIconSection}>
              <div className={styles.largeIcon}>🏫</div>
            </div>
          </div>

          <div className={styles.contentCard}>
            <div className={styles.contentInfo}>
              <h3 className={styles.contentCardTitle}>Comprehensive Curriculum</h3>
              <div className={styles.contentTags}>
                <span className={styles.contentTag}>📚</span>
              </div>
              <div className={styles.contentDescription}>
                <p>200+ hours covering asana, pranayama, philosophy, anatomy, teaching methodology, meditation, and special workshops.</p>
              </div>
            </div>
            <div className={styles.contentIconSection}>
              <div className={styles.largeIcon}>📚</div>
            </div>
          </div>

          <div className={styles.contentCard}>
            <div className={styles.contentInfo}>
              <h3 className={styles.contentCardTitle}>Supportive Environment</h3>
              <div className={styles.contentTags}>
                <span className={styles.contentTag}>👥</span>
              </div>
              <div className={styles.contentDescription}>
                <p>Small class sizes for personalized attention. Peaceful ashram setting for deep learning and self-discovery.</p>
              </div>
            </div>
            <div className={styles.contentIconSection}>
              <div className={styles.largeIcon}>👥</div>
            </div>
          </div>
        </div>
      </section>

      <Hours24 />

      <TeacherHours />

      {/* 6. ACCOMMODATION & FACILITIES */}
      <section className={styles.accommodationSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Accommodation & Facilities</p>
          <h2 className={styles.sectionTitle}>
            Your Comfortable Home in the Himalayas
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.roomsGrid}>
          {roomOptions.map((room, index) => (
            <div key={index} className={styles.roomCard}>
              <div className={styles.roomInfo}>
                <h3 className={styles.roomType}>{room.type}</h3>
                <div className={styles.roomPrice}>
                  <span className={styles.priceTag}>{room.price}</span>
                </div>
                <div className={styles.roomFeatures}>
                  <ul>
                    {room.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.roomImageSection}>
                <img
                  src={room.image}
                  alt={room.type}
                  className={styles.roomImage}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ashram Facilities */}
        <div className={styles.facilitiesSection}>
          <h3 className={styles.facilitiesTitle}>Ashram Facilities Include</h3>
          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Spacious yoga shalas with natural light</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Meditation halls & outdoor spaces</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Library with yoga texts</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Organic garden</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>24/7 security & support</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Wi-Fi access throughout</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Laundry service</p>
            </div>
            <div className={styles.facilityItem}>
              <span className={styles.facilityIcon}>✓</span>
              <p>Ayurvedic consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEAL PLAN */}
      <section className={styles.mealSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Nourishing Sattvic Meals</p>
          <h2 className={styles.sectionTitle}>
            Food is Medicine - Fresh, Organic, Vegetarian Meals
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.mealGrid}>
          {mealPlan.map((meal, index) => (
            <div key={index} className={styles.mealCard}>
              <div className={styles.mealInfo}>
                <h3 className={styles.mealTime}>{meal.time}</h3>
                <div className={styles.mealItems}>
                  {meal.items.map((item, idx) => (
                    <div key={idx} className={styles.menuItem}>
                      <span className={styles.menuIcon}>•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Food Philosophy */}
        <div className={styles.philosophySection}>
          <h3 className={styles.philosophyTitle}>Our Food Philosophy</h3>
          <p className={styles.philosophyText}>
            We believe food is medicine. Our kitchen prepares fresh, nutritious vegetarian meals following sattvic principles. 
            All meals are designed to support yoga practice, enhance digestion, and promote clarity of mind.
          </p>
          <p className={styles.philosophyNote}>
            <strong>Special diets accommodated:</strong> Vegan, gluten-free, dairy-free, and allergy-specific meals available with advance notice.
          </p>
        </div>
      </section>

      {/* 8. WHAT'S INCLUDED */}
      <section className={styles.includedSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>What's Included</p>
          <h2 className={styles.sectionTitle}>
            Complete Package for a Transformative Experience
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.includedGrid}>
          {includedItems.map((item, index) => (
            <div key={index} className={styles.includedCard}>
              <div className={styles.includedInfo}>
                <div className={styles.includedIcon}>✓</div>
                <p className={styles.includedText}>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>What Our Graduates Say</p>
          <h2 className={styles.sectionTitle}>
            Hear from Those Who Transformed Their Lives
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialInfo}>
                <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                <div className={styles.testimonialTags}>
                  <span className={styles.testimonialTag}>{testimonial.country}</span>
                </div>
                <div className={styles.testimonialText}>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Refund />

      {/* 10. INVESTMENT OPTIONS */}
      <section className={styles.investmentSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Investment & Payment Options</p>
          <h2 className={styles.sectionTitle}>
            Choose the Plan That Works for You
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.investmentGrid}>
          {investmentOptions.map((option, index) => (
            <div key={index} className={`${styles.investmentCard} ${option.featured ? styles.featured : ''}`}>
              <div className={styles.investmentInfo}>
                {option.badge && (
                  <div className={styles.badgeWrapper}>
                    <span className={styles.investmentBadge}>{option.badge}</span>
                  </div>
                )}
                <h3 className={styles.planType}>{option.type}</h3>
                <div className={styles.priceSection}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>{option.price}</span>
                  <span className={styles.period}>/{option.period}</span>
                </div>
                <div className={styles.planFeatures}>
                  <ul>
                    {option.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className={styles.bookButton}>Book This Option</button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Information */}
        <div className={styles.paymentInfo}>
          <h3 className={styles.paymentTitle}>Payment Information</h3>
          <div className={styles.paymentGrid}>
            <div className={styles.paymentItem}>
              <strong>Early Bird:</strong> $150 off if booked 90+ days in advance
            </div>
            <div className={styles.paymentItem}>
              <strong>Payment Plans:</strong> Available - pay in installments
            </div>
            <div className={styles.paymentItem}>
              <strong>Deposit:</strong> $300 secures your spot (non-refundable)
            </div>
            <div className={styles.paymentItem}>
              <strong>Final Payment:</strong> Due 30 days before course start
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Frequently Asked Questions</p>
          <h2 className={styles.sectionTitle}>
            Get Answers to Common Questions
          </h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <div className={styles.faqInfo}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Your Transformation Awaits</h2>
          <p className={styles.ctaSubtitle}>
            This 200-hour training is more than a course—it's the beginning of a lifelong journey. 
            You'll leave not just with a certificate, but with confidence, community, and memories of a transformative experience.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>Apply Now for 2024</button>
            <button className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>Schedule a Call</button>
          </div>
          <p className={styles.batchInfo}>
            📅 <strong>Upcoming Batches:</strong> March 1–24 | April 1–24 | May 1–24
          </p>
        </div>
      </section>
    </div>
  );
}