import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const TeachingMethodologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teachingSkills = [
    {
      title: 'Sequencing & Planning',
      description: 'Master the art of creating intelligent, safe, and transformative class sequences that honor tradition and meet students\' needs.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      examples: 'Peak poses, Flow transitions, Theme integration'
    },
    {
      title: 'Verbal Cueing',
      description: 'Develop clear, precise language that guides students safely through poses with anatomical accuracy and poetic inspiration.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Directional cues, Breath integration, Imagery'
    },
    {
      title: 'Hands-On Adjustments',
      description: 'Learn safe, respectful touch that deepens students\' understanding while maintaining clear boundaries and consent.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
      examples: 'Consent protocols, Safe touch, Energetic assists'
    },
    {
      title: 'Professional Ethics',
      description: 'Embody integrity through ethical conduct, inclusivity, continuous learning, and responsible student-teacher relationships.',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
      examples: 'Scope of practice, Boundaries, Cultural sensitivity'
    }
  ];

  const benefits = [
    { icon: '👥', title: 'Student Safety', text: 'Create trauma-informed, accessible spaces' },
    { icon: '🎯', title: 'Clear Communication', text: 'Convey instructions with precision and compassion' },
    { icon: '🌱', title: 'Personal Growth', text: 'Deepen your own practice through teaching' },
    { icon: '💼', title: 'Professional Confidence', text: 'Build sustainable career as a yoga teacher' },
    { icon: '🔄', title: 'Adaptive Teaching', text: 'Modify classes for diverse bodies and abilities' },
    { icon: '❤️', title: 'Sacred Service', text: 'Share yoga\'s gifts with authenticity and love' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>👨‍🏫</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Teaching Methodology</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Art and Science of Teaching Yoga
                </p>
                <p className={Styles.heroDescription}>
                  Teaching methodology develops confident, ethical yoga teachers through 
                  sequencing, cueing, hands-on adjustments, communication skills, and 
                  professional responsibility. This comprehensive training transforms 
                  practitioners into skilled facilitators of transformation.
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
              <h2 className={Styles.sectionHeading}>The Sacred Role of the Teacher</h2>
              <p className={Styles.paragraphText}>
                Teaching yoga is a profound responsibility that extends far beyond demonstrating 
                poses. As teachers, we become guides, holding space for students' transformation 
                while honoring the ancient lineage we represent. Effective teaching methodology 
                balances technical skill with intuitive wisdom, clear instruction with compassionate 
                presence, and professional boundaries with genuine connection. We learn to see each 
                student as unique, adapting our teaching to meet them exactly where they are while 
                inspiring them toward their highest potential.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Guru Brahma, Guru Vishnu, Guru Devo Maheshwara"</em>
                <p className={Styles.mantraTranslation}>
                  The teacher is the creator, sustainer, and transformer
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Teaching Skills */}
         <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Core Teaching Competencies</h2>
            <p className={Styles.sectionSubtitle}>Master essential skills for effective and ethical teaching</p>
          </div>
          {teachingSkills.map((skill, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={skill.image} alt={skill.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{skill.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{skill.title}</h3>
                  <p className={Styles.cardDescription}>{skill.description}</p>
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
            <h2 className={Styles.sectionHeading}>Benefits of Teaching Training</h2>
            <p className={Styles.sectionSubtitle}>Develop skills that empower both teacher and students</p>
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
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Principles of Effective Teaching</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Teach from Experience</h5>
                      <p>Share only what you've embodied through personal practice</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Create Safe Spaces</h5>
                      <p>Honor trauma-informed practices and inclusive language</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Authenticity</h5>
                      <p>Bring your unique voice while respecting tradition</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Continue Learning</h5>
                      <p>Embrace lifelong education through workshops and mentorship</p>
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
              <h2 className={Styles.sectionHeading}>Step Into Your Teaching Power</h2>
              <p className={Styles.ctaText}>
                Becoming a yoga teacher is a transformative journey that deepens your 
                practice while allowing you to serve others. Through dedicated training 
                in methodology, you'll develop the skills, confidence, and wisdom to 
                guide students toward their own liberation.
              </p>
              <button className={Styles.ctaButton}>Explore Teacher Training</button>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default TeachingMethodologyPage;