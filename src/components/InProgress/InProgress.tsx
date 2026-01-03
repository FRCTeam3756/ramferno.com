import styles from "./InProgress.module.css";

export default function InProgress() {
  return (
    <section>
      <div className={styles.text}>
        <h1>Page under construction...</h1>
        <p>Please feel free to contact us for support!</p>
      </div>
    </section>
  );
}
