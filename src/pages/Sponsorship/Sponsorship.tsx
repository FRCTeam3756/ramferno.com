import styles from "./Sponsorship.module.css";

import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";

import { Helmet } from "@vuer-ai/react-helmet-async";
import { SponsorProfile } from "../../components/Sponsorship/SponsorProfile/SponsorProfile";

import armoToolImage from "../../assets/sponsorship/armo_tool.webp";
import argosyImage from "../../assets/sponsorship/argosy.webp";
import tvdsbImage from "../../assets/sponsorship/tvdsb.webp";

const sponsorProfilesList = [
  {
    id: 0,
    name: "TVDSB",
    description: "We build each student's tomorrow, every day.",
    image: tvdsbImage,
    website: "https://www.tvdsb.ca/en/index.aspx",
    instagram: "https://www.instagram.com/thamesvalleydsb/",
    facebook: "https://www.facebook.com/TVDSB/",
    twitter: "https://www.x.com/TVDSB/",
  },
  {
    id: 1,
    name: "ARMO Tool",
    description:
      "Whether it’s automation, robotics, precision tooling or stamping dies we put Ideas into Action.",
    image: armoToolImage,
    website: "https://www.armotool.com/",
    instagram: "https://www.instagram.com/armorobotics/",
    facebook: "https://www.facebook.com/pages/Armo-Tool-Ltd/",
    twitter: "",
  },
  {
    id: 2,
    name: "Argosy Foundation",
    description:
      "To support people and programs that make our society a better place to live.",
    image: argosyImage,
    website: "https://www.argosyfnd.org/",
    instagram: "",
    facebook: "https://www.facebook.com/argosyfoundation/",
    twitter: "https://www.x.com/ArgosyFound",
  },
  {
    id: 3,
    name: "Your Business Here!",
    description: "",
    image: undefined,
    website: "",
    instagram: "",
    facebook: "",
    twitter: "",
  },
];

const sponsorNamesList = [
  {
    id: 0,
    name: "Tool & Cutter",
  },
  {
    id: 1,
    name: "Brose",
  },
  {
    id: 2,
    name: "Baribeau Construction",
  },
  {
    id: 3,
    name: "Jones Healthcare Group",
  },
  {
    id: 4,
    name: "Avery's Mobile Services",
  },
  {
    id: 5,
    name: "Victoria Ashley, RMT",
  },
  {
    id: 6,
    name: "Miron Family",
  },
  {
    id: 7,
    name: "MacDonell-Lynch Family",
  },
];

export default function Sponsorship() {
  return (
    <>
      <Helmet>
        <title>Sponsorship | RamFerno Robotics</title>
        <meta
          name="description"
          content="Partner with RamFerno Robotics — see sponsor benefits and how to support our STEM initiatives."
        />
      </Helmet>
      <NavMenu />
      <main>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Community Partners</h1>
            <p className={styles.lead}>
              These organizations help turn student ambition into real robots,
              real competition experience, and real opportunities to grow.
            </p>
          </div>
          <div className={styles.sponsorCards}>
            {sponsorProfilesList.map((sponsorProfile) => (
              <SponsorProfile
                key={sponsorProfile.id}
                name={sponsorProfile.name}
                image={sponsorProfile.image}
                description={sponsorProfile.description}
                website={sponsorProfile.website}
                instagram={sponsorProfile.instagram}
                facebook={sponsorProfile.facebook}
                twitter={sponsorProfile.twitter}
              />
            ))}
          </div>
        </div>
        <div className={styles.supporterSection}>
          <div className={styles.supporterDivider}>
            <p className={styles.supporterLabel}>Community supporters</p>
            <div className={styles.supporterLine} />
          </div>
          <div className={styles.supporterList}>
            {sponsorNamesList.map((s) => (
              <div key={s.id} className={styles.supporterPill}>
                <span className={styles.supporterDot} />
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
