import React, { useState } from 'react';
import styles from '../../assets/styles/Aboutfounder/AboutFounder.module.css';
import {
  Flower2,
  Mountain,
  Heart,
  Sparkles,
  BookOpen,
  Users,
  Award,
  Quote,
  Star,
  Compass,
  Target,
  Flame,
} from 'lucide-react';

const AboutFounder = () => {
  const [activeTab, setActiveTab] = useState('vinyasa');
  const [activeSection, setActiveSection] = useState('founder');

  const tabs = [
    { id: 'vinyasa', label: 'Vinyasa Yogashala', icon: <Flower2 size={20} /> },
    { id: 'worldpeace', label: 'World Peace Yoga', icon: <Heart size={20} /> },
    {
      id: 'sattva',
      label: 'Sattva Yoga Academy',
      icon: <Mountain size={20} />,
    },
  ];

  const sections = [
    { id: 'founder', label: 'About Founder', icon: <Users size={18} /> },
    { id: 'journey', label: 'Journey', icon: <Compass size={18} /> },
    { id: 'philosophy', label: 'Philosophy', icon: <BookOpen size={18} /> },
    { id: 'message', label: 'Message', icon: <Quote size={18} /> },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Flower2 className={styles.heroIcon} size={80} />
          <h1 className={styles.heroTitle}>Meet Our Revered Founders</h1>
          <p className={styles.heroSubtitle}>
            Yoga Alliance Certified Teacher Training School in Rishikesh, India
          </p>
          <div className={styles.heroOm}>ॐ</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Navigation */}
      <div className={styles.sectionNav}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.sectionBtn} ${activeSection === section.id ? styles.sectionBtnActive : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon}
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Vinyasa Yogashala Content */}
        {activeTab === 'vinyasa' && (
          <>
            {/* Founder Section */}
            {activeSection === 'founder' && (
              <div className={styles.founderCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <Flower2 size={32} />
                  </div>
                  <div>
                    <h2 className={styles.cardTitle}>Guru Ashish Ji</h2>
                    <p className={styles.schoolName}>
                      Founder of Vinyasa Yogashala, Rishikesh
                    </p>
                  </div>
                </div>

                <div className={styles.quoteBox}>
                  <Quote className={styles.quoteIcon} size={24} />
                  <p className={styles.quote}>
                    "Yoga creates a rhythm between mind and body that leads to
                    an understanding of our true self"
                  </p>
                </div>

                <div className={styles.contentText}>
                  <p>
                    His Philosophy on yoga teaches us beyond just physical
                    well-being; it is more about unlocking the power of our
                    subconscious mind. It is an exploration of our inner self
                    that seeks to bring us closer to understanding our true
                    nature.
                  </p>

                  <p>
                    Guru Ji has dedicated his life to the practice of yoga and
                    its philosophy, combining ancient teachings with modern-day
                    techniques and tools to create an inclusive environment for
                    all.
                  </p>

                  <p>
                    You are the greatest form of energy & that energy travels
                    through several mediums (situations) before it takes the
                    shape of your desired reality. No matter how difficult life
                    is, you have the power to create your own destiny. Yoga is
                    one way to achieve your desired reality as it taps into the
                    source of your own inner power & awakens the yogi in you.
                  </p>
                </div>

                <div className={styles.hindiQuote}>
                  <p className={styles.hindiText}>
                    "Vesh, bhusha, aur bol se pare hai ek yogi, yogi ki asli
                    pehchaan uski shakti se hoti hai."
                  </p>
                  <p className={styles.translation}>
                    Meaning: A yogi is beyond his looks and overall appearance
                    since the real identity of a yogi comes from his power.
                  </p>
                  <p className={styles.signature}>
                    ~ Guru Ashish Ji - Founder of Vinyasa Yogashala, Rishikesh
                  </p>
                </div>
              </div>
            )}

            {/* Philosophy Section */}
            {activeSection === 'philosophy' && (
              <div className={styles.philosophyGrid}>
                <div className={styles.philosophyCard}>
                  <div className={styles.philosophyIcon}>
                    <Target size={28} />
                  </div>
                  <h3 className={styles.philosophyTitle}>Thought (Vichaar)</h3>
                  <p className={styles.philosophyText}>
                    Guru Ashish Ji believes that he must have laid the
                    foundation of Vinyasa Yogashala, but it is not his alone.
                    Rather, he believes that everyone who walks through the door
                    of Vinyasa Yogashala has a part to play in creating a
                    community and family – for him, this feeling of belonging is
                    just as important as the physical practice itself. He
                    welcomes questions, encourages dialogue and fosters an
                    atmosphere of openness and acceptance.
                  </p>
                </div>

                <div className={styles.philosophyCard}>
                  <div className={styles.philosophyIcon}>
                    <Flame size={28} />
                  </div>
                  <h3 className={styles.philosophyTitle}>Passion (Junoon)</h3>
                  <p className={styles.philosophyText}>
                    Guru Ji's passion for sharing yoga with others radiates
                    through him. He is passionate about providing a safe and
                    supportive learning environment for students and has
                    developed an extensive syllabus to help his students develop
                    their practice according to their own individual needs,
                    abilities, and goals. He is filled with energy and
                    enthusiasm, which is sure to leave you feeling inspired and
                    motivated once you meet him or attend his passion-driven
                    classes.
                  </p>
                </div>

                <div className={styles.philosophyCard}>
                  <div className={styles.philosophyIcon}>
                    <Award size={28} />
                  </div>
                  <h3 className={styles.philosophyTitle}>Dedication (Lagan)</h3>
                  <p className={styles.philosophyText}>
                    He dedicated his early childhood to practicing yoga in the
                    mighty mountains of Rishikesh and became the most renowned &
                    youngest child to get certified as a yoga trainer. He has
                    been teaching yoga for more than 20 years and is considered
                    one of the most experienced teachers in India. Guru Ashish
                    Ji has trained many students from different backgrounds,
                    countries, ages, and physical capabilities. His mission is
                    to make every student feel comfortable and relaxed during
                    their practice. Guru Ashish Ji shares his wisdom with love
                    and kindness and aspires to inspire every individual through
                    his yogic capabilities.
                  </p>
                </div>

                <div className={styles.philosophyCard}>
                  <div className={styles.philosophyIcon}>
                    <Sparkles size={28} />
                  </div>
                  <h3 className={styles.philosophyTitle}>Karma (Karm)</h3>
                  <p className={styles.philosophyText}>
                    Since he discovered yoga as his karma from an early age in
                    his life, his mission to spread the knowledge and awareness
                    of yoga around the world has been unstoppable. His intent
                    for teaching yoga is not only to awaken people's spiritual
                    connection but also to help them build physical strength and
                    emotional resilience. Guru Ji teaches his students that yoga
                    is more than physical postures but rather a lifestyle that
                    can be carried off the mat. He also believes that in order
                    to reach spiritual enlightenment through yoga, one must
                    first understand their inner self and strive for personal
                    growth.
                  </p>
                </div>
              </div>
            )}

            {/* Journey Section */}
            {activeSection === 'journey' && (
              <div className={styles.timelineContainer}>
                <h2 className={styles.timelineHeader}>
                  Guruji's Sacred Journey
                </h2>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>5 Years Old</div>
                      <p>
                        He was only 5 when he started to receive Yog Shiksha
                        (teachings) in the holy Himalayas.
                      </p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>8 Years Old</div>
                      <p>
                        At 8, he started to position himself amongst the
                        greatest yoga gurus. He even learnt to master some of
                        the most challenging yoga postures and poses.
                      </p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>11 Years Old</div>
                      <p>
                        When he turned 11, he participated in yoga championships
                        and no wonder, he won almost all those and established
                        himself as one of the youngest yoga teachers.
                      </p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>16 Years Old</div>
                      <p>
                        He was 16 when he decided to open his yoga school in
                        Rishikesh and pass on the knowledge and wisdom he has
                        gained throughout these years.
                      </p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>16+ Years Old</div>
                      <p>
                        But due to lack of resources, he wasn't able to open one
                        during that time but his dedication made him teach yoga
                        from his home. He didn't give up on his dream.
                      </p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>19 Years Old</div>
                      <p>
                        Although he started from a small place in Rishikesh, he
                        taught more than 1000 students before turning 19.
                      </p>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineAge}>21 Years Old</div>
                      <p>
                        Fast-forward, at 21, he opened Vinyasa Yoga School and
                        today the school welcomes students from across the world
                        with best yoga practices, top-class amenities,
                        facilities and everything a student needs to nurture in
                        their yoga journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Message Section */}
            {activeSection === 'message' && (
              <div className={styles.messageCard}>
                <div className={styles.messageHeader}>
                  <Quote size={40} className={styles.messageQuoteIcon} />
                  <h2 className={styles.messageTitle}>
                    Message and Invitation From Our Guruji
                  </h2>
                </div>

                <div className={styles.messageContent}>
                  <p>
                    Every individual carries a purpose in his mind before
                    stepping into this journey of discovering a lifestyle
                    inspired by yoga. But there are times when one doesn't have
                    any purpose but feels that yoga is the ultimate way to
                    escape the chaos created. I have always advised my students
                    that do not learn yoga for just learning the poses and the
                    postures, rather, learn it to make their life better and
                    through yours, make other's life better.
                  </p>

                  <p>
                    It takes a while to love yoga but it takes years for someone
                    to know yoga. Yoga is a form of art that teaches you the
                    greatest lessons of life. You do yoga, you do life.
                  </p>

                  <p>
                    I have seen miracles happening through it, I have seen
                    people adapting to the highest forms of patience with it and
                    I have seen impossible transformations, honestly, yoga has
                    so much to offer, only if you are ready to receive. So, what
                    are your thoughts and how do you seek yoga in your life? I
                    am willing to know and I am willing to understand your
                    purpose of choosing yoga in life.
                  </p>

                  <p>
                    Vinyasa Yogashala is just a place where thousands of
                    students find meaning in their lives and they further guide
                    others and that's what Vinyasa Yogashala is all about.
                  </p>

                  <div className={styles.callToAction}>
                    <h3>BECOME A MEDIUM OF CHANGE THROUGH YOGA</h3>
                    <h3>BECOME A SOURCE OF TRANSFORMATION</h3>
                    <h3>
                      BECOME AN INTENT THAT MOTIVATES OTHERS TO LEAD A HEALTHY
                      LIFE
                    </h3>
                  </div>

                  <p className={styles.finalMessage}>
                    If you are at Vinyasa Yogashala, you are connecting with the
                    world through the teachings received here, so you are not
                    learning for yourself but for the world.
                  </p>

                  <div className={styles.closing}>
                    <p className={styles.closingText}>
                      See you at the session, be on time :)
                    </p>
                    <p className={styles.sanskritMantra}>
                      ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।
                    </p>
                    <p className={styles.sanskritMantra}>
                      सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्।
                    </p>
                    <p className={styles.signature}>~ Guru Ashish Ji</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* World Peace Yoga School Content */}
        {activeTab === 'worldpeace' && (
          <>
            {activeSection === 'founder' && (
              <div className={styles.founderCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <Heart size={32} />
                  </div>
                  <div>
                    <h2 className={styles.cardTitle}>Yogi Vishnu Panigrahi</h2>
                    <p className={styles.schoolName}>
                      Founder of World Peace Yoga School
                    </p>
                  </div>
                </div>

                <div className={styles.quoteBox}>
                  <Quote className={styles.quoteIcon} size={24} />
                  <p className={styles.quote}>
                    "My life itself is a message, I am human, I make mistakes,
                    these mistakes are the stepping stones for me to continue my
                    journey as they teach me the greatest of lessons"
                  </p>
                </div>

                <div className={styles.contentText}>
                  <h3>Who is Vishnu Panigrahi?</h3>
                  <p>
                    He is humble and grounded and shows no ego or bias a man who
                    gives his heart for humanity. This journey will show you
                    that within the universe there is no You & I as we are One.
                  </p>

                  <p>
                    <em>
                      For some, he is a Yogi. For some, he is a Guru. Many call
                      him a friend & some call him father. Many love him for
                      unknown reasons.
                    </em>
                  </p>

                  <p>
                    A spinner of joy, a farmer of wisdom, and support for those
                    who need guidance - a ray of light that the world needs as
                    he showers his grace with no bias, to learn and feel you
                    only need to be receptive. Vishnu Panigrahi is an Indian
                    yoga guru and spiritual guide. His sole purpose is to serve
                    humanity, give his life for charity, spreading the love and
                    knowledge of yoga to create harmony and peace.
                  </p>

                  <p>
                    He works relentlessly to bring this to life in the modern
                    chaotic world, imparting his knowledge to support the cause
                    of serving humanity. The founder of World Peace Yoga School
                    and Samadhi Ashram - he continues to impart and guide both
                    his world teachers and students who come to expand their
                    knowledge.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'journey' && (
              <div className={styles.journeyContainer}>
                <h2 className={styles.journeyHeader}>
                  Yogi Vishnu Panigrahi's Sacred Journey
                </h2>

                <div className={styles.journeySection}>
                  <h3 className={styles.journeySubtitle}>
                    Where The Journey Began
                  </h3>
                  <p>
                    Even before he came to the physical world - Yogi Vishnu was
                    steeped in spiritual endeavors- his mother being the vessel
                    to bring to the world through deep prayer & devotion a
                    spiritual devotee. Growing up he followed the advice of his
                    grandfather and meditated for salvation and moksha not the
                    rituals or prayers for worldly materials. Vishnu would
                    frequently serve the wandering Sadhu's, many of which come
                    from the special sect of knowledge bearing Hatha-yogis -
                    'Kum-phatia baba's and their presence in Vishnu's life left
                    a lasting impression.
                  </p>
                </div>

                <div className={styles.encounterBox}>
                  <Star className={styles.encounterIcon} size={32} />
                  <h3 className={styles.encounterTitle}>
                    1st Spiritual Encounter
                  </h3>
                  <p>
                    Vishnu gave his time to support the ill and needy at a
                    nearby hospital. An old man who was neglected and had severe
                    issues crossed Vishnu's path. This was his first test -
                    Vishnu cared for the old man over the coming days, and as a
                    result, Vishnu was blessed by this soul. Many thought Vishnu
                    had become a servant and mocked him for caring for this man.
                    Vishnu from a Brahmin caste was not meant to mix with those
                    from lower castes. However, his inner strength remained true
                    and he did not relent against the caste system in his
                    village.
                  </p>
                  <p className={styles.mysticalText}>
                    After this blessing, the old man vanished and no one
                    remembered or could say he had been there - it was almost as
                    though God himself had come to test Vishnu's devotion.
                  </p>
                </div>

                <div className={styles.timelineContainer}>
                  <h3 className={styles.timelineSubheader}>Timeline</h3>
                  <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDot}></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineAge}>Age 15</div>
                        <p>
                          A member of Muni Samaj - a school of meditation and
                          yoga (founded by a saint devoted to long periods of
                          silence)
                        </p>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDot}></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineAge}>Age 18</div>
                        <p>
                          Meeting with Vedanta Keshari Swami Niranjanji 'Lion of
                          Vedanta'. Vishnu studied for 2 years whilst at the
                          same time acquiring a BA degree in Arts at Jyoti Vihar
                          University.
                        </p>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDot}></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineAge}>Age 20</div>
                        <p>
                          Vishnu took his path of devotion cultivating universal
                          love and sankirtan - Through the Bhakti tradition and
                          his days and nights passed in prayers and mantra
                          recitations following the Chaitanya Mahaprabhu
                          tradition from the 15th Century.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.challengeBox}>
                  <h3 className={styles.challengeTitle}>
                    His Greatest Challenge
                  </h3>
                  <p>
                    Vishnu was diagnosed with a congenital heart defect and
                    needed open surgery. With no money or support, he set off
                    for treatment - keeping God and his resolve in his heart.
                  </p>
                  <ul className={styles.challengeList}>
                    <li>
                      <strong>12th August 1994</strong> - he was given surgery
                      with no one to support him or beside him whilst he
                      underwent this life-threatening surgery.
                    </li>
                    <li>
                      <strong>15th August (India's Independence Day)</strong> -
                      3 days later, Vishnu rose and as a result, made Sankalpa
                      to serve humanity during his life.
                    </li>
                    <li>
                      After this Vishnu went through the physical world duties
                      of organizing camps, spiritual programs, and Satsang in
                      and around his village - serving mostly the poor and
                      underprivileged. He cultivated land and agriculture
                      eventually losing it all to flooding - however, this was
                      the blessing that would bring Vishnu to Rishikesh.
                    </li>
                  </ul>
                </div>

                <div className={styles.rishikeshSection}>
                  <h3 className={styles.rishikeshTitle}>Rishikesh</h3>
                  <p>
                    On his arrival to the Himalayas, Vishnu crossed paths with a
                    sadhu - who would prepare him for his time with Swami Rama.
                    To take the path of the traditional Himalayan Yoga he was
                    scolded, and told not to be fearful - and was told to throw
                    all his belongings to Ganga - "to part with all the worldly
                    belongings is when you get the real God" told the Sadhu.
                  </p>

                  <div className={styles.encounterBox}>
                    <Star className={styles.encounterIcon} size={32} />
                    <h4 className={styles.encounterTitle}>
                      2nd Spiritual Encounter
                    </h4>
                    <p>
                      The Yogi gave Vishnu shelter and provided a cave for him
                      to meditate in - whilst in meditation, Vishnu saw a cobra
                      - as he closed his eyes and composed his mind - his inner
                      being spoke:
                    </p>
                    <p className={styles.innerVoice}>
                      "I have come to release your fear, not increase your fear"
                    </p>
                  </div>

                  <p>
                    The time came for Vishnu to leave the Yogi and go under the
                    guidance of Swami Veda Bharti at his Gurukulam. In these 9
                    years - Vishnu obtained an MA in Sanskrit and MA in Yoga -
                    whilst teaching and guiding students in the Swami Rama
                    Institute Of Meditation.
                  </p>

                  <p>
                    He was blessed to have taught from other masters such as
                    Swami Hari (Master teacher), Shri Mauni Babaji (currently in
                    silence), Swami Shankarandana Ji (Kriya Yoga Master), and
                    Swami Anand Res (Founder Viswa Shanti Mission).
                  </p>
                </div>
              </div>
            )}
            {activeSection === 'philosophy' && (
              <div className={styles.founderCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h2 className={styles.cardTitle}>
                      Philosophy of Yogi Vishnu Panigrahi
                    </h2>
                    <p className={styles.schoolName}>
                      Teachings of Unity, Service, and Love
                    </p>
                  </div>
                </div>

                <div className={styles.contentText}>
                  <h3>Core Philosophy</h3>
                  <p>
                    Yogi Vishnu Panigrahi's philosophy centers on serving
                    humanity with unconditional love, spreading the knowledge of
                    yoga to create harmony and peace in the modern chaotic
                    world. His teachings emphasize that we are all One - there
                    is no separation between You and I in the universe.
                  </p>

                  <h3>Humility and Service</h3>
                  <p>
                    His approach is rooted in humility and groundedness, showing
                    no ego or bias. He gives his heart completely for humanity,
                    demonstrating that true spiritual wisdom comes not from
                    superiority, but from humble service to all beings
                    regardless of caste, class, or background.
                  </p>

                  <h3>The Path of Receptivity</h3>
                  <p>
                    To learn from Yogi Vishnu, one only needs to be receptive.
                    He showers his grace with no bias, acting as a ray of light
                    that the world needs. His presence itself is a teaching - a
                    living embodiment of joy, wisdom, and unconditional support
                    for those who seek guidance.
                  </p>

                  <h3>Mistakes as Stepping Stones</h3>
                  <p>
                    A fundamental aspect of his philosophy is accepting our
                    humanity. He teaches that being human means making mistakes,
                    and these mistakes are not failures but rather stepping
                    stones that teach us the greatest lessons on our spiritual
                    journey. His life itself is a message of this truth.
                  </p>

                  <h3>Creating Harmony Through Yoga</h3>
                  <p>
                    Through his work at World Peace Yoga School and Samadhi
                    Ashram, he continues to impart ancient yogic wisdom while
                    guiding both teachers and students who come to expand their
                    knowledge. His mission is to spread yoga as a tool for
                    creating global harmony, peace, and unity among all beings.
                  </p>

                  <div className={styles.quoteBox}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p className={styles.quote}>
                      "Within the universe there is no You & I as we are One"
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === 'message' && (
              <div className={styles.messageCard}>
                <div className={styles.messageHeader}>
                  <Quote size={40} className={styles.messageQuoteIcon} />
                  <h2 className={styles.messageTitle}>
                    Message From Yogi Vishnu Panigrahi
                  </h2>
                </div>

                <div className={styles.messageContent}>
                  <p>
                    To all seekers on the path of yoga and spiritual growth -
                    remember that your life itself is a message. We are all
                    human, we all make mistakes, and these mistakes become the
                    stepping stones that teach us the greatest lessons on our
                    journey.
                  </p>

                  <p>
                    Do not fear your humanity. Embrace it with humility and
                    grace. Each challenge you face, each mistake you make, is an
                    opportunity for profound learning and growth. This is the
                    natural way of spiritual evolution.
                  </p>

                  <h3 className={styles.cardTitle}>The Path of Oneness</h3>
                  <p>
                    Understand deeply that within this vast universe, there is
                    no separation between You and I. We are all One. When you
                    serve another, you serve yourself. When you bring peace to
                    another's heart, you bring peace to your own. This is the
                    fundamental truth that yoga reveals.
                  </p>

                  <h3 className={styles.cardTitle}>
                    Approach With Receptivity
                  </h3>
                  <p>
                    Come to your practice with an open and receptive heart. The
                    teachings will shower their grace without bias upon all who
                    are ready to receive. You need not prove yourself worthy -
                    you already are. Simply be present, be humble, and be
                    willing to learn.
                  </p>

                  <div className={styles.callToAction}>
                    <h3>SERVE HUMANITY WITH UNCONDITIONAL LOVE</h3>
                    <h3>CREATE HARMONY AND PEACE IN THE WORLD</h3>
                    <h3>REMEMBER: WE ARE ALL ONE</h3>
                  </div>

                  <p className={styles.finalMessage}>
                    The path of yoga is not just for individual transformation,
                    but for the collective evolution of all beings toward unity,
                    harmony, and peace. Through your practice, you contribute to
                    the healing of the entire world.
                  </p>

                  <div className={styles.closing}>
                    <p className={styles.closingText}>
                      May your journey be filled with light, love, and divine
                      grace.
                    </p>
                    <p className={styles.sanskritMantra}>
                      ॐ शान्तिः शान्तिः शान्तिः
                    </p>
                    <p className={styles.signature}>~ Yogi Vishnu Panigrahi</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Sattva Yoga Academy Content */}
        {/* SATTVA YOGA ACADEMY CONTENT */}
        {activeTab === 'sattva' && (
          <>
            {activeSection === 'founder' && (
              <div className={styles.founderCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <Mountain size={32} />
                  </div>
                  <div>
                    <h2 className={styles.cardTitle}>Anand Mehrotra</h2>
                    <p className={styles.schoolName}>
                      Spiritual Master | Founder of Sattva Yoga | Visionary of
                      Conscious Evolution
                    </p>
                  </div>
                </div>

                <div className={styles.quoteBox}>
                  <Quote className={styles.quoteIcon} size={24} />
                  <p className={styles.quote}>
                    "Yoga is not just about feeling better — it is about
                    awakening. We are here to transcend."
                  </p>
                </div>

                <div className={styles.contentText}>
                  <h3>Himalayan Yoga Master</h3>
                  <p>
                    Anand Mehrotra is a visionary Himalayan yogi, master
                    teacher, and global thought leader whose work represents
                    ancient yogic wisdom with the needs of the modern world. As
                    the founder of the Sattva Yoga movement and Sattva Yoga
                    Academy, Anand has touched thousands of lives worldwide,
                    offering a path of wholeness, conscious evolution, and
                    radical inner freedom.
                  </p>

                  <p>
                    His teachings — rooted in the Himalayan Yog-Vedantic
                    tradition — embody a rare integration of depth,
                    practicality, and transformative power. More than a teacher,
                    Anand is a spiritual innovator, conscious entrepreneur, and
                    humanitarian. He lives his teachings fully, inviting seekers
                    into a multidimensional, integrated experience of yoga that
                    awakens the heart, mind, and spirit.
                  </p>

                  <h3>Early Life and Spiritual Formation</h3>
                  <p>
                    Born and raised in Rishikesh, India — widely regarded as the
                    birthplace of yoga — Anand was immersed in a sacred
                    environment of yogic study and sadhana from a very young
                    age. Trained in the oral tradition under the guidance of his
                    revered master, Maharaji, Anand was initiated into the
                    timeless lineage of Himalayan sages.
                  </p>

                  <p>
                    From childhood, he demonstrated a rare intensity and clarity
                    of purpose, with a profound thirst to understand the nature
                    of reality. His upbringing in the Himalayas provided not
                    only exposure to the depth of the Vedantic teachings, but
                    also a firsthand experience of yoga as a living, embodied
                    state of consciousness. Anand's spiritual education was not
                    confined to scriptures — it was embedded in the very fabric
                    of his daily life, guided by lineage, discipline, and deep
                    surrender.
                  </p>

                  <h3>Sattva Yoga: The Path of Wholeness</h3>
                  <p>
                    In 2012, Anand Mehrotra developed and formally introduced
                    Sattva Yoga—a complete, integrated approach to yoga designed
                    for modern living, rooted in the timeless wisdom of the
                    Himalayas.
                  </p>

                  <p>
                    Derived from the Sanskrit word Sattva, meaning wholeness,
                    truth, or purity, this path invites practitioners into
                    full-spectrum living—where personal evolution, presence, and
                    deep inner freedom become a lived reality.
                  </p>

                  <p>
                    Unlike fragmented styles that isolate posture or breath,
                    Sattva Yoga weaves together the entire spectrum of yogic
                    technology, including:
                  </p>

                  <div className={styles.practiceList}>
                    <div className={styles.practiceItem}>Tantric Kriyas</div>
                    <div className={styles.practiceItem}>
                      Kundalini awakening
                    </div>
                    <div className={styles.practiceItem}>
                      Pranayama & breathwork
                    </div>
                    <div className={styles.practiceItem}>
                      Hatha & vinyasa flow
                    </div>
                    <div className={styles.practiceItem}>Naad (mantra)</div>
                    <div className={styles.practiceItem}>Meditation</div>
                    <div className={styles.practiceItem}>Jnana teachings</div>
                    <div className={styles.practiceItem}>Bhakti expression</div>
                  </div>

                  <p>
                    This integrative practice creates real
                    transformation—impacting every layer of our being: physical,
                    mental, emotional, energetic, and spiritual. It is both
                    dynamic and meditative, ancient and evolutionary, expanding
                    while staying rooted in the source.
                  </p>

                  <div className={styles.quoteBox}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p className={styles.quote}>
                      "Sattva Yoga is not a style. It is a technology for
                      radical transformation." — Anand Mehrotra
                    </p>
                  </div>

                  <p>
                    To support those seeking deeper immersion on this path,
                    Anand founded Sattva Yoga Academy, a global hub in the
                    Himalayas for authentic teacher trainings, spiritual study,
                    and conscious leadership.
                  </p>

                  <p>
                    And through Sattva Connect, his innovative online platform,
                    these powerful teachings are now available to seekers
                    worldwide—bringing the wisdom and experience of Himalayan
                    yoga into your home and daily life.
                  </p>

                  <h3>Living the Teachings: Yoga as a Way of Being</h3>
                  <p>
                    For Anand, yoga is not a practice you do — it is who you
                    are. It is a way of walking through the world with presence,
                    integrity, and inner freedom. He often emphasizes that yoga
                    is not something separate from daily life, but rather, the
                    art of conscious living itself.
                  </p>

                  <p>
                    Sattva Yoga embodies this philosophy. It is a lifestyle that
                    weaves together dynamic action and inner stillness,
                    spiritual inquiry and everyday leadership. It invites
                    practitioners to live their dharma, serve their communities,
                    and participate in the collective evolution of
                    consciousness.
                  </p>

                  <h3>Journey, Pilgrimage and Inner Freedom</h3>
                  <p>
                    Anand's work extends beyond the classroom and into the
                    wilderness. His motorcycle pilgrimages through the Himalayas
                    are sacred rites of passage, spiritual intensives that blend
                    adventure, service, and inner transformation. These
                    journeys, featured in the acclaimed documentary The Highest
                    Pass and its sequel The Road to Dharma, have introduced
                    thousands to the power of facing fear, surrendering to the
                    unknown, and awakening in motion.
                  </p>

                  <div className={styles.quoteBox}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p className={styles.quote}>
                      "The ultimate pilgrimage is always inward."
                    </p>
                  </div>

                  <p>
                    He also leads spiritual pilgrimages to sacred Himalayan
                    temples and power spots, where seekers are invited to shed
                    old identities and experience deep soul activation. For
                    Anand, every journey is an opportunity to transcend — not
                    just to escape or feel better, but to evolve. He teaches
                    that if someone goes on a pilgrimage and returns home as the
                    same being, then that person was never truly on a
                    pilgrimage. For Anand, the ultimate pilgrimage is always
                    inward — toward the realisation of the Self.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'philosophy' && (
              <div className={styles.founderCard}>
                <h2 className={styles.cardTitle}>Philosophy of Sattva Yoga</h2>
                <div className={styles.contentText}>
                  <p>
                    Sattva Yoga embodies a complete philosophy of conscious
                    living. It is a lifestyle that weaves together dynamic
                    action and inner stillness, spiritual inquiry and everyday
                    leadership. It invites practitioners to live their dharma,
                    serve their communities, and participate in the collective
                    evolution of consciousness.
                  </p>

                  <h3>Core Principles</h3>
                  <p>
                    Sattva Yoga is rooted in the understanding that yoga is not
                    a practice you do — it is who you are. It emphasizes that
                    yoga is not something separate from daily life, but rather,
                    the art of conscious living itself.
                  </p>

                  <p>
                    The practice integrates all aspects of traditional Himalayan
                    wisdom with modern understanding, creating a path that is
                    both timeless and relevant to contemporary seekers. It
                    impacts every layer of our being: physical, mental,
                    emotional, energetic, and spiritual.
                  </p>

                  <h3>The Technology of Transformation</h3>
                  <p>
                    Unlike fragmented styles that isolate posture or breath,
                    Sattva Yoga weaves together the entire spectrum of yogic
                    technology - from Tantric Kriyas and Kundalini awakening to
                    Pranayama, meditation, Jnana teachings, and Bhakti
                    expression. This integrative practice creates real
                    transformation that extends far beyond the yoga mat.
                  </p>

                  <div className={styles.quoteBox}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p className={styles.quote}>
                      "Sattva Yoga is not a style. It is a technology for
                      radical transformation."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'journey' && (
              <div className={styles.journeyContainer}>
                <h2 className={styles.journeyHeader}>
                  Anand Mehrotra's Spiritual Journey
                </h2>

                <div className={styles.journeySection}>
                  <h3 className={styles.journeySubtitle}>Early Formation</h3>
                  <p>
                    Born and raised in Rishikesh, India — widely regarded as the
                    birthplace of yoga — Anand was immersed in a sacred
                    environment of yogic study and sadhana from a very young
                    age. Trained in the oral tradition under the guidance of his
                    revered master, Maharaji, Anand was initiated into the
                    timeless lineage of Himalayan sages.
                  </p>

                  <p>
                    From childhood, he demonstrated a rare intensity and clarity
                    of purpose, with a profound thirst to understand the nature
                    of reality. His upbringing in the Himalayas provided not
                    only exposure to the depth of the Vedantic teachings, but
                    also a firsthand experience of yoga as a living, embodied
                    state of consciousness.
                  </p>

                  <p>
                    Anand's spiritual education was not confined to scriptures —
                    it was embedded in the very fabric of his daily life, guided
                    by lineage, discipline, and deep surrender.
                  </p>
                </div>

                <div className={styles.encounterBox}>
                  <Star className={styles.encounterIcon} size={32} />
                  <h3 className={styles.encounterTitle}>
                    The Birth of Sattva Yoga (2012)
                  </h3>
                  <p>
                    In 2012, Anand Mehrotra developed and formally introduced
                    Sattva Yoga—a complete, integrated approach to yoga designed
                    for modern living, rooted in the timeless wisdom of the
                    Himalayas.
                  </p>

                  <p>
                    This marked a significant milestone in making authentic
                    Himalayan teachings accessible to the modern world while
                    maintaining their depth and transformative power. Through
                    Sattva Yoga Academy and Sattva Connect, these teachings now
                    reach seekers worldwide.
                  </p>
                </div>

                <div className={styles.rishikeshSection}>
                  <h3 className={styles.rishikeshTitle}>
                    Himalayan Pilgrimages
                  </h3>
                  <p>
                    Anand's work extends beyond the classroom and into the
                    wilderness. His motorcycle pilgrimages through the Himalayas
                    are sacred rites of passage, spiritual intensives that blend
                    adventure, service, and inner transformation.
                  </p>

                  <p>
                    These journeys, featured in the acclaimed documentary{' '}
                    <em>The Highest Pass</em> and its sequel{' '}
                    <em>The Road to Dharma</em>, have introduced thousands to
                    the power of facing fear, surrendering to the unknown, and
                    awakening in motion.
                  </p>

                  <div className={styles.quoteBox}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p className={styles.quote}>
                      "The ultimate pilgrimage is always inward."
                    </p>
                  </div>

                  <p>
                    He also leads spiritual pilgrimages to sacred Himalayan
                    temples and power spots, where seekers are invited to shed
                    old identities and experience deep soul activation. For
                    Anand, every journey is an opportunity to transcend — not
                    just to escape or feel better, but to evolve.
                  </p>

                  <p>
                    He teaches that if someone goes on a pilgrimage and returns
                    home as the same being, then that person was never truly on
                    a pilgrimage. For Anand, the ultimate pilgrimage is always
                    inward — toward the realisation of the Self.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'message' && (
              <div className={styles.messageCard}>
                <div className={styles.messageHeader}>
                  <Quote size={40} className={styles.messageQuoteIcon} />
                  <h2 className={styles.messageTitle}>
                    The Path of Transformation
                  </h2>
                </div>

                <div className={styles.messageContent}>
                  <p>
                    Anand Mehrotra's message is clear: yoga is not just about
                    feeling better — it is about awakening. We are here to
                    transcend.
                  </p>

                  <p>
                    Through Sattva Yoga Academy and Sattva Connect, he continues
                    to guide seekers worldwide on a path of wholeness, conscious
                    evolution, and radical inner freedom. His teachings invite
                    you to experience yoga not as a practice separate from life,
                    but as the very art of conscious living itself.
                  </p>

                  <p>
                    Sattva Yoga is a technology for radical transformation that
                    impacts every layer of your being - physical, mental,
                    emotional, energetic, and spiritual. It is both dynamic and
                    meditative, ancient and evolutionary, expanding while
                    staying rooted in the source.
                  </p>

                  <div className={styles.callToAction}>
                    <h3>EMBRACE WHOLENESS</h3>
                    <h3>AWAKEN YOUR CONSCIOUSNESS</h3>
                    <h3>LIVE YOUR DHARMA</h3>
                  </div>

                  <p className={styles.finalMessage}>
                    The teachings are here. The path is open. The transformation
                    awaits those who are ready to receive.
                  </p>

                  <div className={styles.closing}>
                    <p className={styles.closingText}>
                      Remember: The ultimate pilgrimage is always inward —
                      toward the realisation of the Self.
                    </p>
                    <p className={styles.signature}>~ Anand Mehrotra</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <Flower2 size={40} />
          <p className={styles.footerText}>
            ॐ May all beings everywhere be happy and free
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
