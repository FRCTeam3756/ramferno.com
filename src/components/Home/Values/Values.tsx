import valueStyles from "./Values.module.css";
import globalStyles from "../../../styles/global.module.css";
import { ValueCard } from "./ValueCard";

import teamworkImg from "../../../assets/images/values/teamwork.webp";
import coopertitionImg from "../../../assets/images/values/coopertition.webp";
import leadershipImg from "../../../assets/images/values/leadership.webp";

const values = [
  {
    title: "TEAMWORK",
    description:
      "Our Robotics team encourages teamwork by having students overcome challenges together with their robot while learning transferable skills such as communication, collaboration and creative thinking in an inclusive environment.",
    image: teamworkImg,
  },
  {
    title: "COOPERTITION",
    description:
      "At FIRST, Coopertition® is displaying unqualified kindness and respect in the face of fierce competition. Coopertition® is founded on the concept and a philosophy that teams can and should help and cooperate with each other even as they compete. (Vision and Mission, 2015)",
    image: coopertitionImg,
  },
  {
    title: "LEADERSHIP",
    description:
      "Students learn leadership while participating in robotics through guiding each other and share their expertise with others. Being a leader encourages decision-making, public speaking and confidence. Students also have the opportunity to learn from the team leaders.",
    image: leadershipImg,
  },
];

export const Values = () => (
  <section className={globalStyles.section} id="values">
    <div className={globalStyles.container}>
      <header className={globalStyles.sectionHeader}>
        <h1>Values</h1>
        <h2>Values</h2>
      </header>
      <div className={valueStyles.cardsContainer}>
        {values.map((value) => (
          <ValueCard
            key={value.title}
            title={value.title}
            description={value.description}
            image={value.image}
          />
        ))}
      </div>
    </div>
  </section>
);
