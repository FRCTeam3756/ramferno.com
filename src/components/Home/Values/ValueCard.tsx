import styles from "./ValueCard.module.css";

interface ValueCardProps {
  title: string;
  description: string;
  alt: string;
  greyImage: string;
  image: string;
}

export default function ValueCard({ title, description, alt, greyImage, image }: ValueCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img 
          className={styles.cardGreyImage}
          alt={alt}
          src={greyImage}
        srcSet={`
          ${greyImage}?w=480 480w,
          ${greyImage}?w=768 768w,
          ${greyImage}?w=1024 1024w,
          ${greyImage}?w=1440 1440w,
        `}
          sizes="(max-width: 1200px) 100vw, 33vw">
        </img>
        <img 
          className={styles.cardImage}
          alt={alt}
          src={image}
          srcSet={`
            ${image}?w=480 480w,
            ${image}?w=768 768w,
            ${image}?w=1024 1024w,
            ${image}?w=1440 1440w,
          `}
          sizes="(max-width: 1200px) 100vw, 33vw">
        </img>
        <div className={styles.cardRibbon}>
          <span className={styles.cardTitle}>{title}</span>
          <span className={styles.cardDescription}>{description}</span>
        </div>
      </div>
    </div>
  );
};