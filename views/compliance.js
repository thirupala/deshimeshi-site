export function compliance() {
  return `
    <h2>Compliance & Audit</h2>

    <div class="highlight">
      DecisionMesh turns AI compliance from a nightmare into a checkbox. Every decision is traceable, explainable, and reproducible.
    </div>

    <div class="panel-no-hover">
      <h3>Regulatory Challenges We Solve</h3>
      <div class="grid">
        <div class="panel">
          <h4>🇪🇺 EU AI Act</h4>
          <ul class="feature-list">
            <li>Complete traceability of high-risk AI systems</li>
            <li>Human oversight and intervention capabilities</li>
            <li>Accuracy and robustness documentation</li>
            <li>Bias detection and mitigation</li>
            <li>Risk management system</li>
          </ul>
        </div>

        <div class="panel">
          <h4>🔒 SOC 2 Type II</h4>
          <ul class="feature-list">
            <li>Access control and authorization</li>
            <li>Change management audit trail</li>
            <li>Continuous monitoring evidence</li>
            <li>Security policy enforcement</li>
            <li>Incident response documentation</li>
          </ul>
        </div>

        <div class="panel">
          <h4>🏥 HIPAA</h4>
          <ul class="feature-list">
            <li>PHI detection and handling</li>
            <li>Access logs and authorization</li>
            <li>De-identification procedures</li>
            <li>Breach notification readiness</li>
            <li>Minimum necessary enforcement</li>
          </ul>
        </div>

        <div class="panel">
          <h4>🌐 GDPR</h4>
          <ul class="feature-list">
            <li>Right to explanation (Article 22)</li>
            <li>Data processing records (Article 30)</li>
            <li>Privacy by design implementation</li>
            <li>Purpose limitation enforcement</li>
            <li>Data subject rights fulfillment</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Immutable Audit Trail</h3>
      <p>Every decision creates a permanent, tamper-proof record:</p>
      
      <div class="code-block">
        <div class="code-header">
          <span>Decision Record Structure</span>
        </div>
        <pre>{
  "decisionId": "dec_8x7h9k2m",
  "timestamp": "2026-02-04T13:45:00Z",
  "tenant": {
    "id": "org_acme",
    "name": "Acme Corp"
  },
  "requestor": {
    "userId": "user_jane",
    "role": "data-scientist",
    "ipAddress": "203.0.113.42"
  },
  "intent": {
    "type": "EXECUTE",
    "subject": "credit.score",
    "payload": { /* application data */ }
  },
  "policiesEvaluated": [
    {
      "policyId": "fairness-check-v2",
      "version": 2,
      "result": "PASS",
      "reason": "No protected characteristics detected",
      "evaluatedAt": "2026-02-04T13:45:00.123Z"
    },
    {
      "policyId": "cost-limit-v1",
      "version": 1,
      "result": "PASS",
      "reason": "Cost $0.45 within limit $1.00",
      "evaluatedAt": "2026-02-04T13:45:00.156Z"
    }
  ],
  "decision": {
    "status": "APPROVED",
    "approver": "system",
    "reason": "All policies passed"
  },
  "execution": {
    "provider": "anthropic",
    "model": "claude-3-opus",
    "latencyMs": 1243,
    "costUsd": 0.45,
    "tokensUsed": 892
  },
  "hash": "sha256:a7f3c8d2e9b1...",
  "signature": "RSA-SHA256:9f2e1d3c..."
}</pre>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>Compliance Reports</h3>
        <p>Auto-generated reports for auditors:</p>
        <ul class="feature-list">
          <li>Decision volume and approval rates</li>
          <li>Policy enforcement statistics</li>
          <li>Cost and usage by department</li>
          <li>Failed decisions and reasons</li>
          <li>High-risk decision flagging</li>
          <li>Bias and fairness metrics</li>
        </ul>
        <a href="#" class="btn-secondary" style="margin-top: 1rem;">Download Sample Report</a>
      </div>

      <div class="panel">
        <h3>Evidence Package</h3>
        <p>Export complete audit package:</p>
        <ul class="feature-list">
          <li>All decision records for time period</li>
          <li>Policy versions in effect</li>
          <li>Access control matrix</li>
          <li>System configuration</li>
          <li>Change logs</li>
          <li>Cryptographic verification</li>
        </ul>
        <a href="#" class="btn-secondary" style="margin-top: 1rem;">Export Evidence</a>
      </div>
    </div>

    <div class="callout">
      <h3>Deterministic Replay for Investigations</h3>
      <p>When something goes wrong, replay the exact decision to understand what happened:</p>
      
      <div class="timeline">
        <div class="timeline-item">
          <h4>1. Incident Identified</h4>
          <p>Customer complains about unfair loan denial</p>
        </div>
        <div class="timeline-item">
          <h4>2. Retrieve Decision</h4>
          <p>Pull complete decision record by ID or customer reference</p>
        </div>
        <div class="timeline-item">
          <h4>3. Replay Decision</h4>
          <p>Re-execute with exact same inputs to recreate outcome</p>
        </div>
        <div class="timeline-item">
          <h4>4. Analyze</h4>
          <p>Step through policy evaluation, see exactly why decision was made</p>
        </div>
        <div class="timeline-item">
          <h4>5. Document</h4>
          <p>Export complete investigation report for legal/compliance</p>
        </div>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span>Replay Example</span>
        </div>
        <pre>// Replay decision from 6 months ago
replay = dm.replay_decision("dec_8x7h9k2m")

// Verify same result
assert replay.output == original.output
assert replay.policies_evaluated == original.policies_evaluated

// Generate investigation report
report = dm.generate_investigation_report("dec_8x7h9k2m")
report.export_pdf("investigation_loan_denial.pdf")</pre>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Compliance Automation</h3>
      <p>DecisionMesh automatically enforces compliance requirements:</p>

      <div class="grid-3">
        <div class="panel">
          <h4>PII Detection</h4>
          <p>Automatically detect and handle sensitive data</p>
          <ul>
            <li>SSN, credit cards, phone numbers</li>
            <li>Medical record numbers</li>
            <li>Email addresses, names</li>
            <li>Redaction or blocking</li>
          </ul>
        </div>

        <div class="panel">
          <h4>Fairness Checks</h4>
          <p>Prevent discriminatory decisions</p>
          <ul>
            <li>Protected attribute detection</li>
            <li>Disparate impact analysis</li>
            <li>Bias mitigation strategies</li>
            <li>Fairness metrics tracking</li>
          </ul>
        </div>

        <div class="panel">
          <h4>Consent Management</h4>
          <p>Respect user data preferences</p>
          <ul>
            <li>Purpose limitation</li>
            <li>Consent verification</li>
            <li>Right to be forgotten</li>
            <li>Data minimization</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>Audit Readiness in Minutes</h3>
      <p>When an auditor or regulator requests evidence:</p>
      <div class="grid-2">
        <div>
          <h4>✅ Before DecisionMesh</h4>
          <ul>
            <li>❌ Weeks to gather logs from multiple systems</li>
            <li>❌ Incomplete or missing data</li>
            <li>❌ Cannot prove compliance</li>
            <li>❌ Manual evidence compilation</li>
            <li>❌ Unverifiable claims</li>
          </ul>
        </div>
        <div>
          <h4>✅ With DecisionMesh</h4>
          <ul>
            <li>✅ Export complete evidence in minutes</li>
            <li>✅ 100% decision coverage</li>
            <li>✅ Cryptographically verified</li>
            <li>✅ Automated report generation</li>
            <li>✅ Deterministic replay capability</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">100%</div>
        <div class="stat-label">Audit Coverage</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">&lt;5min</div>
        <div class="stat-label">Evidence Export</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">∞</div>
        <div class="stat-label">Retention Period</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">Zero</div>
        <div class="stat-label">Data Loss</div>
      </div>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>See Compliance in Action</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">Watch how DecisionMesh creates audit trails in real-time</p>
      <div class="header-actions">
        <a href="#/demo" class="cta-button">Try Demo</a>
        <a href="#" class="btn-secondary">Download Compliance Whitepaper</a>
      </div>
    </div>
  `;
}
