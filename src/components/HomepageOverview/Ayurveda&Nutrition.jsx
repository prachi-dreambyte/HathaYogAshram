import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const AyurvedaNutritionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ayurvedaConcepts = [
    {
      title: 'The Three Doshas',
      description: 'Understanding Vata, Pitta, and Kapha—the fundamental energies that govern all physiological and psychological functions.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
      examples: 'Vata (Air), Pitta (Fire), Kapha (Earth & Water)'
    },
    {
      title: 'Seasonal Eating',
      description: 'Align your diet with nature\'s rhythms, eating foods that balance seasonal influences on your dosha.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
      examples: 'Spring cleansing, Summer cooling, Winter grounding'
    },
    {
      title: 'Digestive Fire (Agni)',
      description: 'Cultivate strong digestive capacity through proper food combinations, timing, and preparation methods.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
      examples: 'Food combining, Eating times, Spice therapy'
    },
    {
      title: 'Mindful Eating',
      description: 'Transform meals into meditation through conscious consumption, gratitude, and awareness of how food affects consciousness.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Mindful chewing, Blessing food, Eating environment'
    }
  ];

  const benefits = [
    { icon: '⚖️', title: 'Dosha Balance', text: 'Restore constitutional harmony and vitality' },
    { icon: '🌿', title: 'Natural Healing', text: 'Use food as medicine for prevention and cure' },
    { icon: '✨', title: 'Increased Energy', text: 'Optimize digestion for sustained vitality' },
    { icon: '🧘‍♀️', title: 'Mental Clarity', text: 'Enhance focus through sattvic nutrition' },
    { icon: '💪', title: 'Immune Strength', text: 'Build ojas and resilience naturally' },
    { icon: '🌸', title: 'Radiant Health', text: 'Achieve holistic wellbeing inside and out' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>🌿</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Ayurveda & Nutrition</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Science of Life and Holistic Nourishment
                </p>
                <p className={Styles.heroDescription}>
                  Ayurveda and nutrition teach the ancient science of holistic health, 
                  balancing body constitution (doshas), seasonal eating, and mindful 
                  dietary practices for optimal wellbeing. This timeless wisdom treats 
                  food as medicine and eating as a sacred act.
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
              <h2 className={Styles.sectionHeading}>The Wisdom of Ayurvedic Nutrition</h2>
              <p className={Styles.paragraphText}>
                Ayurveda, meaning "science of life," is a 5,000-year-old system of natural 
                healing that recognizes each person as unique. Unlike modern one-size-fits-all 
                nutrition, Ayurveda honors your individual constitution (prakriti) and current 
                state of balance (vikriti). Food is not merely fuel but medicine, information, 
                and prana (life force). By understanding your dominant doshas and eating in 
                harmony with seasonal cycles, you cultivate not just physical health but mental 
                clarity, emotional balance, and spiritual vitality. The ancient sages taught that 
                when we eat with awareness and gratitude, every meal becomes a sacred offering 
                to the divine fire within.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Anna brahma, raso vishnu, bhokta devo maheshwara"</em>
                <p className={Styles.mantraTranslation}>
                  Food is the creator, its essence the sustainer, the eater the transformer
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Ayurveda Concepts */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Core Ayurvedic Principles</h2>
            <p className={Styles.sectionSubtitle}>Explore the foundations of holistic nutrition</p>
          </div>
          {ayurvedaConcepts.map((concept, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={concept.image} alt={concept.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{concept.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{concept.title}</h3>
                  <p className={Styles.cardDescription}>{concept.description}</p>
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
            <h2 className={Styles.sectionHeading}>Benefits of Ayurvedic Living</h2>
            <p className={Styles.sectionSubtitle}>Experience transformation through ancient nutritional wisdom</p>
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
        <div className={Styles.sectionPinkWrapper}>
                <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Styles.tipsSection}>
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Ayurvedic Eating Guidelines</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Know Your Dosha</h5>
                      <p>Discover your constitution and eat accordingly</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Eat With the Seasons</h5>
                      <p>Choose local, seasonal foods that balance nature's influence</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Honor Your Agni</h5>
                      <p>Eat when hungry, avoid overeating, and optimize digestion</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Gratitude</h5>
                      <p>Bless your food and eat in peaceful, mindful presence</p>
                    </div>
                  </div>
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
              <h2 className={Styles.sectionHeading}>Nourish Your Whole Being</h2>
              <p className={Styles.ctaText}>
                Ayurvedic nutrition is a path to profound healing and self-knowledge. 
                By understanding your unique constitution and honoring the rhythms of 
                nature, you transform eating from a mindless habit into a sacred practice 
                that nourishes body, mind, and spirit in perfect harmony.
              </p>
              <button className={Styles.ctaButton}>Discover Your Dosha</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    
  );
};

export default AyurvedaNutritionPage;