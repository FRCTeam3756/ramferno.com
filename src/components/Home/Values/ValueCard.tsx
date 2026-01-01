import valueCardStyles from "./ValueCard.module.css";

interface ValueCardProps {
  title: string;
  description: string;
  greyImage: string;
  image: string;
}

export default function ValueCard({ title, description, greyImage, image }: ValueCardProps) {
  return (
    <div className={valueCardStyles.card}>
      <div className={valueCardStyles.cardImageWrapper}>
        <img className={valueCardStyles.cardGreyImage} src={greyImage}></img>
        <img className={valueCardStyles.cardImage} src={image}></img>
        <div className={valueCardStyles.cardRibbon}>
          <span className={valueCardStyles.cardTitle}>{title}</span>
        </div>
      </div>
      <span className={valueCardStyles.cardDescription}>{description}</span>
    </div>
  );
};