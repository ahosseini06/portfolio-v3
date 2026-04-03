import fs from "fs";
import path from "path";
import GalleryClient from "./galleryClient";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const SUPPORTED_EXTENSIONS = new Set([
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".avif",
]);

function isImage(file: string) {
  return SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase());
}

function getImagesFromDir(dir: string, urlPrefix: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(isImage)
    .sort()
    .map((file) => `${urlPrefix}/${encodeURIComponent(file)}`);
}

const Gallery = () => {
  const firstRow = getImagesFromDir(
    path.join(GALLERY_DIR, "first row"),
    "/gallery/first row"
  );
  const rest = getImagesFromDir(GALLERY_DIR, "/gallery");

  return <GalleryClient firstRow={firstRow} rest={rest} />;
};

export default Gallery;
