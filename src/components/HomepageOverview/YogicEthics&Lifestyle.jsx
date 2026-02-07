import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const EthicsLifestylePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ethicalPrinciples = [
    {
      title: 'The Five Yamas',
      description: 'Ethical restraints guiding our conduct toward others—non-violence, truthfulness, non-stealing, energy conservation, and non-possessiveness.',
      image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80',
      examples: 'Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha'
    },
    {
      title: 'The Five Niyamas',
      description: 'Personal observances cultivating inner growth—purity, contentment, self-discipline, self-study, and surrender to the divine.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Saucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana'
    },
    {
      title: 'Conscious Living',
      description: 'Integrating yogic values into daily life through mindful consumption, sustainable choices, and compassionate action.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      examples: 'Minimalism, Eco-consciousness, Service (Seva)'
    },
    {
      title: 'Relationships & Community',
      description: 'Cultivating sangha, practicing right speech, and building connections rooted in authenticity, respect, and loving-kindness.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      examples: 'Deep listening, Compassionate communication, Karma yoga'
    }
  ];

  const benefits = [
    { icon: '🕊️', title: 'Inner Peace', text: 'Live aligned with your deepest values' },
    { icon: '💫', title: 'Personal Integrity', text: 'Cultivate authenticity and self-trust' },
    { icon: '❤️', title: 'Compassionate Action', text: 'Reduce harm and increase kindness' },
    { icon: '🌱', title: 'Spiritual Growth', text: 'Purify mind and accelerate evolution' },
    { icon: '🤝', title: 'Harmonious Relations', text: 'Build connections based on truth and love' },
    { icon: '✨', title: 'Conscious Choice', text: 'Make decisions from higher awareness' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>☸️</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Ethics & Lifestyle</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  Living Yoga Beyond the Mat
                </p>
                <p className={Styles.heroDescription}>
                  Yogic ethics and lifestyle embody the Yamas and Niyamas, guiding 
                  practitioners to live with integrity, compassion, self-discipline, 
                  and conscious choices both on and off the mat. These timeless principles 
                  transform yoga from practice into a complete way of being.
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
              <h2 className={Styles.sectionHeading}>The Foundation of Yogic Living</h2>
              <p className={Styles.paragraphText}>
                The Yamas and Niyamas form the ethical foundation of Patanjali's eight-limbed 
                path, preceding even asana in importance. These ten principles are not rigid 
                commandments but living guidelines that help us navigate life with wisdom and 
                grace. The Yamas teach us how to relate to the world with non-violence, 
                truthfulness, and generosity, while the Niyamas cultivate our inner landscape 
                through purity, contentment, and devotion. Together, they create a framework 
                for conscious living that purifies the mind, opens the heart, and aligns our 
                actions with our highest values. When we practice these ethics authentically, 
                every moment becomes an opportunity for spiritual growth and every choice a 
                sacred offering.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Ahimsa pratishthayam tat-sannidhau vaira-tyagah"</em>
                <p className={Styles.mantraTranslation}>
                  In the presence of one established in non-violence, hostility ceases - Yoga Sutras 2.35
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Ethical Principles */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Core Ethical Principles</h2>
            <p className={Styles.sectionSubtitle}>Explore the foundation of conscious yogic living</p>
          </div>
          {ethicalPrinciples.map((principle, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={principle.image} alt={principle.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{principle.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{principle.title}</h3>
                  <p className={Styles.cardDescription}>{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>

        {/* Benefits Section */}
        <div className={Styles.SectionWhiteWrapper}>
                <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Benefits of Ethical Living</h2>
            <p className={Styles.sectionSubtitle}>Transform your life through conscious values</p>
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

        {/* Practice Tips */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Styles.tipsSection}>
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Practicing Yogic Ethics</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Start With Ahimsa</h5>
                      <p>Begin with non-violence toward yourself, then extend outward</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Self-Reflection</h5>
                      <p>Study how your actions align with your values through svadhyaya</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Choose One Focus</h5>
                      <p>Work deeply with one Yama or Niyama at a time</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Be Compassionate</h5>
                      <p>Honor your journey without self-judgment or perfectionism</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container-fluid py-5">
            <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className={Styles.ctaSection}>
              <h2 className={Styles.sectionHeading}>Live Your Highest Truth</h2>
              <p className={Styles.ctaText}>
                The Yamas and Niyamas are not restrictions but liberations, freeing us 
                from unconscious patterns and aligning our lives with truth, love, and 
                wisdom. When we embody these principles, our entire existence becomes a 
                living prayer, and every action an expression of our deepest Self.
              </p>
              <button className={Styles.ctaButton}>Explore Ethical Practice</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
  );
};

export default EthicsLifestylePage;