import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import iconStyles from "./Icons.module.css";
import globalStyles from "../../../styles/global.module.css";

export default function Icons() {
  return (
    <div className={globalStyles.row}>
      <a
        href="mailto:contact@ramferno.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyles.logoContainer}
      >
        <EmailIcon className={iconStyles.logoImage} />
      </a>
      <a
        href="https://www.linkedin.com/in/ramferno/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyles.logoContainer}
      >
        <LinkedInIcon className={iconStyles.logoImage} />
      </a>
      <a
        href="https://github.com/FRCTeam3756/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyles.logoContainer}
      >
        <GitHubIcon className={iconStyles.logoImage} />
      </a>
    </div>
  );
}
