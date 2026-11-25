function Navbar() {
  return (
    <header className="portfolio-nav">
      <a className="portfolio-logo" href="#home" aria-label="Sri Hariharan home">SH<span>.</span></a>
      <nav aria-label="Portfolio navigation">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </header>
  )
}

export default Navbar
