function Services() {
  return (
    <section className="services" id="services">

      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">

          <h2>
            What We Do
          </h2>

          <p>
            We conduct on-the-ground feasibility research for
            companies and investors evaluating opportunities
            in Indonesia.
          </p>

        </div>

        {/* GRID */}
        <div className="services-grid">

          {/* CARD 1 */}
          <div className="service-card">

            <div className="why-line"></div>

            <h3>
              Supplier & Market
              <br />
              Validation
            </h3>

            <p>
              We verify whether suppliers, operators,
              and potential partners are genuinely available,
              responsive, and commercially viable.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="service-card">

            <div className="why-line"></div>

            <h3>
              Real Pricing
              <br />
              & Operations
            </h3>

            <p>
              We uncover actual negotiation conditions,
              operational constraints, logistical friction,
              and execution realities beyond public market data.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="service-card">

            <div className="why-line"></div>

            <h3>
              Feasibility
              <br />
              Assessment
            </h3>

            <p>
              We identify what is realistically required
              to operate in Indonesia — and whether execution
              is commercially and operationally practical.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services