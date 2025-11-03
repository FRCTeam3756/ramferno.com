import NavMenu from "../../components/Global/NavMenu/NavMenu";
import Footer from "../../components/Global/Footer/Footer";
import ModelViewer from "../../components/Competition/ModelViewer/ModelViewer";
import styles from "./Competition.module.css";

export default function Competition() {
  return (
    <>
      <NavMenu />
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
}
