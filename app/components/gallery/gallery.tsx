import type React from "react";
import fs from "fs";
import path from "path";
import GalleryClient, { type Still } from "./galleryClient";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const SUPPORTED_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif", ".avif"]);

// Alt text for the lead stills, whose filenames say nothing about them.
const LEAD_ALT: Record<string, string> = {
  "Edited Image 3859 2.png": "Ali coding at a hackathon",
  "IMG_3572 2 3.png": "Ali speaking at a podium",
  "IMG_8273 2.png": "Ali behind the camera on a film shoot",
  "edy_5700 2.png": "Ali playing volleyball",
};

// Alt text for the rest, derived from the filename prefix (e.g. "volleyball4.webp").
const PREFIX_ALT: Record<string, string> = {
  coding: "Ali coding",
  film: "On a film shoot",
  leadership: "Ali in a leadership role",
  volleyball: "Ali playing volleyball",
};

function altFor(file: string): string {
  if (LEAD_ALT[file]) return LEAD_ALT[file];
  const prefix = file.replace(/\d.*$/, "").toLowerCase();
  return PREFIX_ALT[prefix] ?? "";
}

// Lead stills whose frame needs adjusting: this one has a cut-off sign along
// its top edge, so zoom in slightly from the bottom to crop it out.
const LEAD_FRAMING: Record<string, React.CSSProperties> = {
  "IMG_8273 2.png": { scale: "1.14", transformOrigin: "center bottom" },
};

function getStills(dir: string, urlPrefix: string): Still[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => ({
      src: `${urlPrefix}/${encodeURIComponent(file)}`,
      alt: altFor(file),
      framing: LEAD_FRAMING[file],
    }));
}

export default function Gallery() {
  const lead = getStills(path.join(GALLERY_DIR, "first row"), "/gallery/first row");
  const rest = getStills(GALLERY_DIR, "/gallery");
  return <GalleryClient lead={lead} rest={rest} />;
}
