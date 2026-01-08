import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, FileBox, X } from "lucide-react";

import styles from "./RobotScroller.module.css";
import ModelViewer from "../ModelViewer/ModelViewer";

interface RobotProps {
  subheading: string;
  heading: string;
  image: string;
  github: string;
  model: string;
  manual: string;
}

export default function RobotScroller({
  subheading,
  heading,
  image,
  github,
  model,
  manual,
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

      <div className={styles.contentCard}>
        <div className={styles.textColumn}>
          <div className={styles.actions}>
            <a href={manual} target="_blank" rel="noopener noreferrer">
              <button className={styles.button}>
                <span className={styles.label}>Game Manual</span>
                <span className={styles.iconWrapper}>
                  <ArrowDown />
                </span>
              </button>
            </a>

            {github ? (
              <button 
                className={styles.button}
                onClick={() => window.open(github, "_blank")}
              >
                <span className={styles.label}>Code Release</span>
                <span className={styles.iconWrapper}>
                  <ArrowRight />
                </span>
              </button>
            ) : (
              <div className={styles.actionDisabled}>
                <button className={styles.button}>
                  <span className={styles.label}>Code Unavailable</span>
                  <span className={styles.iconWrapper}>
                    <X />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.mediaColumn}>
          {model ? <ModelViewer modelUrl={model} /> : <FileBox />}
        </div>
      </div>
    </div>
  );
}
