import Image from "next/image";
import Gallery from "./components/gallery/gallery";
import { person, contactLinks, roles } from "@/lib/site";
import { projects, projectHref } from "@/lib/projects";

const featured = projects.filter((p) => p.featured);
const liveLinks = contactLinks.filter((l) => l.href);

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
                  <td>{r.company}</td>
                  <td>{r.backedBy}</td>
                  <td>{r.role}</td>
                  <td className="dateCol">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Side Quests</h2>
        <div className="tableWrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">What</th>
                <th scope="col">Where</th>
              </tr>
            </thead>
            <tbody>
              {featured.map((p) => {
                const href = projectHref(p.projectLink);
                return (
                  <tr key={p.title}>
                    <td>
                      {(() => {
                        const icon = p.logo ? (
                          <Image src={p.logo} alt="" width={18} height={18} unoptimized className="logo" />
                        ) : (
                          <span className="logo" aria-hidden="true" />
                        );
                        return href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="project">
                            {icon}
                            <span className="projectName">{p.title}</span>
                          </a>
                        ) : (
                          <span className="project">
                            {icon}
                            <span>{p.title}</span>
                          </span>
                        );
                      })()}
                    </td>
                    <td>{p.tagline}</td>
                    <td>{p.where}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Photos</h2>
        <Gallery />
      </section>
    </main>
  );
}
