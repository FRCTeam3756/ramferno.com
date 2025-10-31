import heroStyles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={heroStyles.hero} id="home">
      <div className={heroStyles.heroBackground} />
      <div className={heroStyles.heroText}>
        <h1>Team RamFerno</h1>
        <h3>Your 2025 North Bay District Champions!</h3>
      </div>
      <div className={heroStyles.heroFade} />
    </section>
  );
};
