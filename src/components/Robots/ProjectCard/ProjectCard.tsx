import ModelViewer from '../ModelViewer/ModelViewer';
import styles from './ProjectCard.module.css';
import { Book, FileBox, Github } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  year: string;
  name: string;
  game: string;
  github: string;
  model: string;
  manual: string;
  
}

export default function ProjectCard({ id, year, name, game, github, model, manual}: ProjectCardProps) {
  return (
    <div key={id} className={styles.projectCard}>
      <div className={styles.manualBox}>
        <a
          href={manual}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.manualLink}
        >
          <Book />
        </a>
      </div>
      <div className={styles.robotBox}>
        {model ? (
          <ModelViewer modelUrl={model} />
        ) : (
          <FileBox />
        )}
      </div>

      <div className={styles.textBox}>
        <h1>{year} — {name}</h1>
        <h2>{game}</h2>
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <Github />
          </a>
        ) : (
          <p className={styles.noGithub}>GitHub unavailable</p>
        )}
      </div>
    </div>
  );
};