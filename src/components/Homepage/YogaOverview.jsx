import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/Homepage/YogaOverview.module.css";

const CARD_API = "http://localhost:8000/api/teacher-training-cards";
const HEADING_API = "http://localhost:8000/api/teacher-training-heading";

const YogaOverview5 = () => {

  const [cards, setCards] = useState([]);
  const [heading, setHeading] = useState({});
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetchCards();
    fetchHeading();
  }, []);

  // Fetch Cards
  const fetchCards = async () => {
    try {
      const res = await axios.get(CARD_API);
      setCards(res.data.data);

      if (res.data.data.length > 0) {
        setActive(res.data.data[0]._id);
      }

    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Heading
  const fetchHeading = async () => {
    try {
      const res = await axios.get(HEADING_API);
      if (res.data.data && res.data.data.length > 0) {
        setHeading(res.data.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.section}>

      {/* Floating Particles */}

      <div className={styles.particlesBg}>
        {cards.slice(0, 5).map((item) => (
          <span key={item._id} className={styles.particle}>
            {item.icon}
          </span>
        ))}
      </div>

      <div className={styles.container}>

        {/* Heading Section From Admin */}

        <div className={styles.titleSection}>

          <span className={styles.badge}>
            {heading.topHeading}
          </span>

          <h2 className={styles.heading}>
            {heading.mainHeading}
          </h2>

          <p className={styles.description}>
            {heading.subHeading}
          </p>

        </div>

        {/* Timeline */}

        <div className={styles.timelineWrapper}>

          <div className={styles.timelineLine}>
            <div className={styles.lineProgress}></div>
          </div>

          <div className={styles.timelineItems}>

            {cards.map((item, index) => (

              <div
                key={item._id}
                className={`${styles.timelineItem}
                ${active === item._id ? styles.activeTimeline : ""}
                ${index % 2 === 0 ? styles.leftItem : styles.rightItem}`}
                onClick={() => setActive(item._id)}
              >

                <div className={styles.itemContent}>

                  <div className={styles.itemIcon}>
                    {item.icon}
                  </div>

                  <div className={styles.itemTitleRow}>
                    <div className={styles.itemNumber}>
                      {item.number}
                    </div>

                    <h3>{item.heading}</h3>
                  </div>

                  <p className={styles.itemDesc}>
                    {item.paragraph}
                  </p>

                  <Link
                    to={`/teacher-training/${item._id}`}
                    className={styles.itemLink}
                  >
                    Learn More →
                  </Link>

                </div>

                {item.image && (
                  <div className={styles.oppositeImage}>
                    <img
                      src={`http://localhost:8000/uploads/${item.image}`}
                      alt={item.heading}
                    />
                  </div>
                )}

                <div className={styles.timelineDot}>
                  <div className={styles.dotInner}></div>
                </div>

              </div>

            ))}

          </div>
        </div>

        {/* Mobile Accordion */}

        <div className={styles.mobileAccordion}>

          {cards.map((item) => (

            <div
              key={item._id}
              className={`${styles.accordionItem}
              ${active === item._id ? styles.activeAccordion : ""}`}
              onClick={() => setActive(item._id)}
            >

              <div className={styles.accordionHeader}>

                <div className={styles.accordionLeft}>

                  <span className={styles.accordionNumber}>
                    {item.number}
                  </span>

                  <span>{item.icon}</span>

                  <span className={styles.accordionTitle}>
                    {item.heading}
                  </span>

                </div>

                <span className={styles.accordionArrow}>
                  {active === item._id ? "−" : "+"}
                </span>

              </div>

              {active === item._id && (

                <div className={styles.accordionContent}>

                  <p>{item.paragraph}</p>

                  <Link
                    to={`/teacher-training/${item._id}`}
                    className={styles.itemLink}
                  >
                    Read More →
                  </Link>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default YogaOverview5;