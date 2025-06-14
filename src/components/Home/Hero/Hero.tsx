import heroStyles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={heroStyles.hero} id="home">
      <div className={heroStyles.heroBackground} />
      <div className={heroStyles.heroFade} />
    </section>
  );
};
