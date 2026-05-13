"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Trophy, X } from "lucide-react";

import styles from "./RobotScroller.module.css";
import ModelViewer from "../ModelViewer/ModelViewer";

interface RobotProps {
  subheading: string;
  heading: string;
  image: string;
  github: string;
  model: string | null;
  manual: string;
  accomplishments: string[];
}

export default function RobotScroller({
  subheading,
  heading,
  image,
  github,
  model,
  manual,
  accomplishments,
}: RobotProps) {
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
        <div className={styles.contentCard}>
          <div className={styles.visualPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelEyebrow}>Robot Visual</p>
              <h3 className={styles.panelTitle}>{heading}</h3>
              <p className={styles.panelSubtitle}>{subheading}</p>
            </div>
            <div className={styles.mediaColumn}>
              {model ? <ModelViewer modelUrl={model} /> : null}
            </div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.infoPanel}>
              <div className={styles.panelHeader}>
                <p className={styles.panelEyebrow}>Season Resources</p>
                <h3 className={styles.panelTitle}>Documentation</h3>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.button}
                  onClick={() => window.open(manual, "_blank")}
                >
                  <span className={styles.label}>Game Manual</span>
                  <span className={styles.iconWrapper}>
                    <ArrowDown />
                  </span>
                </button>

                {github ? (
                  <button
                    className={styles.button}
                    onClick={() => window.open(github, "_blank")}
                  >
                    <span className={styles.label}>GitHub Repository</span>
                    <span className={styles.iconWrapper}>
                      <ArrowRight />
                    </span>
                  </button>
                ) : (
                  <div className={styles.actionDisabled}>
                    <button className={styles.button} disabled>
                      <span className={styles.label}>GitHub Unavailable</span>
                      <span className={styles.iconWrapper}>
                        <X />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.infoPanel}>
              <div className={styles.panelHeader}>
                <p className={styles.panelEyebrow}>Highlights</p>
                <h3 className={styles.panelTitle}>Season Accomplishments</h3>
              </div>
              <ul className={styles.accomplishmentList}>
                {accomplishments.map((item) => (
                  <li key={item} className={styles.accomplishmentItem}>
                    <span className={styles.accomplishmentIcon}>
                      <Trophy size={16} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
