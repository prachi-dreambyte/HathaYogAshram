import React, { useState } from 'react';
import styles from '../../assets/styles/kundalini_yoga/Kundalini300.module.css';

export default function Kundalini300() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSchool, setActiveSchool] = useState('kundalini-yoga-ashram');

  const schools = {
    'kundalini-yoga-ashram': {
      name: 'Kundalini Yoga Ashram',
      tagline: 'Traditional Kundalini Awakening Practices',
      location: 'Rishikesh, India',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800'
    },
    'adi-yogpeeth': {
      name: 'Adi Yogpeeth',
      tagline: 'Ancient Wisdom, Modern Practice',
      location: 'Tapovan, Rishikesh',
      image: 'https://images.unsplash.com/photo-1599447292023-aae792c5f948?w=800'
    },
    'world-peace': {
      name: 'World Peace Yoga School',
      tagline: 'Himalayan Tradition of Kundalini',
      location: 'Laxman Jhula, Rishikesh',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800'
    },
    'vinyasa-yogashala': {
      name: 'Vinyasa Yogashaala',
      tagline: 'Authentic Kundalini Journey',
      location: 'Rishikesh, Uttarakhand',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800'
    }
  };

  const chakras = [
    {
      name: 'Muladhara',
      element: 'Root Chakra',
      location: 'Base of spine',
      color: '#C41E3A',
      description: 'The foundation of physical and spiritual being, connecting Sattva, Rajas, and Tamas.'
    },
    {
      name: 'Swadhistan',
      element: 'Sacral Chakra',
      location: 'Below navel',
      color: '#FF6B35',
      description: 'Center of procreative and sexual energy, responsible for life formation.'
    },
    {
      name: 'Manipura',
      element: 'Solar Plexus',
      location: 'Below navel',
      color: '#F7B801',
      description: 'The power seat controlling physical and physiological wellbeing.'
    },
    {
      name: 'Anahata',
      element: 'Heart Chakra',
      location: 'Center of chest',
      color: '#4CAF50',
      description: 'Controls emotions, opens deep happiness and peace when awakened.'
    },
    {
      name: 'Vishuddhi',
      element: 'Throat Chakra',
      location: 'Throat region',
      color: '#2196F3',
      description: 'Chakra of purity, awakens sweet voice and amazing communication.'
    },
    {
      name: 'Ajna',
      element: 'Third Eye',
      location: 'Between eyebrows',
      color: '#673AB7',
      description: 'Supreme chakra commanding the physical body, the powerhouse of vision.'
    },
    {
      name: 'Sahasrara',
      element: 'Crown Chakra',
      location: 'Top of skull',
      color: '#9C27B0',
      description: 'Highest level, lotus with multiple petals, supreme state of accomplishment.'
    }
  ];

  const faqs = [
    {
      question: 'How is Kundalini different from other styles of yoga?',
      answer: 'Kundalini yoga is a more spiritual practice compared to other yoga styles. While it involves physical movements, the main focus is on spiritual awakening rather than physical poses. Unlike Vinyasa or Hatha yoga which revolve mainly around physical postures, Kundalini is highly precise, repetitive, and focuses on awakening the dormant energy within.'
    },
    {
      question: 'Can a beginner in yoga learn Kundalini?',
      answer: 'Kundalini yoga is an intense practice suitable for practitioners of all levels. While it\'s powerful, the physical and mental benefits make it an excellent option for both beginners and advanced yogis. However, it\'s recommended to have basic knowledge of Hatha yoga, pranayama, and meditation before diving deep into Kundalini practices.'
    },
    {
      question: 'What are chakras in Kundalini?',
      answer: 'Chakras are energy centers in the human body that run along the spine from the base to the crown. There are seven main chakras, each responsible for different aspects of physical, mental, and spiritual wellbeing. Kundalini practices work to awaken and balance these chakras, allowing energy to flow freely through the body.'
    },
    {
      question: 'Can we awaken our kundalini chakras?',
      answer: 'Yes, kundalini chakras can be awakened through dedicated practice under proper guidance. This requires eliminating distractions, developing strong focus, separating from external thoughts, and working with prana (life force energy). It\'s essential to practice under an experienced teacher who has authentic knowledge of the tradition.'
    },
    {
      question: 'Is 300-Hour kundalini teacher training eligible for RYT-300?',
      answer: 'Yes, the 300-Hour Kundalini teacher training is eligible for RYT-300 certification with Yoga Alliance, provided you complete the course at a registered yoga school. This certification allows you to teach yoga internationally as a recognized yoga teacher.'
    },
    {
      question: 'What is the eligibility for 300-Hour kundalini yoga teacher training?',
      answer: 'The 300-Hour training is best for: students who have completed 200-hour training and wish to deepen their practice; those wanting comprehensive knowledge of Kundalini and yoga nidra; practitioners seeking self-growth and transformation; and anyone committed to the spiritual journey with at least 6 months of regular yoga practice.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            300 Hour Kundalini Yoga
            <span className={styles.titleAccent}>Teacher Training</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Transform Your Practice • Awaken Your Energy • Inspire Others
          </p>
          <p className={styles.heroLocation}>
            <span className={styles.locationIcon}>📍</span>
            Rishikesh, India - The World Capital of Yoga
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statLabel}>Hours Training</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>28</div>
              <div className={styles.statLabel}>Days Intensive</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>7</div>
              <div className={styles.statLabel}>Chakras Awakened</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.sectionTitle}>Awaken Your Inner Power</h2>
          <p className={styles.introParagraph}>
            Kundalini Yoga is a spiritual practice that involves the ascension of our inner latent energy. 
            The rise of Shakti to unite with Shiva our consciousness, opening our heart so that we can live 
            our true authentic self. A practice which is a mix of physical kundalini kriya, Hatha asana, and 
            spiritual involving kundalini pranayama and meditation - clearing our inner body so that we can 
            meet the inner hidden power, our shakti as is bestowed upon us by Mother Nature.
          </p>
          <div className={styles.introQuote}>
            <div className={styles.quoteIcon}>"</div>
            <p>Kundalini Awakening – A pure heart is a golden vessel to fill with the primordial soul</p>
          </div>
        </div>
      </section>

      {/* Schools Selection */}
      <section className={styles.schools}>
        <h2 className={styles.sectionTitle}>Choose Your Sacred Space</h2>
        <div className={styles.schoolsGrid}>
          {Object.entries(schools).map(([key, school]) => (
            <div
              key={key}
              className={`${styles.schoolCard} ${activeSchool === key ? styles.schoolCardActive : ''}`}
              onClick={() => setActiveSchool(key)}
            >
              <div className={styles.schoolImage} style={{ backgroundImage: `url(${school.image})` }}>
                <div className={styles.schoolOverlay}></div>
              </div>
              <div className={styles.schoolInfo}>
                <h3>{school.name}</h3>
                <p className={styles.schoolTagline}>{school.tagline}</p>
                <p className={styles.schoolLocation}>{school.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chakras Section */}
      <section className={styles.chakras}>
        <h2 className={styles.sectionTitle}>Understanding the Seven Chakras</h2>
        <p className={styles.chakrasIntro}>
          The human body consists of seven prominent chakras according to Patanjali yoga sutra. 
          Each chakra represents a unique energy center that, when awakened, brings specific powers and transformations.
        </p>
        <div className={styles.chakrasGrid}>
          {chakras.map((chakra, index) => (
            <div key={index} className={styles.chakraCard}>
              <div className={styles.chakraIcon} style={{ borderColor: chakra.color }}>
                <div className={styles.chakraGlow} style={{ backgroundColor: chakra.color }}></div>
              </div>
              <h3 className={styles.chakraName}>{chakra.name}</h3>
              <p className={styles.chakraElement}>{chakra.element}</p>
              <p className={styles.chakraLocation}>{chakra.location}</p>
              <p className={styles.chakraDescription}>{chakra.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Highlights */}
      <section className={styles.highlights}>
        <h2 className={styles.sectionTitle}>What You Will Learn</h2>
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🔥</div>
            <h3>Kundalini Kriyas</h3>
            <p>Advanced practices to awaken the hidden energy and unite Shiva-Shakti consciousness</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🧘</div>
            <h3>Hatha Yoga Asanas</h3>
            <p>140+ yoga exercises for physical health, flexibility and spiritual preparation</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🌬️</div>
            <h3>Pranayama Mastery</h3>
            <p>Advanced breathing techniques for energy balance and chakra activation</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🧠</div>
            <h3>Deep Meditation</h3>
            <p>Calming and relaxing the mind to achieve stillness, stability and awakening</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🙏</div>
            <h3>Bandhas & Mudras</h3>
            <p>Energy locks and gestures to save and channel energy for transformation</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>📚</div>
            <h3>Tantra Philosophy</h3>
            <p>Understanding life, Kundalini Shakti function and ancient wisdom</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>✨</div>
            <h3>Shatkarma Cleansing</h3>
            <p>Detox practices to make yourself lighter and open to energy awakening</p>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🎯</div>
            <h3>Teaching Methodology</h3>
            <p>Professional teaching skills, alignment, adjustment and class management</p>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className={styles.schedule}>
        <h2 className={styles.sectionTitle}>A Day in the Life of a Yogi</h2>
        <p className={styles.scheduleIntro}>
          Immerse yourself in yogic discipline with our carefully crafted daily routine designed to maximize your spiritual growth.
        </p>
        <div className={styles.scheduleTimeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>05:30 AM</div>
              <div className={styles.timelineTitle}>Morning Bell & Herbal Tea</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>06:00 AM</div>
              <div className={styles.timelineTitle}>Kundalini Kriya & Meditation</div>
              <div className={styles.timelineDesc}>Awakening practices and chakra meditation</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>07:30 AM</div>
              <div className={styles.timelineTitle}>Pranayama & Shatkarma</div>
              <div className={styles.timelineDesc}>Breathing exercises and cleansing practices</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>09:00 AM</div>
              <div className={styles.timelineTitle}>Breakfast</div>
              <div className={styles.timelineDesc}>Organic vegetarian sattvic meal</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>10:30 AM</div>
              <div className={styles.timelineTitle}>Hatha Yoga Asana</div>
              <div className={styles.timelineDesc}>Physical postures and alignment practice</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>12:00 PM</div>
              <div className={styles.timelineTitle}>Theory Class</div>
              <div className={styles.timelineDesc}>Philosophy, anatomy, teaching methodology</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>01:00 PM</div>
              <div className={styles.timelineTitle}>Lunch & Rest</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>04:00 PM</div>
              <div className={styles.timelineTitle}>Advanced Kundalini Practice</div>
              <div className={styles.timelineDesc}>Kriyas, bandhas, mudras and advanced techniques</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>06:00 PM</div>
              <div className={styles.timelineTitle}>Mantra Chanting & Kirtan</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>07:00 PM</div>
              <div className={styles.timelineTitle}>Dinner</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>08:00 PM</div>
              <div className={styles.timelineTitle}>Satsang & Self Study</div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineTime}>09:30 PM</div>
              <div className={styles.timelineTitle}>Yoga Nidra & Lights Out</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Tabs */}
      <section className={styles.details}>
        <div className={styles.detailsTabs}>
          <button
            className={`${styles.tab} ${activeTab === 'overview' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'syllabus' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('syllabus')}
          >
            Syllabus
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'accommodation' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('accommodation')}
          >
            Accommodation
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'certification' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('certification')}
          >
            Certification
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'overview' && (
            <div className={styles.tabPanel}>
              <h3>Why Choose 300 Hour Kundalini Yoga Teacher Training?</h3>
              <p>
                The 300-hour Kundalini yoga teacher training course holds the key to great health and personal success. 
                Kundalini Yoga awakens the true source of limitless energy lying dormant in all of us and teaches us how 
                to use this energy to its full potential.
              </p>
              <h4>Course Benefits:</h4>
              <ul>
                <li>Complete and full teaching of everything relating to Kundalini and Kriya practices</li>
                <li>Deep understanding of Kundalini Philosophy, anatomy and physiology</li>
                <li>Verbal cues and alignment methods to support students and prevent injury</li>
                <li>Intense breath work and Kundalini Pranayama practices</li>
                <li>Systematic understanding of body functioning and subtle energy</li>
                <li>Kundalini Mantra and Chanting for inner alignment</li>
                <li>Professional teaching certification from Yoga Alliance (RYT-300)</li>
                <li>Lifetime access to traditional Kundalini lineage knowledge</li>
              </ul>
              <h4>Who Should Join:</h4>
              <ul>
                <li>Yoga teachers wanting to deepen their Kundalini knowledge</li>
                <li>Practitioners with at least 6 months of regular yoga practice</li>
                <li>Those seeking spiritual growth and self-transformation</li>
                <li>Anyone committed to awakening their inner potential</li>
                <li>Students who have completed 200-hour YTT and want to advance</li>
              </ul>
            </div>
          )}

          {activeTab === 'syllabus' && (
            <div className={styles.tabPanel}>
              <h3>Comprehensive Curriculum</h3>
              <div className={styles.syllabusGrid}>
                <div className={styles.syllabusCard}>
                  <h4>🕉️ Mantra & Chanting</h4>
                  <ul>
                    <li>Om, Shiva Mantra, Gayatri Mantra</li>
                    <li>Kundalini Mantras and Bija Mantras</li>
                    <li>Sound vibration and chakra awakening</li>
                    <li>Kirtan and devotional practices</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🧘 Kundalini Yoga Asana</h4>
                  <ul>
                    <li>140+ traditional asanas and variations</li>
                    <li>Alignment, assist and adjustment</li>
                    <li>Surya and Chandra Namaskar</li>
                    <li>Advanced inversions and arm balances</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🌬️ Pranayama Practices</h4>
                  <ul>
                    <li>15+ breathing techniques</li>
                    <li>Kapalbhati, Bhastrika, Bhramari</li>
                    <li>Nadi Shodhana and Sushumna breathing</li>
                    <li>Advanced retention practices</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🔥 Kriya Yoga</h4>
                  <ul>
                    <li>Practices to awaken all 7 chakras</li>
                    <li>Chakra sadhana and activation</li>
                    <li>Energy channeling techniques</li>
                    <li>Bindu awakening practices</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🧠 Meditation (Dhyana)</h4>
                  <ul>
                    <li>Himalayan meditation practices</li>
                    <li>Chakra awareness meditation</li>
                    <li>Kundalini active meditation</li>
                    <li>Trataka, Vipassana, Nada meditation</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>💫 Yoga Nidra</h4>
                  <ul>
                    <li>Psychic sleep techniques</li>
                    <li>Visualization yoga nidra</li>
                    <li>Chakra awareness nidra</li>
                    <li>31-point relaxation technique</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🙏 Bandhas & Mudras</h4>
                  <ul>
                    <li>Mula, Uddiyana, Jalandhara bandha</li>
                    <li>Maha Bandha (great energy lock)</li>
                    <li>20+ spiritual and therapeutic mudras</li>
                    <li>Energy channeling techniques</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>✨ Shatkarma Cleansing</h4>
                  <ul>
                    <li>Jala Neti, Rubber Neti</li>
                    <li>Kunjal Kriya, Agnisar</li>
                    <li>Trataka, Kapalbhati</li>
                    <li>Complete detoxification practices</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>📚 Kundalini Philosophy</h4>
                  <ul>
                    <li>Understanding all 7 chakras in depth</li>
                    <li>Kundalini awakening process</li>
                    <li>Tantra and Shakti traditions</li>
                    <li>Guru-disciple relationship</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🔬 Kundalini Anatomy</h4>
                  <ul>
                    <li>Nadis and energy channels</li>
                    <li>Pancha kosha (5 sheaths)</li>
                    <li>Chakra system and subtle body</li>
                    <li>Nervous and respiratory systems</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>🌿 Ayurveda</h4>
                  <ul>
                    <li>5 element theory and doshas</li>
                    <li>Chakra massage techniques</li>
                    <li>Tridosha, Dhatus, Vayu</li>
                    <li>Energy system balancing</li>
                  </ul>
                </div>
                <div className={styles.syllabusCard}>
                  <h4>👨‍🏫 Teaching Methodology</h4>
                  <ul>
                    <li>Class preparation and sequencing</li>
                    <li>Verbal cues and demonstration</li>
                    <li>Alignment and adjustment techniques</li>
                    <li>Student assessment and safety</li>
                  </ul>
                </div>
              </div>
              <div className={styles.syllabusNote}>
                <p><strong>Special Inclusions:</strong></p>
                <ul>
                  <li>Mantra Diksha (Initiation) by Guru</li>
                  <li>Shakti Temple Visit (Kunjapuri Devi)</li>
                  <li>Sound Healing Session</li>
                  <li>Classical Dance Class</li>
                  <li>Energy Transmission (Shaktipat)</li>
                  <li>Ganga Beach Meditation</li>
                  <li>Himalayan Sunrise Tour</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'accommodation' && (
            <div className={styles.tabPanel}>
              <h3>Comfortable & Sacred Living</h3>
              <div className={styles.accommodationGrid}>
                <div className={styles.accommodationCard}>
                  <h4>🏡 Room Facilities</h4>
                  <ul>
                    <li>Private or shared accommodation options</li>
                    <li>Attached bathrooms with hot/cold water</li>
                    <li>Comfortable beds with clean linens</li>
                    <li>Study desk and wardrobe</li>
                    <li>24-hour water supply</li>
                    <li>Free Wi-Fi throughout</li>
                    <li>CCTV security and safe environment</li>
                  </ul>
                </div>
                <div className={styles.accommodationCard}>
                  <h4>🍽️ Yogic Meals</h4>
                  <ul>
                    <li>3 sattvic vegetarian meals daily</li>
                    <li>Fresh organic ingredients</li>
                    <li>Locally sourced fruits and vegetables</li>
                    <li>Herbal tea and detox drinks</li>
                    <li>Gluten-free options available</li>
                    <li>Meals prepared with love by expert chef</li>
                    <li>Balanced nutrition for yoga practice</li>
                  </ul>
                </div>
                <div className={styles.accommodationCard}>
                  <h4>🏔️ Location & Setting</h4>
                  <ul>
                    <li>Banks of holy river Ganga</li>
                    <li>Surrounded by Himalayan mountains</li>
                    <li>Peaceful forest environment</li>
                    <li>Natural wildlife and peacocks</li>
                    <li>Walking distance to market</li>
                    <li>Meditation caves and sacred spots</li>
                    <li>Away from city noise and pollution</li>
                  </ul>
                </div>
                <div className={styles.accommodationCard}>
                  <h4>✨ Additional Facilities</h4>
                  <ul>
                    <li>Large air-ventilated yoga halls</li>
                    <li>Indoor meditation cave</li>
                    <li>Beautiful garden and terrace</li>
                    <li>Library with yoga scriptures</li>
                    <li>24-hour reception support</li>
                    <li>Laundry service available</li>
                    <li>Parking facilities</li>
                  </ul>
                </div>
              </div>
              <div className={styles.includesBox}>
                <h4>Course Fee Includes:</h4>
                <div className={styles.includesColumns}>
                  <div>
                    <p>✓ 28 nights accommodation</p>
                    <p>✓ All yoga classes and materials</p>
                    <p>✓ Daily sattvic meals</p>
                    <p>✓ Yoga books and notebooks</p>
                    <p>✓ Cleansing kits</p>
                    <p>✓ Towel and bed sheets</p>
                  </div>
                  <div>
                    <p>✓ Weekend excursions</p>
                    <p>✓ Himalayan sightseeing trip</p>
                    <p>✓ Temple visits</p>
                    <p>✓ Free Dehradun airport pickup</p>
                    <p>✓ Fire ceremony</p>
                    <p>✓ Ganga beach meditation</p>
                  </div>
                </div>
              </div>
              <div className={styles.excludesBox}>
                <h4>Not Included:</h4>
                <p>✗ Air-conditioning (additional $150)</p>
                <p>✗ Airfare and visa fees</p>
                <p>✗ Delhi airport pickup ($85-100)</p>
                <p>✗ Ayurvedic treatments (available at extra cost)</p>
                <p>✗ Personal expenses</p>
              </div>
            </div>
          )}

          {activeTab === 'certification' && (
            <div className={styles.tabPanel}>
              <h3>RYT-300 Certification & Yoga Alliance</h3>
              <p>
                Upon successful completion of the 300 Hour Kundalini Yoga Teacher Training, you will receive 
                a certification that is recognized by Yoga Alliance International. This certification enables 
                you to register as RYT-300 (Registered Yoga Teacher - 300 hours) and teach yoga anywhere in the world.
              </p>
              <div className={styles.certificationGrid}>
                <div className={styles.certificationCard}>
                  <h4>🎓 What You'll Receive</h4>
                  <ul>
                    <li>300-hour completion certificate</li>
                    <li>Yoga Alliance registration eligibility</li>
                    <li>International teaching credentials</li>
                    <li>Lifetime alumni support</li>
                    <li>Access to advanced courses</li>
                    <li>Teacher community membership</li>
                  </ul>
                </div>
                <div className={styles.certificationCard}>
                  <h4>📋 Requirements</h4>
                  <ul>
                    <li>100% attendance mandatory</li>
                    <li>Completion of all assignments</li>
                    <li>Pass written and practical exams</li>
                    <li>Teaching demonstration</li>
                    <li>Good conduct and discipline</li>
                    <li>Active class participation</li>
                  </ul>
                </div>
              </div>
              <div className={styles.allianceInfo}>
                <h4>About Yoga Alliance</h4>
                <p>
                  Yoga Alliance is the largest international nonprofit association representing the yoga community. 
                  It supports over 100,000 registered yoga teachers and 7,000+ registered yoga schools worldwide. 
                  RYT-300 certification offers you an international identity of your knowledge, experience, and training. 
                  People feel confident in hiring you as they know your expertise meets globally recognized standards.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${activeFaq === index ? styles.faqActive : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon}>{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Awaken Your Kundalini?</h2>
          <p>
            Join us in Rishikesh for a life-transforming journey into the depths of Kundalini Yoga. 
            Limited seats available for each batch.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Book Your Spot Now</button>
            <button className={styles.ctaSecondary}>Download Brochure</button>
          </div>
          <div className={styles.ctaInfo}>
            <p>📧 Email: info@kundaliniyoga.com</p>
            <p>📱 WhatsApp: +91 98765 43210</p>
          </div>
        </div>
      </section>


    </div>
  );
}