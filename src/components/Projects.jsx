const projects = [
  { number: '01', name: 'Student Dashboard', type: 'ACADEMIC UI', description: 'A clear overview of student profile details, class attendance, subject marks, and academic progress.', tone: 'project-blue', mark: '↗' },
  { number: '02', name: 'Food Menu', type: 'RESPONSIVE WEB DESIGN', description: 'A welcoming restaurant menu with food categories, dish cards, prices, and a warm visual identity.', tone: 'project-green', mark: '✳' },
  { number: '03', name: 'Profile Card & Product Showcase', type: 'REACT COMPONENTS', description: 'Two practice projects exploring reusable React components, layout, and product presentation.', tone: 'project-orange', mark: '✦' },
]

function Projects() {
  return (
    <section className="portfolio-section projects-section" id="projects">
      <div className="section-side"><span>03</span><span className="side-rule" /><span>PROJECTS</span></div>
      <div className="section-content">
        <div className="projects-heading"><div><p className="portfolio-eyebrow">SELECTED PRACTICE WORK</p><h2>Ideas made <span>real.</span></h2></div><span className="project-count">A FEW THINGS I&apos;VE BUILT · 03</span></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.tone}`}><span className="project-number">{project.number} / 03</span><span className="project-mark" aria-hidden="true">{project.mark}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
              <p className="small-label">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
