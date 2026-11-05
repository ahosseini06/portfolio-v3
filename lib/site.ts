import blurbText from "@/content/blurb.txt";
import experiencesData from "@/public/data/experiences.json";

/** Site-wide content. Edit here; the pages read from this file. */

export const person = {
  name: "Ali Hosseini",
};

/**
 * The blurb under your name. Edit content/blurb.txt; leave a blank line
 * between paragraphs.
 */
export const blurb: string[] = blurbText
  .split(/\n\s*\n/)
  .map((p) => p.trim())
  .filter(Boolean);

export type ContactLink = { label: string; href?: string };

// Links shown under your name. Entries without an `href` are hidden.
export const contactLinks: ContactLink[] = [
  { label: "My Company", href: "https://nootles.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/01-ali-hosseini/" },
  { label: "GitHub", href: "https://github.com/ahosseini06" },
  { label: "Contact", href: "mailto:ali@nootles.com" },
  { label: "CV" },
];

export type Role = {
  company: string;
  /** Company website. Leave "" for no link. */
  link?: string;
  /** Square icon in public/, e.g. "/logos/cedar.svg". Leave "" for none. */
  logo?: string;
  /** Investors or accelerator, e.g. "Y Combinator". Leave "" to show nothing. */
  backedBy?: string;
  role: string;
  date: string;
};

// Edit the roles in public/data/experiences.json (most recent first).
export const roles: Role[] = experiencesData;
