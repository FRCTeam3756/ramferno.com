import { useState } from "react";
import styles from "./ValueCard.module.css";

interface ValueCardProps {
  title: string;
  description: string;
  alt: string;
  greyImage: string;
  colorImage: string;
}

export default function ValueCard({ title, description, alt, greyImage, colorImage }: ValueCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const generateSrcSet = (image: string) => 
    [480, 768, 1024, 1440].map(w => `${image}?w=${w} ${w}w`).join(', ');

  return (
    <div 
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.imageWrapper}>
        <img 
          className={styles.greyImage}
          alt={alt}
          src={greyImage}
          srcSet={generateSrcSet(greyImage)}
          sizes="(max-width: 1200px) 100vw, 33vw"
          loading="lazy"
          decoding="async"
        />
        <img 
          className={styles.colorImage}
          alt={alt}
          src={colorImage}
          srcSet={generateSrcSet(colorImage)}
          sizes="(max-width: 1200px) 100vw, 33vw"
          loading="lazy"
          decoding="async"
        />
        <div className={styles.ribbon}>
          <span className={styles.title}>{title}</span>
        </div>

        <div className={styles.desktopDescription}>
          <span>{description}</span>
        </div>

        <div className={styles.mobileDescription}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};