import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../assets/styles/Homepage/Facilities.module.css";
import headingIcon from "../../assets/images/linedesign.png";
import image1 from "../../assets/images/library.jpg";
import image2 from "../../assets/images/excursion.jpg";
import image3 from "../../assets/images/station.jpg";
import image4 from "../../assets/images/food.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const expandAnim = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Facilities = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const truncateText = (text, words = 40) => {
    const splitText = text.split(" ");
    if (splitText.length <= words) return text;
    return splitText.slice(0, words).join(" ") + "...";
  };

  const cards = [
    {
      title: "About Transportation",
      text: `We provide complete transportation assistance to ensure a smooth
      and stress-free arrival for our students. For those without a direct
      flight to Dehradun, we arrange comfortable pickups from Dehradun
      Airport, Haridwar Railway Station, or even Delhi upon request.
      Students arriving independently by taxi or cab are provided with
      detailed Google Maps directions, live assistance, and continuous
      communication until they safely reach the campus.`,
    },
    {
      title: "About Library",
      text: `Our yoga library is a calm and inspiring space designed to deepen
      your learning experience. It is thoughtfully stocked with a wide
      collection of books covering Yoga Asanas, Pranayama, Meditation.`,
    },
    {
      title: "Excursions",
      text: `To help students connect with nature and local culture, we organize
      weekly excursions around Rishikesh and the Himalayan region.`,
    },
    {
      title: "About Food",
      text: `Our school serves freshly prepared Satvik vegetarian meals that
      support a yogic lifestyle and holistic well-being.`,
    },
    {
      title: "About Reception & Support",
      text: `Our reception desk is available 24/7 to assist students throughout
      their stay and ensure a peaceful experience.`,
    },
  ];

  return (
    <motion.section
      className={styles.facilitiesSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">

        {/* Heading */}
        <motion.div className="text-center mb-5" variants={fadeUp}>
          <h2 className={styles.heading}>
            Facilities You Enjoy At The Yoga School In Rishikesh, India
          </h2>
          <span className={styles.headingIcon}>
            <img src={headingIcon} alt="decorative icon" />
          </span>
        </motion.div>

        {/* ROW 1 */}
        <div className="row g-4 align-items-center">
          <motion.div className="col-lg-4 col-md-6" variants={fadeUp}>
            <div className={styles.textCard}>
              <h5>{cards[0].title}</h5>

              <AnimatePresence mode="wait">
                <motion.p
                  key={expanded === 0}
                  variants={expandAnim}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {expanded === 0
                    ? cards[0].text
                    : truncateText(cards[0].text)}
                </motion.p>
              </AnimatePresence>

              <span onClick={() => toggleCard(0)}>
                {expanded === 0 ? "Show Less" : "Show More"}
              </span>
            </div>
          </motion.div>

          <motion.div className="col-lg-4 col-md-6" variants={imageAnim}>
            <img src={image1} className={styles.image} alt="Transportation" />
          </motion.div>

          <motion.div className="col-lg-4 col-md-6" variants={fadeUp}>
            <div className={styles.textCard}>
              <h5>{cards[1].title}</h5>

              <AnimatePresence mode="wait">
                <motion.p
                  key={expanded === 1}
                  variants={expandAnim}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {expanded === 1
                    ? cards[1].text
                    : truncateText(cards[1].text)}
                </motion.p>
              </AnimatePresence>

              <span onClick={() => toggleCard(1)}>
                {expanded === 1 ? "Show Less" : "Show More"}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="row g-4 align-items-center mt-1">
          <motion.div className="col-lg-4 col-md-6" variants={imageAnim}>
            <img src={image2} className={styles.image} alt="Excursion" />
          </motion.div>

          <motion.div className="col-lg-4 col-md-6" variants={fadeUp}>
            <div className={styles.textCard}>
              <h5>{cards[2].title}</h5>

              <AnimatePresence mode="wait">
                <motion.p
                  key={expanded === 2}
                  variants={expandAnim}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {expanded === 2
                    ? cards[2].text
                    : truncateText(cards[2].text)}
                </motion.p>
              </AnimatePresence>

              <span onClick={() => toggleCard(2)}>
                {expanded === 2 ? "Show Less" : "Show More"}
              </span>
            </div>
          </motion.div>

          <motion.div className="col-lg-4 col-md-6" variants={imageAnim}>
            <img src={image3} className={styles.image} alt="Nature" />
          </motion.div>
        </div>

        {/* ROW 3 */}
        <div className="row g-4 align-items-center mt-1">
          <motion.div className="col-lg-4 col-md-6" variants={fadeUp}>
            <div className={styles.textCard}>
              <h5>{cards[3].title}</h5>

              <AnimatePresence mode="wait">
                <motion.p
                  key={expanded === 3}
                  variants={expandAnim}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {expanded === 3
                    ? cards[3].text
                    : truncateText(cards[3].text)}
                </motion.p>
              </AnimatePresence>

              <span onClick={() => toggleCard(3)}>
                {expanded === 3 ? "Show Less" : "Show More"}
              </span>
            </div>
          </motion.div>

          <motion.div className="col-lg-4 col-md-6" variants={imageAnim}>
            <img src={image4} className={styles.image} alt="Food" />
          </motion.div>

          <motion.div className="col-lg-4 col-md-6" variants={fadeUp}>
            <div className={styles.textCard}>
              <h5>{cards[4].title}</h5>

              <AnimatePresence mode="wait">
                <motion.p
                  key={expanded === 4}
                  variants={expandAnim}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {expanded === 4
                    ? cards[4].text
                    : truncateText(cards[4].text)}
                </motion.p>
              </AnimatePresence>

              <span onClick={() => toggleCard(4)}>
                {expanded === 4 ? "Show Less" : "Show More"}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Facilities;
