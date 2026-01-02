import styles from "./Values.module.css";
import ValueCard from "./ValueCard";

import teamworkGreyImg from "../../../assets/images/home/values/teamwork_grey.webp?w=640;1024;1600;1920&imagetools";
import teamworkImg from "../../../assets/images/home/values/teamwork.webp?w=640;1024;1600;1920&imagetools";
import coopertitionGreyImg from "../../../assets/images/home/values/coopertition_grey.webp?w=640;1024;1600;1920&imagetools";
import coopertitionImg from "../../../assets/images/home/values/coopertition.webp?w=640;1024;1600;1920&imagetools";
import leadershipGreyImg from "../../../assets/images/home/values/leadership_grey.webp?w=640;1024;1600;1920&imagetools";
import leadershipImg from "../../../assets/images/home/values/leadership.webp?w=640;1024;1600;1920&imagetools";

const values = [
  {
    title: "TEAMWORK",
    description:
      "RamFerno encourages teamwork by having students overcome challenges together while learning soft skills such as communication, collaboration and creative thinking.",
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
      "Our Rams learn leadership through guiding each other and sharing their expertise with others. Our leaders gain decision-making skills, practice public speaking and build confidence.",
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
              greyImageSrc={value.greyImage.src}
              greyImageSrcSet={value.greyImage.srcset}
              imageSrc={value.image.src}
              imageSrcSet={value.image.srcset}
            />
          ))}
        </div>
        <div className={styles.spacer} />
      </div>
    </section>
  );
}
