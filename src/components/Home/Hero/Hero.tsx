import styles from "./Hero.module.css";
import heroBackground from "../../../assets/images/home/hero/background.webp";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <svg className={styles.colorFilter} aria-hidden="true" focusable="false">
        <defs>
          <filter id="hero-color-grade" colorInterpolationFilters="sRGB">
            {/* Gentle channel curves preserve natural colours while cooling shadows and warming highlights. */}
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.01 0.24 0.52 0.78 1" />
              <feFuncG type="table" tableValues="0.02 0.25 0.50 0.75 0.99" />
              <feFuncB type="table" tableValues="0.05 0.28 0.50 0.73 0.96" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <img
        className={styles.heroBackground}
        src={heroBackground}
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      <div className={styles.heroText}>
        <h1>RamFerno Robotics</h1>
        <h2>Your 2026 Provincial Judges Award Winners!</h2>
      </div>
      <div className={styles.heroFade} />
    </section>
  );
}
