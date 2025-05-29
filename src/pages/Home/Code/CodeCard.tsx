import { motion } from "framer-motion";
import styles from "./Code.module.css";

interface Code {
  item: {
    title: string;
    github: string;
  };
}

export const CodeCard = ({ item }: Code) => {
  return (
    <a href={item.github} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={styles.projectItem}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={styles.projectDetails}>
          <div className={styles.projectTitle}>
            <h3>{item.title}</h3>
          </div>
        </div>
      </motion.div>
    </a>
  );
};
