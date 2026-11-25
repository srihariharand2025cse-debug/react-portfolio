const skills = ['C', 'Python', 'Java', 'React']

function About() {
  return (
    <section className="portfolio-section about-section" id="about">
      <div className="section-side"><span>01</span><span className="side-rule" /><span>ABOUT</span></div>
      <div className="section-content about-content">
        <p className="portfolio-eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curiosity first.<br /><span>Craft always.</span></h2>
        <div className="about-lower">
          <p>I&apos;m Sri Hariharan D, a Computer Science and Engineering student at Sri Eshwar College of Engineering. I enjoy learning how technology works and using it to build clear, practical experiences.</p>
          <div className="skills-block"><span className="small-label">TOOLS IN MY TOOLKIT</span><div className="skill-list">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div><span className="interest-label">Currently interested in <strong>Full Stack Development</strong></span></div>
        </div>
      </div>
    </section>
  )
}

export default About
