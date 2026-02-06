export function overview() {
  return `
    <h2>Overview</h2>
    
    <div class="highlight">
      <strong>Core Principle:</strong> You are not building an AI that answers questions. You are building a control plane that governs when, why, and how AI is allowed to act.
    </div>

    <div class="panel-no-hover">
      <h3>The Problem We Solve</h3>
      <p>Enterprise AI systems today are black boxes. When an AI makes a decision, you can't explain why it happened, you can't prove it was compliant, and you can't replay what actually occurred. This creates massive risk:</p>
      
      <div class="grid-3">
        <div class="panel">
          <h4>⚠️ Regulatory Risk</h4>
          <p>Cannot prove AI compliance with EU AI Act, GDPR, or industry regulations</p>
        </div>
        <div class="panel">
          <h4>⚠️ Legal Exposure</h4>
          <p>No audit trail when AI causes harm or makes discriminatory decisions</p>
        </div>
        <div class="panel">
          <h4>⚠️ Operational Chaos</h4>
          <p>Each team builds their own AI governance, creating inconsistent behavior</p>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Our Solution: DecisionMesh</h3>
      <p>DecisionMesh is an AI Decision Control Plane that sits between your applications and AI execution. Every AI request becomes an explicit, governed decision.</p>
      
      <div class="flow">
        <div class="flow-step">Intent</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Validate</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Policy</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Decision</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Execute</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Audit</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>What Makes DecisionMesh Different</h3>
        <ul class="feature-list">
          <li><strong>Explicit Decisions:</strong> Every AI request becomes a recorded decision with full context</li>
          <li><strong>Policy Enforcement:</strong> Centralized rules for cost, safety, compliance, and fairness</li>
          <li><strong>Immutable Audit Trail:</strong> Complete record of what happened, why, and who authorized it</li>
          <li><strong>Deterministic Replay:</strong> Recreate any decision exactly as it happened for investigations</li>
          <li><strong>Separation of Concerns:</strong> Governance logic isolated from execution logic</li>
        </ul>
      </div>

      <div class="panel">
        <h3>Key Benefits</h3>
        <ul class="feature-list">
          <li><strong>Regulatory Compliance:</strong> Meet EU AI Act, SOC2, ISO requirements by design</li>
          <li><strong>Risk Mitigation:</strong> Prevent unauthorized AI usage and enforce guardrails</li>
          <li><strong>Cost Control:</strong> Track and limit AI spending across your organization</li>
          <li><strong>Explainability:</strong> Every decision has a complete explanation and justification</li>
          <li><strong>Accountability:</strong> Clear ownership and responsibility for AI actions</li>
        </ul>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>The DecisionMesh Guarantee</h3>
      <p><strong>Every AI action in your organization is traceable, explainable, and reproducible.</strong></p>
      <p>If a regulator, auditor, or executive asks "Why did our AI do that?", you'll have a complete, verifiable answer.</p>
    </div>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">100%</div>
        <div class="stat-label">Audit Coverage</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">&lt;10ms</div>
        <div class="stat-label">Decision Latency</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">∞</div>
        <div class="stat-label">Replay Capability</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">Zero</div>
        <div class="stat-label">Black Boxes</div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Who Uses DecisionMesh</h3>
      <div class="grid-3">
        <div>
          <h4>Financial Services</h4>
          <p>Banks and insurers needing model risk management and bias detection</p>
        </div>
        <div>
          <h4>Healthcare</h4>
          <p>Hospitals requiring clinical decision traceability and patient safety</p>
        </div>
        <div>
          <h4>Enterprise SaaS</h4>
          <p>Companies building AI features that need governance at scale</p>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>Ready to Make Your AI Accountable?</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">See how DecisionMesh governs AI decisions in real-time</p>
      <div class="header-actions">
        <a href="#/demo" class="cta-button">Try Live Demo</a>
        <a href="#/architecture" class="btn-secondary">Explore Architecture</a>
      </div>
    </div>
  `;
}
