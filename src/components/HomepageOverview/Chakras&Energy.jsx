import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const ChakrasEnergyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const energySystems = [
    {
      title: 'The Seven Chakras',
      description: 'Energy centers along the spine from root to crown, each governing specific physical, emotional, and spiritual aspects of being.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Muladhara, Svadhisthana, Manipura, Anahata'
    },
    {
      title: 'Nadis & Energy Channels',
      description: 'The intricate network of 72,000 energy pathways through which prana flows, with Ida, Pingala, and Sushumna as primary channels.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      examples: 'Ida (lunar), Pingala (solar), Sushumna (central)'
    },
    {
      title: 'Kundalini Awakening',
      description: 'The dormant spiritual energy coiled at the base of the spine, rising through chakras toward enlightenment and cosmic consciousness.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
      examples: 'Shakti awakening, Chakra activation, Samadhi'
    },
    {
      title: 'Aura & Energy Fields',
      description: 'Subtle electromagnetic fields surrounding the body, reflecting our physical health, emotional state, and spiritual development.',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
      examples: 'Etheric body, Astral body, Mental body'
    }
  ];

  const benefits = [
    { icon: '⚡', title: 'Energy Balance', text: 'Harmonize chakras for optimal vitality' },
    { icon: '🌈', title: 'Emotional Healing', text: 'Release blockages and process emotions' },
    { icon: '💎', title: 'Spiritual Growth', text: 'Expand consciousness and awareness' },
    { icon: '🧘‍♀️', title: 'Physical Wellness', text: 'Support organ systems through energy work' },
    { icon: '✨', title: 'Intuitive Development', text: 'Awaken psychic abilities and inner knowing' },
    { icon: '🔮', title: 'Higher Connection', text: 'Access divine guidance and cosmic wisdom' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>🔮</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Chakras & Energy Systems</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Subtle Architecture of Consciousness
                </p>
                <p className={Styles.heroDescription}>
                  Chakras and energy systems explore the subtle body architecture, 
                  understanding how energy centers influence physical, emotional, and 
                  spiritual health through practices and awareness. This ancient wisdom 
                  reveals the invisible dimensions that shape our entire experience.
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
              <h2 className={Styles.sectionHeading}>The Map of Subtle Energies</h2>
              <p className={Styles.paragraphText}>
                Beyond the physical body lies an intricate network of energy centers and channels 
                that the ancient yogis mapped with extraordinary precision. The chakras are not 
                merely metaphorical—they are focal points where consciousness and matter intersect, 
                where spiritual energy becomes tangible reality. Each chakra governs specific organs, 
                emotions, and states of consciousness, creating a vertical axis from survival 
                instincts to divine union. When prana flows freely through the nadis and chakras 
                are balanced, we experience vibrant health, emotional stability, and spiritual 
                clarity. Understanding this subtle anatomy empowers us to work directly with the 
                energetic blueprints that create our physical and psychological reality.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Kundalini shakti sthita muladhare"</em>
                <p className={Styles.mantraTranslation}>
                  The divine energy rests coiled at the root, awaiting awakening
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Energy Systems */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>The Subtle Body Systems</h2>
            <p className={Styles.sectionSubtitle}>Explore the invisible architecture of energy and consciousness</p>
          </div>
          {energySystems.map((system, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={system.image} alt={system.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{system.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{system.title}</h3>
                  <p className={Styles.cardDescription}>{system.description}</p>
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
            <h2 className={Styles.sectionHeading}>Benefits of Energy Work</h2>
            <p className={Styles.sectionSubtitle}>Transform through conscious energy awareness</p>
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
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Working With Your Energy Body</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Develop Sensitivity</h5>
                      <p>Practice feeling energy through meditation and breathwork</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Balance Gradually</h5>
                      <p>Work with one chakra at a time, respecting the process</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Use Multiple Modalities</h5>
                      <p>Combine asana, mantra, meditation, and visualization</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Seek Guidance</h5>
                      <p>Learn from experienced teachers, especially for kundalini</p>
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
              <h2 className={Styles.sectionHeading}>Awaken Your Energetic Potential</h2>
              <p className={Styles.ctaText}>
                Understanding your subtle body opens doorways to transformation that 
                physical practice alone cannot reach. By working consciously with chakras 
                and energy systems, you become the alchemist of your own consciousness, 
                transmuting dense energies into light and awakening to your fullest potential.
              </p>
              <button className={Styles.ctaButton}>Explore Energy Practices</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
  );
};

export default ChakrasEnergyPage;