import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/Person";
import ResumeIcon from "@mui/icons-material/WorkRounded";
import SkillsIcon from "@mui/icons-material/Extension";
import ProjectsIcon from "@mui/icons-material/Code";
import ContactIcon from "@mui/icons-material/PermPhoneMsg";

import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#home", Icon: HomeIcon, label: "Home" },
  { href: "#about-me", Icon: AboutIcon, label: "About" },
  { href: "#resume", Icon: ResumeIcon, label: "Resume" },
  { href: "#skills", Icon: SkillsIcon, label: "Skills" },
  { href: "#projects", Icon: ProjectsIcon, label: "Projects" },
  { href: "#contact", Icon: ContactIcon, label: "Contact" },
];

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (currentY) => {
    const delta = currentY - lastScrollY.current;
    if (Math.abs(delta) > 50) {
      setIsHidden(delta > 0);
      lastScrollY.current = currentY;
    }
  });

  return (
    <nav className={styles.navbar} id="navbar">
      <motion.ul
        className={styles.navbarItems}
        initial={{ y: -100 }}
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "100%",
          },
        }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
      >
        {navLinks.map(({ href, Icon, label }) => (
          <li className={styles.navbarItem} key={href}>
            <a href={href} aria-label={label}>
              <Icon className={styles.icon} />
              <p>{label}</p>
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};
