import styles from "./Robots.module.css";

import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";

import chargedUpPhoto from "../../assets/images/robots/chargedUpPhoto.webp";
import crescendoPhoto from "../../assets/images/robots/crescendoPhoto.webp";
import reefscapePhoto from "../../assets/images/robots/reefscapePhoto.webp";
import rebuiltPhoto from "../../assets/images/robots/rebuiltPhoto.jpeg";
import RobotScroller from "../../components/Robots/RobotScroller/RobotScroller";

const values = [
  {
    id: 0,
    subheading: "FIRST® Rebuilt",
    heading: "Jean Gray",
    alt: "Rebuilt Image",
    image: rebuiltPhoto,
    github: "https://github.com/FRCTeam3756/2026-FRCRobot",
    model: null,
    manual: "https://firstfrc.blob.core.windows.net/frc2026/Manual/2026GameManual.pdf",
    accomplishments: [
      "Ranked 36th in Ontario with 149 Points",
      "Won Windsor Innovation in Control Award",
      "Ontario Provincial Judges Award Winner",
      "Placed Fourth in the DCMP Science Field Playoffs"
    ],
  },
  {
    id: 1,
    subheading: "FIRST® Reefscape",
    heading: "Low Rider",
    alt: "Reefscape Image",
    image: reefscapePhoto,
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    model: "/robots/2025.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2025/Manual/2025GameManual.pdf",
    accomplishments: [
      "North Bay District Championship Winner",
      "Custom Student-Designed Cascading Elevator",
      "Windsor Engineering Inspiration Award Winner",
    ],
  },
  {
    id: 2,
    subheading: "FIRST® Crescendo",
    heading: "RamJam",
    alt: "Crescendo Image",
    image: crescendoPhoto,
    github: "https://github.com/FRCTeam3756/2024-FRCRobot",
    model: "/robots/2024.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2024/Manual/2024GameManual.pdf",
    accomplishments: [
      "First DCMP Qualifying Robot",
      "University of Waterloo Third Place",
      "Ranked #67 for EPA in Ontario",
    ],
  },
  {
    id: 3,
    subheading: "FIRST® Charged Up",
    heading: "CeeCee",
    alt: "Charged Up Image",
    image: chargedUpPhoto,
    github: "",
    model: "/robots/2023.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf",
    accomplishments: [
      "Western University Spirit Award Winner",
      "Season Record of 13-13-0",
      "Built by a Full Rookie Team",
    ],
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
              key={value.id}
              subheading={value.subheading}
              heading={value.heading}
              image={value.image}
              github={value.github}
              model={value.model}
              manual={value.manual}
              accomplishments={value.accomplishments}
            />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
