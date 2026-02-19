import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane, FaTrain, FaBus } from "react-icons/fa";
import styles from "../../assets/styles/Homepage/HowToReach.module.css";

// ─── Framer Motion Variants ───────────────────────────────────────────────────

const sectionFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const headingReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formSlide = {
  hidden: { opacity: 0, height: 0, overflow: "hidden" },
  visible: {
    opacity: 1,
    height: "auto",
    overflow: "visible",
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const flights = [
  { col1: "IndiGo",    col2: "06:30 AM", col3: "07:30 AM", col4: "1h" },
  { col1: "Air India", col2: "09:15 AM", col3: "10:20 AM", col4: "1h 5m" },
  { col1: "Vistara",   col2: "01:40 PM", col3: "02:45 PM", col4: "1h 5m" },
  { col1: "SpiceJet",  col2: "05:55 PM", col3: "07:00 PM", col4: "1h 5m" },
];

const trains = [
  { col1: "Dehradun Shatabdi", col2: "06:45 AM", col3: "11:25 AM", col4: "Haridwar" },
  { col1: "Mussoorie Express", col2: "10:00 PM", col3: "05:30 AM", col4: "Haridwar" },
  { col1: "Jan Shatabdi Exp.", col2: "03:20 PM", col3: "09:00 PM", col4: "Haridwar" },
  { col1: "Nanda Devi Exp.",   col2: "11:50 PM", col3: "05:10 AM", col4: "Haridwar" },
];

const buses = [
  { col1: "Volvo AC",      col2: "06:00 AM", col3: "11:30 AM", col4: "AC" },
  { col1: "Sleeper Coach", col2: "09:00 PM", col3: "04:00 AM", col4: "Sleeper" },
  { col1: "AC Seater",     col2: "02:00 PM", col3: "07:30 PM", col4: "AC" },
  { col1: "Deluxe Bus",    col2: "11:00 PM", col3: "05:30 AM", col4: "Deluxe" },
];

// ─── Schedule Table ───────────────────────────────────────────────────────────

function ScheduleTable({ headers, rows }) {
  return (
    <div className={styles.scheduleTable}>
      <div className={styles.scheduleHeader}>
        {headers.map((h) => (
          <span key={h} className={styles.scheduleHeaderCell}>{h}</span>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`${styles.scheduleRow} ${i % 2 !== 0 ? styles.scheduleRowAlt : ""}`}
        >
          {Object.values(row).map((cell, j) => (
            <span key={j} className={styles.scheduleCell}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Travel Card ──────────────────────────────────────────────────────────────

function TravelCard({ icon, title, subtitle, desc, headers, rows, btnText, btnHref, linkText, linkHref }) {
  return (
    <motion.article
      className={styles.travelCard}
      variants={cardReveal}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 220, damping: 18 } }}
    >
      <div className={styles.travelHeader}>
        <div className={styles.iconCircle} aria-hidden="true">{icon}</div>
        <div>
          <h3 className={styles.travelTitle}>{title}</h3>
          <p className={styles.travelSubtitle}>{subtitle}</p>
        </div>
      </div>

      <p className={styles.travelDesc} dangerouslySetInnerHTML={{ __html: desc }} />

      <ScheduleTable headers={headers} rows={rows} />

      <div className={styles.cardActions}>
        <a href={btnHref} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          {btnText}
        </a>
        <a href={linkHref} className={styles.linkSecondary}>{linkText} →</a>
      </div>
    </motion.article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const HowToReach = () => {
  const [pickupOpen, setPickupOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", altPhone: "",
    pickupLocation: "", dropLocation: "", arrivalDate: "",
    arrivalTime: "", guests: "", instructions: "", serviceType: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pickup request submitted! We will contact you shortly.");
  };

  return (
    <motion.section
      className={styles.reachSection}
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label="How to Reach Rishikesh Yogashram"
    >
      {/* Decorative Blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Section Header ── */}
        <motion.div
          className={styles.headerWrap}
          variants={headingReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className={styles.badge}>✦ Travel Guide</span>
          <h2 className={styles.mainTitle}>How to Reach Us</h2>
          <p className={styles.subTitle}>
            Easy &amp; Comfortable Travel Options to Reach Our Yogashram in Rishikesh —
            Delhi to Rishikesh travel options by air, train &amp; bus.
          </p>
        </motion.div>

        {/* ── Travel Cards ── */}
        <motion.div
          className={styles.travelGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TravelCard
            icon={<FaPlane />}
            title="By Airways"
            subtitle="Fastest Way to Reach Rishikesh"
            desc="Fly from Delhi (Indira Gandhi International Airport) to <strong>Jolly Grant Airport, Dehradun</strong> — approximately 20 km from Rishikesh. Taxis and private transfers are easily available. We also provide yoga ashram pickup &amp; drop facility on request."
            headers={["Airline", "Departs", "Arrives", "Duration"]}
            rows={flights}
            btnText="Check Flights on MakeMyTrip"
            btnHref="https://www.makemytrip.com/flights/"
            linkText="Get More Details About Air Travel"
            linkHref="#air-details"
          />

          <TravelCard
            icon={<FaTrain />}
            title="By Train"
            subtitle="Affordable & Comfortable"
            desc="Travel from New Delhi Railway Station to Rishikesh or <strong>Haridwar Junction</strong> (25 km from Rishikesh). Taxis and auto-rickshaws are always available for the onward journey to our yogashram in Rishikesh."
            headers={["Train", "Departs", "Arrives", "Via"]}
            rows={trains}
            btnText="Book Train on IRCTC"
            btnHref="https://www.irctc.co.in/"
            linkText="Get More Details About Train Travel"
            linkHref="#train-details"
          />

          <TravelCard
            icon={<FaBus />}
            title="By Bus"
            subtitle="Budget Friendly Option"
            desc="Regular <strong>Volvo, AC and sleeper buses</strong> operate daily from Delhi to Rishikesh. Travel time is approximately 5–6 hours via scenic NH58, passing through the beautiful Shivalik foothills."
            headers={["Bus", "Departs", "Arrives", "Type"]}
            rows={buses}
            btnText="Book Bus on RedBus"
            btnHref="https://www.redbus.in/"
            linkText="Get More Details About Bus Travel"
            linkHref="#bus-details"
          />
        </motion.div>

         {/* ── Pickup & Drop ── */}
        <motion.div
          className={styles.pickupSection}
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className={styles.checkboxLabel} htmlFor="pickup-toggle">
            <input
              type="checkbox"
              id="pickup-toggle"
              className={styles.checkbox}
              checked={pickupOpen}
              onChange={() => setPickupOpen(!pickupOpen)}
            />
            <span className={styles.checkboxText}>
              🚖 Need Yogashram Pickup &amp; Drop Facility?
            </span>
          </label>

          <AnimatePresence>
            {pickupOpen && (
              <motion.div
                key="pickup-form"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formSlide}
              >
                <hr className={styles.divider} />
                <h4 className={styles.formHeading}>Request Pickup / Drop Service</h4>
                <p className={styles.formSubtext}>
                  Fill in your details and we will arrange a comfortable airport transfer in Rishikesh
                  or from the railway station / bus stand.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="fullName">Full Name *</label>
                      <input id="fullName" name="fullName" type="text" required
                        placeholder="Your full name" className={styles.formInput}
                        value={form.fullName} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required
                        placeholder="your@email.com" className={styles.formInput}
                        value={form.email} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required
                        placeholder="+91 XXXXX XXXXX" className={styles.formInput}
                        value={form.phone} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="altPhone">Alternate Phone</label>
                      <input id="altPhone" name="altPhone" type="tel"
                        placeholder="+91 XXXXX XXXXX" className={styles.formInput}
                        value={form.altPhone} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="serviceType">Service Type *</label>
                      <select id="serviceType" name="serviceType" required
                        className={styles.formSelect}
                        value={form.serviceType} onChange={handleChange}>
                        <option value="">Select service type…</option>
                        <option>Airport Pickup</option>
                        <option>Airport Drop</option>
                        <option>Railway Pickup</option>
                        <option>Bus Stand Pickup</option>
                        <option>Both Pickup &amp; Drop</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="pickupLocation">Pickup Location</label>
                      <select id="pickupLocation" name="pickupLocation"
                        className={styles.formSelect}
                        value={form.pickupLocation} onChange={handleChange}>
                        <option value="">Select location…</option>
                        <option>Jolly Grant Airport (Dehradun)</option>
                        <option>Haridwar Railway Station</option>
                        <option>Rishikesh Railway Station</option>
                        <option>Rishikesh Bus Stand</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="dropLocation">Drop Location</label>
                      <input id="dropLocation" name="dropLocation" type="text"
                        placeholder="e.g. Hatha Yogashram, Rishikesh" className={styles.formInput}
                        value={form.dropLocation} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="guests">Number of Guests *</label>
                      <input id="guests" name="guests" type="number" min="1" max="50" required
                        placeholder="e.g. 2" className={styles.formInput}
                        value={form.guests} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="arrivalDate">Arrival Date *</label>
                      <input id="arrivalDate" name="arrivalDate" type="date" required
                        className={styles.formInput}
                        value={form.arrivalDate} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="arrivalTime">Arrival Time *</label>
                      <input id="arrivalTime" name="arrivalTime" type="time" required
                        className={styles.formInput}
                        value={form.arrivalTime} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroupFull}>
                      <label className={styles.formLabel} htmlFor="instructions">Special Instructions</label>
                      <textarea id="instructions" name="instructions"
                        placeholder="Any special requirements, accessibility needs, extra luggage, etc."
                        className={styles.formTextarea}
                        value={form.instructions} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroupFull}>
                      <button type="submit" className={styles.submitBtn}>
                        Request Pickup Service 🙏
                      </button>
                    </div>

                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


        {/* ── Google Map ── */}
        <motion.div
          className={styles.mapSection}
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4093.1889346965218!2d78.31528188676455!3d30.13198084966086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a92133223b%3A0x5769fde72c39e6f5!2sHatha%20Yogashram!5e1!3m2!1sen!2sus!4v1767074170455!5m2!1sen!2sus"
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Hatha Yogashram Location Rishikesh — Airport Transfer in Rishikesh"
            />
          </div>
        </motion.div>

       
      </div>
    </motion.section>
  );
};

export default HowToReach;