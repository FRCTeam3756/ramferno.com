import styles from "./InProgress.module.css";

export default function InProgress() {
  return (
    <div className={styles.section}>
      <div className={styles.text}>
        <h1>Page under construction...</h1>
        <p>Please feel free to contact us for support!</p>
      </div>
    </div>
  );
}
