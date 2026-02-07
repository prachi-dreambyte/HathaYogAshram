import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const PranayamaPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pranayamaTypes = [
    {
      title: 'Nadi Shodhana',
      description: 'Alternate nostril breathing that purifies energy channels and balances the left and right hemispheres of the brain.',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
      examples: 'Channel Purification, Mental Balance'
    },
    {
      title: 'Ujjayi Pranayama',
      description: 'Victorious breath that generates internal heat, calms the mind, and builds energy through slight throat constriction.',
      image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80',
      examples: 'Ocean Breath, Focusing Technique'
    },
    {
      title: 'Kapalabhati',
      description: 'Skull-shining breath involving rapid, forceful exhalations that cleanse the lungs and energize the entire system.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Cleansing Breath, Energy Activation'
    },
    {
      title: 'Bhramari',
      description: 'Humming bee breath that soothes the nervous system, reduces anxiety, and induces meditative states through vibration.',
      image: 'https://images.unsplash.com/photo-1599447292506-e0c18e2333e4?w=800&q=80',
      examples: 'Humming Sound, Deep Relaxation'
    }
  ];

  const benefits = [
    { icon: '🫁', title: 'Respiratory Health', text: 'Increases lung capacity and oxygen efficiency' },
    { icon: '🧘', title: 'Stress Reduction', text: 'Activates parasympathetic nervous system' },
    { icon: '💭', title: 'Mental Focus', text: 'Sharpens concentration and awareness' },
    { icon: '⚖️', title: 'Emotional Stability', text: 'Regulates mood and emotional responses' },
    { icon: '✨', title: 'Prana Expansion', text: 'Enhances vital life force circulation' },
    { icon: '🌊', title: 'Deep Calmness', text: 'Cultivates inner peace and tranquility' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>🌬️</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Pranayama</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Science of Breath Control
                </p>
                <p className={Styles.heroDescription}>
                  Pranayama refines the flow of life force through conscious breathing techniques. 
                  Regular practice balances the nervous system, improves concentration, and creates 
                  inner calm. Master your breath, master your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
     <div className={Styles.SectionFounder}>
             <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className={`${Styles.philosophyCard} ${Styles.floating}`}>
              <h2 className={Styles.sectionHeading}>The Philosophy of Pranayama</h2>
              <p className={Styles.paragraphText}>
                Pranayama, derived from 'prana' (life force) and 'ayama' (extension), represents 
                the fourth limb of yoga. It is the bridge between the physical and spiritual realms, 
                connecting body and mind through the rhythmic flow of breath. Ancient yogis discovered 
                that by mastering the breath, we gain control over the mind's fluctuations and access 
                deeper states of consciousness. Each inhalation draws in cosmic energy, while each 
                exhalation releases what no longer serves us.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"When the breath wanders, the mind is unsteady. When the breath is still, so is the mind."</em>
                <p className={Styles.mantraTranslation}>
                  Hatha Yoga Pradipika
                </p>
              </div>
            </div>
          </div>
        </div>
        </div></div>

        {/* Types of Pranayama */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12 text-center mb-3">
            <h2 className={Styles.sectionHeading}>Pranayama Techniques</h2>
            <p className={Styles.sectionSubtitle}>Explore powerful breathing practices for transformation</p>
          </div>
          {pranayamaTypes.map((pranayama, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-3">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={pranayama.image} alt={pranayama.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{pranayama.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{pranayama.title}</h3>
                  <p className={Styles.cardDescription}>{pranayama.description}</p>
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
            <div className="row mb-4">
              <div className="col-12 text-center mb-3">
                <h2 className={Styles.sectionHeading}>Benefits of Practice</h2>
                <p className={Styles.sectionSubtitle}>Transform your wellbeing through conscious breathing</p>
              </div>
                {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-3">
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
              <h2 className={`${Styles.sectionHeading} text-center mb-3`}>Guidelines for Practice</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice on Empty Stomach</h5>
                      <p>Wait 3-4 hours after meals for optimal energy flow</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Start Gradually</h5>
                      <p>Begin with 5-10 minutes daily, increasing slowly over time</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Maintain Proper Posture</h5>
                      <p>Sit with spine erect to allow free flow of prana</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Never Force the Breath</h5>
                      <p>Breathe naturally and comfortably, respecting your limits</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>5</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Regularly</h5>
                      <p>Consistency is key; same time daily creates powerful routine</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>6</div>
                    <div className={Styles.tipContent}>
                      <h5>Learn from a Teacher</h5>
                      <p>Seek guidance to avoid strain and maximize benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div></div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8 text-center">
            <div className={Styles.ctaSection}>
              <h2 className={Styles.sectionHeading}>Begin Your Journey</h2>
              <p className={Styles.ctaText}>
                The journey of pranayama is one of profound self-discovery and healing. 
                Through dedicated practice, you'll unlock dormant energy, quiet mental chatter, 
                and discover the infinite peace that resides within your breath.
              </p>
              <button className={Styles.ctaButton}>Start Breathing Consciously</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PranayamaPage;