import React, { useState } from "react";
import styles from "../../assets/styles/Homepage/Facilities.module.css";

const Facilities = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const truncateText = (text, words = 30) => {
    const splitText = text.split(" ");
    if (splitText.length <= words) return text;
    return splitText.slice(0, words).join(" ") + "...";
  };

  const cards = [
    {
      title: "Transportation",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      text: `We provide complete transportation assistance to ensure a smooth and stress-free arrival for our students. For those without a direct flight to Dehradun, we arrange comfortable pickups from Dehradun Airport, Haridwar Railway Station, or even Delhi upon request. Students arriving independently by taxi or cab are provided with detailed Google Maps directions, live assistance, and continuous communication until they safely reach the campus.`,
      colorClass: "purple"
    },
    {
      title: "Library",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      text: `Our yoga library is a calm and inspiring space designed to deepen your learning experience. It is thoughtfully stocked with a wide collection of books covering Yoga Asanas, Pranayama, Meditation, Yoga Philosophy, Anatomy, and ancient yogic texts.`,
      colorClass: "blue"
    },
    {
      title: "Excursions",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      text: `To help students connect with nature and local culture, we organize weekly excursions around Rishikesh and the Himalayan region. Explore sacred temples, pristine waterfalls, and breathtaking mountain trails.`,
      colorClass: "green"
    },
    {
      title: "Satvik Food",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      text: `Our school serves freshly prepared Satvik vegetarian meals that support a yogic lifestyle and holistic well-being. Every dish is prepared with pure, organic ingredients to enhance mental clarity and spiritual practice.`,
      colorClass: "orange"
    },
    {
      title: "24/7 Support",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
      text: `Our reception desk is available 24/7 to assist students throughout their stay and ensure a peaceful experience. Whether you need medical assistance or have questions, our dedicated team is always ready to support you.`,
      colorClass: "indigo"
    },
  ];

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        
        {/* Heading */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Facilities You Enjoy At The Yoga School In Rishikesh, India
          </h2>
          <div className={styles.headingLine}></div>
        </div>

        {/* ROW 1 */}
        <div className={styles.row}>
          {/* Card 0 */}
          <div className={`${styles.textCard} ${styles[cards[0].colorClass]} ${expanded === 0 ? styles.expanded : ''}`}>
            <div className={styles.decorativeBlur}></div>
            
            <h5 className={styles.cardTitle}>{cards[0].title}</h5>
            
            <p className={styles.cardText}>
              {expanded === 0 ? cards[0].text : truncateText(cards[0].text)}
            </p>

            <div className={styles.toggleButton}>
              <span onClick={() => toggleCard(0)}>
                {expanded === 0 ? "Show Less ↑" : "Show More ↓"}
              </span>
            </div>
          </div>

          {/* Image 0 */}
          <div className={styles.imageWrapper}>
            <img 
              src={cards[0].image}
              alt={cards[0].title}
              className={styles.image}
            />
          </div>

          {/* Card 1 */}
          <div className={`${styles.textCard} ${styles[cards[1].colorClass]} ${expanded === 1 ? styles.expanded : ''}`}>
            <div className={styles.decorativeBlur}></div>
            
            <h5 className={styles.cardTitle}>{cards[1].title}</h5>
            
            <p className={styles.cardText}>
              {expanded === 1 ? cards[1].text : truncateText(cards[1].text)}
            </p>

            <div className={styles.toggleButton}>
              <span onClick={() => toggleCard(1)}>
                {expanded === 1 ? "Show Less ↑" : "Show More ↓"}
              </span>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className={styles.row}>
          {/* Image 1 */}
          <div className={styles.imageWrapper}>
            <img 
              src={cards[1].image}
              alt={cards[1].title}
              className={styles.image}
            />
          </div>

          {/* Card 2 */}
          <div className={`${styles.textCard} ${styles[cards[2].colorClass]} ${expanded === 2 ? styles.expanded : ''}`}>
            <div className={styles.decorativeBlur}></div>
            
            <h5 className={styles.cardTitle}>{cards[2].title}</h5>
            
            <p className={styles.cardText}>
              {expanded === 2 ? cards[2].text : truncateText(cards[2].text)}
            </p>

            <div className={styles.toggleButton}>
              <span onClick={() => toggleCard(2)}>
                {expanded === 2 ? "Show Less ↑" : "Show More ↓"}
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className={styles.imageWrapper}>
            <img 
              src={cards[2].image}
              alt={cards[2].title}
              className={styles.image}
            />
          </div>
        </div>

        {/* ROW 3 */}
        <div className={styles.row}>
          {/* Card 3 */}
          <div className={`${styles.textCard} ${styles[cards[3].colorClass]} ${expanded === 3 ? styles.expanded : ''}`}>
            <div className={styles.decorativeBlur}></div>
            
            <h5 className={styles.cardTitle}>{cards[3].title}</h5>
            
            <p className={styles.cardText}>
              {expanded === 3 ? cards[3].text : truncateText(cards[3].text)}
            </p>

            <div className={styles.toggleButton}>
              <span onClick={() => toggleCard(3)}>
                {expanded === 3 ? "Show Less ↑" : "Show More ↓"}
              </span>
            </div>
          </div>

          {/* Image 3 */}
          <div className={styles.imageWrapper}>
            <img 
              src={cards[3].image}
              alt={cards[3].title}
              className={styles.image}
            />
          </div>

          {/* Card 4 */}
          <div className={`${styles.textCard} ${styles[cards[4].colorClass]} ${expanded === 4 ? styles.expanded : ''}`}>
            <div className={styles.decorativeBlur}></div>
            
            <h5 className={styles.cardTitle}>{cards[4].title}</h5>
            
            <p className={styles.cardText}>
              {expanded === 4 ? cards[4].text : truncateText(cards[4].text)}
            </p>

            <div className={styles.toggleButton}>
              <span onClick={() => toggleCard(4)}>
                {expanded === 4 ? "Show Less ↑" : "Show More ↓"}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;