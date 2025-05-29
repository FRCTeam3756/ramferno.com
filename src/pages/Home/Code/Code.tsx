import globalStyles from "../../styles/global.module.css";
import styles from "./Code.module.css";
import { CodeCard } from "./CodeCard";

const projectList = [
  {
    id: 0,
    title: "2025",
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
  },
  {
    id: 1,
    title: "2024",
    github: "https://github.com/FRCTeam3756/2024-FRCRobot",
  },
  {
    id: 2,
    title: "2020",
    github: "https://github.com/FRCTeam3756/2020-FRCRobot",
  },
];

export const Code = () => {
  return (
    <section className={globalStyles.section} id="code">
      <div className={globalStyles.container}>
        <header
          className={globalStyles.sectionHeader}
        >
          <h1>Codebases</h1>
          <h2>Codebases</h2>
        </header>

        <div className={styles.projectsContent}>
          {projectList.map((item) => {
            return <CodeCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
