import { Navbar } from "../../components/Global/Navbar";
import { Footer } from "../../components/Global/Footer";
import { ModelViewer } from "../../components/Competitions/FRC/ModelViewer/ModelViewer";
import styles from "./FRC.module.css";

export const FRC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.yearContainer}>
        <div className={styles.robotBox}>
          <ModelViewer modelUrl="/robots/2023.glb" />
        </div>
        <div className={styles.textBox}>
          <h1>Low Rider</h1>
          <h2>Reefscape 2025</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};
