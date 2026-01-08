import styles from "./Robots.module.css";

import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";

import chargedUpPhoto from "../../assets/images/robots/chargedUpPhoto.webp";
import crescendoPhoto from "../../assets/images/robots/crescendoPhoto.webp";
import reefscapePhoto from "../../assets/images/robots/reefscapePhoto.webp";
// import chargedUpLogo from "../../assets/images/robots/chargedUpLogo.webp";
// import crescendoLogo from "../../assets/images/robots/crescendoLogo.webp";
// import reefscapeLogo from "../../assets/images/robots/reefscapeLogo.webp";
import RobotScroller from "../../components/Robots/RobotScroller/RobotScroller";

const values = [
  {
    id: 0,
    subheading: "FIRST® Reefscape",
    heading: "Low Rider",
    alt: "Reefscape Image",
    image: reefscapePhoto,
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    model: "/robots/2025.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2025/Manual/2025GameManual.pdf"
  },
  {
    id: 1,
    subheading: "FIRST® Crescendo",
    heading: "RamJam",
    alt: "Crescendo Image",
    image: crescendoPhoto,
    github: "https://github.com/FRCTeam3756/2024-FRCRobot",
    model: "/robots/2024.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2024/Manual/2024GameManual.pdf"
  },
  {
    id: 2,
    subheading: "FIRST® Charged Up",
    heading: "CeeCee",
    alt: "Charged Up Image",
    image: chargedUpPhoto,
    github: "",
    model: "/robots/2023.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf"
  },
];

export default function Robots() {
  return (
    <>
      <Helmet>
        <title>Robots | RamFerno Robotics</title>
        <meta
          name="description"
          content="Learn about the robots designed, built, and competed by Team RamFerno over the years."
        />
      </Helmet>
      <NavMenu />
      <main id="robots" className={styles.main}>
        <div className={styles.container}>
          {values.map((value) => (
            <RobotScroller
              subheading={value.subheading}
              heading={value.heading}
              image={value.image}
              github={value.github}
              model={value.model}
              manual={value.manual}
            />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
