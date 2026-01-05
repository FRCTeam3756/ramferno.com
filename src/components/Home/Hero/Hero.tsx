import styles from "./Hero.module.css";
import heroBackground from "../../../assets/images/home/hero/background.webp";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <img
        className={styles.heroBackground}
        src={heroBackground}
        srcSet={`
          ${heroBackground}?w=480 480w,
          ${heroBackground}?w=768 768w,
          ${heroBackground}?w=1024 1024w,
          ${heroBackground}?w=1440 1440w,
        `}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      <div className={styles.heroText}>
        <h1>RamFerno Robotics</h1>
        <h2>Your 2025 North Bay District Champions!</h2>
      </div>
      <div className={styles.heroFade} />
    </section>
  );
}
