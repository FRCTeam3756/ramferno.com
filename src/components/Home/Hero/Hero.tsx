import styles from "./Hero.module.css";
import heroBackground from "../../../assets/images/home/hero/background-optimized.webp";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <img
        className={styles.heroBackground}
        src={heroBackground}
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
