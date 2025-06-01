import teamStyles from "./Team.module.css";
import globalStyles from "../../../styles/global.module.css";
import teamPhoto from "../../../assets/images/team/team.webp";

export const Team = () => {
  return (
    <section className={globalStyles.section} id="team">
      <div className={globalStyles.container}>
        <div className={teamStyles.teamContainer}>
          <img
            src={teamPhoto}
            alt="Team RamFerno"
            className={teamStyles.teamPhoto}
          />
          <div className={teamStyles.textContainer}>
            <h1>Our Team</h1>
            <p>
              RamFerno Robotics is one of over 1000 Canadian teams participating
              in the FIRST Robotics Competition. Each year, Team 3756 is
              committed to inspiring students to design, build, and present
              competitive robots that exemplify innovation, teamwork, and
              engineering excellence.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
