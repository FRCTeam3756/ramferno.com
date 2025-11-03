import ModelViewer from '../ModelViewer/ModelViewer';
import styles from './Projects.module.css';


const projectList = [
  {
    id: 0,
    year: "2023",
    name: "C.C.",
    game: "Charged Up",
    github: "",
    model: "/robots/2023.glb"
  },
  {
    id: 1,
    year: "2024",
    name: "RAM Jam",
    game: "Crescendo",
    github: "https://github.com/FRCTeam3756/2024-FRCRobot",
    model: "/robots/2023.glb"
  },
  {
    id: 2,
    year: "2025",
    name: "Low Rider",
    game: "Reefscape",
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    model: "/robots/2023.glb"
  }  
];

export default function Projects() {
  return (
    <div className={styles.container}>
      {projectList.map((project) => (
        <div key={project.id} className={styles.yearContainer}>
          <div className={styles.robotBox}>
            {project.model ? (
              <ModelViewer modelUrl={project.model} />
            ) : (
              <p className={styles.noModel}>No 3D model available</p>
            )}
          </div>

          <div className={styles.textBox}>
            <h1>{project.year} — {project.name}</h1>
            <h2>{project.game}</h2>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                View on GitHub
              </a>
            ) : (
              <p className={styles.noGithub}>GitHub unavailable</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};