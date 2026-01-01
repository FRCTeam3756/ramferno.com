import styles from "./Contact.module.css"

import NavMenu from '../../components/Global/NavMenu/NavMenu';
import Footer from '../../components/Global/Footer/Footer';
import ProfileCard from "../../components/Contact/ProfileCard/ProfileCard";

import cooperImg from '../../assets/images/contact/cooper.webp'
import mironImg from '../../assets/images/contact/miron.webp'
import rhigerImg from '../../assets/images/contact/rhiger.webp'
import studentsImg from '../../assets/images/contact/students.webp'

import { Helmet } from "@vuer-ai/react-helmet-async";

interface ProjectCardProps {
  id: number;
  name: string;
  email: string;
  jobTitle: string;
  roboticsTitle: string;
  headshot: string
}

const profileList: ProjectCardProps[] = [
  {
    id: 0,
    name: "Mr. Cooper",
    email: "tv40175@gotvdsb.ca",
    jobTitle: "Science Dept. Head",
    roboticsTitle: "Lead Mentor",
    headshot: cooperImg
  },
  {
    id: 1,
    name: "Mr. Miron",
    email: "tv49290@gotvdsb.ca",
    jobTitle: "Technology Dept. Head",
    roboticsTitle: "Manufacturing Mentor",
    headshot: mironImg
  },
  {
    id: 2,
    name: "Mr. Rhiger",
    email: "tv51980@gotvdsb.ca",
    jobTitle: "Business Dept. Head",
    roboticsTitle: "Software Mentor",
    headshot: rhigerImg
  },
  {
    id: 2,
    name: "Gabe & Maddox",
    email: "contact@ramferno.com",
    jobTitle: "Student Leaders",
    roboticsTitle: "Leadership Team",
    headshot: studentsImg
  }  
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | RamFerno Robotics</title>
        <meta name="description" content="RamFerno Robotics from Sir Wilfrid Laurier S.S. inspires students through FIRST competition, outreach, and STEM education." />
      </Helmet>
      <section className={styles.section} id="contact">
        <NavMenu />
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h1>Contact</h1>
            <h2>Contact</h2>
          </header>

          <div className={styles.profileGrid}>
            {profileList.map((profile) => (
              <ProfileCard
                name={profile.name}
                email={profile.email}
                jobTitle={profile.jobTitle}
                roboticsTitle={profile.roboticsTitle}
                headshot={profile.headshot}
              />
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
