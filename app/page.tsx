import Title from "./components/title/title";
import Section from "./components/section/section";
import Links from "./components/links/links";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-stretch font-sans w-full max-w-2xl mx-auto px-6 py-16 gap-10">
      <Title />
      <div className={styles.cascade}>
        <Section title="Links and Contact">
          <Links />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
        <Section title="Featured Projects">
          <Projects />
        </Section>
        <Section title="About Me">
          <About />
        </Section>
      </div>
    </div>
  );
}
