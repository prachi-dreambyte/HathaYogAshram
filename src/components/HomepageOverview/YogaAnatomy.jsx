import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const YogaAnatomyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const anatomyCategories = [
    {
      title: 'Skeletal System',
      description: 'Understanding bone structure, joints, and alignment for safe yoga practice and injury prevention.',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
      examples: 'Spine alignment, Joint mobility, Bone density'
    },
    {
      title: 'Muscular System',
      description: 'Explore muscle groups, fascia, and movement patterns that create strength and flexibility.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      examples: 'Core muscles, Hip flexors, Shoulder stabilizers'
    },
    {
      title: 'Nervous System',
      description: 'The mind-body connection through neural pathways, proprioception, and somatic awareness.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
      examples: 'Parasympathetic activation, Vagus nerve, Mindfulness'
    },
    {
      title: 'Subtle Body',
      description: 'Energy channels, chakras, and nadis that connect physical anatomy with spiritual practice.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Seven chakras, Ida and Pingala, Prana flow'
    }
  ];

  const benefits = [
    { icon: '🦴', title: 'Safe Alignment', text: 'Prevent injuries through proper biomechanics' },
    { icon: '💪', title: 'Muscle Awareness', text: 'Understand which muscles to engage and relax' },
    { icon: '🧬', title: 'Body Intelligence', text: 'Develop proprioceptive sensitivity' },
    { icon: '⚖️', title: 'Postural Balance', text: 'Correct imbalances and improve posture' },
    { icon: '🌊', title: 'Fluid Movement', text: 'Move with grace and anatomical efficiency' },
    { icon: '🔬', title: 'Scientific Practice', text: 'Bridge ancient wisdom with modern science' }
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
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Anatomy</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Science of Body and Movement
                </p>
                <p className={Styles.heroDescription}>
                  Yoga Anatomy bridges modern science with yogic wisdom. Understanding 
                  the body ensures safe practice, injury prevention, and intelligent 
                  alignment. By studying how our physical form moves and functions, 
                  we cultivate deeper awareness and more mindful practice.
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
              <h2 className={Styles.sectionHeading}>The Integration of Science and Spirit</h2>
              <p className={Styles.paragraphText}>
                Yoga anatomy is not merely the study of muscles and bones—it is the sacred 
                exploration of how our physical vessel supports our spiritual journey. Ancient 
                yogis understood the body as a temple, and modern science reveals the remarkable 
                intelligence within each cell. When we practice with anatomical awareness, we 
                honor both the gross physical body (annamaya kosha) and the subtle energy body 
                (pranamaya kosha), creating a harmonious dialogue between matter and spirit.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Sharīramādyaṃ khalu dharmasādhanam"</em>
                <p className={Styles.mantraTranslation}>
                  The body is the primary instrument for fulfilling life's purpose
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        {/* Anatomy Categories */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">        
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Anatomical Systems</h2>
            <p className={Styles.sectionSubtitle}>Explore the interconnected systems that enable yogic practice</p>
          </div>
          {anatomyCategories.map((category, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={category.image} alt={category.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{category.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{category.title}</h3>
                  <p className={Styles.cardDescription}>{category.description}</p>
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
            <h2 className={Styles.sectionHeading}>Benefits of Anatomical Knowledge</h2>
            <p className={Styles.sectionSubtitle}>Enhance your practice through body awareness</p>
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
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Key Principles of Anatomical Awareness</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Listen to Your Body</h5>
                      <p>Distinguish between healthy stretch and harmful strain</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Respect Joint Integrity</h5>
                      <p>Protect vulnerable areas like knees, shoulders, and spine</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Engage Core Stability</h5>
                      <p>Activate deep stabilizing muscles before moving into poses</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Study Continuously</h5>
                      <p>Deepen understanding through books, workshops, and teachers</p>
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
              <h2 className={Styles.sectionHeading}>Deepen Your Understanding</h2>
              <p className={Styles.ctaText}>
                Knowledge of anatomy empowers you to practice with wisdom and compassion. 
                Every pose becomes an opportunity to dialogue with your body, honoring its 
                unique structure while exploring your edge with intelligence and grace.
              </p>
              <button className={Styles.ctaButton}>Explore Anatomy Resources</button>
            </div>
          </div>
        </div>
        </div>
      </div>

  );
};

export default YogaAnatomyPage;