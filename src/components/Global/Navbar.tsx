import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar} id="navbar">
      <ul>
        {navLinks.map(({ href, label }) => (
          <li className={styles.navbarItem} key={href}>
            <a href={href} aria-label={label}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
