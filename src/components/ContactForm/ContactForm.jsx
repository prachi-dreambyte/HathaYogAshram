import styles from "../../assets/styles/contactusform/ContactForm.module.css";
import bannerImg from "../../assets/images/3.png";

const ContactForm = () => {
  return (
    <>
      {/* BANNER */}
      <section className={styles.banner}>
        <img src={bannerImg} alt="Contact Banner" />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <h1>Contact Us</h1>
            <p>We would love to hear from you</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.contactSection}>
        <h2 className={styles.heading}>
          Drop A <span>Message*</span>
        </h2>

        <div className={styles.formCard}>
          <form>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Name</label>
                <input type="text" placeholder="E.g. John Doe" />
              </div>

              <div className={styles.field}>
                <label>Email Address*</label>
                <input type="email" placeholder="E.g. john@doe.com" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Subject</label>
                <input type="text" />
              </div>

              <div className={styles.field}>
                <label>Where did you find us?</label>
                <select>
                  <option>Google</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Friend</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
  <label>Message</label>
  <textarea rows="5" placeholder="Write your message..."></textarea>
</div>

{/* ROBOT CHECK */}
<div className={styles.robotCheck}>
  <label className={styles.checkboxContainer}>
    <input type="checkbox" required />
    <span className={styles.checkmark}></span>
    I’m not a robot
  </label>
</div>

<button className={styles.btn}>Send Message</button>
          </form>
        </div>

        {/* GOOGLE FORM SECTION */}
        <div className={styles.googleSection}>
          <h3>
            Hatha Yogashram <span>Google Registration Form*</span>
          </h3>

          <p>
            Register through our official Google form for Yoga Teacher Training,
            retreats, and wellness programs.
          </p>

          <a
            href="https://docs.google.com/forms/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleBtn}
          >
            Open Google Form
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
