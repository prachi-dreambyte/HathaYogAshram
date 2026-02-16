import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../../assets/styles/whatsappButton/whatsapp.module.css";

const WhatsAppButton = () => {
  const phoneNumber = "919335606336"; // without +
 const message = "Hello, I am interested in your Yoga Teacher Training courses. Could you please share more details?";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
    >
     <FaWhatsapp className={styles.icon} />

    </a>
  );
};

export default WhatsAppButton;
