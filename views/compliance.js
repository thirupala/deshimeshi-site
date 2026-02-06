export function compliance() {
  return `
    <h2>Compliance & Audit</h2>

    <div class="highlight">
      DecisionMesh helps organizations prepare for regulatory compliance through complete traceability and deterministic replay. 
      <strong>Note:</strong> Compliance certification requires consultation with legal counsel and may vary by jurisdiction.
    </div>

    <div class="panel-no-hover">
      <h3>Regulatory Frameworks We Support</h3>
      <p style="padding: 1rem; background: rgba(245, 158, 11, 0.1); border-radius: 8px; border-left: 4px solid var(--warning); margin-bottom: 2rem;">
        <strong>Important:</strong> DecisionMesh provides tools to help meet regulatory requirements, but does not guarantee compliance. 
        Organizations must work with legal counsel to ensure their specific implementation meets applicable regulations.
      </p>
      
      <div class="grid">
        <div class="panel">
          <h4>🇪🇺 EU AI Act Readiness</h4>
          <ul class="feature-list">
            <li>Complete traceability of AI decisions</li>
            <li>Human oversight capabilities</li>
            <li>Documentation generation</li>
            <li>Risk assessment support</li>
          </ul>
          <p style="font-size: 0.9rem; color: var(--muted); margin-top: 1rem;">
            * Consult legal counsel for specific compliance requirements
          </p>
        </div>

        <div class="panel">
          <h4>🔒 SOC 2 Evidence</h4>
          <ul class="feature-list">
            <li>Access control documentation</li>
            <li>Change management records</li>
            <li>Monitoring evidence</li>
            <li>Security policy enforcement</li>
          </ul>
          <p style="font-size: 0.9rem; color: var(--muted); margin-top: 1rem;">
            * SOC 2 audit requires certified auditor review
          </p>
        </div>

        <div class="panel">
          <h4>🏥 HIPAA Support</h4>
          <ul class="feature-list">
            <li>PHI access logging</li>
            <li>Authorization tracking</li>
            <li>De-identification support</li>
            <li>Breach detection tools</li>
          </ul>
          <p style="font-size: 0.9rem; color: var(--muted); margin-top: 1rem;">
            * HIPAA compliance requires BAA and additional controls
          </p>
        </div>

        <div class="panel">
          <h4>🌐 GDPR Tools</h4>
          <ul class="feature-list">
            <li>Processing records (Article 30)</li>
            <li>Explanation capabilities (Article 22)</li>
            <li>Privacy by design support</li>
            <li>Data subject rights tools</li>
          </ul>
          <p style="font-size: 0.9rem; color: var(--muted); margin-top: 1rem;">
            * GDPR compliance requires DPA consultation
          </p>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Immutable Audit Trail</h3>
      <p>Every decision creates a permanent, tamper-evident record:</p>
      
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
    "costUsd": 0.45
  },
  "hash": "sha256:a7f3c8d2e9b1...",
  "signature": "RSA-SHA256:9f2e1d3c..."
}</pre>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>Compliance Reports</h3>
        <p>Auto-generated reports for internal review:</p>
        <ul class="feature-list">
          <li>Decision volume and approval rates</li>
          <li>Policy enforcement statistics</li>
          <li>Cost and usage by department</li>
          <li>Failed decisions and reasons</li>
          <li>Anomaly detection</li>
        </ul>
      </div>

      <div class="panel">
        <h3>Evidence Export</h3>
        <p>Export data for audit review:</p>
        <ul class="feature-list">
          <li>Decision records for time period</li>
          <li>Policy versions in effect</li>
          <li>Access control logs</li>
          <li>System configuration</li>
          <li>Change history</li>
        </ul>
      </div>
    </div>

    <div class="callout">
      <h3>Deterministic Replay for Investigations</h3>
      <p>When something goes wrong, replay the exact decision to understand what happened:</p>
      
      <div class="timeline">
        <div class="timeline-item">
          <h4>1. Incident Identified</h4>
          <p>Customer complaint or internal issue</p>
        </div>
        <div class="timeline-item">
          <h4>2. Retrieve Decision</h4>
          <p>Pull complete decision record by ID or reference</p>
        </div>
        <div class="timeline-item">
          <h4>3. Replay Decision</h4>
          <p>Re-execute with exact same inputs to recreate outcome</p>
        </div>
        <div class="timeline-item">
          <h4>4. Analyze</h4>
          <p>Step through policy evaluation and execution trace</p>
        </div>
        <div class="timeline-item">
          <h4>5. Document</h4>
          <p>Export investigation report</p>
        </div>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span>Replay Example</span>
        </div>
        <pre>// Replay decision from the past
replay = dm.replay_decision("dec_8x7h9k2m")

// Verify same result
assert replay.output == original.output
assert replay.policies_evaluated == original.policies_evaluated

// Generate report
report = dm.generate_investigation_report("dec_8x7h9k2m")</pre>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Compliance Automation</h3>
      <p>DecisionMesh can help automate compliance checks:</p>

      <div class="grid-3">
        <div class="panel">
          <h4>PII Detection</h4>
          <p>Automatically identify sensitive data</p>
          <ul>
            <li>SSN, credit cards, phone numbers</li>
            <li>Medical record numbers</li>
            <li>Email addresses, names</li>
            <li>Configurable redaction</li>
          </ul>
        </div>

        <div class="panel">
          <h4>Fairness Checks</h4>
          <p>Support for bias detection</p>
          <ul>
            <li>Protected attribute detection</li>
            <li>Disparate impact monitoring</li>
            <li>Bias mitigation support</li>
            <li>Fairness metrics tracking</li>
          </ul>
        </div>

        <div class="panel">
          <h4>Consent Management</h4>
          <p>Respect user preferences</p>
          <ul>
            <li>Purpose limitation</li>
            <li>Consent verification</li>
            <li>Data subject rights</li>
            <li>Data minimization</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>Audit Readiness</h3>
      <p>When an auditor or regulator requests evidence:</p>
      <div class="grid-2">
        <div>
          <h4>Traditional Approach</h4>
          <ul>
            <li>Days or weeks to gather logs</li>
            <li>Incomplete or missing data</li>
            <li>Manual evidence compilation</li>
            <li>Difficulty proving compliance</li>
          </ul>
        </div>
        <div>
          <h4>With DecisionMesh</h4>
          <ul>
            <li>Export evidence in minutes</li>
            <li>Complete decision coverage</li>
            <li>Automated report generation</li>
            <li>Verifiable audit trail</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: rgba(245, 158, 11, 0.05); border: 2px solid var(--warning); padding: 2rem; margin-top: 2rem;">
      <h3 style="color: var(--warning);">Legal Disclaimer</h3>
      <p>
        DecisionMesh provides technology tools to support compliance efforts. It does not provide legal advice or guarantee 
        compliance with any specific regulation. Organizations must:
      </p>
      <ul>
        <li>Consult with qualified legal counsel regarding compliance requirements</li>
        <li>Work with certified auditors for formal compliance assessments</li>
        <li>Implement appropriate policies and procedures beyond technical controls</li>
        <li>Verify that their specific implementation meets applicable regulations</li>
      </ul>
      <p style="margin-top: 1rem;">
        Compliance requirements vary by jurisdiction, industry, and use case. Contact us to discuss how DecisionMesh 
        can support your specific compliance needs.
      </p>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>Learn More About Compliance</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">See how DecisionMesh creates audit trails in real-time</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#/demo" class="btn btn-primary">Try Demo</a>
        <a href="mailto:compliance@decisionmesh.com" class="btn btn-secondary">Contact Compliance Team</a>
      </div>
    </div>
  `;
}
