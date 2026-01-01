import heroStyles from "./Hero.module.css";
import heroBackground from "../../../assets/images/home/hero/background.webp";

export default function Hero() {
  return (
    <section className={heroStyles.hero} id="home">
      <img
        className={heroStyles.heroBackground}
        src={heroBackground}
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      <div className={heroStyles.heroText}>
        <h1>RamFerno Robotics</h1>
        <h3>Your 2025 North Bay District Champions!</h3>
      </div>
      <div className={heroStyles.heroFade} />
    </section>
  );
}
