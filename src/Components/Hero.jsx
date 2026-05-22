function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          {/* TITLE */}
          <h1 className="hero-title">
            Market Intelligence and
            <br />
            Ground-Truth Feasibility
            <br />
            in Indonesia
          </h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle">
            We don’t tell you how big the market is.
            We tell you whether you can actually operate in it.
          </p>

          {/* DESCRIPTION */}
          <p className="hero-desc">
            Indosight provides on-the-ground feasibility validation,
            local verification, and operational insight for companies
            entering or expanding in Indonesia.
          </p>

          {/* CONTACT TEXT */}
          <div className="hero-contact">
            <span>Contact us to request a feasibility scope.</span>

            <a
              href="mailto:boss@indosight.co?subject=Feasibility%20Inquiry"
              className="hero-contact-link"
            >
              Contact Us
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero