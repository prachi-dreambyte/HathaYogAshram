import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const MeditationCleansingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const practices = [
    {
      title: 'Meditation Techniques',
      description: 'Explore diverse meditation methods from mindfulness to mantra, cultivating deep concentration and inner tranquility.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Vipassana, Trataka, Loving-kindness'
    },
    {
      title: 'Pranayama Practices',
      description: 'Master breath control techniques that purify the nadis, balance energy, and prepare the mind for meditation.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      examples: 'Nadi Shodhana, Kapalabhati, Bhramari'
    },
    {
      title: 'Shatkarma Cleansing',
      description: 'Traditional purification practices that cleanse the body, remove toxins, and create optimal conditions for spiritual growth.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      examples: 'Neti, Nauli, Trataka, Kapalabhati'
    },
    {
      title: 'Mindfulness & Awareness',
      description: 'Develop continuous present-moment awareness that extends meditation benefits into every aspect of daily life.',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
      examples: 'Body scanning, Walking meditation, Witness consciousness'
    }
  ];

  const benefits = [
    { icon: '🧘‍♀️', title: 'Inner Stillness', text: 'Quiet mental chatter and find lasting peace' },
    { icon: '✨', title: 'Energetic Purification', text: 'Clear blockages and balance subtle energies' },
    { icon: '👁️', title: 'Clarity of Perception', text: 'See reality with enhanced awareness and insight' },
    { icon: '🌊', title: 'Emotional Regulation', text: 'Respond to life with equanimity and wisdom' },
    { icon: '🔮', title: 'Self-Awareness', text: 'Deepen understanding of your true nature' },
    { icon: '🕉️', title: 'Spiritual Connection', text: 'Experience unity with the divine consciousness' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>🧘</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Meditation & Cleansing</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Path to Inner Clarity and Purification
                </p>
                <p className={Styles.heroDescription}>
                  Meditation and cleansing practices cultivate inner stillness, energetic 
                  purification, clarity of perception, and long-term self-awareness. These 
                  transformative disciplines clear the mind and body, creating space for 
                  spiritual awakening and profound peace.
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
              <h2 className={Styles.sectionHeading}>The Essence of Meditation and Purification</h2>
              <p className={Styles.paragraphText}>
                Meditation is the cornerstone of yoga, the practice that allows us to transcend 
                the restless mind and touch the infinite stillness within. Combined with cleansing 
                practices (shatkarmas), we prepare both body and mind for deep spiritual work. 
                Just as we clean our home to create a welcoming environment, these practices 
                purify our inner temple—clearing the nadis, balancing the doshas, and removing 
                obstacles to our natural state of peace and clarity. Through consistent practice, 
                we discover that meditation is not about achieving something new, but remembering 
                who we truly are beneath the layers of conditioning.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Dhyāna-mūlaṁ guru-pādaṁ"</em>
                <p className={Styles.mantraTranslation}>
                  Meditation is rooted in the grace of the guru and inner guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practices */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Core Practices</h2>
            <p className={Styles.sectionSubtitle}>Explore meditation and purification techniques</p>
          </div>
          {practices.map((practice, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={practice.image} alt={practice.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{practice.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{practice.title}</h3>
                  <p className={Styles.cardDescription}>{practice.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>

        {/* Benefits Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Transformative Benefits</h2>
            <p className={Styles.sectionSubtitle}>Experience profound shifts through regular practice</p>
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

        {/* Practice Tips */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Styles.tipsSection}>
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Guidelines for Practice</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Start Small</h5>
                      <p>Begin with 5-10 minutes daily and gradually increase duration</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Create Sacred Space</h5>
                      <p>Designate a clean, quiet area for your meditation practice</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Consistency</h5>
                      <p>Same time, same place daily establishes a powerful habit</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Be Patient</h5>
                      <p>Allow the practice to unfold naturally without forcing results</p>
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
              <h2 className={Styles.sectionHeading}>Discover Your Inner Sanctuary</h2>
              <p className={Styles.ctaText}>
                The journey inward through meditation and cleansing practices reveals the 
                profound peace that exists beyond the turbulence of daily life. Each moment 
                of stillness is a homecoming, a remembering of your essential nature as 
                pure consciousness, untouched by the fluctuations of the mind.
              </p>
              <button className={Styles.ctaButton}>Begin Your Practice</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default MeditationCleansingPage;