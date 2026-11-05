import Image from "next/image";
import { person, blurb, contactLinks, roles } from "@/lib/site";
import { projects, projectHref } from "@/lib/projects";

const featured = projects.filter((p) => p.featured);
const liveLinks = contactLinks.filter((l) => l.href);

/** A name with its icon, linking out when there's a link. */
function Named({
  name,
  link,
  logo,
}: {
  name: string;
  link?: string;
  logo?: string;
}) {
  const href = projectHref(link);
  const icon = logo ? (
    <Image
      src={logo}
      alt=""
      width={18}
      height={18}
      unoptimized
      className="logo"
    />
  ) : (
    <span className="logo" aria-hidden="true" />
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project"
    >
      {icon}
      <span className="projectName">{name}</span>
    </a>
  ) : (
    <span className="project">
      {icon}
      <span>{name}</span>
    </span>
  );
}

/**
 * A status like "Open Sourced - 1000 Downloads". Inline with its dash on
 * wide screens; on phones each part gets its own line and the dash drops.
 */
function Status({ text }: { text?: string }) {
  const parts = (text ?? "").split(/\s+[-–—]\s+/).filter(Boolean);
  return parts.map((part, i) => (
    <span key={i} className="statusPart">
      {i > 0 && <span className="statusDash"> - </span>}
      {part}
    </span>
  ));
}

export default function Home() {
  return (
    <main>
      <header>
        <h1>{person.name}</h1>
        <nav className="links" aria-label="Contact">
          {liveLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href?.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.label}
            </a>
          ))}
        </nav>
        {blurb.length > 0 && (
          <div className="blurb">
            {blurb.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        )}
      </header>

      <section>
        <h2>Work</h2>
        <div className="tableWrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col">Backed by</th>
                <th scope="col">Role</th>
                <th scope="col" className="dateCol">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r) => (
                <tr key={r.company}>
                  <td className="cName">
                    <Named name={r.company} link={r.link} logo={r.logo} />
                  </td>
                  <td className="cAside">
                    {r.backedBy && (
                      <span className="mobileLabel">Backed by: </span>
                    )}
                    {r.backedBy}
                  </td>
                  <td className="cSub">{r.role}</td>
                  <td className="cMeta dateCol">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Side Quests</h2>
        <div className="tableWrap">
          <table className="table quests">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">What</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {featured.map((p) => (
                <tr key={p.title}>
                  <td className="cName">
                    <Named name={p.title} link={p.projectLink} logo={p.logo} />
                  </td>
                  <td className="cSub">{p.tagline}</td>
                  <td className="cMeta">
                    <Status text={p.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
