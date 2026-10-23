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
      <main className={styles.container}>
        <header className={styles.title}>
          <p className={styles.eyebrow}>Together, we build what’s next</p>
          <h1>Community Partners</h1>
          <p className={styles.lead}>
            These organizations help turn student ambition into real robots,
            real competition experience, and real opportunities to grow.
          </p>
          <a className={styles.contactLink} href="mailto:contact@ramferno.com">
            Become a sponsor <span aria-hidden="true">↗</span>
          </a>
        </header>
        <section aria-labelledby="partners-heading">
          <div className={styles.sectionHeader}>
            <h2 id="partners-heading">Our partners</h2>
            <span className={styles.sectionLabel}>Backing the next generation</span>
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
        </section>
        <section className={styles.supporterSection} aria-labelledby="supporters-heading">
          <div className={styles.sectionHeader}>
            <h2 id="supporters-heading">Community supporters</h2>
          </div>
          <p className={styles.supporterIntro}>Thank you to the businesses and families helping our team learn, build, and compete.</p>
          <ul className={styles.supporterList}>
            {sponsorNamesList.map((s) => (
              <li key={s.id} className={styles.supporterName}>
                {s.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
