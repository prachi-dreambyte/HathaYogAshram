import styles from "../../assets/styles/Homepage/VideoHero.module.css";
import bgVideo from "../../assets/videos/videohero.mp4";

const VideoHero = () => {
  return (
    <section className={styles.hero}>
      
      {/* Background Video */}
      <video
        className={styles.video}
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          Deepen and Enhance The Quality of Your Teachings
        </h2>

        <p className={styles.text}>
          Our program focuses on refining your techniques, understanding the
          subtleties of alignment, and mastering the art of effective
          communication.
        </p>
      </div>

    </section>
  );
};

export default VideoHero;
