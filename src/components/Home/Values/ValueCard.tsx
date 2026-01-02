import valueCardStyles from "./ValueCard.module.css";

interface ValueCardProps {
  title: string;
  description: string;
  alt: string;
  greyImageSrc: string;
  greyImageSrcSet: string;
  imageSrc: string;
  imageSrcSet: string;
}

export default function ValueCard({ title, description, alt, greyImageSrc, greyImageSrcSet, imageSrc, imageSrcSet }: ValueCardProps) {
  return (
    <div className={valueCardStyles.card}>
      <div className={valueCardStyles.cardImageWrapper}>
        <img 
          className={valueCardStyles.cardGreyImage}
          alt={alt}
          src={greyImageSrc}
          srcSet={greyImageSrcSet}
          sizes="(max-width: 1200px) 100vw, 33vw">
        </img>
        <img 
          className={valueCardStyles.cardImage}
          alt={alt}
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes="(max-width: 1200px) 100vw, 33vw">
        </img>
        <div className={valueCardStyles.cardRibbon}>
          <span className={valueCardStyles.cardTitle}>{title}</span>
        </div>
      </div>
      <span className={valueCardStyles.cardDescription}>{description}</span>
    </div>
  );
};