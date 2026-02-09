import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const PhilosophyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const philosophyTexts = [
    {
      title: 'Yoga Sutras of Patanjali',
      description: 'The foundational text outlining the eight-limbed path of yoga, guiding practitioners toward self-realization.',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
      examples: 'Ashtanga, Yamas & Niyamas, Samadhi'
    },
    {
      title: 'Bhagavad Gita',
      description: 'Sacred dialogue between Krishna and Arjuna, revealing the paths of karma, bhakti, and jnana yoga.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      examples: 'Dharma, Selfless action, Divine consciousness'
    },
    {
      title: 'Upanishads',
      description: 'Ancient philosophical texts exploring the nature of reality, consciousness, and the ultimate truth.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
      examples: 'Atman, Brahman, Tat Tvam Asi'
    },
    {
      title: 'Hatha Yog Pradipika',
      description: 'Classical manual on hatha yog practices, detailing asanas, pranayama, and purification techniques.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      examples: 'Shatkarmas, Mudras, Kundalini awakening'
    }
  ];

  const benefits = [
    { icon: '🧭', title: 'Ethical Living', text: 'Practice yamas and niyamas for moral integrity' },
    { icon: '🕊️', title: 'Inner Peace', text: 'Cultivate equanimity through spiritual wisdom' },
    { icon: '💎', title: 'Self-Knowledge', text: 'Discover your true nature beyond ego' },
    { icon: '🌅', title: 'Purpose & Meaning', text: 'Live aligned with dharma and higher purpose' },
    { icon: '🙏', title: 'Devotional Practice', text: 'Develop bhakti and surrender to the divine' },
    { icon: '✨', title: 'Liberation', text: 'Move toward moksha and ultimate freedom' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>📿</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Philosophy</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Wisdom Tradition of Yoga
                </p>
                <p className={Styles.heroDescription}>
                  Yogic philosophy provides ethical and spiritual guidance through 
                  classical texts such as the Yoga Sutras and Bhagavad Gita, helping 
                  practitioners live consciously. These timeless teachings illuminate 
                  the path to self-realization and meaningful existence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className={Styles.SectionFounder}>
        <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className={`${Styles.philosophyCard} ${Styles.floating}`}>
              <h2 className={Styles.sectionHeading}>The Foundation of Yogic Wisdom</h2>
              <p className={Styles.paragraphText}>
                Yoga philosophy is far more than intellectual knowledge—it is a living 
                transmission of truth that guides us from darkness to light, from ignorance 
                to wisdom. Through the profound insights of ancient sages, we learn to 
                navigate life's challenges with grace, to see beyond the illusions of the 
                material world, and to recognize our essential unity with all existence. 
                These teachings are not mere beliefs but practical tools for transformation, 
                inviting us to question, explore, and ultimately experience the truth within.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Yogaś citta-vṛtti-nirodhaḥ"</em>
                <p className={Styles.mantraTranslation}>
                  Yoga is the cessation of the fluctuations of the mind - Yoga Sutras 1.2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      

        {/* Classical Texts */}
       <div className={Styles.SectionWrapper}>  
      <div className="container py-5">
           <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Sacred Texts</h2>
            <p className={Styles.sectionSubtitle}>Explore the classical scriptures that illuminate the yogic path</p>
          </div>
          {philosophyTexts.map((text, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={text.image} alt={text.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{text.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{text.title}</h3>
                  <p className={Styles.cardDescription}>{text.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
       
      </div>
      <div className={Styles.SectionWhiteWrapper}>
        <div className="container py-5">
        {/* Benefits Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Gifts of Philosophical Study</h2>
            <p className={Styles.sectionSubtitle}>Transform your life through ancient wisdom</p>
          </div>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={`${Styles.benefitCard} ${Styles.pulseOnHover}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.benefitIcon}>{benefit.icon}</div>
                <h4 className={Styles.benefitTitle}>{benefit.title}</h4>
                <p className={Styles.benefitText}>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      <div className={Styles.sectionPinkWrapper}>
        <div className="container py-5">
        {/* Practice Tips */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Styles.tipsSection}>
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Approaching Yogic Philosophy</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Study with Reverence</h5>
                      <p>Approach sacred texts with humility and an open heart</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Seek a Teacher</h5>
                      <p>Learn from experienced guides who embody the teachings</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Daily Reflection</h5>
                      <p>Contemplate teachings through meditation and journaling</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Live the Teachings</h5>
                      <p>Apply philosophical principles in daily life and relationships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="container-fluid py-5">
          {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className={Styles.ctaSection}>
              <h2 className={Styles.sectionHeading}>Embrace the Wisdom Path</h2>
              <p className={Styles.ctaText}>
                The study of yogic philosophy is a journey inward, a quest for truth 
                that transforms not only how we think but how we live. Let these ancient 
                teachings be your compass as you navigate the path to self-realization 
                and liberation.
              </p>
              <button className={Styles.ctaButton}>Begin Your Study</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPage;