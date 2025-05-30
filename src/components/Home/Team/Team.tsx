import teamStyles from "./Team.module.css";
import globalStyles from "../../../styles/global.module.css";
import teamPhoto from "../../../assets/images/team/team.webp";

export const Team = () => {
  return (
    <section className={globalStyles.section} id="team">
      <div className={globalStyles.container}>
        <header className={globalStyles.sectionHeader}>
          <h1>Meet the Team</h1>
          <h2>Meet the Team</h2>
        </header>

        <div className={teamStyles.teamContent}>
          <img
            src={teamPhoto}
            alt="Team RamFerno"
            className={teamStyles.image}
          />
          <p>
            RamFerno Robotics is one of over 1000 Canadian teams participating in{" "}
            the FIRST Robotics Competition. Each year, Team 3756 is committed to{" "}
            inspiring students to design, build, and present competitive robots{" "}
            that exemplify innovation, teamwork, and engineering excellence.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
