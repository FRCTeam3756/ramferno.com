import { ArrowUpRight } from "lucide-react";
import styles from "./SponsorProfile.module.css";

export interface SponsorProfileProps {
  name: string;
  description?: string;
  image?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export function SponsorProfile({ name, description, image, website }: SponsorProfileProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePanel}>
        {image && <img src={image} alt={`${name} sponsor`} className={styles.image} loading="lazy" />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        {website && (
          <a className={styles.website} href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} website (opens in a new tab)`}>
            Visit website <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
