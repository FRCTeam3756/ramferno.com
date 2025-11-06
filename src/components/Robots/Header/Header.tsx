import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.textBox}>
        <h1>Our Robots:</h1>
      </div>
    </div>
  );
};