import { useEffect, useState } from "react";
import navStyles from "./Navbar.module.css";
import navBrandImage from '../../assets/images/navbar/brand.webp'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/community", label: "Community" },
  { href: "/competition", label: "Competition" },
  { href: "/campferno", label: "CampFerno" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${navStyles.navbar} ${scrolled ? navStyles.scrolled : ""}`} id="navbar">
      <img src={navBrandImage} className={navStyles.brandImage}></img>
      <ul>
        {navLinks.map(({ href, label }) => (
          <li className={navStyles.navbarItem} key={href}>
            <a href={href} aria-label={label}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
