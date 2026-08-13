function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-circle">P</span>

        <span>Portfolio</span>
      </div>

      <nav>
        <a href="#home">Home</a>

        <a href="#projects">Projects</a>

        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;