import React from "react";
import styles from "../../assets/styles/Homepage/Facilities.module.css";
import transportationImg from "../../assets/images/library.jpg";
import libraryImg from "../../assets/images/excursion.jpg";
import excursionsImg from "../../assets/images/station.jpg";
import foodImg from "../../assets/images/food.jpg";
import supportImg from "../../assets/images/24to7avavlible.jpg";

const FacilitiesDesign4 = () => {
  const facilities = [
    {
      title: "Transportation",
      image: transportationImg,
      text: `We provide complete transportation assistance to ensure a smooth and stress-free arrival for our students. For those without a direct flight to Dehradun, we arrange comfortable pickups from Dehradun Airport, Haridwar Railway Station, or even Delhi upon request.`,
      icon: "🚗"
    },
    {
      title: "Library",
      image: libraryImg,
      text: `Our yoga library is a calm and inspiring space designed to deepen your learning experience. It is thoughtfully stocked with a wide collection of books covering Yoga Asanas, Pranayama, Meditation, Yoga Philosophy, Anatomy, and ancient yogic texts.`,
      icon: "📚"
    },
    {
      title: "Excursions",
      image: excursionsImg,
      text: `To help students connect with nature and local culture, we organize weekly excursions around Rishikesh and the Himalayan region. Explore sacred temples, pristine waterfalls, and breathtaking mountain trails.`,
      icon: "⛰️"
    },
    {
      title: "Satvik Food",
      image: foodImg,
      text: `Our school serves freshly prepared Satvik vegetarian meals that support a yogic lifestyle and holistic well-being. Every dish is prepared with pure, organic ingredients to enhance mental clarity and spiritual practice.`,
      icon: "🍽️"
    },
    {
      title: "24/7 Support",
      image: supportImg,
      text: `Our reception desk is available 24/7 to assist students throughout their stay and ensure a peaceful experience. Whether you need medical assistance or have questions, our dedicated team is always ready to support you.`,
      icon: "🏨"
    }
  ];

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.sectionContent}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Facilities You Enjoy At The Yoga School
          </h2>
          <div className={styles.headingLine}></div>
        </div>

        <div className={styles.facilitiesGrid}>
          {facilities.map((facility, index) => (
            <div key={index} className={styles.facilityItem}>
              <div className={styles.facilityImageWrapper}>
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className={styles.facilityImage}
                />
              </div>
              <div className={styles.facilityNumber}>{index + 1}</div>
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>{facility.title}</h3>
                <p className={styles.facilityText}>{facility.text}</p>
              </div>
              <div className={styles.facilityIcon}>{facility.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesDesign4;