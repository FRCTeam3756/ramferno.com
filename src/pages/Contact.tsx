import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import contactStyles from "./Contact.module.css";
import globalStyles from "../styles/global.module.css";

export const Contact = () => {
  return (
    <section className={globalStyles.section} id="contact">
      <div className={globalStyles.container}>
        <header
          className={globalStyles.sectionHeader}
        >
          <h1>Contact</h1>
          <h2>Contact</h2>
        </header>

        <div className={globalStyles.row}>
          <a
            href="mailto:contact@ramferno.com"
            target="_blank"
            rel="noopener noreferrer"
            className={contactStyles.logoContainer}
          >
            <EmailIcon className={contactStyles.logoImage} />
          </a>
          <a
            href="https://www.linkedin.com/in/ramferno/"
            target="_blank"
            rel="noopener noreferrer"
            className={contactStyles.logoContainer}
          >
            <LinkedInIcon className={contactStyles.logoImage} />
          </a>
          <a
            href="https://github.com/FRCTeam3756/"
            target="_blank"
            rel="noopener noreferrer"
            className={contactStyles.logoContainer}
          >
            <GitHubIcon className={contactStyles.logoImage} />
          </a>
        </div>
      </div>
    </section>
  );
};
