function Reality() {
  return (
    <section className="reality" id="services">
      <div className="reality-container">

        <div className="reality-header">
          <h2>
            The Gap Between Market Research and <span className="red">Reality</span>
          </h2>

          <p>
            Most reports tell you what looks good on paper.
            We show you what actually works on the ground.
          </p>
        </div>

        <div className="reality-grid">

          {/* LEFT CARD */}
          <div className="reality-card light">
            <h3>What Most Research Tells You</h3>

            <ul>
              <li>Market size projections</li>
              <li>Growth forecasts</li>
              <li>Consumer demand trends</li>
              <li>Positive industry outlook</li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="reality-card dark">
            <h3>What Happens in Reality</h3>

            <ul>
              <li>Suppliers who stop responding</li>
              <li>Real negotiation complexity</li>
              <li>Operational execution barriers</li>
              <li>On-the-ground unpredictability</li>
            </ul>
          </div>

        </div>

        <div className="reality-highlight">
          <p>
            In Indonesia, the gap between theory and reality is where most
            projects fail.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Reality