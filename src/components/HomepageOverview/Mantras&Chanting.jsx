import React, { useEffect, useState } from 'react';
import Styles from '../../assets/styles/HomepageOverview/Asana.module.css';

const MantrasChantingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mantraTypes = [
    {
      title: 'Bija Mantras',
      description: 'Seed syllables that resonate with chakras and cosmic energies, unlocking potent transformative power through sound.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      examples: 'Om, Aim, Hrim, Klim, Shrim'
    },
    {
      title: 'Vedic Mantras',
      description: 'Ancient hymns from sacred texts that invoke divine forces and connect practitioners to timeless spiritual wisdom.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      examples: 'Gayatri Mantra, Mahamrityunjaya, Shanti Path'
    },
    {
      title: 'Devotional Chants',
      description: 'Bhakti mantras expressing love and surrender to the divine, opening the heart through sacred repetition.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      examples: 'Hare Krishna, Om Namah Shivaya, Lokah Samastah'
    },
    {
      title: 'Kirtan & Group Chanting',
      description: 'Call-and-response devotional singing that creates collective energy and unifies consciousness through sound.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      examples: 'Jai Ma, Govinda Hare, Shiva Shambo'
    }
  ];

  const benefits = [
    { icon: '🔊', title: 'Vibrational Healing', text: 'Sound frequencies harmonize body and mind' },
    { icon: '🧘‍♂️', title: 'Deepened Meditation', text: 'Mantras quiet mental fluctuations' },
    { icon: '💫', title: 'Elevated Consciousness', text: 'Transcend ordinary states of awareness' },
    { icon: '❤️', title: 'Heart Opening', text: 'Devotional practice cultivates unconditional love' },
    { icon: '🌟', title: 'Ancient Connection', text: 'Link to yogic lineage through sacred sounds' },
    { icon: '⚡', title: 'Energy Activation', text: 'Awaken dormant spiritual potential' }
  ];

  return (
    <div className={Styles.container}>
      {/* Hero Section */}
      <div className={`${Styles.heroSection} ${isVisible ? Styles.fadeIn : ''}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className={Styles.lotusIcon}>🕉️</div>
                <h1 className={`${Styles.sectionHeading} ${Styles.mainHeading} ${Styles.animateSlideDown}`}>Mantras & Chanting</h1>
                <p className={`${Styles.heroSubtitle} ${Styles.animateSlideUp}`}>
                  The Sacred Science of Sound
                </p>
                <p className={Styles.heroDescription}>
                  Mantras and chanting harness the power of sacred sound vibrations to 
                  deepen meditation, elevate consciousness, and connect with ancient yogic 
                  traditions. Through repetition of these sacred syllables, we align with 
                  cosmic frequencies and awaken our highest potential.
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
              <h2 className={Styles.sectionHeading}>The Power of Sacred Sound</h2>
              <p className={Styles.paragraphText}>
                In yogic tradition, the universe itself was created through sound—the primordial 
                vibration of Om from which all existence emerged. Mantras are not mere words but 
                vehicles of consciousness, each syllable encoded with specific energetic qualities 
                that resonate through our subtle body. When chanted with devotion and proper 
                pronunciation, these sacred sounds purify the mind, awaken dormant energies, and 
                attune us to higher dimensions of being. The repetition (japa) of mantras creates 
                a direct pathway to the divine, transforming our entire energetic field through 
                the alchemy of sound.
              </p>
              <div className={Styles.mantraBox}>
                <em className={Styles.mantraText}>"Nāda brahma viśwam"</em>
                <p className={Styles.mantraTranslation}>
                  The world is sound, sound is God - Ancient Vedic teaching
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Mantra Types */}
          <div className={Styles.SectionWrapper}>  
            <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Types of Mantras</h2>
            <p className={Styles.sectionSubtitle}>Explore the diverse forms of sacred sound practice</p>
          </div>
          {mantraTypes.map((mantra, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className={Styles.asanaCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={Styles.cardImageWrapper}>
                  <img src={mantra.image} alt={mantra.title} className={Styles.cardImage} />
                  <div className={Styles.imageOverlay}>
                    <span className={Styles.overlayText}>{mantra.examples}</span>
                  </div>
                </div>
                <div className={Styles.cardContent}>
                  <h3 className={Styles.cardTitle}>{mantra.title}</h3>
                  <p className={Styles.cardDescription}>{mantra.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         </div>
        <div>
        </div>

        {/* Benefits Section */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className={Styles.sectionHeading}>Benefits of Mantra Practice</h2>
            <p className={Styles.sectionSubtitle}>Transform through the power of sacred sound</p>
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


        {/* Practice Tips */}
    <div className={Styles.sectionPinkWrapper}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Styles.tipsSection}>
              <h2 className={`${Styles.sectionHeading} text-center mb-4`}>Guidelines for Mantra Practice</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>1</div>
                    <div className={Styles.tipContent}>
                      <h5>Learn Correct Pronunciation</h5>
                      <p>Honor tradition through proper Sanskrit articulation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>2</div>
                    <div className={Styles.tipContent}>
                      <h5>Practice Daily Japa</h5>
                      <p>Use mala beads for 108 repetitions to build energy</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>3</div>
                    <div className={Styles.tipContent}>
                      <h5>Chant with Devotion</h5>
                      <p>Infuse practice with heartfelt intention and bhakti</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={Styles.tipItem}>
                    <div className={Styles.tipNumber}>4</div>
                    <div className={Styles.tipContent}>
                      <h5>Feel the Vibration</h5>
                      <p>Sense sound resonating through your entire being</p>
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
          <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className={Styles.ctaSection}>
              <h2 className={Styles.sectionHeading}>Embrace the Song of the Universe</h2>
              <p className={Styles.ctaText}>
                Through mantra and chanting, you become an instrument of divine sound, 
                merging your voice with the cosmic vibration that sustains all creation. 
                Each syllable is a prayer, each repetition a step closer to the infinite 
                silence from which all sound emerges and returns.
              </p>
              <button className={Styles.ctaButton}>Start Chanting Today</button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default MantrasChantingPage;