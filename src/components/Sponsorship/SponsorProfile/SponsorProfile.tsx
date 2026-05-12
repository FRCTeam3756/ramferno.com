import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import styles from "./SponsorProfile.module.css"
import { CirclePlus } from 'lucide-react';

export interface SponsorProfileProps {
  name?: string
  description?: string
  image?: string
  website?: string
  instagram?: string
  facebook?: string
  twitter?: string
}

export function SponsorProfile({name, description, image, }: SponsorProfileProps) {

  const containerVariants: Variants = {
    rest: {
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 22px 42px rgba(0, 0, 0, 0.16)",
    },
    hover: {
      y: -8,
      rotateX: 5,
      rotateY: -5,
      boxShadow: "0 34px 72px rgba(0, 0, 0, 0.26)",
      transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.8 },
    }
  }

  const imageVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.08, y: -6 },
  }

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.20,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 },
    },
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 8 },
    },
  }

  return (
    <motion.div
      data-slot="profile-hover-card"
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className={styles.card}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={styles.depthShadow} />

      {image ? (
        <motion.img
          src={image}
          alt={name ? `${name} sponsor logo` : "Sponsor logo"}
          className={styles.image}
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      ) : (
        <motion.div
          className={styles.addIcon}
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <CirclePlus size={100} color={"#ffffff"}/>
        </motion.div>
      )}

      <div className={styles.overlayTop} />
      <div className={styles.glow} />
      <div className={styles.edgeLight} />
      <div className={styles.overlayMid} />
      <div className={styles.overlayBottom} />

      <motion.div
        className={styles.content}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <motion.h2
            className={styles.name}
            variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
          >
            {name?.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={styles.letter}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        <motion.p className={styles.description} variants={itemVariants}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
