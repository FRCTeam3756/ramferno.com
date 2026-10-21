"use client";

import { useId, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import styles from "./RobotScroller.module.css";
import ModelViewer from "../ModelViewer/ModelViewer";

interface RobotProps {
  season: string;
  competitions: string[];
  subheading: string;
  heading: string;
  image: string;
  github: string;
  model: string | null;
  manual: string;
  accomplishments: string[];
}

export default function RobotScroller({
  season,
  competitions,
  subheading,
  heading,
  image,
  github,
  model,
  manual,
  accomplishments,
}: RobotProps) {
  const titleId = useId();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const overlayY = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <div className={styles.section}>
      <div className={styles.stickyContainer}>
        <motion.div
          style={{
            backgroundImage: `url(${image})`,
            scale,
          }}
          ref={targetRef}
          className={styles.stickyImage}
        >
          <motion.div
            className={styles.overlay}
            style={{
              opacity,
            }}
          />
        </motion.div>
        <motion.div
          style={{
            y,
            opacity: overlayY,
          }}
          ref={targetRef}
          className={styles.overlayCopy}
        >
          <p className={styles.subheading}>{subheading}</p>
          <p className={styles.heading}>{heading}</p>
        </motion.div>
      </div>

      <div className={styles.contentRibbon}>
        <article className={styles.contentCard} aria-labelledby={titleId}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.seasonGame}>{subheading}</p>
              <h2 id={titleId} className={styles.robotName}>{heading}</h2>
            </div>
            <p className={styles.seasonYear}>
              <span>Season</span>
              {season}
            </p>
          </header>

          <figure className={styles.visualPanel}>
            <div className={styles.mediaColumn}>
              {model ? (
                <div className={styles.modelStage} role="img" aria-label={`Rotating 3D model of ${heading}`}>
                  <ModelViewer modelUrl={model} />
                </div>
              ) : (
                <img
                  className={styles.robotPhoto}
                  src={image}
                  alt={`${heading} on the competition field`}
                  loading="lazy"
                />
              )}
            </div>
            <figcaption className={styles.mediaCaption}>
              {competitions.join(" · ")}
            </figcaption>
          </figure>

          <div className={styles.detailsColumn}>
            <section>
              <h3 className={styles.sectionTitle}>Season highlights</h3>
              <ul className={styles.accomplishmentList}>
                {accomplishments.map((item) => (
                  <li key={item} className={styles.accomplishmentItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.resources}>
              <h3 className={styles.sectionTitle}>Explore the season</h3>
              <div className={styles.actions}>
                <a className={styles.resourceLink} href={manual} target="_blank" rel="noopener noreferrer">
                  <span>Game manual</span>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
                {github ? (
                  <a className={styles.resourceLink} href={github} target="_blank" rel="noopener noreferrer">
                    <span>Robot code <span className={styles.linkDetail}>/ GitHub</span></span>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                ) : (
                  <p className={styles.unavailable}>Robot code <span>Unavailable</span></p>
                )}
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
