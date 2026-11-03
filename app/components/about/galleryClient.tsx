"use client";

import { useState } from "react";
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
            <span
              className={`${styles.arrow} ${expanded ? styles.arrowExpanded : ""}`}
            >
              &#9654;
            </span>
            {expanded ? "View less photos" : "View more photos"}
          </button>
          {expanded && (
            <div className={styles.masonry}>
              {rest.map((src) => (
                <div key={src} className={styles.item}>
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
        </>
      )}
    </div>
  );
};

export default GalleryClient;
