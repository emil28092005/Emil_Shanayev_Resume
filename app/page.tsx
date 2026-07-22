import { resume } from '@/data/resume'

const ArrowIcon = () => (
  <svg className="link-arrow" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 13 13 3M6 3h7v7" />
  </svg>
)

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="nav shell">
        <a className="mark" href="#top" aria-label="Home">ES<span>/26</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-kicker"><span className="pulse" /> {resume.availability}</div>
        <div className="hero-orbit" aria-hidden="true"><span>AI</span><i /></div>
        <p className="eyebrow">{resume.eyebrow}</p>
        <h1>{resume.name}</h1>
        <h2>{resume.role}</h2>
        <p className="hero-copy">{resume.bio}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Selected work</a>
          <a className="button" href={resume.contacts[0].href} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </div>
        <div className="hero-facts">
          <span><b>05</b> featured systems</span>
          <span><b>∞</b> curiosity for hard problems</span>
        </div>
        <div className="hero-index" aria-hidden="true">01—05</div>
      </section>

      <section className="capabilities shell" id="profile">
        <div className="section-heading">
          <p>Profile / capabilities</p>
          <span>Three intersecting domains</span>
        </div>
        <div className="cap-grid">
          {resume.capabilities.map((item) => (
            <article className="cap-card" key={item.index}>
              <span className="cap-number">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tag-list">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p>Selected work</p>
          <span>Built systems, not placeholder concepts</span>
        </div>
        <div className="project-list">
          {resume.projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <p>{project.kind}</p>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="tag-list">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">Repository <ArrowIcon /></a>
                {'secondaryHref' in project && project.secondaryHref && (
                  <a href={project.secondaryHref} target="_blank" rel="noreferrer">memwalk <ArrowIcon /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tools shell">
        <div className="section-heading">
          <p>Tools & experiments</p>
          <span>Smaller utilities from active exploration</span>
        </div>
        <div className="tool-grid">
          {resume.tools.map((tool) => (
            <a href={tool.href} target="_blank" rel="noreferrer" key={tool.name}>
              <div><strong>{tool.name}</strong><p>{tool.note}</p></div><ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="about shell">
        <div className="section-heading">
          <p>Education</p><span>Learning by building</span>
        </div>
        <div className="education-list">
          {resume.education.map((education) => (
            <div className="education" key={education.institution}>
              <span>{education.period}</span>
              <div><h3>{education.institution}</h3><p>{education.program}</p></div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer shell" id="contact">
        <p className="eyebrow">Have a difficult technical problem?</p>
        <h2>Let’s build something<br /><em>that actually works.</em></h2>
        <div className="contact-grid">
          {resume.contacts.map((contact) => (
            <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={contact.label}>
              <span>{contact.label}</span><strong>{contact.value}</strong><ArrowIcon />
            </a>
          ))}
        </div>
        <div className="footer-bottom"><span>© 2026 Emil Shanayev</span><span>Designed as a static Next.js portfolio</span></div>
      </footer>
    </main>
  )
}
