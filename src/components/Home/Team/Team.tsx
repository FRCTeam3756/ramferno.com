import styles from "./Team.module.css";
import teamPhoto from "../../../assets/images/team/team.webp";

export const Team = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Meet the Team</h2>
      <img src={teamPhoto} alt="Team RamFerno" className={styles.image} />
      <p className={styles.description}>
        RamFerno Robotics is one of over 1000 Canadian FIRST Robotics teams.
        Team 3756 RamFerno competes and parades with robots every year.{" "}
      </p>
    </section>
  );
};
