import styles from "./ValueCard.module.css";

interface ValueCardProps {
  title: string;
  description: string;
  alt: string;
  greyImage: string;
  colorImage: string;
}

export default function ValueCard({ title, description, alt, greyImage, colorImage }: ValueCardProps) {
  const generateSrcSet = (image: string) => 
    [480, 768, 1024, 1440].map(w => `${image}?w=${w} ${w}w`).join(', ');

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          className={styles.greyImage}
          alt={alt}
          src={greyImage}
          srcSet={generateSrcSet(greyImage)}
          sizes="(max-width: 1200px) 100vw, 33vw"
        />
        <img 
          className={styles.colorImage}
          alt={alt}
          src={colorImage}
          srcSet={generateSrcSet(colorImage)}
          sizes="(max-width: 1200px) 100vw, 33vw"
        />
        <div className={styles.ribbon}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );
};