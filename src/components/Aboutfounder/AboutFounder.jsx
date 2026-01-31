import React, { useState } from 'react';
import styles from '../../assets/styles/Aboutfounder/AboutFounder.module.css';

const Founders = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  const founders = [
    {
      name: 'Guru Ashish Ji',
      role: ['Vinyasa Yogashala', 'Founder'],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop',
      shortTitle: 'Master of Traditional Hatha Yoga',
      bio: [
        "His Philosophy on yoga teaches us beyond just physical well-being; it is more about unlocking the power of our subconscious mind. It is an exploration of our inner self that seeks to bring us closer to understanding our true nature.",
        "Guru Ji has dedicated his life to the practice of yoga and its philosophy, combining ancient teachings with modern-day techniques and tools to create an inclusive environment for all.",
        "You are the greatest form of energy & that energy travels through several mediums (situations) before it takes the shape of your desired reality. No matter how difficult life is, you have the power to create your own destiny. Yoga is one way to achieve your desired reality as it taps into the source of your own inner power & awakens the yogi in you."
      ],
      philosophy: [
        {
          icon: '🧘',
          title: 'Thought (Vichaar)',
          description: 'Guru Ashish Ji believes that he must have laid the foundation of Vinyasa Yogashala, but it is not his alone. Rather, he believes that everyone who walks through the door of Vinyasa Yogashala has a part to play in creating a community and family – for him, this feeling of belonging is just as important as the physical practice itself.'
        },
        {
          icon: '🔥',
          title: 'Passion (Junoon)',
          description: "Guru Ji's passion for sharing yoga with others radiates through him. He is passionate about providing a safe and supportive learning environment for students and has developed an extensive syllabus to help his students develop their practice according to their own individual needs, abilities, and goals."
        },
        {
          icon: '💪',
          title: 'Dedication (Lagan)',
          description: 'He dedicated his early childhood to practicing yoga in the mighty mountains of Rishikesh and became the most renowned & youngest child to get certified as a yoga trainer. He has been teaching yoga for more than 20 years and is considered one of the most experienced teachers in India.'
        },
        {
          icon: '✨',
          title: 'Karma (Karm)',
          description: "Since he discovered yoga as his karma from an early age in his life, his mission to spread the knowledge and awareness of yoga around the world has been unstoppable. His intent for teaching yoga is not only to awaken people's spiritual connection but also to help them build physical strength and emotional resilience."
        }
      ],
      achievements: ['20+ Years Teaching', '1000+ Students Trained', 'Youngest Certified Teacher', 'International Recognition'],
      quote: {
        text: "Yoga creates a rhythm between mind and body that leads to an understanding of our true self",
        author: 'Guru Ashish Ji'
      },
      stats: [
        { number: '20+', label: 'Years Experience' },
        { number: '1000+', label: 'Students' },
        { number: '50+', label: 'Countries' },
        { number: '100+', label: 'Workshops' }
      ]
    },
    {
      name: 'Yogi Vishnu Panigrahi',
      role: ['World Peace Yoga School', 'Founder'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop',
      shortTitle: 'Spiritual Guide & Humanitarian',
      bio: [
        "He is humble and grounded and shows no ego or bias a man who gives his heart for humanity. This journey will show you that within the universe there is no You & I as we are One.",
        "A spinner of joy, a farmer of wisdom, and support for those who need guidance - a ray of light that the world needs as he showers his grace with no bias, to learn and feel you only need to be receptive. Vishnu Panigrahi is an Indian yoga guru and spiritual guide. His sole purpose is to serve humanity, give his life for charity, spreading the love and knowledge of yoga to create harmony and peace.",
        "He works relentlessly to bring this to life in the modern chaotic world, imparting his knowledge to support the cause of serving humanity. The founder of World Peace Yoga School and Samadhi Ashram - he continues to impart and guide both his world teachers and students who come to expand their knowledge."
      ],
      philosophy: [
        {
          icon: '🌍',
          title: 'Universal Oneness',
          description: "Yogi Vishnu's philosophy centers on serving humanity with unconditional love. His teachings emphasize that we are all One - there is no separation between You and I in the universe."
        },
        {
          icon: '🙏',
          title: 'Humility & Service',
          description: "His approach is rooted in humility and groundedness, showing no ego or bias. He gives his heart completely for humanity, demonstrating that true spiritual wisdom comes from humble service to all beings."
        },
        {
          icon: '💫',
          title: 'Receptivity',
          description: "To learn from Yogi Vishnu, one only needs to be receptive. He showers his grace with no bias, acting as a ray of light that the world needs. His presence itself is a teaching."
        },
        {
          icon: '🌱',
          title: 'Growth Through Mistakes',
          description: "He teaches that being human means making mistakes, and these mistakes are not failures but rather stepping stones that teach us the greatest lessons on our spiritual journey."
        }
      ],
      achievements: ['MA in Sanskrit', 'MA in Yoga', '9 Years with Swami Veda', 'Founder of 2 Ashrams'],
      quote: {
        text: "My life itself is a message, I am human, I make mistakes, these mistakes are the stepping stones for me to continue my journey",
        author: 'Yogi Vishnu Panigrahi'
      },
      stats: [
        { number: '25+', label: 'Years Journey' },
        { number: '2', label: 'Ashrams Founded' },
        { number: '∞', label: 'Lives Touched' },
        { number: '1', label: 'Universal Love' }
      ]
    },
    {
      name: 'Anand Mehrotra',
      role: ['Sattva Yoga Academy', 'Founder'],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=1000&fit=crop',
      shortTitle: 'Visionary Himalayan Yogi',
      bio: [
        "Anand Mehrotra is a visionary Himalayan yogi, master teacher, and global thought leader whose work represents ancient yogic wisdom with the needs of the modern world. As the founder of the Sattva Yoga movement and Sattva Yoga Academy, Anand has touched thousands of lives worldwide, offering a path of wholeness, conscious evolution, and radical inner freedom.",
        "His teachings — rooted in the Himalayan Yog-Vedantic tradition — embody a rare integration of depth, practicality, and transformative power. More than a teacher, Anand is a spiritual innovator, conscious entrepreneur, and humanitarian.",
        "Born and raised in Rishikesh, India — widely regarded as the birthplace of yoga — Anand was immersed in a sacred environment of yogic study and sadhana from a very young age. Trained in the oral tradition under the guidance of his revered master, Maharaji, Anand was initiated into the timeless lineage of Himalayan sages."
      ],
      philosophy: [
        {
          icon: '🏔️',
          title: 'Sattva Path',
          description: 'Sattva Yoga—a complete, integrated approach to yoga designed for modern living, rooted in the timeless wisdom of the Himalayas. Derived from the Sanskrit word Sattva, meaning wholeness, truth, or purity.'
        },
        {
          icon: '⚡',
          title: 'Transformation',
          description: 'Unlike fragmented styles, Sattva Yoga weaves together the entire spectrum of yogic technology, including Tantric Kriyas, Kundalini awakening, Pranayama, meditation, and Bhakti expression.'
        },
        {
          icon: '🎯',
          title: 'Living Yoga',
          description: 'For Anand, yoga is not a practice you do — it is who you are. It is a way of walking through the world with presence, integrity, and inner freedom. Yoga is the art of conscious living itself.'
        },
        {
          icon: '🛤️',
          title: 'Inner Pilgrimage',
          description: 'He teaches that if someone goes on a pilgrimage and returns as the same being, then that person was never truly on a pilgrimage. The ultimate pilgrimage is always inward — toward the realisation of the Self.'
        }
      ],
      achievements: ['Sattva Yoga Founder', 'Global Teacher', 'Documentary Featured', 'Himalayan Master'],
      quote: {
        text: "Yoga is not just about feeling better — it is about awakening. We are here to transcend.",
        author: 'Anand Mehrotra'
      },
      stats: [
        { number: '2012', label: 'Sattva Founded' },
        { number: '1000+', label: 'Global Students' },
        { number: '8', label: 'Yogic Practices' },
        { number: '∞', label: 'Transformation' }
      ]
    }
  ];

  const videos = [
    {
      id: 1,
      iframe: "https://www.youtube.com/embed/v7AYKMP6rOE?controls=0&modestbranding=1",
      title: "Morning Yoga Flow"
    },
    {
      id: 2,
      iframe: "https://www.youtube.com/embed/sTANio_2E0Q?controls=0&modestbranding=1",
      title: "Meditation Practice"
    },
    {
      id: 3,
      iframe: "https://www.youtube.com/embed/4pKly2JojMw?controls=0&modestbranding=1",
      title: "Pranayama Breathing"
    },
    {
      id: 4,
      iframe: "https://www.youtube.com/embed/Nw-ksH2r6RY?controls=0&modestbranding=1",
      title: "Spiritual Journey"
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section with Animated Background */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroAnimation}>
            <span className={styles.omSymbol}>ॐ</span>
          </div>
          <p className={styles.heroSubtext}>Sacred Lineage of</p>
          <h1 className={styles.heroTitle}>
            Our Revered <span className={styles.highlight}>Founders</span>
          </h1>
          <p className={styles.heroDescription}>
            Enlightened masters guiding seekers on the path of self-realization and inner peace
          </p>
          <div className={styles.heroDivider}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll to explore</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </section>

      {/* Founder Selection Tabs */}
      <section className={styles.tabSection}>
        <div className={styles.tabContainer}>
          {founders.map((founder, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${activeFounder === index ? styles.tabActive : ''}`}
              onClick={() => setActiveFounder(index)}
            >
              <div className={styles.tabImage}>
                <img src={founder.image} alt={founder.name} />
              </div>
              <div className={styles.tabContent}>
                <h3>{founder.name}</h3>
                <p>{founder.role[0]}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Main Founder Profile */}
      <section className={styles.founderProfile}>
        <div className={styles.profileContainer}>
          {/* Profile Header */}
          <div className={styles.profileHeader}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileImageBorder}>
                <img 
                  src={founders[activeFounder].image} 
                  alt={founders[activeFounder].name}
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.imageDecoration}></div>
            </div>
            
            <div className={styles.profileInfo}>
              <div className={styles.founderTags}>
                {founders[activeFounder].role.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className={styles.founderName}>{founders[activeFounder].name}</h2>
              <p className={styles.founderTitle}>{founders[activeFounder].shortTitle}</p>
              
              {/* Stats */}
              <div className={styles.statsGrid}>
                {founders[activeFounder].stats.map((stat, i) => (
                  <div key={i} className={styles.statItem}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className={styles.quoteSection}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.quoteText}>{founders[activeFounder].quote.text}</p>
            <p className={styles.quoteAuthor}>— {founders[activeFounder].quote.author}</p>
          </div>

          {/* Biography */}
          <div className={styles.biographySection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>📖</span>
              Biography
            </h3>
            <div className={styles.bioContent}>
              {founders[activeFounder].bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Philosophy Grid */}
          <div className={styles.philosophySection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>💡</span>
              Philosophy & Teachings
            </h3>
            <div className={styles.philosophyGrid}>
              {founders[activeFounder].philosophy.map((phil, i) => (
                <div key={i} className={styles.philosophyCard}>
                  <div className={styles.philIcon}>{phil.icon}</div>
                  <h4 className={styles.philTitle}>{phil.title}</h4>
                  <p className={styles.philDescription}>{phil.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={styles.achievementsSection}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>🏆</span>
              Key Achievements
            </h3>
            <div className={styles.achievementsGrid}>
              {founders[activeFounder].achievements.map((achievement, i) => (
                <div key={i} className={styles.achievementItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Begin Your Transformational Journey
          </h2>
          <p className={styles.ctaSubtitle}>
            Learn from the masters and experience authentic yogic teachings in the sacred land of Rishikesh
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>
              Join Our Course
              <span className={styles.btnArrow}>→</span>
            </button>
            <button className={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className={styles.videoSection}>
        <div className={styles.videoHeader}>
          <span className={styles.videoLabel}>Moments of Wisdom</span>
          <h2 className={styles.videoTitle}>Yoga in Motion</h2>
          <div className={styles.videoDivider}></div>
        </div>

        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={video.iframe}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoInfo}>
                <h4>{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCTA}>
        <div className={styles.footerContent}>
          <div className={styles.omSymbolFooter}>ॐ</div>
          <h3>Ready to Transform Your Life?</h3>
          <p>Join thousands of students who have found their path through our teachings</p>
          <button className={styles.footerBtn}>Start Your Journey Today</button>
        </div>
      </section>
    </div>
  );
};

export default Founders;