import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p>Copyright &copy; {year} Team RamFerno</p>
    </div>
  );
};
