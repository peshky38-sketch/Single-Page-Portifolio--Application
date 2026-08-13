function Hero({ onAddProject }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          CREATIVE PORTFOLIO
        </p>

        <h1>
          Ideas into
          <span> digital experiences.</span>
        </h1>

        <p>
          Explore a collection of projects showcasing
          creativity, problem solving and software
          development skills.
        </p>

        <button
          className="primary-button"
          onClick={onAddProject}
        >
          + Add Project
        </button>
      </div>

      <div className="hero-shape">
        <span>PORTFOLIO</span>
      </div>
    </section>
  );
}

export default Hero;