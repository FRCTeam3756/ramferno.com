import styles from './Values.module.css';

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

const ValueCard = ({ title, description, image }: ValueCardProps) => (
  <div className={styles.card}>
    <img className={styles.image} src={image}></img>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default ValueCard;