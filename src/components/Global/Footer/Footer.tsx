import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoUrl from "../../../assets/global/footer/logo.webp";
import styles from "./Footer.module.css";

const pages = ["Robots", "Competition", "Sponsorship", "Contact"];
const socials = [
  { label: "X", icon: FaXTwitter, href: "https://x.com/ramferno3756" },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/3756ramferno/",
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/3756RamFerno/",
  },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/FRCTeam3756" },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ramferno/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <a
            className={styles.brand}
            href="/"
            aria-label="RamFerno Robotics home"
          >
            <img src={logoUrl} alt="" width={110} height={86} />
            <span>RamFerno Robotics</span>
          </a>
          <nav className={styles.socials} aria-label="Social media">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={21} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            <p>&copy; {year} RamFerno Robotics</p>
            <p>All rights reserved</p>
          </div>
          <nav className={styles.navigation} aria-label="Footer navigation">
            {pages.map((label) => (
              <a key={label} href={`/${label.toLowerCase()}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
