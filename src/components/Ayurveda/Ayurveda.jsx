import React from "react";
import styles from "../../assets/styles/Ayurveda/Ayurveda.module.css";
import { FaLeaf, FaFire, FaWater, FaWind, FaSpa, FaSeedling, FaSun, FaMoon, FaStar } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdRestaurant } from "react-icons/md";
import { GiHerbsBundle, GiOilPump, GiMeditation } from "react-icons/gi";
import Satvik from "../../assets/images/Nutritious.webp";
import Ayurveda from "../../assets/images/AyurvedaImg.JPG";
import AyurvedaImg from "../../assets/images/AyurvedaTeacher.JPG"

const AyurvedaPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={`${styles.hero} d-flex align-items-center text-center`}>
        <div className="container">
          <h2 className={styles.sectionAyurveda}>Ayurveda</h2>
          <p className="lead fs-3">The Science of Life & Longevity</p>
          <p className="fs-5 mt-4 w-75 mx-auto">
            Discover the ancient wisdom of Ayurveda at Hatha Yogashram – a holistic path to balance your body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`container py-5 ${styles.section}`}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className={styles.sectionTitle}>What is Ayurveda?</h2>
            <p className={styles.lead}>
              Ayurveda, the "science of life," is a 5,000‑year‑old holistic healing system from India. It emphasizes prevention and wellness by balancing the body, mind, and spirit.
            </p>
            <p className={styles.lead}>
              At Hatha Yogashram, we integrate Ayurveda deeply into our yoga teacher trainings. As mentioned on our website, our Hatha Yoga curriculum is enriched with{" "}
              <strong>studies in Ayurveda, Yoga Anatomy, Philosophy, and Mantra chanting</strong>. We believe true yoga goes beyond the mat – it’s a lifestyle rooted in natural healing.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={Ayurveda}
              alt="Ayurvedic herbs and oil"
              className={`img-fluid rounded-3 shadow ${styles.image}`}
            />
          </div>
        </div>
      </section>

      {/* The Three Doshas */}
      <section className={`py-5 ${styles.doshaSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>The Three Doshas – Your Unique Blueprint</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className={`card h-100 ${styles.doshaCard}`}>
                <div className="card-body text-center">
                  <FaWind className={styles.doshaIcon} style={{ color: "#4a6fa5" }} />
                  <h3 className={styles.infoCardTitle}>Vata (Air & Space)</h3>
                  <p className={styles.infoCardSubTitle}>
                    Governs movement, creativity, and communication. When balanced, you're energetic and flexible. Imbalance brings anxiety, dryness, and irregularity.
                  </p>
                  <p className="fw-bold">Balance tips:</p>
                  <ul className="list-unstyled">
                    <li>✓ Warm, nourishing foods</li>
                    <li>✓ Regular routine</li>
                    <li>✓ Abhyanga (self-massage)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`card h-100 ${styles.doshaCard}`}>
                <div className="card-body text-center">
                  <FaFire className={styles.doshaIcon} style={{ color: "#e67e22" }} />
                 <h3 className={styles.infoCardTitle}>Pitta (Fire & Water)</h3>
                  <p className={styles.infoCardSubTitle}>
                    Controls digestion, metabolism, and transformation. Balanced pitta brings intelligence and contentment. Imbalance leads to anger, inflammation, and acidity.
                  </p>
                  <p className="fw-bold">Balance tips:</p>
                  <ul className="list-unstyled">
                    <li>✓ Cooling foods (cucumber, mint)</li>
                    <li>✓ Moderate exercise</li>
                    <li>✓ Time in nature</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`card h-100 ${styles.doshaCard}`}>
                <div className="card-body text-center">
                  <FaWater className={styles.doshaIcon} style={{ color: "#2c7a7b" }} />
                 <h3 className={styles.infoCardTitle}>Kapha (Earth & Water)</h3>
                  <p className={styles.infoCardSubTitle}>
                    Provides structure, stability, and lubrication. Balanced kapha creates calm, strength, and loyalty. Imbalance results in lethargy, weight gain, and attachment.
                  </p>
                  <p className="fw-bold">Balance tips:</p>
                  <ul className="list-unstyled">
                    <li>✓ Light, spicy foods</li>
                    <li>✓ Invigorating exercise</li>
                    <li>✓ Variety in routine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurvedic Therapies */}
      <section className={`container py-5 ${styles.section}`}>
        <h2 className={`${styles.sectionTitle} text-center mb-5`}>Our Ayurvedic Therapies</h2>
        <div className="row g-4">
          <div className="col-sm-6 col-lg-3">
            <div className={`card ${styles.therapyCard}`}>
              <GiOilPump className={styles.therapyIcon} />
              <h3 className={styles.infoCardTitle}>Abhyanga</h3>
              <p className={styles.infoCardSubTitle}>Warm oil massage that nourishes tissues, calms Vata, and promotes deep relaxation.</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className={`card ${styles.therapyCard}`}>
              <GiHerbsBundle className={styles.therapyIcon} />
              <h3 className={styles.infoCardTitle}>Panchakarma</h3>
              <p className={styles.infoCardSubTitle}>Five detoxifying treatments to cleanse the body of deep‑seated toxins (Ama).</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className={`card ${styles.therapyCard}`}>
              <FaSpa className={styles.therapyIcon} />
              <h3 className={styles.infoCardTitle}>Shirodhara</h3>
              <p className={styles.infoCardSubTitle}>Warm oil gently poured on the forehead, calming the nervous system and enhancing mental clarity.</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className={`card ${styles.therapyCard}`}>
              <FaSeedling className={styles.therapyIcon} />
              <h3 className={styles.infoCardTitle}>Herbal Remedies</h3>
              <p className={styles.infoCardSubTitle}>Personalized herbal formulations to restore balance and boost immunity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda in Yoga Teacher Training */}
      <section className={`py-5 ${styles.integrationSection}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <h2 className={styles.sectionTitle}>Ayurveda in Our Yoga Teacher Training</h2>
              <p className={styles.infoCardSubTitle}>
                As stated on our website, our Hatha Yoga training is <strong>"enriched with studies in Ayurveda, Yoga Anatomy, Philosophy, and Mantra chanting"</strong>. 
                Understanding Ayurveda transforms your teaching:
              </p>
              <ul className={`list-unstyled ${styles.benefitList}`}>
                <li><FaStar className="text-warning me-2" /> Identify Dosha imbalances in students.</li>
                <li><FaStar className="text-warning me-2" /> Sequence classes based on season and time of day.</li>
                <li><FaStar className="text-warning me-2" /> Offer personalized pranayama and meditation.</li>
                <li><FaStar className="text-warning me-2" /> Guide students toward holistic wellness.</li>
              </ul>
              <p className="mt-3">
                All our 200, 300, and 500‑hour TTCs include dedicated Ayurveda modules taught by experienced practitioners.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img
                src={AyurvedaImg}
                alt="Yoga and Ayurveda"
                className={`img-fluid rounded-3 shadow ${styles.image}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routines (Dinacharya) */}
      <section className={`container py-5 ${styles.section}`}>
        <h2 className={`${styles.sectionTitle} text-center mb-5`}>Dinacharya – Daily Ayurvedic Routines</h2>
        <div className="row">
          <div className="col-md-6">
            <div className={`d-flex mb-4 ${styles.routineItem}`}>
              <FaSun className={styles.routineIcon} />
              <div>
                <h3 className={styles.infoCardTitle}>Wake Up Before Sunrise</h3>
                <p className={styles.infoCardSubTitle}>Rise during Brahma muhurta (about 90 min before sunrise) to align with nature's peaceful energy.</p>
              </div>
            </div>
            <div className={`d-flex mb-4 ${styles.routineItem}`}>
              <FaWater className={styles.routineIcon} />
              <div>
                <h3 className={styles.infoCardTitle}>Drink Warm Water</h3>
                <p className={styles.infoCardSubTitle}>Start your day with a cup of warm water to stimulate digestion (Agni) and flush out toxins.</p>
              </div>
            </div>
            <div className={`d-flex mb-4 ${styles.routineItem}`}>
              <MdOutlineHealthAndSafety className={styles.routineIcon} />
              <div>
                <h3 className={styles.infoCardTitle}>Oil Pulling</h3>
                <p className={styles.infoCardSubTitle}>Swish sesame or coconut oil in your mouth for 10‑15 minutes to improve oral health and detoxify.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`d-flex mb-4 ${styles.routineItem}`}>
              <FaMoon className={styles.routineIcon} />
              <div>
                <h3 className={styles.infoCardTitle}>Abhyanga (Self‑Massage)</h3>
                <p className={styles.infoCardSubTitle}>Massage warm oil onto your body before bathing to nourish skin, calm Vata, and improve circulation.</p>
              </div>
            </div>
            <div className={`d-flex mb-4 ${styles.routineItem}`}>
              <GiMeditation className={styles.routineIcon} />
              <div>
                <h3 className={styles.infoCardTitle}>Yoga & Meditation</h3>
                <p className={styles.infoCardSubTitle}>Practice asanas and pranayama suited to your Dosha, followed by meditation to center the mind.</p>
              </div>
            </div>
            <div className={`d-flex mb-4 ${styles.routineItem}`}>
              <MdRestaurant className={styles.routineIcon} />
              <div>
                <h3 className={styles.infoCardTitle}>Eat Your Main Meal at Noon</h3>
                <p className={styles.infoCardSubTitle}>Digestive fire (Agni) is strongest when the sun is highest – enjoy a substantial, balanced lunch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Routines (Ritucharya) */}
      <section className={`py-5 ${styles.seasonalSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>Ritucharya – Seasonal Wisdom</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className={styles.seasonCard}>
                <h3 className={styles.infoCardTitle}>Winter (Hemanta)</h3>
                 <p className={styles.infoCardSubTitle}>Vata & Kapha accumulate. Favor warm, oily, sour, and salty foods. Stay active and keep warm.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={styles.seasonCard}>
                <h3 className={styles.infoCardTitle}>Summer (Grishma)</h3>
                <p className={styles.infoCardSubTitle}>Pitta dominates. Eat cooling, sweet, bitter foods. Avoid excessive heat and intense exercise.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className={styles.seasonCard}>
                <h3 className={styles.infoCardTitle}>Monsoon (Varsha)</h3>
                <p className={styles.infoCardSubTitle}>Vata increases. Digestive fire weakens. Prefer light, warm, and easily digestible meals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Satvik Diet */}
      <section className={`container py-5 ${styles.section}`}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={Satvik}
              alt="Healthy Satvik food"
              className={`img-fluid rounded-3 shadow ${styles.image}`}
            />
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h2 className={styles.sectionTitle}>Satvik Food – Eat Pure, Live Pure</h2>
            <p className={styles.infoCardSubTitle}>
              Our ashram serves pure Satvik meals – fresh, seasonal, plant‑based, and cooked with love. Satvik food is light, nourishing, and promotes mental clarity, making it ideal for yoga practitioners.
            </p>
            <p className={styles.infoCardSubTitle}><strong>Principles of Satvik eating:</strong></p>
            <ul>
              <li>Freshly prepared, never stale or processed.</li>
              <li>Includes whole grains, legumes, vegetables, fruits, nuts, and dairy.</li>
              <li>Spices used in moderation to aid digestion.</li>
              <li>Avoids onion, garlic, and caffeine (Rajasic foods).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits of Ayurveda */}
      <section className={`py-5 ${styles.benefitsSection}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={AyurvedaImg}
                alt="Ayurveda benefits"
                className={`img-fluid rounded-3 shadow ${styles.image}`}
              />
            </div>
            <div className="col-lg-6">
              <h2 className={styles.sectionTitle}>Benefits of Ayurveda</h2>
              <p className={styles.infoCardSubTitle}>
                Integrating Ayurvedic principles into your life offers profound benefits:
              </p>
              <ul className={`list-unstyled ${styles.benefitList}`}>
                <li>
                  <span className={styles.benefitIcon}><FaLeaf /></span>
                  <div>
                    <strong>Personalized Health:</strong> Learn to listen to your body and make choices that support your unique nature.
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}><MdOutlineHealthAndSafety /></span>
                  <div>
                    <strong>Disease Prevention:</strong> Understand how imbalances develop and use lifestyle to correct them before they cause illness.
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}><FaFire /></span>
                  <div>
                    <strong>Enhanced Digestion (Agni):</strong> Discover the central role of digestive fire in creating Ojas (vitality) and overall immunity.
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}><FaStar /></span>
                  <div>
                    <strong>Mental Clarity & Peace:</strong> Calm the mind by balancing the doshas through specific routines, diet, and herbal support.
                  </div>
                </li>
                <li>
                  <span className={styles.benefitIcon}><GiMeditation /></span>
                  <div>
                    <strong>Deeper Yoga Practice:</strong> Align your asana and pranayama practice with the energies of the day and season for maximum benefit.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Connection: Yoga & Ayurveda */}
      <section className={`py-5 ${styles.yogaConnectionSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-4`}>The Connection: Yoga & Ayurveda</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <p className={styles.infoCardSubTitle}>
                In our courses at our Rishikesh ashram, we teach Yoga and Ayurveda as complementary paths. While Yoga purifies and strengthens the body and calms the mind, Ayurveda provides the daily lifestyle framework — through diet, daily routines (Dinacharya), and herbal support — to maintain that balance.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className={`${styles.yogaConnectionCard} text-center`}>
                <FaWind className={`${styles.yogaConnectionIcon}`} style={{ color: "#4a6fa5" }} />
                <h4 className={styles.infoCardTitle}>Know Your Dosha</h4>
                <p className={styles.infoCardSubTitle}>Understand your dominant Dosha (Vata, Pitta, or Kapha) and how it shapes your physical and mental tendencies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.yogaConnectionCard} text-center`}>
                <GiMeditation className={`${styles.yogaConnectionIcon}`} style={{ color: "#bd0005" }} />
                <h4 className={styles.infoCardTitle}>Tailored Practice</h4>
                <p className={styles.infoCardSubTitle}>Choose the right asanas and pranayama to pacify your constitution and bring lasting harmony to body and mind.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.yogaConnectionCard} text-center`}>
                <FaSeedling className={`${styles.yogaConnectionIcon}`} style={{ color: "#2c7a7b" }} />
                <h4 className={styles.infoCardTitle}>Personalized Lifestyle</h4>
                <p className={styles.infoCardSubTitle}>Adopt a personalized diet and daily routine for optimal energy, clarity, and alignment with nature's rhythms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-5 ${styles.testimonialSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center mb-5`}>What Our Students Say</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className={`card ${styles.testimonialCard}`}>
                <div className="card-body">
                  <p className="card-text fst-italic">
                    "The Ayurveda module in my 200‑hour TTC was life‑changing. I learned to understand my body and now tailor my yoga classes to each student's Dosha. Truly holistic!"
                  </p>
                  <footer className="blockquote-footer mt-2">Maria, <cite>200‑hour graduate</cite></footer>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={`card ${styles.testimonialCard}`}>
                <div className="card-body">
                  <p className="card-text fst-italic">
                    "I came for Panchakarma and stayed for the wisdom. The therapists here are authentic and caring. I left feeling lighter, clearer, and deeply rejuvenated."
                  </p>
                  <footer className="blockquote-footer mt-2">David, <cite>Panchakarma guest</cite></footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-5 ${styles.ctaSection}`}>
        <div className="container text-center text-white">
          <h2 className="display-5 fw-bold mb-4">Begin Your Ayurvedic Journey</h2>
          <p className="lead mb-4">Fill the form and we will get back to you soon.</p>
          <button className={`btn btn-lg ${styles.ctaButton}`}>Enquire Now</button>
          <p className="mt-4 small">Or WhatsApp us: <strong>+91 98765 43210</strong></p>
        </div>
      </section>
    </div>
  );
};

export default AyurvedaPage;