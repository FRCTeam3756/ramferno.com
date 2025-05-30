import valueStyles from "./Values.module.css";

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

export const ValueCard = ({ title, description, image }: ValueCardProps) => (
  <div className={valueStyles.card}>
    <img className={valueStyles.cardImage} src={image}></img>
    <div className={valueStyles.cardText}>
      <span className={valueStyles.cardTitle}>{title}</span>
      {/* <br/> */}
      <span className={valueStyles.cardDescription}>{description}</span>
    </div>
  </div>
);
