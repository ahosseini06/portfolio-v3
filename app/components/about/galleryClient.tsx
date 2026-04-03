"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import styles from "./gallery.module.css";

interface GalleryClientProps {
  firstRow: string[];
  rest: string[];
}

const GalleryClient = ({ firstRow, rest }: GalleryClientProps) => {
  const [expanded, setExpanded] = useState(false);

  if (firstRow.length === 0 && rest.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {firstRow.length > 0 && (
        <div className={styles.firstRow}>
          {firstRow.map((src) => (
            <div key={src} className={styles.firstRowItem}>
              <Image
                src={src}
                alt=""
                width={400}
                height={300}
                sizes="(max-width: 640px) 45vw, 200px"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      )}
      {rest.length > 0 && (
        <>
          <button
            className={styles.toggle}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <motion.span
              className={styles.arrow}
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.25 }}
            >
              &#9654;
            </motion.span>
            {expanded ? "View less photos" : "View more photos"}
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.div
                className={styles.masonry}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {rest.map((src, i) => (
                  <motion.div
                    key={src}
                    className={styles.item}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.03,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={400}
                      height={300}
                      sizes="(max-width: 640px) 45vw, 200px"
                      className={styles.image}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default GalleryClient;
