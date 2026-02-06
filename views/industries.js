export function industries() {
  return `
    <h2>Industries</h2>

    <div class="highlight">
      DecisionMesh adapts to industry-specific regulations, compliance requirements, and operational needs across sectors.
    </div>

    <div class="grid">
      <div class="panel">
        <h3>🏦 Financial Services</h3>
        <p>Banks, insurers, and fintech companies need model risk management, fair lending compliance, and explainability.</p>
        
        <h4>Use Cases</h4>
        <ul class="feature-list">
          <li>Credit scoring with fairness checks</li>
          <li>Fraud detection with audit trails</li>
          <li>Investment recommendations with explainability</li>
          <li>Loan underwriting with bias detection</li>
        </ul>

        <h4>Compliance</h4>
        <div class="tags">
          <span class="tag">Fair Lending</span>
          <span class="tag">Model Risk Management</span>
          <span class="tag">ECOA</span>
          <span class="tag">FCRA</span>
        </div>
      </div>

      <div class="panel">
        <h3>🏥 Healthcare</h3>
        <p>Hospitals and health systems require clinical decision traceability, patient safety, and HIPAA compliance.</p>
        
        <h4>Use Cases</h4>
        <ul class="feature-list">
          <li>Clinical decision support with audit trails</li>
          <li>Diagnostic assistance with explainability</li>
          <li>Treatment recommendations with oversight</li>
          <li>Patient triage with safety checks</li>
        </ul>

        <h4>Compliance</h4>
        <div class="tags">
          <span class="tag">HIPAA</span>
          <span class="tag">FDA</span>
          <span class="tag">Patient Safety</span>
          <span class="tag">PHI Protection</span>
        </div>
      </div>

      <div class="panel">
        <h3>🛡️ Insurance</h3>
        <p>Insurers need fairness assurance, rate justification, and transparent underwriting decisions.</p>
        
        <h4>Use Cases</h4>
        <ul class="feature-list">
          <li>Claims processing with explanation</li>
          <li>Risk assessment with bias mitigation</li>
          <li>Fraud detection with transparency</li>
          <li>Pricing models with auditability</li>
        </ul>

        <h4>Compliance</h4>
        <div class="tags">
          <span class="tag">Fair Pricing</span>
          <span class="tag">Anti-Discrimination</span>
          <span class="tag">State Regulations</span>
        </div>
      </div>

      <div class="panel">
        <h3>🏢 Enterprise SaaS</h3>
        <p>Software companies embedding AI features need governance at scale without slowing development.</p>
        
        <h4>Use Cases</h4>
        <ul class="feature-list">
          <li>Content generation with safety guardrails</li>
          <li>Customer support automation with oversight</li>
          <li>Data analysis with cost controls</li>
          <li>Personalization with privacy protection</li>
        </ul>

        <h4>Benefits</h4>
        <div class="tags">
          <span class="tag">Fast Deployment</span>
          <span class="tag">Centralized Governance</span>
          <span class="tag">Multi-Tenant</span>
        </div>
      </div>

      <div class="panel">
        <h3>⚖️ Legal Services</h3>
        <p>Law firms need document review, legal research, and contract analysis with attorney oversight.</p>
        
        <h4>Use Cases</h4>
        <ul class="feature-list">
          <li>Document review with verification</li>
          <li>Legal research with source tracking</li>
          <li>Contract analysis with human review</li>
          <li>Compliance checking with explainability</li>
        </ul>

        <h4>Requirements</h4>
        <div class="tags">
          <span class="tag">Attorney-Client Privilege</span>
          <span class="tag">Work Product Protection</span>
          <span class="tag">Ethical Rules</span>
        </div>
      </div>

      <div class="panel">
        <h3>🏛️ Government</h3>
        <p>Public sector agencies require transparency, accountability, and public trust in AI systems.</p>
        
        <h4>Use Cases</h4>
        <ul class="feature-list">
          <li>Benefit eligibility with fairness</li>
          <li>Permit processing with audit trails</li>
          <li>Risk assessment with transparency</li>
          <li>Public service automation with oversight</li>
        </ul>

        <h4>Requirements</h4>
        <div class="tags">
          <span class="tag">Public Accountability</span>
          <span class="tag">FOIA Compliance</span>
          <span class="tag">Equity Assurance</span>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: rgba(56, 189, 248, 0.05); border: 1px solid var(--border-light); padding: 2rem; margin-top: 2rem;">
      <p style="margin: 0; text-align: center;">
        <strong>Note:</strong> Specific outcomes and compliance certifications vary by implementation. Contact us to discuss your industry requirements and regulatory needs.
      </p>
    </div>

    <div class="panel-no-hover">
      <h3>Cross-Industry Capabilities</h3>
      <div class="grid-3">
        <div>
          <h4>🔒 Data Protection</h4>
          <ul class="feature-list">
            <li>PII detection and redaction</li>
            <li>Data minimization enforcement</li>
            <li>Consent management</li>
            <li>Breach notification readiness</li>
          </ul>
        </div>

        <div>
          <h4>⚡ Performance</h4>
          <ul class="feature-list">
            <li>Sub-10ms decision latency</li>
            <li>High-throughput processing</li>
            <li>Multi-region deployment</li>
            <li>99.99% uptime target</li>
          </ul>
        </div>

        <div>
          <h4>💰 Cost Control</h4>
          <ul class="feature-list">
            <li>Budget enforcement</li>
            <li>Cost attribution</li>
            <li>Provider optimization</li>
            <li>Usage forecasting</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="callout">
      <h3>Industry-Specific Policy Templates</h3>
      <p>Pre-built governance rules for common industry scenarios:</p>
      
      <div class="code-block">
        <div class="code-header">
          <span>Example: Healthcare PHI Protection</span>
        </div>
        <pre>{
  "id": "hipaa-phi-protection",
  "industry": "healthcare",
  "scope": { "all": true },
  "conditions": {
    "contains_phi": {
      "ssn": true,
      "mrn": true,
      "dob": true
    }
  },
  "actions": {
    "redact_phi": true,
    "require_authorization": "physician",
    "log_access": true,
    "reason": "HIPAA PHI protection"
  }
}</pre>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span>Example: Financial Fair Lending</span>
        </div>
        <pre>{
  "id": "fair-lending-check",
  "industry": "financial",
  "scope": { "type": "credit_decision" },
  "conditions": {
    "protected_attributes_detected": true
  },
  "actions": {
    "block": true,
    "require_approval": "compliance_officer",
    "alert": "protected_attribute_in_decision",
    "reason": "ECOA compliance - protected class detected"
  }
}</pre>
      </div>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>See Your Industry Solution</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">Explore how DecisionMesh adapts to your industry requirements</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#/demo" class="btn btn-primary">Try Demo</a>
        <a href="#/compliance" class="btn btn-secondary">Compliance Details</a>
        <a href="mailto:sales@decisionmesh.com" class="btn btn-secondary">Contact Us</a>
      </div>
    </div>
  `;
}
