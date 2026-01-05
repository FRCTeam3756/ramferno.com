import RobotCard from '../RobotCard/RobotCard';
import styles from './RobotCards.module.css';

interface RobotCardProps {
  id: number;
  year: string;
  name: string;
  game: string;
  github: string;
  model: string;
  manual: string;
}

const robotList: RobotCardProps[] = [
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

export default function RobotCards() {
  return (
    <div className={styles.container}>
      {robotList.map((robot, i) => (
        <RobotCard
          key={i}
          id={robot.id}
          year={robot.year}
          name={robot.name}
          game={robot.game}
          github={robot.github}
          model={robot.model}
          manual={robot.manual}
        />
      ))}
    </div>
  );
};