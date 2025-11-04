import heroStyles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={heroStyles.hero} id="home">
      <div className={heroStyles.heroBackground} />
      <div className={heroStyles.heroText}>
        <h1>RamFerno Robotics</h1>
        <h3>Your 2025 North Bay District Champions!</h3>
      </div>
      <div className={heroStyles.heroFade} />
    </section>
  );
}
