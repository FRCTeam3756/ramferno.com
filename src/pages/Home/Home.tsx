import styles from "./Home.module.css";

import Hero from "../../components/Home/Hero/Hero";
import ValueCard from "../../components/Home/ValueCard/ValueCard";
import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";

import teamworkGreyImg from "../../assets/images/home/values/teamwork_grey.webp";
import teamworkImg from "../../assets/images/home/values/teamwork_color.webp";
import coopertitionGreyImg from "../../assets/images/home/values/coopertition_grey.webp";
import coopertitionImg from "../../assets/images/home/values/coopertition_color.webp";
import leadershipGreyImg from "../../assets/images/home/values/leadership_grey.webp";
import leadershipImg from "../../assets/images/home/values/leadership_color.webp";

const values = [
  {
    title: "TEAMWORK",
    description:
      "Students collaborate to overcome challenges while developing soft skills such as communication, collaboration and creative thinking.",
    alt: "Teamwork Image",
    greyImage: teamworkGreyImg,
    colorImage: teamworkImg,
  },
  {
    title: "COOPERTITION",
    description:
      '"At FIRST, Coopertition® is displaying unqualified kindness and respect in the face of fierce competition" (Vision and Mission, 2015).',
    alt: "Coopertition Image",
    greyImage: coopertitionGreyImg,
    colorImage: coopertitionImg,
  },
  {
    title: "LEADERSHIP",
    description:
      "Our Rams learn leadership through sharing their expertise, decision-making skills and practice public speaking.",
    alt: "Leadership Image",
    greyImage: leadershipGreyImg,
    colorImage: leadershipImg,
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | RamFerno Robotics</title>
        <meta
          name="description"
          content="RamFerno Robotics is one of over 1000 Canadian FIRST Robotics teams. Team RamFerno competes and parades with robots every year."
        />
      </Helmet>
      <main id="home" className={styles.main}>
        <NavMenu />
        <div className={styles.container}>
          <section id="hero" className={styles.heroSection}>
            <Hero />
          </section>

          <section id="values" className={styles.valuesSection}>
            <div className={styles.cardsContainer}>
              {values.map((value) => (
                <ValueCard
                  key={value.title}
                  title={value.title}
                  alt={value.alt}
                  description={value.description}
                  greyImage={value.greyImage}
                  colorImage={value.colorImage}
                />
              ))}
            </div>
            <div className={styles.spacer} />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
