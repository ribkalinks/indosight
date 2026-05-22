function Deliverables() {
  return (
    <section className="deliverables" id="deliverables">
      <div className="deliverables-container">

        {/* HEADER */}
        <div className="deliverables-header">

          {/* REMOVE SECTION LABEL */}

          <h2>What You Receive</h2>

          <p>
            Every engagement is tailored to your requirements,
            but our research typically includes the following outputs.
          </p>

        </div>

        {/* GRID */}
        <div className="deliverables-grid">

          {/* ITEM 1 */}
          <div className="deliverable-item">

            <h3>
              Feasibility <span className="red">Report</span>
            </h3>

            <p>
              Structured findings with clear conclusions,
              operational considerations, and practical recommendations.
            </p>

          </div>

          {/* ITEM 2 */}
          <div className="deliverable-item">

            <h3>
              Verified <span className="red">Contacts</span>
            </h3>

            <p>
              Supplier, operator, and partner contacts shared directly
              unless confidentiality restrictions are requested.
            </p>

          </div>

          {/* ITEM 3 */}
          <div className="deliverable-item">

            <h3>
              Pricing <span className="red">Insights</span>
            </h3>

            <p>
              Real commercial pricing data, negotiation insights,
              and market positioning observations.
            </p>

          </div>

          {/* ITEM 4 */}
          <div className="deliverable-item">

            <h3>
              Call <span className="red">Summaries</span>
            </h3>

            <p>
              Key findings and conversation summaries from outreach,
              interviews, and stakeholder discussions.
            </p>

          </div>

          {/* ITEM 5 */}
          <div className="deliverable-item">

            <h3>
              Execution <span className="red">Considerations</span>
            </h3>

            <p>
              Operational realities, constraints, and execution factors
              specific to your business objectives in Indonesia.
            </p>

          </div>

        </div>

        {/* HIGHLIGHT */}
        <div className="deliverables-highlight">

          <p>
            We don’t gate information.
            What we find, you receive.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Deliverables