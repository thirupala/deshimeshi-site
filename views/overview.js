export function overview() {
  return `
    <h2>Make AI Accountable by Design</h2>
    
    <div class="highlight">
      <strong>The Core Question:</strong> When your AI makes a decision, can you prove it was correct, compliant, and explainable?
    </div>

    <div class="panel-no-hover">
      <h3>The Problem: AI is a Black Box</h3>
      <p>Your organization is deploying AI across critical operations—customer service, credit decisions, medical triage, content moderation. But when something goes wrong, you have no answers:</p>
      
      <div class="grid-2">
        <div style="padding: 1.5rem; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px;">
          <h4 style="color: var(--danger); margin: 0 0 1rem 0;">❌ Without Governance</h4>
          <ul style="margin: 0;">
            <li>"Why did our AI deny this loan?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ No one knows. The decision is lost.</span></li>
            <li>"Did we follow GDPR?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ Can't prove it. No audit trail.</span></li>
            <li>"How much are we spending on AI?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ Unclear. Each team uses different providers.</span></li>
            <li>"Can we trust this AI output?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ Unknown. No policy enforcement.</span></li>
          </ul>
        </div>

        <div style="padding: 1.5rem; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 8px;">
          <h4 style="color: var(--success); margin: 0 0 1rem 0;">✅ With DecisionMesh</h4>
          <ul style="margin: 0;">
            <li>"Why did our AI deny this loan?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ Complete decision record with reasoning and policy evaluation.</span></li>
            <li>"Did we follow GDPR?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ Yes. Here's the immutable audit trail proving compliance.</span></li>
            <li>"How much are we spending on AI?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ $X across Y decisions. Real-time dashboard and alerts.</span></li>
            <li>"Can we trust this AI output?"<br/><span style="color: var(--muted); font-size: 0.9rem;">→ Yes. Policies enforced: cost limits, safety checks, bias detection.</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>What is DecisionMesh?</h3>
      <p style="font-size: 1.1rem; line-height: 1.8;">DecisionMesh is an <strong>AI Decision Control Plane</strong> that sits between your applications and AI execution. Every AI request becomes an explicit, governed decision—validated, constrained, recorded, and auditable.</p>
      
      <div style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, transparent 100%); border-left: 4px solid var(--accent); border-radius: 8px;">
        <p style="font-size: 1.2rem; font-weight: 600; margin: 0; color: var(--text);">
          "We don't just answer questions. We govern when, why, and how AI is allowed to act."
        </p>
      </div>

      <div class="flow">
        <div class="flow-step">Intent<br/><span style="font-size: 0.8rem; opacity: 0.7;">What you want</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Validate<br/><span style="font-size: 0.8rem; opacity: 0.7;">Check request</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Policy<br/><span style="font-size: 0.8rem; opacity: 0.7;">Enforce rules</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Decision<br/><span style="font-size: 0.8rem; opacity: 0.7;">Record immutably</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Execute<br/><span style="font-size: 0.8rem; opacity: 0.7;">Run AI safely</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Audit<br/><span style="font-size: 0.8rem; opacity: 0.7;">Complete trail</span></div>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>🎯 Three Core Principles</h3>
        <div style="margin-top: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--accent); margin: 0 0 0.5rem 0;">1. Explicit Decisions</h4>
            <p style="margin: 0; color: var(--text-secondary);">Every AI request becomes a recorded decision. No hidden AI calls, no shadow IT, no black boxes. If AI runs in your organization, DecisionMesh knows about it.</p>
          </div>
          
          <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--accent); margin: 0 0 0.5rem 0;">2. Policy Enforcement</h4>
            <p style="margin: 0; color: var(--text-secondary);">Centralized rules for cost, safety, compliance, and fairness. Define once, enforce everywhere. No more reimplementing guardrails for each AI feature.</p>
          </div>
          
          <div>
            <h4 style="color: var(--accent); margin: 0 0 0.5rem 0;">3. Immutable Audit</h4>
            <p style="margin: 0; color: var(--text-secondary);">Complete, tamper-proof record of what happened, why, and who authorized it. Deterministic replay means you can recreate any decision exactly as it occurred.</p>
          </div>
        </div>
      </div>

      <div class="panel">
        <h3>💡 Why This Matters Now</h3>
        <div style="margin-top: 1.5rem;">
          <div style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(56, 189, 248, 0.05); border-radius: 8px;">
            <h4 style="color: var(--accent); margin: 0 0 0.5rem 0; font-size: 1rem;">Regulatory Pressure</h4>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">EU AI Act, GDPR Article 22, CCPA, industry regulations—all require explainability and traceability. Enforcement is starting now.</p>
          </div>
          
          <div style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(56, 189, 248, 0.05); border-radius: 8px;">
            <h4 style="color: var(--accent); margin: 0 0 0.5rem 0; font-size: 1rem;">Legal Exposure</h4>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">When AI causes harm or discrimination, you need proof. "We don't know what happened" is not a defense.</p>
          </div>
          
          <div style="padding: 1rem; background: rgba(56, 189, 248, 0.05); border-radius: 8px;">
            <h4 style="color: var(--accent); margin: 0 0 0.5rem 0; font-size: 1rem;">Business Risk</h4>
            <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Uncontrolled AI spending, brand damage from AI failures, competitive disadvantage from slow deployment—all preventable with proper governance.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>What DecisionMesh Delivers</h3>
      <div class="grid-3">
        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🛡️</div>
          <h4>Risk Mitigation</h4>
          <p>Prevent unauthorized AI usage, enforce safety guardrails, detect and block harmful outputs. Clear accountability for every AI action.</p>
        </div>

        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">📋</div>
          <h4>Regulatory Compliance</h4>
          <p>Meet requirements for EU AI Act, GDPR, SOC 2, HIPAA, and industry regulations. Complete audit trails and deterministic replay.</p>
        </div>

        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">💰</div>
          <h4>Cost Control</h4>
          <p>Track AI spending in real-time, enforce budgets, optimize provider selection. Know exactly where every dollar goes.</p>
        </div>

        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h4>Complete Visibility</h4>
          <p>See all AI activity across your organization. Monitor usage, identify risks, measure ROI. End shadow AI.</p>
        </div>

        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">⚡</div>
          <h4>Developer Velocity</h4>
          <p>Ship AI features faster with built-in governance. No compliance bottlenecks, no security delays. Safe experimentation.</p>
        </div>

        <div style="text-align: center; padding: 1.5rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔄</div>
          <h4>Incident Investigation</h4>
          <p>When something goes wrong, replay any decision exactly. Understand what happened and prove compliance.</p>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>Real-World Impact</h3>
      <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Organizations using DecisionMesh report:</p>
      <div class="grid-2">
        <div>
          <ul class="feature-list">
            <li><strong>Weeks to hours:</strong> Audit response time for regulatory inquiries</li>
            <li><strong>Zero findings:</strong> In recent regulatory audits with complete decision trails</li>
            <li><strong>Faster deployment:</strong> AI features ship 2-3x faster with built-in governance</li>
          </ul>
        </div>
        <div>
          <ul class="feature-list">
            <li><strong>Complete visibility:</strong> 100% of AI decisions tracked and auditable</li>
            <li><strong>Cost savings:</strong> AI spending optimized through policy enforcement and provider selection</li>
            <li><strong>Risk reduction:</strong> Prevented unauthorized AI usage and compliance violations</li>
          </ul>
        </div>
      </div>
      <p style="margin-top: 1.5rem; padding: 1rem; background: rgba(56, 189, 248, 0.05); border-radius: 8px; font-size: 0.9rem; color: var(--muted);">
        <strong>Note:</strong> Results vary by organization size, AI usage patterns, and implementation scope. Contact us for a customized ROI analysis based on your specific requirements.
      </p>
    </div>

    <div class="panel-no-hover">
      <h3>Who Uses DecisionMesh</h3>
      <div class="grid">
        <div style="padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; background: var(--panel);">
          <h4>🏦 Financial Services</h4>
          <p>Banks and insurers requiring model risk management, fair lending compliance, and explainable credit decisions.</p>
          <div class="tags">
            <span class="tag">Fair Lending</span>
            <span class="tag">Model Risk</span>
            <span class="tag">Audit Trails</span>
          </div>
        </div>

        <div style="padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; background: var(--panel);">
          <h4>🏥 Healthcare</h4>
          <p>Hospitals and health systems needing clinical decision traceability and patient safety assurance.</p>
          <div class="tags">
            <span class="tag">HIPAA</span>
            <span class="tag">Patient Safety</span>
            <span class="tag">Clinical Oversight</span>
          </div>
        </div>

        <div style="padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; background: var(--panel);">
          <h4>🏢 Enterprise SaaS</h4>
          <p>Software companies embedding AI features that need governance without slowing development.</p>
          <div class="tags">
            <span class="tag">Fast Deployment</span>
            <span class="tag">Multi-Tenant</span>
            <span class="tag">Centralized Policy</span>
          </div>
        </div>

        <div style="padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; background: var(--panel);">
          <h4>🛡️ Insurance</h4>
          <p>Insurers needing transparent underwriting, bias detection, and regulatory compliance.</p>
          <div class="tags">
            <span class="tag">Fair Pricing</span>
            <span class="tag">Transparency</span>
            <span class="tag">Compliance</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0.02) 100%); border: 1px solid rgba(56, 189, 248, 0.2);">
      <div style="text-align: center; padding: 2rem 1rem;">
        <h3 style="margin-bottom: 1rem;">See DecisionMesh in Action</h3>
        <p style="font-size: 1.1rem; margin-bottom: 2rem; color: var(--text-secondary);">Watch how we turn AI decisions from black boxes into transparent, auditable processes</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
          <a href="#/demo" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem;">Try Interactive Demo</a>
          <a href="#/architecture" class="btn btn-secondary" style="padding: 1rem 2rem; font-size: 1.1rem;">Explore Architecture</a>
        </div>
        <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border);">
          <a href="mailto:contact@decisionmesh.com" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">✉️</span>
            <span>contact@decisionmesh.com</span>
          </a>
          <a href="https://docs.decisionmesh.com" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">📚</span>
            <span>Documentation</span>
          </a>
          <a href="https://github.com/decisionmesh" style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">💻</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: var(--panel); padding: 1.5rem; border-radius: 8px; font-size: 0.9rem; color: var(--muted); margin-top: 2rem;">
      <p style="margin: 0 0 0.5rem 0;"><strong>Important:</strong> DecisionMesh supports compliance efforts but does not guarantee regulatory compliance. Organizations remain responsible for their own compliance programs. Claims regarding regulatory frameworks describe the platform's capabilities to assist with compliance activities, not certification or guarantee of compliance.</p>
      <p style="margin: 0;">Performance metrics and ROI figures are based on customer reports and internal analysis. Actual results will vary based on implementation, usage patterns, and organizational factors. Contact us for a detailed analysis specific to your situation.</p>
    </div>
  `;
}
