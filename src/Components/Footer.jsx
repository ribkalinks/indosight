function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <h3 className="footer-logo">
              <span className="red">indo</span>
              sight
            </h3>

            <p>
              Ground-truth feasibility insights
              for operating in Indonesia.
            </p>

          </div>

          {/* CONTACT */}
          <div className="footer-links">

            <a href="#contact">
              Contact
            </a>

            <a href="mailto:boss@indosight.co">
              boss@indosight.co
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 Indosight. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer