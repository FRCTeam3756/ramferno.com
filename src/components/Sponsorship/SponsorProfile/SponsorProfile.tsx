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
    rest: { scale: 1, y: 0 },
    hover: {
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 28, mass: 0.6 },
        }
  }

  const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
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
    >
      {image ? (
        <motion.img
          src={image}
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