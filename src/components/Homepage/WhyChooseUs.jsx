import React, { useState } from "react";
import styles from "../../assets/styles/Homepage/WhyChooseUs.module.css";
import {FaUserGraduate, 
  FaClock, 
  FaLeaf, 
  FaVideo,
  FaHandsHelping,
  FaMountain,
  FaScroll,
  FaUtensils,
  FaSeedling,
  FaPray,
  FaOm,
  FaHome,
  FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* ===================== */
/* Framer Motion Variants */
/* ===================== */

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const iconHover = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4 },
  },
};

const modalVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const modalContentVariant = {
  hidden: { scale: 0.8, opacity: 0, y: 50 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    scale: 0.8, 
    opacity: 0, 
    y: 50,
    transition: { duration: 0.2 }
  }
};

const WhyChooseUs = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      icon: FaUserGraduate,
      title: "Expert Teachers",
      text: "Learn from certified and experienced yoga instructors who guide you with clarity and care.",
      detailedContent: "Our teachers are certified yoga instructors with years of experience in traditional Hatha Yoga. They have studied under renowned gurus and follow the authentic lineage of yoga teachings. Each instructor brings deep knowledge of anatomy, philosophy, and meditation practices to ensure you receive comprehensive guidance on your yoga journey.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
    },
    {
      icon: FaClock,
      title: "Anytime Practice",
      text: "Short or long sessions – practice whenever it fits your schedule.",
      detailedContent: "We offer flexible class timings from early morning to evening sessions. Whether you have 20 minutes or 2 hours, you can choose sessions that fit your lifestyle. Our diverse class schedule includes intensive workshops on weekends and quick daily sessions for busy professionals.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
    },
    {
      icon: FaLeaf,
      title: "Mind–Body Balance",
      text: "Improve flexibility, strength, focus, and inner calm with every session.",
      detailedContent: "Hatha Yoga creates harmony between physical body and mental state. Through consistent practice, you'll notice improved flexibility, enhanced muscle tone, better posture, increased energy levels, reduced stress, improved concentration, and a deeper sense of peace and well-being.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
    },
    {
      icon: FaVideo,
      title: "On-Demand Classes",
      text: "Access a growing library of yoga, meditation, and breathwork classes.",
      detailedContent: "Our extensive video library includes hundreds of classes covering various aspects of yoga practice. From beginner asanas to advanced pranayama techniques, guided meditations, yoga nidra sessions, and specialized workshops on yoga philosophy and lifestyle. New content is added regularly.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
    },
    {
      icon: FaHandsHelping,
      title: "Teaching Approach",
      text: "Hatha Yog is taught with patience, discipline, and personal guidance. The focus is not just on postures, but on correct alignment, breath awareness, and inner experience.",
      detailedContent: "Our teaching methodology emphasizes personalized attention and gradual progression. We focus on proper alignment to prevent injuries, coordinate movement with breath, and cultivate awareness. Small class sizes ensure individual corrections and modifications based on each student's capabilities and goals.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
    },
    {
      icon: FaMountain,
      title: "Strong Foundation",
      text: "Build a solid foundation for all yoga practices. Master basic asanas, pranayama, and meditation to develop strength, stability, flexibility, and mindfulness.",
      detailedContent: "We believe in building from the ground up. Our foundation program systematically teaches fundamental postures, breathing techniques, and meditation methods. This strong base prepares you for advanced practices and ensures sustainable progress in your yoga journey while preventing common mistakes.",
      image: "https://images.unsplash.com/photo-1599447292023-5e79c46f7146?w=800&q=80"
    },
    {
      icon: FaScroll,
      title: "Ancient Legacy",
      text: "Hatha Yog carries the legacy of ancient yogis and sages. This knowledge has been passed down through generations, preserved in its pure form.",
      detailedContent: "Our teachings are rooted in classical texts like Hatha Yoga Pradipika, Gheranda Samhita, and Patanjali's Yoga Sutras. We preserve the authentic wisdom of ancient sages while making it accessible to modern practitioners. This timeless knowledge has transformed millions of lives over centuries.",
      image: "https://images.unsplash.com/photo-1532798442725-41036acc7489?w=800&q=80"
    },
    {
      icon: FaUtensils,
      title: "Yogic Food Culture",
      text: "Food is an essential part of yogic life. We follow a traditional yogic lifestyle that supports both body and mind.",
      detailedContent: "Yogic diet is not just about what you eat, but how you eat. We emphasize mindful eating, proper food combinations, and eating according to your constitution. Our approach includes understanding the energetic qualities of food and how different foods affect your practice and mental state.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
    },
    {
      icon: FaSeedling,
      title: "Satvik Food",
      text: "Pure Satvik food, prepared with awareness and simplicity. Satvik meals help cleanse the body, calm the mind, and enhance spiritual growth.",
      detailedContent: "Satvik food is fresh, pure, and prepared with positive intention. It includes fruits, vegetables, whole grains, nuts, seeds, and dairy products from ethical sources. This diet promotes clarity of mind, lightness in body, and supports deeper meditation. We avoid processed foods, excessive spices, and tamasic ingredients.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80"
    },
    {
      icon: FaPray,
      title: "Ancient Parampara",
      text: "Our teachings follow the ancient Guru–Shishya Parampara, where knowledge is transmitted with respect, discipline, and direct experience.",
      detailedContent: "The Guru-Shishya tradition ensures authentic transmission of yoga wisdom. This sacred relationship is built on trust, dedication, and mutual respect. The guru guides not just through words but through lived example, helping students navigate their inner journey with personalized guidance and spiritual support.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80"
    },
    {
      icon: FaOm,
      title: "Ancient Rules & Discipline",
      text: "Practiced according to ancient yogic rules—including daily routine, self-discipline, simplicity, and mindful living—to support inner transformation.",
      detailedContent: "We follow traditional yogic principles including brahmacharya (discipline), satya (truthfulness), ahimsa (non-violence), and santosha (contentment). Daily practices include early rising, self-study, meditation, and service. These disciplines are not restrictions but tools for liberation and self-realization.",
      image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&q=80"
    },
    {
      icon: FaHome,
      title: "We are not Company we are Ashram",
      text: "We are an ashram, where yoga is a way of life, not a product. Our aim is spiritual growth, self-awareness, and living in harmony with nature.",
      detailedContent: "Unlike commercial yoga studios, our ashram is a sacred space dedicated to spiritual practice and self-discovery. We operate on principles of seva (selfless service), simple living, and community support. Here, yoga is not commodified but shared as a transformative path to inner peace and enlightenment.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
    },
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className={styles.section}>
      <div className="container">

        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>Why Choose Hatha Yog</h2>
          <p className={styles.subText}>
            Everything you need to build a consistent, mindful yoga practice –
            guided by experts and designed for real life.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="row g-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cardData.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6"
              variants={itemVariant}
            >
              <motion.div
                className={styles.card}
                onClick={() => openModal(item)}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  variants={iconHover}
                  whileHover="hover"
                  className={styles.icon}
                >
                  <item.icon />
                </motion.div>

                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className={styles.modalOverlay}
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className={styles.modalContent}
              variants={modalContentVariant}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <FaTimes />
              </button>

              <div className={styles.modalImage}>
                <img src={selectedCard.image} alt={selectedCard.title} />
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalIcon}>
                  <selectedCard.icon />
                </div>
                <h3>{selectedCard.title}</h3>
                <p className={styles.modalDescription}>{selectedCard.detailedContent}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;