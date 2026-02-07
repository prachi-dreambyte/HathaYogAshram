import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const AsanaPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const asanaTypes = [
    {
      title: 'Standing Asanas',
      description: 'Build strength, balance, and grounding. These poses develop stability in body and mind.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      examples: 'Tadasana, Virabhadrasana, Trikonasana'
    },
    {
      title: 'Seated Asanas',
      description: 'Enhance flexibility and promote introspection. Perfect for meditation and pranayama practice.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Padmasana, Sukhasana, Paschimottanasana'
    },
    {
      title: 'Balancing Asanas',
      description: 'Cultivate focus, coordination, and mental clarity through physical equilibrium.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
      examples: 'Vrikshasana, Bakasana, Natarajasana'
    },
    {
      title: 'Restorative Asanas',
      description: 'Release tension, calm the nervous system, and restore energy for deep healing.',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
      examples: 'Shavasana, Balasana, Viparita Karani'
    }
  ];

  const benefits = [
    { icon: '🧘‍♀️', title: 'Physical Strength', text: 'Builds muscular endurance and flexibility' },
    { icon: '🌬️', title: 'Breath Control', text: 'Enhances respiratory capacity and awareness' },
    { icon: '🧠', title: 'Mental Clarity', text: 'Improves focus and cognitive function' },
    { icon: '❤️', title: 'Emotional Balance', text: 'Reduces stress and promotes inner peace' },
    { icon: '⚡', title: 'Energy Flow', text: 'Balances prana throughout the body' },
    { icon: '🌟', title: 'Spiritual Growth', text: 'Deepens self-awareness and consciousness' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>🪷</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Asana</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Sacred Art of Yogic Postures
                </p>
                <p className={Styles.heroDescription}>
                  Asana is a meditative discipline cultivating strength, stability, 
                  flexibility, and inner awareness. Through mindful alignment and 
                  breath coordination, practitioners prepare the body for pranayama 
                  and meditation.
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
              <h2 className={Styles.sectionHeading}>The Philosophy of Asana</h2>
              <p className={Styles.paragraphText}>
                In the ancient yogic tradition, asana represents the third limb of Patanjali's 
                eight-limbed path. More than mere physical exercise, each posture is a doorway 
                to self-discovery, teaching us to find steadiness (sthira) and ease (sukha) 
                in both body and mind. As we hold these sacred shapes, we learn to embrace 
                discomfort with grace, to breathe through challenges, and to remain present 
                in each moment.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Sthira sukham asanam"</em>
                <p className={Styles.mantraTranslation}>
                  The posture should be steady and comfortable - Yoga Sutras 2.46
                </p>
              </div>
            </div>
          </div>
        </div>
        </div >
        </div>
       <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        {/* Types of Asanas */}
        <div className="row mb-4">
          <div className="col-12 text-center mb-3">
            <h2 className={Styles.sectionHeading}>Types of Asanas</h2>
            <p className={Styles.sectionSubtitle}>Explore the diverse categories of yogic postures</p>
          </div>
          {asanaTypes.map((asana, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-3">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={asana.image} alt={asana.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{asana.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={`${Styles.cardTitle} ${Styles.cardTitle}`}>{asana.title}</h3>
                  <p className={Styles.cardDescription}>{asana.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>

        <div className={Styles.SectionWhiteWrapper}>
        <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12 text-center mb-3">
            <h2 className={Styles.sectionHeading}>Benefits of Practice</h2>
            <p className={Styles.sectionSubtitle}>Transform your life through dedicated asana practice</p>
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
        <div className={Styles.SectionWhiteWrapper}>
        <div className="container py-5">
        {/* Practice Tips */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Styles.tipsSection}>
              <h2 className={`${Styles.sectionHeading} text-center mb-3`}>Guidelines for Practice</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Mindfully</h5>
                      <p>Move with awareness, honoring your body's limits each day</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Breathe Consciously</h5>
                      <p>Coordinate movement with breath, using ujjayi pranayama</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Be Consistent</h5>
                      <p>Regular practice yields transformation; start with 15 minutes daily</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Seek Guidance</h5>
                      <p>Learn proper alignment from experienced teachers to prevent injury</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div>
        {/* Call to Action */}
        <div className="container-fluid py-5">
          <div className="row justify-content-center mt-4">
          <div className="col-lg-8 text-center">
            <div className={Styles.ctaSection}>
              <h2 className={Styles.sectionHeading}>Begin Your Journey</h2>
              <p className={Styles.ctaText}>
                The practice of asana is a lifelong journey of self-discovery. 
                Each time you step onto your mat, you have the opportunity to 
                explore the depths of your being and unlock your true potential.
              </p>
              <button className={Styles.ctaButton}>Start Practicing Today</button>
            </div>
          </div>
        </div>
        </div>
        
        </div>
    </div>
  );
};

export default AsanaPage;