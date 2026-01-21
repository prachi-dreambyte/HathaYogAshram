import styles from "../../assets/styles/Homepage/YogaAliiance.module.css";
import heroVideo from "../../assets/videos/VID-20241125-WA0084.mp4";

const YogaAlliance = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.subTitle}>
            Learn with Yoga Alliance® Certified School of Hatha Yoga Teacher Training Rishikesh
          </span>

          <h1 className={styles.title}>
            Best Yoga Teacher <br />
            <span>Training in India</span>
          </h1>

          <p className={styles.boldText}>
            Most Authentic Yoga Alliance Registered School
          </p>

          <p className={styles.desc}>
            Start Your Yoga Career With One Of The Oldest Hatha Yoga Teachers
            Training School In India.
          </p>

          <p className={styles.desc}>
            Become Certified Yoga Instructor with Yoga Alliance USA Certification®.
          </p>

          <p className={styles.desc}>
            Hatha Yoga Ashram is a Yoga Alliance Registered Yoga School (RYS).
            Our Teacher Training Course (TTC) follows the guidelines set by Yoga
            Alliance, USA for RYS200, as well other training courses, and our
            Advanced 300-hour Teacher Training Course (ATTC) follows the
            guidelines for RYS300.
          </p>

          <p className={styles.desc}>
            Upon completion, our graduates can apply for Registered Yoga Teacher (RYT)
            status with Yoga Alliance. This credential is earned by yoga teachers
            whose training and teaching experience meet the rigorous standards set
            by Yoga Alliance.
          </p>

          <p className={styles.desc}>
            Choose from various Yoga Courses offered by Hatha Yogashram. Our Yoga
            Teacher Training Courses include 200 Hour, 300 Hour, and
            <span className={styles.highlight}> 500 Hour Yoga Teacher Training in Rishikesh</span>,
            as well as 5, 10, and 20 Days
            <span className={styles.highlight}> Yoga Retreats in India</span>. All
            courses are registered with Yoga Alliance.
          </p>

          <p className={styles.desc}>
            Join our Hatha Ashtanga Yoga Teacher Training in Rishikesh, India, at
            Hatha Yogashram and embark on a journey of self-development and
            transformation.
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={heroVideo}
            controls
            playsInline
            preload="metadata"
          />
        </div>

      </div>
    </section>
  );
};

export default YogaAlliance;
