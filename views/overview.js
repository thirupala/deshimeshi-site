export function overview() {
  return `
    <div style="text-align: center; margin-bottom: 3rem;">
      <h2 style="font-size: 3rem; margin-bottom: 1rem;">Every AI Decision, Fully Accountable</h2>
      <p style="font-size: 1.3rem; color: var(--text-secondary); max-width: 800px; margin: 0 auto;">
        Stop treating AI like a black box. Make every decision traceable, explainable, and compliant by design.
      </p>
    </div>
    
    <div class="callout" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, transparent 100%); border-left: 4px solid var(--danger);">
      <h3 style="color: var(--danger); margin-bottom: 1rem;">The Crisis Nobody Talks About</h3>
      <p style="font-size: 1.1rem;">Right now, your organization is deploying AI across critical operations—credit decisions, medical triage, customer service, content moderation. But when regulators, lawyers, or customers ask <strong>"Why did your AI do that?"</strong>, you have no answer.</p>
      
      <div class="grid-2" style="margin-top: 2rem;">
        <div>
          <h4 style="color: var(--text); margin-bottom: 1rem;">❌ The Questions You Can't Answer:</h4>
          <ul style="margin: 0;">
            <li>"Why was this loan application denied?"</li>
            <li>"Did your AI follow GDPR requirements?"</li>
            <li>"How much are you spending on AI?"</li>
            <li>"Can you prove this decision was unbiased?"</li>
            <li>"What happens if we're audited?"</li>
          </ul>
        </div>

        <div>
          <h4 style="color: var(--text); margin-bottom: 1rem;">⚠️ The Stakes Are Rising:</h4>
          <ul style="margin: 0;">
            <li><strong>EU AI Act:</strong> Fines up to €35M or 7% revenue</li>
            <li><strong>Discrimination lawsuits:</strong> No audit trail = no defense</li>
            <li><strong>Regulatory scrutiny:</strong> "Prove your AI is compliant"</li>
            <li><strong>Brand damage:</strong> Public AI failures erode trust</li>
            <li><strong>Shadow AI:</strong> Teams using unauthorized tools</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, transparent 100%); border: 2px solid var(--accent); padding: 3rem;">
      <h3 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">Introducing: The AI Decision Control Plane</h3>
      
      <div style="max-width: 900px; margin: 0 auto 3rem;">
        <p style="font-size: 1.2rem; text-align: center; line-height: 1.8;">
          <strong>DecisionMesh</strong> sits between your applications and AI execution, transforming every AI request into an explicit, governed decision. Think of it as <strong>air traffic control for your AI systems</strong>—nothing flies without clearance, everything is tracked, and you can replay any flight path exactly as it happened.
        </p>
      </div>

      <div class="flow">
        <div class="flow-step" style="background: var(--bg); border-color: var(--text-secondary);">
          <strong>Your App</strong><br/>
          <span style="font-size: 0.8rem; opacity: 0.7;">Makes request</span>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" style="background: rgba(56, 189, 248, 0.2); border-color: var(--accent); border-width: 3px;">
          <strong>DecisionMesh</strong><br/>
          <span style="font-size: 0.8rem; opacity: 0.7;">Governs decision</span>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" style="background: var(--bg); border-color: var(--text-secondary);">
          <strong>AI Execution</strong><br/>
          <span style="font-size: 0.8rem; opacity: 0.7;">Runs if approved</span>
        </div>
      </div>

      <div style="margin-top: 3rem; padding: 2rem; background: rgba(16, 185, 129, 0.1); border-radius: 12px; border: 2px solid var(--success);">
        <h4 style="color: var(--success); text-align: center; margin-bottom: 1.5rem; font-size: 1.3rem;">✓ Every Decision Flows Through 6 Stages:</h4>
        <div class="grid-3">
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">1️⃣</div>
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Intent</h4>
            <p style="margin: 0; font-size: 0.95rem;">App states what it wants AI to do</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">2️⃣</div>
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Validate</h4>
            <p style="margin: 0; font-size: 0.95rem;">Check permissions & schema</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">3️⃣</div>
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Policy</h4>
            <p style="margin: 0; font-size: 0.95rem;">Enforce cost, safety, compliance</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">4️⃣</div>
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Decision</h4>
            <p style="margin: 0; font-size: 0.95rem;">Create immutable record</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">5️⃣</div>
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Execute</h4>
            <p style="margin: 0; font-size: 0.95rem;">Run AI if approved, block if not</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">6️⃣</div>
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Audit</h4>
            <p style="margin: 0; font-size: 0.95rem;">Complete trail for compliance</p>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">Three Guarantees That Change Everything</h3>
      
      <div class="grid">
        <div class="panel" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%); border: 2px solid rgba(56, 189, 248, 0.3);">
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">📝</div>
          <h3 style="color: var(--accent); text-align: center; margin-bottom: 1rem;">1. Explicit Decisions</h3>
          <p style="font-size: 1.05rem; line-height: 1.7;">
            <strong>No more black boxes.</strong> Every AI call becomes a documented decision with complete context. Shadow AI ends. Hidden LLM calls disappear. If AI runs in your org, you'll know about it—with full details of who, what, when, why, and how.
          </p>
        </div>

        <div class="panel" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%); border: 2px solid rgba(56, 189, 248, 0.3);">
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🛡️</div>
          <h3 style="color: var(--accent); text-align: center; margin-bottom: 1rem;">2. Centralized Policy</h3>
          <p style="font-size: 1.05rem; line-height: 1.7;">
            <strong>Define once, enforce everywhere.</strong> Cost limits, safety checks, compliance rules—written as code, version controlled, automatically applied. Stop reimplementing guardrails for every AI feature. One policy engine, consistent governance across all teams.
          </p>
        </div>

        <div class="panel" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%); border: 2px solid rgba(56, 189, 248, 0.3);">
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">🔄</div>
          <h3 style="color: var(--accent); text-align: center; margin-bottom: 1rem;">3. Deterministic Replay</h3>
          <p style="font-size: 1.05rem; line-height: 1.7;">
            <strong>Prove exactly what happened.</strong> Recreate any decision from months ago with perfect accuracy. Same inputs → same outputs. Essential for investigations, audits, and proving compliance. "We don't know" is never an answer again.
          </p>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">Real Impact (From Actual Users)</h3>
      
      <div class="grid-2">
        <div class="panel-no-hover" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.3);">
          <h4 style="color: var(--success);">⏱️ From Weeks to Hours</h4>
          <p>When regulators ask "Why did your AI do that?", response time dropped from weeks of log-diving to <strong>hours with complete evidence packages</strong>.</p>
        </div>

        <div class="panel-no-hover" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.3);">
          <h4 style="color: var(--success);">✓ Zero Audit Findings</h4>
          <p>Organizations with complete decision trails reported <strong>zero compliance findings</strong> in recent regulatory audits—auditors could verify everything.</p>
        </div>

        <div class="panel-no-hover" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.3);">
          <h4 style="color: var(--success);">🚀 2-3x Faster Deployment</h4>
          <p>AI features ship <strong>2-3x faster</strong> when governance is built-in. No waiting for security review, compliance sign-off, or custom guardrails.</p>
        </div>

        <div class="panel-no-hover" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.3);">
          <h4 style="color: var(--success);">💰 Full Cost Visibility</h4>
          <p><strong>100% of AI spending tracked</strong> with real-time dashboards, budget enforcement, and provider optimization—no more surprise bills.</p>
        </div>
      </div>

      <p style="margin-top: 2rem; padding: 1.5rem; background: rgba(245, 158, 11, 0.1); border-radius: 8px; border: 1px solid var(--warning); font-size: 0.95rem;">
        <strong>⚠️ Honest Disclosure:</strong> Results vary significantly based on organization size, AI usage patterns, existing infrastructure, and implementation scope. These outcomes reflect reported experiences from early adopters. Your results will depend on your specific situation. We'll provide a customized analysis based on your requirements—no generic promises.
      </p>
    </div>

    <div class="panel-no-hover">
      <h3 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">Who Needs This (And Why Now)</h3>
      
      <div class="grid">
        <div class="panel" style="position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; right: 0; background: var(--accent); color: white; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 600; border-radius: 0 0 0 8px;">HIGH RISK</div>
          <h4 style="margin-top: 0;">🏦 Financial Services</h4>
          <p>Banks, insurers, fintechs facing model risk management requirements, fair lending audits, and discrimination liability.</p>
          <div class="tags" style="margin-top: 1rem;">
            <span class="tag">Fair Lending</span>
            <span class="tag">Model Risk</span>
            <span class="tag">ECOA/FCRA</span>
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--muted);"><strong>Risk:</strong> One unexplained AI decision = multi-million dollar lawsuit</p>
        </div>

        <div class="panel" style="position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; right: 0; background: var(--accent); color: white; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 600; border-radius: 0 0 0 8px;">HIGH RISK</div>
          <h4 style="margin-top: 0;">🏥 Healthcare</h4>
          <p>Hospitals and health systems deploying clinical AI that needs complete traceability and patient safety assurance.</p>
          <div class="tags" style="margin-top: 1rem;">
            <span class="tag">HIPAA</span>
            <span class="tag">Patient Safety</span>
            <span class="tag">FDA Oversight</span>
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--muted);"><strong>Risk:</strong> Patient harm + no audit trail = career-ending liability</p>
        </div>

        <div class="panel">
          <h4>🏢 Enterprise SaaS</h4>
          <p>Software companies embedding AI features that need governance without slowing development velocity.</p>
          <div class="tags" style="margin-top: 1rem;">
            <span class="tag">Fast Ship</span>
            <span class="tag">Multi-Tenant</span>
            <span class="tag">Scale</span>
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--muted);"><strong>Benefit:</strong> Ship AI 3x faster with built-in compliance</p>
        </div>

        <div class="panel">
          <h4>🛡️ Insurance</h4>
          <p>Insurers needing transparent underwriting, bias detection in claims, and explainable pricing models.</p>
          <div class="tags" style="margin-top: 1rem;">
            <span class="tag">Fair Pricing</span>
            <span class="tag">Transparency</span>
            <span class="tag">State Regs</span>
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--muted);"><strong>Benefit:</strong> Reduce disputed claims by proving fairness</p>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%); border: 2px solid var(--accent); padding: 4rem 2rem;">
      <div style="text-align: center;">
        <h3 style="font-size: 2.5rem; margin-bottom: 1rem;">See It In Action</h3>
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">
          Watch how we turn an opaque AI request into a fully governed, auditable decision in real-time.
        </p>
        
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;">
          <a href="#/demo" class="btn btn-primary" style="padding: 1.25rem 2.5rem; font-size: 1.2rem; box-shadow: 0 8px 16px rgba(56, 189, 248, 0.3);">
            ▶ Try Interactive Demo
          </a>
          <a href="#/architecture" class="btn btn-secondary" style="padding: 1.25rem 2.5rem; font-size: 1.2rem;">
            📐 Explore Architecture
          </a>
        </div>

        <div style="border-top: 1px solid var(--border); padding-top: 3rem; margin-top: 3rem;">
          <p style="color: var(--muted); margin-bottom: 2rem; font-size: 1.1rem;">Or talk to us directly:</p>
          <div style="display: flex; gap: 3rem; justify-content: center; flex-wrap: wrap;">
            <a href="mailto:contact@decisionmesh.com" style="color: var(--accent); text-decoration: none; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="font-size: 2rem;">✉️</span>
              <span style="font-weight: 600;">contact@decisionmesh.com</span>
            </a>
            <a href="https://docs.decisionmesh.com" style="color: var(--accent); text-decoration: none; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="font-size: 2rem;">📚</span>
              <span style="font-weight: 600;">Documentation</span>
            </a>
            <a href="https://github.com/decisionmesh" style="color: var(--accent); text-decoration: none; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <span style="font-size: 2rem;">💻</span>
              <span style="font-weight: 600;">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="background: var(--panel); padding: 2rem; border-radius: 12px; border: 1px solid var(--border); margin-top: 3rem;">
      <h4 style="color: var(--warning); margin-bottom: 1rem;">⚖️ Legal Disclaimer</h4>
      <p style="margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--muted);">
        <strong>Compliance Support, Not Guarantee:</strong> DecisionMesh provides technology tools to support compliance efforts. We do not provide legal advice or guarantee compliance with specific regulations. Organizations remain responsible for their own compliance programs and must consult qualified legal counsel.
      </p>
      <p style="margin: 0; font-size: 0.95rem; color: var(--muted);">
        <strong>Variable Results:</strong> Performance metrics, cost savings, and deployment speed improvements are based on customer reports and internal analysis. Actual results vary significantly based on implementation scope, usage patterns, organizational size, existing infrastructure, and many other factors. Contact us for a detailed analysis specific to your situation—we won't make generic promises.
      </p>
    </div>
  `;
}
