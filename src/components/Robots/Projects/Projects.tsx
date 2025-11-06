import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

interface ProjectCardProps {
  id: number;
  year: string;
  name: string;
  game: string;
  github: string;
  model: string;
  manual: string;
}

const projectList: ProjectCardProps[] = [
  {
    id: 0,
    year: "2023",
    name: "C.C.",
    game: "Charged Up",
    github: "",
    model: "/robots/2023.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf"
  },
  {
    id: 1,
    year: "2024",
    name: "RAM Jam",
    game: "Crescendo",
    github: "https://github.com/FRCTeam3756/2024-FRCRobot",
    model: "/robots/2024.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2024/Manual/2024GameManual.pdf"
  },
  {
    id: 2,
    year: "2025",
    name: "Low Rider",
    game: "Reefscape",
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    model: "/robots/2025.glb",
    manual: "https://firstfrc.blob.core.windows.net/frc2025/Manual/2025GameManual.pdf"
  }  
];

export default function Projects() {
  return (
    <div className={styles.container}>
      {projectList.map((project) => (
        <ProjectCard
          id={project.id}
          year={project.year}
          name={project.name}
          game={project.game}
          github={project.github}
          model={project.model}
          manual={project.manual}
        />
      ))}
    </div>
  );
};