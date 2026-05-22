function Reality() {
  return (
    <section className="reality">

      <div className="reality-container">

        {/* HEADER */}
        <div className="reality-header">

          <h2>
            The Gap Between Market Research
            <br />
            and <span className="red">Reality</span>
          </h2>

          <p>
            Most reports tell you what looks good on paper.
            We show you what actually works on the ground in Indonesia.
          </p>

        </div>

        {/* GRID */}
        <div className="reality-grid">

          {/* LEFT */}
          <div className="reality-card">

            <div className="why-line"></div>

            <h3>
              What Most Research
              <br />
              Tells You
            </h3>

            <ul className="reality-list">

              <li>Market size projections</li>

              <li>Growth forecasts</li>

              <li>Consumer demand trends</li>

              <li>Positive industry outlook</li>

            </ul>

          </div>

          {/* RIGHT */}
          <div className="reality-card">

            <div className="why-line"></div>

            <h3>
              What Happens
              <br />
              in Reality
            </h3>

            <ul className="reality-list">

              <li>Suppliers who stop responding</li>

              <li>Real negotiation complexity</li>

              <li>Operational execution barriers</li>

              <li>On-the-ground unpredictability</li>

            </ul>

          </div>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="reality-highlight">

          <p>
            In Indonesia, the gap between theory and execution
            is where most projects fail.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Reality