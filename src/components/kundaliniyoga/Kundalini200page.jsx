import { useState } from 'react';
import styles from '../../assets/styles/kundalini_yoga/Kundalini200page.module.css';

const Kundalini200Page = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
            alt="Kundalini Meditation"
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroAnimation}>
            <div className={styles.chakraCircle}></div>
            <div className={styles.energyFlow}></div>
          </div>

          <div className={styles.heroText}>
            <span className={styles.heroLabel}>Awaken Your Inner Power</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>200 Hour</span>
              <span className={styles.titleLine2}>Kundalini Yoga</span>
              <span className={styles.titleLine3}>Teacher Training</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Transform through ancient wisdom • Rise your consciousness •
              Awaken dormant energy
            </p>

            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>
                <span>Begin Your Journey</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className={styles.secondaryBtn}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🧘</div>
            <div className={styles.statValue}>200+</div>
            <div className={styles.statLabel}>Hours Training</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🌟</div>
            <div className={styles.statValue}>7</div>
            <div className={styles.statLabel}>Chakras Awakened</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>🏔️</div>
            <div className={styles.statValue}>25</div>
            <div className={styles.statLabel}>Days in Rishikesh</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>✨</div>
            <div className={styles.statValue}>RYT</div>
            <div className={styles.statLabel}>Certified</div>
          </div>
        </div>
      </section>

      {/* FLOATING INFO CARDS */}
      <section className={styles.floatingSection}>
        <div className={styles.container}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>🕉️</div>
              <h3>Sacred Location</h3>
              <p>
                Train in Rishikesh, the spiritual heart of yoga beside the holy
                Ganges
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>👨‍🏫</div>
              <h3>Expert Masters</h3>
              <p>
                Learn from Himalayan tradition teachers with 30+ years
                experience
              </p>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.cardIcon}>📜</div>
              <h3>Yoga Alliance</h3>
              <p>
                Internationally recognized RYT-200 certification upon completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              Discover the Power Within
            </span>
            <h2 className={styles.sectionTitle}>What is Kundalini Yoga?</h2>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <p className={styles.leadText}>
                Kundalini is the hidden force that exists within human beings—a
                latent energy asleep at the root of our spines. When awakened,
                it courses through our body's centers and chakras, cleansing us
                from negativity, stress, anxiety, and depression.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>⚡</div>
                  <div>
                    <h4>Rapid Transformation</h4>
                    <p>
                      Works faster than other yoga styles for spiritual
                      development
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🌈</div>
                  <div>
                    <h4>Complete System</h4>
                    <p>
                      Physical postures, breathing, mantra, meditation &
                      philosophy
                    </p>
                  </div>
                </div>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>💫</div>
                  <div>
                    <h4>Divine Connection</h4>
                    <p>
                      Experience inner joy, fearlessness, mindfulness and
                      self-awareness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.overviewImage}>
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                alt="Meditation Practice"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.mantraBox}>
                  <div className={styles.mantraSymbol}>ॐ</div>
                  <p>Om Namah Shivaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAKRAS SECTION */}
      <section className={styles.chakrasSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Energy Centers</span>
            <h2 className={styles.sectionTitle}>The Seven Chakras</h2>
            <p className={styles.sectionDesc}>
              Awaken and balance the seven major energy centers along your spine
            </p>
          </div>

          <div className={styles.chakrasList}>
            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #C41E3A 0%, #8B1F3F 100%)',
                }}
              >
                <span className={styles.chakraNumber}>1</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Muladhara</h3>
                <p className={styles.chakraLabel}>Root Chakra</p>
                <p>
                  Foundation of physical and spiritual being, connecting body
                  and soul at the base of spine
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #FF6B35 0%, #D84315 100%)',
                }}
              >
                <span className={styles.chakraNumber}>2</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Swadhishthana</h3>
                <p className={styles.chakraLabel}>Sacral Chakra</p>
                <p>
                  Center of creative and sexual energy, controlling desire and
                  procreative power
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #FDB813 0%, #F57F17 100%)',
                }}
              >
                <span className={styles.chakraNumber}>3</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Manipura</h3>
                <p className={styles.chakraLabel}>Solar Plexus Chakra</p>
                <p>
                  Power seat below the navel, controlling physical and
                  physiological wellbeing
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                }}
              >
                <span className={styles.chakraNumber}>4</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Anahata</h3>
                <p className={styles.chakraLabel}>Heart Chakra</p>
                <p>
                  Center of emotions in the chest, opening deep happiness and
                  peace when awakened
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #2196F3 0%, #1565C0 100%)',
                }}
              >
                <span className={styles.chakraNumber}>5</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Vishuddhi</h3>
                <p className={styles.chakraLabel}>Throat Chakra</p>
                <p>
                  Chakra of purity behind throat, awakening brings sweet voice
                  and divine communication
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #673AB7 0%, #4527A0 100%)',
                }}
              >
                <span className={styles.chakraNumber}>6</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Ajna</h3>
                <p className={styles.chakraLabel}>Third Eye Chakra</p>
                <p>
                  Command center between eyebrows, providing visions, light
                  flashes and deep stillness
                </p>
              </div>
            </div>

            <div className={styles.chakraItem}>
              <div
                className={styles.chakraCircle}
                style={{
                  background:
                    'linear-gradient(135deg, #9C27B0 0%, #6A1B9A 100%)',
                }}
              >
                <span className={styles.chakraNumber}>7</span>
              </div>
              <div className={styles.chakraContent}>
                <h3>Sahasrara</h3>
                <p className={styles.chakraLabel}>Crown Chakra</p>
                <p>
                  Supreme state at top of skull, opening tremendous powers and
                  state of divine trance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className={styles.curriculumSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Complete Training</span>
            <h2 className={styles.sectionTitle}>Course Curriculum</h2>
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
                className={`${styles.tabBtn} ${activeTab === 'pranayama' ? styles.active : ''}`}
                onClick={() => setActiveTab('pranayama')}
              >
                Pranayama
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'meditation' ? styles.active : ''}`}
                onClick={() => setActiveTab('meditation')}
              >
                Meditation
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'philosophy' ? styles.active : ''}`}
                onClick={() => setActiveTab('philosophy')}
              >
                Philosophy
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'overview' && (
                <div className={styles.tabPane}>
                  <h3>What You Will Learn</h3>
                  <div className={styles.curriculumGrid}>
                    <div className={styles.curriculumCard}>
                      <h4>🧘 Kundalini Yoga Asanas</h4>
                      <p>
                        Traditional postures to awaken energy centers and
                        prepare body for awakening
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🌬️ Pranayama & Kriya</h4>
                      <p>
                        Breathing practices and kriyas for purification and
                        energy activation
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🎵 Mantra & Kirtan</h4>
                      <p>
                        Sacred chanting and sound vibrations to elevate
                        consciousness
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>🧠 Meditation Techniques</h4>
                      <p>
                        Chakra meditation, Kundalini awakening and consciousness
                        expansion
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>📚 Tantra Philosophy</h4>
                      <p>
                        Ancient wisdom of chakras, nadis, and energy body
                        systems
                      </p>
                    </div>
                    <div className={styles.curriculumCard}>
                      <h4>👥 Teaching Methodology</h4>
                      <p>
                        How to guide students safely through Kundalini awakening
                        journey
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'asanas' && (
                <div className={styles.tabPane}>
                  <h3>Kundalini Asana Practice</h3>
                  <ul className={styles.curriculumList}>
                    <li>Pawanmuktasana Series (Preparatory practices)</li>
                    <li>
                      Warrior Poses (Virabhadrasana I, II, III) - Strengthening
                      masculine energy
                    </li>
                    <li>Cobra Pose (Bhujangasana) - Awakening heart chakra</li>
                    <li>
                      Bow Pose (Dhanurasana) - Improving digestion and energy
                      flow
                    </li>
                    <li>Camel Pose (Ustrasana) - Arousing Manipura chakra</li>
                    <li>
                      Bridge Pose (Setu Bandhasana) - Connecting lower and upper
                      chakras
                    </li>
                    <li>Shoulder Stand - Rejuvenating brain cells</li>
                    <li>
                      Spinal Twists (Ardha Matsyendrasana) - Elongating spine
                    </li>
                    <li>
                      Forward Bends (Paschimottanasana) - Increasing flexibility
                    </li>
                    <li>Plus 50+ traditional Kundalini yoga postures</li>
                  </ul>
                </div>
              )}

              {activeTab === 'pranayama' && (
                <div className={styles.tabPane}>
                  <h3>Breathing & Energy Practices</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Nadi Shodhana - Balancing both hemispheres and activating
                      Sushumna
                    </li>
                    <li>Bhastrika - Emotional stability and fire activation</li>
                    <li>Kapalbhati - Skull and emotional cleansing</li>
                    <li>Bhramari - Ajna and Sahasrara chakra cleansing</li>
                    <li>Ujjayi - The psychic breath for energy retention</li>
                    <li>Spinal Breathing - Activating Sushumna Nadi</li>
                    <li>Agnisar - Fire cleansing for Manipura chakra</li>
                    <li>
                      Bandhas (Energy Locks) - Moola, Uddiyana, Jalandhara
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'meditation' && (
                <div className={styles.tabPane}>
                  <h3>Meditation & Consciousness</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Chakra Awareness Meditation - Awakening each energy center
                    </li>
                    <li>
                      Kundalini Awakening Meditation - Raising dormant energy
                    </li>
                    <li>
                      Trataka - Third eye activation through candle gazing
                    </li>
                    <li>Ajapa Meditation - Spontaneous breath awareness</li>
                    <li>Yoga Nidra - Psychic sleep for deep healing</li>
                    <li>Mantra Meditation - Sacred sound vibrations</li>
                    <li>Silent Meditation - One day Mauna practice</li>
                    <li>Kirtan - Devotional chanting evenings</li>
                  </ul>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className={styles.tabPane}>
                  <h3>Kundalini Tantra Philosophy</h3>
                  <ul className={styles.curriculumList}>
                    <li>
                      Understanding Kundalini Shakti - The Divine Feminine
                      Energy
                    </li>
                    <li>
                      Seven Chakras - Location, qualities, and awakening methods
                    </li>
                    <li>
                      Nadis - 72,000 energy channels, focus on Ida, Pingala,
                      Sushumna
                    </li>
                    <li>Granthis - Three psychic knots blocking energy flow</li>
                    <li>
                      Kundalini Awakening Process - Safe practices and
                      precautions
                    </li>
                    <li>
                      Shiva-Shakti Union - Merger of consciousness and energy
                    </li>
                    <li>Yoga Sutras of Patanjali - Eight limbs foundation</li>
                    <li>
                      Tantra Tradition - Ancient practices of energy
                      transformation
                    </li>
                    <li>
                      Kundalini Anatomy - Understanding subtle body systems
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Your Daily Rhythm</span>
            <h2 className={styles.sectionTitle}>Daily Schedule</h2>
            <p className={styles.sectionDesc}>
              Immerse yourself in yogic discipline with our carefully structured
              daily routine
            </p>
          </div>

          <div className={styles.scheduleTimeline}>
            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>06:00</div>
              <div className={styles.scheduleContent}>
                <h4>Morning Bell & Preparation</h4>
                <p>
                  Wake up to the sound of temple bells and prepare for the day
                </p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>06:30</div>
              <div className={styles.scheduleContent}>
                <h4>Shatkarma (Cleansing Kriyas)</h4>
                <p>Jala Neti, Trataka, and other purification practices</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>07:00</div>
              <div className={styles.scheduleContent}>
                <h4>Pranayama & Meditation</h4>
                <p>Breathing exercises and chakra meditation session</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>08:30</div>
              <div className={styles.scheduleContent}>
                <h4>Breakfast</h4>
                <p>Nutritious sattvic vegetarian meal with herbal tea</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>10:00</div>
              <div className={styles.scheduleContent}>
                <h4>Kundalini Yoga Asana Practice</h4>
                <p>Traditional postures and kriyas for energy awakening</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>12:00</div>
              <div className={styles.scheduleContent}>
                <h4>Lunch Break</h4>
                <p>Main meal of the day with fresh organic ingredients</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>14:00</div>
              <div className={styles.scheduleContent}>
                <h4>Philosophy & Theory Class</h4>
                <p>Kundalini philosophy, anatomy, and teaching methodology</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>16:00</div>
              <div className={styles.scheduleContent}>
                <h4>Alignment & Adjustment Workshop</h4>
                <p>Learning safe teaching techniques and proper alignment</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>17:30</div>
              <div className={styles.scheduleContent}>
                <h4>Herbal Tea Break</h4>
                <p>Light refreshments and informal discussions</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>18:00</div>
              <div className={styles.scheduleContent}>
                <h4>Kirtan & Mantra Chanting</h4>
                <p>Devotional singing and sacred sound vibrations</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>19:00</div>
              <div className={styles.scheduleContent}>
                <h4>Dinner</h4>
                <p>Light evening meal for optimal digestion</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>20:30</div>
              <div className={styles.scheduleContent}>
                <h4>Self-Study & Rest</h4>
                <p>Personal practice, journaling, and early sleep</p>
              </div>
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
          </div>

          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Shared Room</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>999</span>
                </div>
                <p className={styles.priceDesc}>Per Person</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>✓ 25 Days / 24 Nights Accommodation</li>
                <li>✓ Shared Room with Private Bathroom</li>
                <li>✓ 3 Vegetarian Meals Daily</li>
                <li>✓ All Course Materials & Books</li>
                <li>✓ Weekend Excursions</li>
                <li>✓ RYT-200 Certification</li>
                <li>✓ Airport Pickup (Dehradun)</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>Most Popular</div>
              <div className={styles.pricingHeader}>
                <h3>Private Room</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>1199</span>
                </div>
                <p className={styles.priceDesc}>Single Occupancy</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>✓ 25 Days / 24 Nights Accommodation</li>
                <li>✓ Private Room with Ensuite Bathroom</li>
                <li>✓ 3 Vegetarian Meals Daily</li>
                <li>✓ All Course Materials & Books</li>
                <li>✓ Weekend Excursions</li>
                <li>✓ RYT-200 Certification</li>
                <li>✓ Airport Pickup (Dehradun)</li>
                <li>✓ Full Body Massage Session</li>
                <li>✓ Priority Support</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Private Deluxe</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>1499</span>
                </div>
                <p className={styles.priceDesc}>Premium Experience</p>
              </div>
              <ul className={styles.priceIncludes}>
                <li>✓ 25 Days / 24 Nights Accommodation</li>
                <li>✓ Deluxe Private Room with AC</li>
                <li>✓ 3 Vegetarian Meals Daily</li>
                <li>✓ All Course Materials & Books</li>
                <li>✓ Weekend Excursions</li>
                <li>✓ RYT-200 Certification</li>
                <li>✓ Airport Pickup (Delhi or Dehradun)</li>
                <li>✓ 3 Full Body Massage Sessions</li>
                <li>✓ Ayurvedic Consultation</li>
                <li>✓ Private Meditation Sessions</li>
              </ul>
              <button className={styles.priceBtn}>Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqList}>
            {[
              {
                q: 'Is Kundalini Yoga different from other types of yoga?',
                a: 'Yes, Kundalini yoga is more spiritual than physical. While it includes asanas, the main focus is on awakening dormant energy through breathing, mantra, and meditation. It works faster than other styles for spiritual development and requires regular, sincere practice.',
              },
              {
                q: 'Can beginners join this course?',
                a: "While Kundalini is intense, our course accommodates all levels. However, having basic knowledge of Hatha yoga, pranayama, and meditation is beneficial. If you're new to yoga, we recommend starting with foundation practices before Kundalini training.",
              },
              {
                q: 'What are chakras and how do we awaken them?',
                a: 'Chakras are energy centers along the spine. To awaken them, you need strong focus, practice of pranayama, meditation, and guidance from an experienced teacher. Our course teaches safe methods to activate each chakra systematically.',
              },
              {
                q: 'Will I receive Yoga Alliance certification?',
                a: "Yes! Upon successful completion, you'll receive RYT-200 certification recognized by Yoga Alliance, allowing you to teach yoga anywhere in the world.",
              },
              {
                q: 'What is included in the course fee?',
                a: 'All accommodation, meals, course materials, excursions, certification, and airport pickup from Dehradun are included. Private rooms include additional amenities. Only visa, flights, and personal expenses are not covered.',
              },
              {
                q: 'What should I bring to the course?',
                a: 'Comfortable yoga clothes, personal toiletries, white outfit for ceremonies, journal for notes, and an open heart. We provide yoga mats, props, and all study materials.',
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
          <div className={styles.ctaAnimation}>
            <div className={styles.energyRing}></div>
            <div className={styles.energyRing}></div>
            <div className={styles.energyRing}></div>
          </div>
          <h2>Ready to Awaken Your Kundalini?</h2>
          <p>
            Join us in Rishikesh for a life-transforming journey of spiritual
            awakening
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              <span>Apply Now</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className={styles.ctaSecondary}>
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kundalini200Page;
