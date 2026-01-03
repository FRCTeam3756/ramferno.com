import styles from "./Values.module.css";
import ValueCard from "./ValueCard";

import teamworkGreyImg from "../../../assets/images/home/values/teamwork_grey.webp";
import teamworkImg from "../../../assets/images/home/values/teamwork.webp";
import coopertitionGreyImg from "../../../assets/images/home/values/coopertition_grey.webp";
import coopertitionImg from "../../../assets/images/home/values/coopertition.webp";
import leadershipGreyImg from "../../../assets/images/home/values/leadership_grey.webp";
import leadershipImg from "../../../assets/images/home/values/leadership.webp";

const values = [
  {
    title: "TEAMWORK",
    description:
      "Students collaborate to overcome challenges while developing soft skills such as communication, collaboration and creative thinking.",
    alt: "Teamwork Image",
    greyImage: teamworkGreyImg,
    image: teamworkImg,
  },
  {
    title: "COOPERTITION",
    description:
      '"At FIRST, Coopertition® is displaying unqualified kindness and respect in the face of fierce competition" (Vision and Mission, 2015).',
    alt: "Coopertition Image",
    greyImage: coopertitionGreyImg,
    image: coopertitionImg,
  },
  {
    title: "LEADERSHIP",
    description:
      "Our Rams learn leadership through sharing their expertise, decision-making skills and practice public speaking.",
    alt: "Leadership Image",
    greyImage: leadershipGreyImg,
    image: leadershipImg,
  },
];

export default function Values() {
  return (
    <section className={styles.section} id="values">
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {values.map((value) => (
            <ValueCard
              key={value.title}
              title={value.title}
              alt={value.alt}
              description={value.description}
              greyImage={value.greyImage}
              image={value.image}
            />
          ))}
        </div>
        <div className={styles.spacer} />
      </div>
    </section>
  );
}
