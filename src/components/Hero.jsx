function Hero() {
  return (
    <section className="portfolio-hero" id="home">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="portfolio-eyebrow"><span /> COMPUTER SCIENCE STUDENT</p>
          <h1>Building thoughtful<br />things for the <span>web.</span></h1>
          <p className="hero-intro">Hi, I&apos;m <strong>Sri Hariharan D</strong> — a CSE student who enjoys turning ideas into useful, well-crafted digital experiences.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a><a className="button-text" href="#about">More about me <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-art" aria-label="Sri Hariharan initials in a decorative profile card" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✦</span>
          <div className="art-monogram">SH<span>.</span></div>
          <div className="art-caption"><span>BASED IN</span><strong>Coimbatore, India</strong></div>
          <div className="art-index">01 / 05</div>
        </div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>DESIGN · CODE · LEARN</span></div>
    </section>
  )
}

export default Hero
