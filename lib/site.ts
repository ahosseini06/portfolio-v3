import experiencesData from "@/public/data/experiences.json";

/** Site-wide content. Edit here; the pages read from this file. */

export const person = {
  name: "Ali Hosseini",
};

export type ContactLink = { label: string; href?: string };

// Links shown under your name. Entries without an `href` are hidden.
// TODO(ali): GitHub and Contact are placeholders ("#"); swap in the real URLs,
// e.g. "https://github.com/<you>" and "mailto:you@nootles.com".
export const contactLinks: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/01-ali-hosseini/" },
  { label: "GitHub", href: "#" },
  { label: "Contact", href: "#" },
  { label: "CV" },
];

export type Role = {
  company: string;
  /** Investors or accelerator, e.g. "Y Combinator". Leave "" to show nothing. */
  backedBy?: string;
  role: string;
  date: string;
};

// Edit the roles in public/data/experiences.json (most recent first).
export const roles: Role[] = experiencesData;
