import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/retreatlinks/Vedicmantra.module.css';
import BooksSection from 'components/MyBooks/Bookssection';
import HowToReach from 'components/Homepage/HowToReach';

const VedicMantra = () => {
  const [activeMantra, setActiveMantra] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mantraTypes = [
    {
      name: 'Mrityunjaya Mantra',
      sanskrit:
        'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्-मृत्योर्मुक्षीय मामृतात् ॥',
      transliteration:
        'Aum Tryambakam yajaamahe sugandhim pushtivardhanam | Urvaarukamiva bandhanaan-mrityormuksheeya maamritaat ||',
    },
    {
      name: 'Bhajanat Prak',
      sanskrit: 'भजनात् प्राक्',
      transliteration: 'Bhajanat Prak',
    },
    {
      name: 'Sri Sivah',
      sanskrit: 'श्री शिवः',
      transliteration: 'Sri Sivah',
    },
    {
      name: 'Sri Ganesh',
      sanskrit: 'श्री गणेश',
      transliteration: 'Sri Ganesh',
    },
    {
      name: 'Patanjali Mantra',
      sanskrit: 'पतञ्जलि मन्त्र',
      transliteration: 'Patanjali Mantra',
    },
    {
      name: 'Adhyayanat Prak',
      sanskrit: 'अध्ययनात् प्राक्',
      transliteration: 'Adhyayanat Prak',
    },
    {
      name: 'Purnamadah Purnamidam',
      sanskrit: 'पूर्णमदः पूर्णमिदम्',
      transliteration: 'Purnamadah Purnamidam',
    },
  ];

  const gayatriLines = [
    'Om bhur bhuvah svah',
    'Tat savitur varenyam',
    'Bhargo devasya dhimahi',
    'Dhiyo yo nah prachodayat',
  ];

  const benefits = [
    {
      title: 'Stress Reduction',
      description:
        'Chanting mantras can have a calming effect on the mind and body. The rhythmic repetition of sounds induces a meditative state, reducing stress and promoting relaxation.',
    },
    {
      title: 'Improved Focus and Concentration',
      description:
        'Mantra chanting often involves focused repetition, which can enhance concentration and attention. It helps clear the mind of distractions and promotes a sense of mindfulness.',
    },
    {
      title: 'Enhanced Emotional Well-being',
      description:
        'Regular mantra chanting may contribute to emotional balance by calming the mind and reducing negative emotions. It can promote a positive outlook and a sense of inner peace.',
    },
    {
      title: 'Spiritual Connection',
      description:
        'Many people use mantras as a tool for spiritual growth and connection. Chanting is seen as a way to commune with higher powers, deities, or the divine, fostering a sense of spirituality.',
    },
    {
      title: 'Vibrational Healing',
      description:
        "Some believe that the vibrations created by chanting can have a positive impact on the body's energy system. This is often associated with various forms of energy healing and alternative medicine practices.",
    },
    {
      title: 'Enhanced Breathing and Respiratory Benefits',
      description:
        'The rhythmic nature of chanting is often synchronized with the breath. This can promote deep and intentional breathing, improving respiratory function and increasing oxygen flow to the body.',
    },
    {
      title: 'Cognitive Benefits',
      description:
        'Mantra chanting may stimulate certain areas of the brain associated with attention, memory, and emotional regulation. Some studies suggest potential cognitive benefits associated with regular chanting practice.',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroOverlay}></div>
        {/* <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.vedic}>VEDIC MANTRA</span>
            <span className={styles.chanting}>CHANTING</span>
          </h1>
          <div className={styles.omSymbol}>ॐ</div>
        </div> */}
      </section>

      {/* What is Vedic Mantra Section */}
      <section className={styles.whatSection}>
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>
              What is Vedic Mantra Chanting?
            </h2>
            <p className={styles.paragraph}>
              Mantra is a sacred utterance, a numinous sound, a syllable, a word
              or phonemes, or a group of words believed by practitioners to have
              religious, magical, or spiritual powers and to aid concentration.
              The word 'Mantra' has 2 parts: 'Man', which is the root of the
              Sanskrit word of mind; and 'Tra', which is the root of the word
              instrument. It is commonly translated to mean "an instrument or
              tool for the mind" or "that which when reflected upon, brings
              liberation."
            </p>
            <p className={styles.paragraph}>
              Vedic Mantras are mystical formulas of sacred syllables, which
              were originally revealed to the Rishis (seers or sages) in the
              deepest states of meditation. They are one of the earliest
              components of{' '}
              <span className={styles.highlight}>
                Best yoga teacher training in India
              </span>{' '}
              and are possibly the first type of meditation that was developed.
              The most popular mantra is Om or Aum, and it is often used as the
              seed mantra in longer chants. They are considered to have magical
              powers for healing, protection, and prosperity, but in mantra
              yoga, they are used primarily for spiritual development.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.mantراImage}>
              <img
                src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=600&h=400&fit=crop"
                alt="Mantra Chanting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Vedic Mantra Section */}
      <section className={styles.whySection}>
        <div className={styles.contentGrid}>
          <div className={styles.omCard}>
            <div className={styles.omGlow}>
              <span className={styles.omLarge}>ॐ</span>
            </div>
            <div className={styles.sanskritText}>
              <p>मने महादेव गौः</p>
              <p>नाथगोरायपदं</p>
              <p>प्रदावेवाणं यतुगराणं</p>
              <p>यत्र वादिन् अत्नं</p>
              <p>वर्धितवनस्ते</p>
              <p>यब्व यादिन् अतमं</p>
              <p>मत्र मेंयें यतुमाभः</p>
              <p>महादवनम्</p>
              <p>पहत्रयितते च</p>
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Why Vedic Mantra Chanting?</h2>
            <p className={styles.paragraph}>
              Like prayer and affirmation, the repetitious use of vedic mantras
              can have powerful effects on the mind, body, spirit, and emotions.
              Mentally, mantra yoga increases concentration and improves memory
              and focus.
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <strong>Mindful Start:</strong> Chanting mantras often marks the
                beginning of a yoga session, serving as a ritual to transition
                the mind from everyday concerns to the present moment and the
                practice ahead.
              </div>
              <div className={styles.benefitItem}>
                <strong>Energetic Alignment:</strong> Mantras are believed to
                carry vibrational energy, and chanting them is thought to align
                and activate the body's energy centers, enhancing the flow of
                prana (life force energy).
              </div>
              <div className={styles.benefitItem}>
                <strong>Inner Focus:</strong> Yoga mantras help practitioners
                cultivate inner focus and concentration, creating a meditative
                atmosphere conducive to a deeper and more mindful yoga practice.
              </div>
              <div className={styles.benefitItem}>
                <strong>Spiritual Connection:</strong> Many yoga mantras have
                spiritual significance, invoking divine qualities or energies.
              </div>
              <div className={styles.benefitItem}>
                <strong>Breath Awareness:</strong> Chanting mantras is often
                synchronized with the breath, promoting conscious breathing and
                enhancing awareness of the breath's rhythm, which is integral to
                many styles of yoga.
              </div>
              <div className={styles.benefitItem}>
                <strong>Positive Intentions:</strong> Some yoga mantras carry
                positive affirmations or intentions, helping to set a positive
                and purposeful tone for the yoga session and encouraging a
                mindful and present mindset.
              </div>
              <div className={styles.benefitItem}>
                <strong>Mantra as Sound Healing:</strong> The vibrational
                qualities of the sounds produced during mantra chanting are
                believed to have therapeutic effects, promoting mental and
                emotional well-being through a form of sound healing.
              </div>
            </div>
          </div>
        </div>
      </section>

      <BooksSection />

      {/* Types of Vedic Mantras */}
      <section className={styles.typesSection}>
        <h2 className={styles.sectionTitle}>Types of Vedic Mantras</h2>
        <p className={styles.typesParagraph}>
          There are three main types of mantras: Bija (seed), Saguna (with
          form), and Nirguna (without form).
        </p>
        <p className={styles.typesParagraph}>
          The Bija mantras can be used individually, but are most often
          incorporated into Saguna mantras to invest them with a special "seed"
          power. The Bija mantras correlate to the seven chakras and to the main
          Hindu deities.
        </p>
        <p className={styles.typesParagraph}>
          The Saguna mantras invoke the forms of the individual deities or
          personalized aspects of God. It is said that the recitation of the
          Saguna mantras gives rise to the actual form of the particular deity,
          thus manifesting its power.
        </p>
        <p className={styles.typesParagraph}>
          The Nirguna mantras originate from the Vedic texts and are thus the
          oldest mantras of the three types. As no deities or personalized
          aspects of God are invoked with these words, they are very difficult
          to interpret and are considered to not have a specific form or meaning
          to them. These mantras are said to have their identification with all
          of creation and contain the fundamental truths in yogic philosophy. It
          is said that the mind must be very strong to be able to concentrate on
          the abstract Nirguna mantras, and thus they are not recommended for
          beginning students.
        </p>

        <div className={styles.mantraGrid}>
          {mantraTypes.map((mantra, index) => (
            <div
              key={index}
              className={styles.mantraCard}
              onClick={() =>
                setActiveMantra(activeMantra === index ? null : index)
              }
            >
              <h3 className={styles.mantraName}>{mantra.name}</h3>
              {activeMantra === index && (
                <div className={styles.mantraDetails}>
                  <p className={styles.sanskrit}>{mantra.sanskrit}</p>
                  <p className={styles.transliteration}>
                    {mantra.transliteration}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gayatri Mantra with Video */}
      <section className={styles.gayatriSection}>
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.playButton}>▶</div>
          </div>
        </div>
        <div className={styles.gayatriContent}>
          <h3 className={styles.gayatriTitle}>⊕ Gayatri Mantra:</h3>
          <ul className={styles.gayatriList}>
            {gayatriLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <p className={styles.gayatriDesc}>
            This mantra is dedicated to the Sun God and is considered one of the
            most powerful and spiritually uplifting Vedic mantras.
          </p>
          <p className={styles.gayatriSanskrit}>
            ॐ भूर्भुवस्सुवः ॐ तत्सवितुर्वरेण्यम् ॥ भर्गो देवस्य धीमहि धीयोणः
            प्रचोदयत्
          </p>
          <p className={styles.gayatriTranslation}>
            om bhūrbhuvassuvah om tatsaviturvareṇyam ॥ bhargo devasya dhīmahi
            dhīyoṇah pracodayat
          </p>
          <div className={styles.mantraCategories}>
            <div className={styles.category}>⊕ Rigvedic Mantras</div>
            <div className={styles.category}>⊕ Shanti Mantras</div>
            <div className={styles.category}>⊕ Sama Veda Mantras</div>
            <div className={styles.category}>⊕ Yajurvedic Mantras</div>
          </div>
          <button className={styles.bookButton}>Book today</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Vedic Mantra & Benefits</h2>
        <p className={styles.benefitsIntro}>
          Chanting mantras is a practice with various potential benefits, and
          these can extend to physical, mental, and spiritual well-being. Here
          are some potential benefits of chanting vedic mantras:
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitsImage}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop"
              alt="Yoga Practice"
            />
          </div>
          <div className={styles.benefitsContent}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>{benefit.title}:</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contactButtonContainer}>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </section>

      {/* Course Section */}
      <section className={styles.courseSection}>
        <h2 className={styles.sectionTitle}>
          Vedic Mantra Chanting Teacher Training Course
        </h2>
        <p className={styles.courseIntro}>
          Embark on a transformative journey into the ancient realms of Vedic
          wisdom with our Vedic Mantra Chanting Teacher Training Course. This
          comprehensive program is designed for individuals passionate about
          sharing the profound art of mantra chanting, fostering spiritual
          growth, and promoting holistic well-being.
        </p>

        <div className={styles.courseIcon}>
          <span className={styles.meditationIcon}>🧘</span>
        </div>

        <h3 className={styles.certificationTitle}>
          You will get Study Material+ Mantra Kit and Training Certificate after
          course ends!
        </h3>

        <div className={styles.courseGrid}>
          <div className={styles.donationCard}>
            <h3 className={styles.donationTitle}>Donation</h3>
            <div className={styles.priceTag}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>175</span>
            </div>
            <div className={styles.courseDetails}>
              <p>
                <strong>Duration:</strong> 10-15 Days (Two Times in Every Month)
              </p>
              <p>
                <strong>Eligibility:</strong> Understanding English language
              </p>
              <p>
                <strong>What will you get:</strong> 10 different Mantra along
                with authentic way of Vedic mantra chanting, mantra for
                different different occasions. You will get Study Material+
                Mantra Kit and Training Certificate after course ends!
              </p>
            </div>
          </div>
          <div className={styles.teacherImage}>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
              alt="Yoga Teacher"
            />
          </div>
        </div>
      </section>

      {/* Rules & Refund Policy */}
      <section className={styles.rulesSection}>
        <h2 className={styles.sectionTitle}>RULES & REFUND POLICY</h2>
        <div className={styles.divider}>✱</div>

        <div className={styles.rulesContent}>
          <h3 className={styles.rulesSubtitle}>◉ PREREQUISITES</h3>
          <p className={styles.rulesParagraph}>
            A high degree of self-motivation is required for all aspects of the
            course. The practice and especially the teaching of yoga demand a
            high degree of self-discipline and purity. To ensure the success of
            the program, participants are required to attend all spiritual
            activities, meditation sessions, lectures and asana classes.
          </p>
          <p className={styles.rulesParagraph}>
            Meat, fish, eggs, black tea, coffee, alcohol, tobacco, drugs and
            nudity are prohibited during the course as they are
            counterproductive to the yoga practice. Participants who do not
            comply with the school rules may be dismissed from the course.
          </p>

          <h3 className={styles.rulesSubtitle}>◉ RULES FOR STUDENTS</h3>
          <p className={styles.rulesParagraph}>
            Smoking and alcohol are strictly prohibited in the school. If you
            are having a fast any day, you have to inform the kitchen manager to
            avoid food waste. Always be disciplined, respect teachers and follow
            all rules. Always be on time, you are late means you will not be
            permitted to join the class.
          </p>
          <p className={styles.rulesParagraph}>
            Clear your books of account before departure from Hatha Yogashram.
            Before departure return your books, maps, or any goods which you
            borrowed. Hatha Yogashram provides accommodation for a student who
            joins the{' '}
            <span className={styles.linkText}>Online Yoga Classes</span>. So any
            friends or relatives will not be included in accommodation however
            they can stay in school by renting another room. The student has to
            be present in all the scheduled programs of Hatha Yogashram.
          </p>

          <h3 className={styles.rulesSubtitle}>◉ REFUND POLICY</h3>
          <p className={styles.rulesParagraph}>
            An advance of course fees will not be refundable, only in the case
            of emergency students can join us on other schedules.
          </p>
          <p className={styles.rulesParagraph}>
            If a student cancels the course after joining it, we accept
            cancellation but course fees will not be refunded in cancellation.
            There is no charge of course cancellation.
          </p>
        </div>
      </section>

       <HowToReach/>
    </div>
  );
};

export default VedicMantra;
