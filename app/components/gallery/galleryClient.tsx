"use client";

import { useState } from "react";
import type React from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

export type Still = { src: string; alt: string; framing?: React.CSSProperties };

function Photos({ photos, id }: { photos: Still[]; id?: string }) {
  return (
    <ul className={styles.photos} id={id}>
      {photos.map((photo) => (
        <li key={photo.src} className={styles.photo}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 25vw, 176px"
            className={styles.image}
            style={photo.framing}
          />
        </li>
      ))}
    </ul>
  );
}

export default function GalleryClient({ lead, rest }: { lead: Still[]; rest: Still[] }) {
  const [expanded, setExpanded] = useState(false);

  if (lead.length === 0 && rest.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {lead.length > 0 && <Photos photos={lead} />}
      {expanded && <Photos photos={rest} id="more-photos" />}
      {rest.length > 0 && (
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={expanded}
          aria-controls="more-photos"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show fewer photos" : `Show ${rest.length} more photos`}
        </button>
      )}
    </div>
  );
}
