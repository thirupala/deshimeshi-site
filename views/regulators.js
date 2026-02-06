export function regulators() {
  return `
    <h2>For Regulators & Auditors</h2>

    <div class="highlight">
      DecisionMesh provides complete visibility into AI systems with deterministic replay and cryptographic verification.
    </div>

    <div class="panel-no-hover">
      <h3>Regulatory Oversight Capabilities</h3>
      <p>Every AI decision flows through a documented, auditable lifecycle:</p>
      
      <div class="timeline">
        <div class="timeline-item">
          <h4>1. Intent Submitted</h4>
          <p>Application or user requests an AI action</p>
          <ul>
            <li>Full request context captured</li>
            <li>Timestamp and requestor identity</li>
            <li>Purpose and justification recorded</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h4>2. Policy Evaluation</h4>
          <p>Governance rules are applied automatically</p>
          <ul>
            <li>All applicable policies identified</li>
            <li>Each policy evaluated with result</li>
            <li>Decisions explained with reasoning</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h4>3. Decision Recorded</h4>
          <p>Immutable record created before execution</p>
          <ul>
            <li>Cryptographically signed</li>
            <li>Tamper-evident storage</li>
            <li>Cannot be deleted or modified</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h4>4. Execution or Block</h4>
          <p>AI action proceeds only if approved</p>
          <ul>
            <li>Execution trace logged</li>
            <li>Results captured</li>
            <li>Costs and metrics recorded</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>🔍 Complete Traceability</h3>
        <p>Every AI action is traceable to its origin:</p>
        <ul class="feature-list">
          <li>Who requested the AI action</li>
          <li>When it was requested</li>
          <li>What data was used</li>
          <li>Which policies were evaluated</li>
          <li>Why it was approved or denied</li>
          <li>What the AI actually did</li>
          <li>What the outcome was</li>
        </ul>
      </div>

      <div class="panel">
        <h3>🔄 Deterministic Replay</h3>
        <p>Recreate any decision exactly as it happened:</p>
        <ul class="feature-list">
          <li>Same inputs → same outputs</li>
          <li>Verify decision was correct at the time</li>
          <li>Investigate complaints and incidents</li>
          <li>Test hypothetical scenarios</li>
          <li>Demonstrate compliance</li>
        </ul>
      </div>
    </div>

    <div class="callout">
      <h3>Audit Package Export</h3>
      <p>Generate complete evidence packages for regulatory review:</p>
      
      <div class="code-block">
        <div class="code-header">
          <span>Example Audit Export</span>
        </div>
        <pre>// Export all decisions for time period
audit_package = dm.export_audit_package({
  start_date: "2025-01-01",
  end_date: "2025-12-31",
  tenant: "org_acme",
  include: [
    "decisions",
    "policies",
    "executions",
    "costs",
    "approvals"
  ]
})

// Package includes:
{
  "decisions": [...],           // All decision records
  "policies": [...],            // Policy versions in effect
  "metadata": {...},           // System configuration
  "verification": {
    "hash": "sha256:...",
    "signature": "RSA:...",
    "timestamp": "..."
  }
}</pre>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Compliance Evidence</h3>
      <div class="stats">
        <div class="stat-card">
          <div class="stat-value">100%</div>
          <div class="stat-label">Coverage</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">&lt;1min</div>
          <div class="stat-label">Export Time</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">∞</div>
          <div class="stat-label">Retention</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">Verified</div>
          <div class="stat-label">Cryptographically</div>
        </div>
      </div>
    </div>

    <div class="comparison">
      <div class="comparison-item">
        <div class="comparison-header">❌ Traditional AI Systems</div>
        <ul>
          <li>No decision audit trail</li>
          <li>Cannot explain AI actions</li>
          <li>Logs may be incomplete or deleted</li>
          <li>No deterministic replay</li>
          <li>Evidence gathering takes weeks</li>
          <li>Cannot prove compliance</li>
        </ul>
      </div>

      <div class="comparison-item">
        <div class="comparison-header">✅ DecisionMesh</div>
        <ul>
          <li>Complete decision history</li>
          <li>Every action explained</li>
          <li>Immutable, tamper-proof records</li>
          <li>Exact replay of any decision</li>
          <li>Instant evidence export</li>
          <li>Verifiable compliance proof</li>
        </ul>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Regulatory Framework Support</h3>
      <div class="grid-3">
        <div class="panel">
          <h4>EU AI Act</h4>
          <ul class="feature-list">
            <li>High-risk system documentation</li>
            <li>Human oversight records</li>
            <li>Accuracy metrics</li>
            <li>Bias monitoring</li>
          </ul>
        </div>

        <div class="panel">
          <h4>GDPR</h4>
          <ul class="feature-list">
            <li>Right to explanation</li>
            <li>Data processing records</li>
            <li>Purpose limitation</li>
            <li>Consent verification</li>
          </ul>
        </div>

        <div class="panel">
          <h4>SOC 2</h4>
          <ul class="feature-list">
            <li>Access controls</li>
            <li>Change management</li>
            <li>Monitoring evidence</li>
            <li>Incident response</li>
          </ul>
        </div>

        <div class="panel">
          <h4>HIPAA</h4>
          <ul class="feature-list">
            <li>PHI handling logs</li>
            <li>Access authorization</li>
            <li>Breach detection</li>
            <li>Audit trails</li>
          </ul>
        </div>

        <div class="panel">
          <h4>Financial Services</h4>
          <ul class="feature-list">
            <li>Model risk management</li>
            <li>Fair lending compliance</li>
            <li>Discrimination prevention</li>
            <li>Explainability</li>
          </ul>
        </div>

        <div class="panel">
          <h4>Custom Regulations</h4>
          <ul class="feature-list">
            <li>Flexible policy framework</li>
            <li>Industry-specific rules</li>
            <li>Regional requirements</li>
            <li>Internal governance</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>Investigation Example</h3>
      <p><strong>Scenario:</strong> Regulator asks "Why did your AI deny this applicant?"</p>
      
      <div class="flow">
        <div class="flow-step">Retrieve Decision</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Review Policies</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Replay Decision</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Generate Report</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Provide Evidence</div>
      </div>
      
      <p style="margin-top: 2rem;"><strong>Time to respond:</strong> <span style="color: var(--success); font-size: 1.5rem; font-weight: bold;">&lt;5 minutes</span></p>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>See Regulatory Compliance in Action</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">Watch how DecisionMesh creates audit trails and enables regulatory oversight</p>
      <a href="#/demo" class="btn btn-primary">Interactive Demo</a>
    </div>
  `;
}
