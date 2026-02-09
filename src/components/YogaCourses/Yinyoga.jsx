import React, { useState } from 'react';
import styles from '../../assets/styles/YogaCourse/Yinyoga.module.css';
import banner1 from '../../assets/images/Yin_Banner_V01.webp';
import BooksSection from 'components/MyBooks/Bookssection';

export default function YinYoga() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSchool, setActiveSchool] = useState('rishikesh');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schools = {
    rishikesh: {
      name: 'Rishikesh Yoga Association',
      hours: '50 Hour',
      tagline: 'Traditional Yin Yoga Practice',
      location: 'Rishikesh, India',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    },
    vinyasa: {
      name: 'Vinyasa Yoga Ashram',
      hours: '100 Hour',
      tagline: 'Comprehensive Yin Training',
      location: 'Rishikesh, Uttarakhand',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    },
  };

  const meridians = [
    {
      name: 'Lung Meridian',
      element: 'Metal',
      organs: 'Lungs & Large Intestine',
    },
    { name: 'Kidney Meridian', element: 'Water', organs: 'Kidneys & Bladder' },
    { name: 'Liver Meridian', element: 'Wood', organs: 'Liver & Gallbladder' },
    {
      name: 'Heart Meridian',
      element: 'Fire',
      organs: 'Heart & Small Intestine',
    },
    { name: 'Spleen Meridian', element: 'Earth', organs: 'Spleen & Stomach' },
    {
      name: 'Pericardium Meridian',
      element: 'Fire',
      organs: 'Pericardium & Triple Burner',
    },
  ];

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={banner1} alt="Yin Yoga Practice" />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.quoteText}>
            Slow Down • Find Stillness • Go Deeper
          </p>
          <h1 className={styles.mainTitle}>Yin Yoga Teacher Training</h1>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Yin Yoga YTT</span>
          </div>
        </div>
      </section>

      {/* HERO STATS */}
      <section className={styles.heroStats}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🧘‍♀️</div>
            <div className={styles.statValue}>50-100</div>
            <div className={styles.statLabel}>Hour Options</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🌙</div>
            <div className={styles.statValue}>12</div>
            <div className={styles.statLabel}>Meridians</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>⏰</div>
            <div className={styles.statValue}>3-5 Min</div>
            <div className={styles.statLabel}>Pose Holds</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>☯️</div>
            <div className={styles.statValue}>Yin-Yang</div>
            <div className={styles.statLabel}>Balance</div>
          </div>
        </div>
      </section>

      {/* FLOATING INFO CARDS */}
      <section className={styles.floatingSection}>
        <div className={styles.container}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>☯️</div>
              <h3>Taoist Philosophy</h3>
              <p>
                Learn the ancient wisdom of Yin-Yang balance and Chinese
                meridian system
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>🧠</div>
              <h3>Deep Tissue Work</h3>
              <p>
                Target connective tissues, fascia, joints and ligaments for
                profound release
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>🎓</div>
              <h3>Certified Training</h3>
              <p>
                Complete 50 or 100-hour programs with internationally recognized
                certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>The Art of Stillness</span>
            <h2 className={styles.sectionTitle}>What is Yin Yoga?</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <p className={styles.leadText}>
                Yin Yoga is a slow-paced style of yoga where poses are held for
                longer periods - typically 3 to 5 minutes or more. Unlike
                dynamic Yang styles, Yin targets the deep connective tissues,
                fascia, ligaments, and joints rather than the muscles, promoting
                flexibility and circulation in the joints while calming the
                nervous system.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🌊</div>
                  <div>
                    <h4>Passive Practice</h4>
                    <p>
                      Muscles are relaxed, allowing gravity to do the work in
                      stretching connective tissues
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🔮</div>
                  <div>
                    <h4>Meridian System</h4>
                    <p>
                      Stimulates energy channels based on Traditional Chinese
                      Medicine principles
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🧠</div>
                  <div>
                    <h4>Meditative State</h4>
                    <p>
                      Long holds create space for meditation, introspection and
                      emotional release
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.overviewImage}>
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80"
                alt="Yin Yoga Practice"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.mantraBox}>
                  <div className={styles.mantraSymbol}>☯️</div>
                  <p>Find Your Edge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOLS SELECTION */}
      <section className={styles.schoolsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Training Options</span>
            <h2 className={styles.sectionTitle}>Choose Your Program</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.schoolsGrid}>
            {Object.entries(schools).map(([key, school]) => (
              <div
                key={key}
                className={`${styles.schoolCard} ${activeSchool === key ? styles.schoolCardActive : ''}`}
                onClick={() => setActiveSchool(key)}
              >
                <div
                  className={styles.schoolImage}
                  style={{ backgroundImage: `url(${school.image})` }}
                >
                  <div className={styles.schoolOverlay}></div>
                  <div className={styles.schoolBadge}>{school.hours}</div>
                </div>
                <div className={styles.schoolInfo}>
                  <h3>{school.name}</h3>
                  <p className={styles.schoolTagline}>{school.tagline}</p>
                  <p className={styles.schoolLocation}>📍 {school.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERIDIANS SECTION */}
      <section className={styles.meridiansSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Energy Channels</span>
            <h2 className={styles.sectionTitle}>The 12 Meridians</h2>
            <div className={styles.decorativeLine}></div>
            <p className={styles.sectionDesc}>
              Understand the energy pathways that flow through your body
              according to Traditional Chinese Medicine
            </p>
          </div>

          <div className={styles.meridiansList}>
            {meridians.map((meridian, index) => (
              <div key={index} className={styles.meridianItem}>
                <div className={styles.meridianIcon}>☯️</div>
                <div className={styles.meridianContent}>
                  <h3>{meridian.name}</h3>
                  <p className={styles.meridianElement}>
                    Element: {meridian.element}
                  </p>
                  <p className={styles.meridianOrgans}>{meridian.organs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className={styles.curriculumSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Complete Training</span>
            <h2 className={styles.sectionTitle}>Course Curriculum</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabButtons}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.active : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'asanas' ? styles.active : ''}`}
                onClick={() => setActiveTab('asanas')}
              >
                Asanas
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'anatomy' ? styles.active : ''}`}
                onClick={() => setActiveTab('anatomy')}
              >
                Anatomy
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'philosophy' ? styles.active : ''}`}
                onClick={() => setActiveTab('philosophy')}
              >
                Philosophy
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'teaching' ? styles.active : ''}`}
                onClick={() => setActiveTab('teaching')}
              >
                Teaching
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'overview' && (
                <div className={styles.tabPane}>
                  <h3>What You Will Learn</h3>
                  <div className={styles.curriculumGrid}>
                    <div className={styles.curriculumCard}>
                      <h4>🧘‍♀️ 50+ Yin Asanas</h4>
                      <p>
                        Complete practice of all major Yin poses with variations
                        and modifications
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🌬️ Yin Pranayama</h4>
                      <p>
                        Breathing techniques including heating, cooling
                        pranayama and mudras
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🦴 Fascia Training</h4>
                      <p>
                        Deep understanding of connective tissue and its role in
                        flexibility
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>☯️ Taoist Philosophy</h4>
                      <p>
                        Yin-Yang principles, meridian system and Traditional
                        Chinese Medicine
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🔬 Yin Anatomy</h4>
                      <p>
                        Tissues, joints, compression, tension and skeletal
                        variations
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🧠 Meditation Practices</h4>
                      <p>
                        Chakra awakening, breath awareness and mindfulness
                        meditation
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🌿 Ayurvedic Perspectives</h4>
                      <p>
                        Integration of Ayurveda with Yin yoga practice and
                        philosophy
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>👨‍🏫 Teaching Methodology</h4>
                      <p>
                        Complete training on how to teach Yin yoga safely and
                        effectively
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'asanas' && (
                <div className={styles.tabPane}>
                  <h3>Yin Yoga Asanas Practice</h3>
                  <div className={styles.asanaColumns}>
                    <div className={styles.asanaColumn}>
                      <h4>Foundational Poses</h4>
                      <ul className={styles.curriculumList}>
                        <li>Melting Heart Pose</li>
                        <li>Ankle Stretch Pose</li>
                        <li>Banana Pose</li>
                        <li>Bridge Pose</li>
                        <li>Half Butterfly Pose</li>
                        <li>Butterfly Pose</li>
                        <li>Camel Pose</li>
                        <li>Cat Pulling its Tail Pose</li>
                        <li>Caterpillar Pose</li>
                        <li>Child's Pose</li>
                        <li>Dangling Pose</li>
                        <li>Deer Pose</li>
                        <li>Dragon Pose</li>
                      </ul>
                    </div>
                    <div className={styles.asanaColumn}>
                      <h4>Intermediate & Advanced</h4>
                      <ul className={styles.curriculumList}>
                        <li>Frog Pose</li>
                        <li>Happy Baby Pose</li>
                        <li>Reclining Spinal Twist Pose</li>
                        <li>Saddle Pose</li>
                        <li>Shavasana</li>
                        <li>Shoelace Pose</li>
                        <li>Snail Pose</li>
                        <li>Sphinx Pose & Seal Pose</li>
                        <li>Swan & Sleeping Swan</li>
                        <li>Square Pose</li>
                        <li>Squat Pose</li>
                        <li>Toe Squat Pose</li>
                        <li>Straddle Pose</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.asanaNote}>
                    <p>
                      <strong>Each pose includes:</strong>
                    </p>
                    <ul>
                      <li>Anatomical alignments and proper technique</li>
                      <li>Variations and modifications for all levels</li>
                      <li>Understanding of the "edge" concept</li>
                      <li>Contraindications and safety guidelines</li>
                      <li>How to use props effectively</li>
                      <li>Which meridians and organs are targeted</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'anatomy' && (
                <div className={styles.tabPane}>
                  <h3>Yin Anatomy & Physiology</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      <strong>Tissues:</strong> Understanding different tissue
                      types and their response to Yin practice
                    </li>
                    <li>
                      <strong>Joints and Movement:</strong> Study of the 9 major
                      joint complexes and individual variations
                    </li>
                    <li>
                      <strong>Systems:</strong> Musculoskeletal system and how
                      Yin affects different body systems
                    </li>
                    <li>
                      <strong>Compression and Tension:</strong> How these forces
                      work in the body during Yin postures
                    </li>
                    <li>
                      <strong>Connective Tissue:</strong> Deep dive into fascia,
                      ligaments, tendons and their properties
                    </li>
                    <li>
                      <strong>Fascia Training:</strong> Complete anatomy of
                      fascia and its importance in flexibility
                    </li>
                    <li>
                      <strong>Fascia and Emotions:</strong> Understanding
                      emotional storage in fascia and trauma release
                    </li>
                    <li>
                      <strong>Joints and Hyaluronic Acid:</strong> Effect of Yin
                      Yoga on joint health and lubrication
                    </li>
                    <li>
                      <strong>The Pelvic Floor:</strong> Understanding the
                      pelvis as the house of emotions
                    </li>
                    <li>
                      <strong>Psoas Muscle:</strong> The soul of the body - its
                      function and emotional connections
                    </li>
                    <li>
                      <strong>Stretching vs Stressing:</strong> Understanding
                      the difference in Yin practice
                    </li>
                    <li>
                      <strong>Skeletal Variation:</strong> Why everyone's body
                      is different and how to honor this
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className={styles.tabPane}>
                  <h3>Yin Philosophy & Energy Systems</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      <strong>Yin-Yang Theory:</strong> Understanding the
                      concept of duality and balance
                    </li>
                    <li>
                      <strong>History of Yin Yoga:</strong> Origins and
                      evolution of the practice
                    </li>
                    <li>
                      <strong>Taoist Philosophy:</strong> Ancient wisdom and
                      principles applied to yoga
                    </li>
                    <li>
                      <strong>12 Meridians:</strong> Energy channels and their
                      functions in the body
                    </li>
                    <li>
                      <strong>Yin and Yang Organs:</strong> Understanding organ
                      pairs in Chinese Medicine
                    </li>
                    <li>
                      <strong>Body Meridian System:</strong> Detailed study of
                      energy pathways
                    </li>
                    <li>
                      <strong>Tattvas of Yin:</strong> Five elements theory
                    </li>
                    <li>
                      <strong>Elements:</strong> Earth, Water, Fire, Air, Ether
                      in Yin practice
                    </li>
                    <li>
                      <strong>Chakras:</strong> Seven energy centers and their
                      connection to Yin
                    </li>
                    <li>
                      <strong>Nadis:</strong> 72,000 energy channels in yogic
                      philosophy
                    </li>
                    <li>
                      <strong>3 Bodies, 5 Pranas, 7 Chakras:</strong> Complete
                      philosophy integration
                    </li>
                    <li>
                      <strong>Yogic and Taoist Integration:</strong>{' '}
                      Relationship between both philosophies
                    </li>
                    <li>
                      <strong>Physical and Energetic Aspects:</strong> How Yin
                      works on both levels
                    </li>
                    <li>
                      <strong>Intention in Asanas:</strong> Setting proper
                      intention for deeper practice
                    </li>
                    <li>
                      <strong>Applying Yin in Life:</strong> Living principles
                      beyond the mat
                    </li>
                    <li>
                      <strong>Yin & Yoga Nidra:</strong> Connection between
                      practices
                    </li>
                    <li>
                      <strong>Ayurvedic Perspectives:</strong> Doshas, elements
                      and Yin practice
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'teaching' && (
                <div className={styles.tabPane}>
                  <h3>Teaching Methodology</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      <strong>Art of Teaching Yin:</strong> Understanding the
                      unique approach to Yin instruction
                    </li>
                    <li>
                      <strong>How to Teach 50+ Poses:</strong> Detailed
                      methodology for each asana
                    </li>
                    <li>
                      <strong>Building Teaching Skills:</strong> Developing
                      confidence and expertise
                    </li>
                    <li>
                      <strong>Communication Skills:</strong> Clear, effective
                      instruction techniques
                    </li>
                    <li>
                      <strong>Finding Your Voice:</strong> Tone, dynamics and
                      pacing for Yin classes
                    </li>
                    <li>
                      <strong>Proper Instructions:</strong> How to give
                      efficient verbal cues
                    </li>
                    <li>
                      <strong>Adjustments & Corrections:</strong> When and how
                      to assist students safely
                    </li>
                    <li>
                      <strong>Helping Students Find Edge:</strong> Guiding to
                      appropriate depth
                    </li>
                    <li>
                      <strong>Breathing Guidance:</strong> Teaching ocean breath
                      and proper breathing in poses
                    </li>
                    <li>
                      <strong>Using Props:</strong> Blocks, bolsters, cushions,
                      blankets effectively
                    </li>
                    <li>
                      <strong>Modifications:</strong> When and how to modify
                      poses for different bodies
                    </li>
                    <li>
                      <strong>Red/Green/Orange Zones:</strong> Safety principles
                      in practice
                    </li>
                    <li>
                      <strong>Understanding Limitations:</strong> Recognizing
                      student capabilities
                    </li>
                    <li>
                      <strong>Structuring Classes:</strong> How to sequence a
                      Yin yoga class
                    </li>
                    <li>
                      <strong>Theme Classes:</strong> Designing classes around
                      meridians, chakras, elements
                    </li>
                    <li>
                      <strong>Self-Awareness During Holds:</strong> Teaching
                      mindfulness in stillness
                    </li>
                    <li>
                      <strong>Preparing for Class:</strong> Planning and
                      organization
                    </li>
                    <li>
                      <strong>Managing a Class:</strong> Handling different
                      levels and needs
                    </li>
                    <li>
                      <strong>Overcoming Challenges:</strong> Solutions to
                      common teaching obstacles
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRANAYAMA & MEDITATION */}
      <section className={styles.practicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Beyond Asanas</span>
            <h2 className={styles.sectionTitle}>Pranayama & Meditation</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.practicesGrid}>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}>🌬️</div>
              <h3>Yin Pranayama</h3>
              <ul>
                <li>Understanding the breath</li>
                <li>Types of breath patterns</li>
                <li>Heating Pranayama techniques</li>
                <li>Cooling Pranayama practices</li>
                <li>Mudras for energy channeling</li>
                <li>Ocean breath (Ujjayi)</li>
                <li>Breath awareness in poses</li>
              </ul>
            </div>

            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}>🧘</div>
              <h3>Meditation Practices</h3>
              <ul>
                <li>How to sit in meditation</li>
                <li>How to relax in meditation</li>
                <li>Breath awareness meditation</li>
                <li>Proper breathing in meditation</li>
                <li>Focusing the mind</li>
                <li>Chakra awakening meditation</li>
                <li>Stillness and silence practice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Investment in Yourself</span>
            <h2 className={styles.sectionTitle}>Course Pricing</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>50 Hour Program</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>499</span>
                </div>
                <p className={styles.priceDesc}>Rishikesh Yoga Association</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>7 Days / 6 Nights Accommodation</li>
                <li>Shared Room with Private Bathroom</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>50-Hour Certification</li>
                <li>Airport Pickup (Dehradun)</li>
                <li>Yoga Mat & Props Provided</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <div className={styles.pricingHeader}>
                <h3>100 Hour Program</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>899</span>
                </div>
                <p className={styles.priceDesc}>Vinyasa Yoga Ashram</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>14 Days / 13 Nights Accommodation</li>
                <li>Private Room Option Available</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>100-Hour Certification</li>
                <li>Airport Pickup (Dehradun)</li>
                <li>Yoga Mat & Props Provided</li>
                <li>Weekend Excursion</li>
                <li>Ayurvedic Consultation</li>
                <li>Massage Session Included</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Private Deluxe</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>1199</span>
                </div>
                <p className={styles.priceDesc}>Premium Experience</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>14 Days / 13 Nights Accommodation</li>
                <li>Deluxe Private Room with AC</li>
                <li>3 Vegetarian Meals Daily</li>
                <li>All Course Materials & Books</li>
                <li>100-Hour Certification</li>
                <li>Airport Pickup (Delhi or Dehradun)</li>
                <li>All Props & Equipment</li>
                <li>3 Massage Sessions</li>
                <li>Private Meditation Sessions</li>
                <li>Himalayan Sightseeing</li>
                <li>Sound Healing Session</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>
          </div>
        </div>
      </section>
      <BooksSection />

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.decorativeLine}></div>
          </div>

          <div className={styles.faqList}>
            {[
              {
                q: 'What is the difference between Yin and Yang yoga?',
                a: 'Yang yoga styles (like Vinyasa, Ashtanga) are dynamic and muscular, focusing on building strength and stamina. Yin yoga is passive and meditative, targeting the deep connective tissues and joints through long-held poses (3-5 minutes). Yin complements Yang practice beautifully.',
              },
              {
                q: 'Can beginners join Yin Yoga teacher training?',
                a: 'Yes! Yin yoga is accessible to all levels. While having some yoga experience is beneficial, the gentle nature of Yin makes it suitable for beginners. The slow pace allows time to learn proper alignment and understand the practice deeply.',
              },
              {
                q: 'What is the meridian system in Yin Yoga?',
                a: 'Meridians are energy channels from Traditional Chinese Medicine. There are 12 main meridians that carry Chi (life force energy) through the body. Yin poses target specific meridian lines, helping to remove blockages and restore energy flow to organs and systems.',
              },
              {
                q: 'How is fascia related to Yin Yoga?',
                a: 'Fascia is the connective tissue that wraps around muscles, bones, and organs. Yin yoga applies gentle, sustained stress to fascia, helping it become more hydrated and pliable. This increases flexibility and can release stored emotions and trauma held in the tissue.',
              },
              {
                q: 'What is the difference between 50 and 100-hour programs?',
                a: 'The 50-hour program covers fundamental Yin yoga practice, philosophy, and teaching basics. The 100-hour program goes deeper into anatomy, fascia training, advanced teaching techniques, and includes more practice hours. Choose based on your goals and time availability.',
              },
              {
                q: 'Will I receive certification after completion?',
                a: "Yes! Upon successful completion, you'll receive a certificate for either 50 or 100 hours. These hours can be used toward Yoga Alliance continuing education credits if you're already a registered teacher, or as standalone certification.",
              },
            ].map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${openFaq === index ? styles.active : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={styles.faqIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${styles.faqAnswer} ${openFaq === index ? styles.show : ''}`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Slow Down & Go Deeper?</h2>
          <p>
            Join us in Rishikesh for a transformative Yin Yoga journey of
            stillness, surrender and self-discovery
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Enroll Now</button>
            <button className={styles.ctaSecondary}>Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
}
