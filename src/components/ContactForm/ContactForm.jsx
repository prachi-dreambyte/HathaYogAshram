import styles from "../../assets/styles/contactusform/ContactForm.module.css";
import bannerImg from "../../assets/images/3.png";

const ContactForm = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={bannerImg} alt="Connect With Inner Peace" />
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.lotusIcon}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20 C30 30, 20 50, 20 70 Q20 80, 30 85 Q40 90, 50 90 Q60 90, 70 85 Q80 80, 80 70 C80 50, 70 30, 50 20Z" fill="currentColor" opacity="0.3"/>
                <path d="M50 25 C35 35, 28 52, 28 68 Q28 76, 35 80 Q42 84, 50 84 Q58 84, 65 80 Q72 76, 72 68 C72 52, 65 35, 50 25Z" fill="currentColor" opacity="0.5"/>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
              </svg>
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Begin Your</span>
              <span className={styles.titleLine2}>Sacred Journey</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Where ancient wisdom meets modern awakening
            </p>
            <div className={styles.heroDivider}></div>
          </div>
        </div>
        <div className={styles.heroGradient}></div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          
          {/* INTRO TEXT */}
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Connect • Transform • Transcend</p>
            <h2 className={styles.sectionTitle}>
              Let's Start a Conversation
            </h2>
            <p className={styles.sectionDesc}>
              Whether you seek guidance on our teacher training programs, 
              retreat experiences, or wish to deepen your practice, our devoted 
              team is here to illuminate your path.
            </p>
          </div>

          {/* GRID LAYOUT */}
          <div className={styles.contactGrid}>
            
            {/* FORM CARD */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3>Send Your Inquiry</h3>
                <p>Share your aspirations with us</p>
              </div>

              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Subject</label>
                    <input 
                      type="text" 
                      placeholder="What brings you here?"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label>Your Message</label>
                    <textarea 
                      rows="6" 
                      placeholder="Share your thoughts, questions, or intentions..."
                      className={styles.textarea}
                    ></textarea>
                  </div>
                </div>

                <div className={styles.checkboxWrapper}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" required />
                    <span className={styles.checkmark}></span>
                    <span className={styles.checkboxText}>
                      I'm not a robot
                    </span>
                  </label>
                </div>

                <button type="submit" className={styles.submitButton}>
                  <span>Send Message</span>
                  <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* INFO & MAP CARD */}
            <div className={styles.infoCard}>
              
              {/* LOCATION INFO */}
              <div className={styles.locationInfo}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4>Hatha Yogashram</h4>
                  <p>Upper Tapovan, Rishikesh</p>
                  <p>Uttarakhand 249192, India</p>
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.detailLabel}>Phone</p>
                    <p className={styles.detailValue}>+91 9335606336</p>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.detailLabel}>Email</p>
                    <p className={styles.detailValue}>info@hathayogashram.com</p>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.detailLabel}>Open Hours</p>
                    <p className={styles.detailValue}>Mon - Sat: 6 AM - 8 PM</p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className={styles.mapContainer}>
                <iframe
                  title="Hatha Yogashram Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8186.378271579207!2d78.320153!3d30.131976000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a92133223b%3A0x5769fde72c39e6f5!2sHatha%20Yogashram!5e1!3m2!1sen!2sus!4v1769010011614!5m2!1sen!2sus"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.map}
                ></iframe>
                <div className={styles.mapOverlay}>
                  <a 
                    href="https://www.google.com/maps/place/Hatha+Yogashram/@30.131976,78.320153,15z/data=!4m6!3m5!1s0x390cf1a92133223b:0x5769fde72c39e6f5!8m2!3d30.131976!4d78.320153!16s%2Fg%2F11kq3y8y0y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapButton}
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DECORATIVE SECTION */}
      <div className={styles.decorativeFooter}>
        <div className={styles.mantraText}>
          <p>ॐ नमः शिवाय</p>
          <p className={styles.mantraTranslation}>Om Namah Shivaya</p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;