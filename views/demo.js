export function demo() {
  return `
    <h2>Interactive Demo</h2>

    <div class="highlight">
      Watch a live AI decision flow through DecisionMesh's control plane - from intent to execution to audit.
    </div>

    <div class="panel-no-hover">
      <h3>Scenario: Content Generation Request</h3>
      <p>A user requests AI to generate a customer email. Watch how DecisionMesh governs this decision.</p>
      
      <div id="demo-controls" style="margin: 2rem 0;">
        <button class="btn btn-primary" onclick="runDemo()">▶ Run Demo</button>
        <button class="btn btn-secondary" onclick="resetDemo()">↺ Reset</button>
      </div>

      <div class="flow" id="demo-flow">
        <div class="flow-step" id="step-intent">1. Intent</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" id="step-validate">2. Validate</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" id="step-policy">3. Policy</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" id="step-decision">4. Decision</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" id="step-execute">5. Execute</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" id="step-audit">6. Audit</div>
      </div>
    </div>

    <div id="demo-output" class="panel-no-hover" style="display: none;">
      <h3>Decision Record</h3>
      <div id="demo-content"></div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>Step 1: Intent Submission</h3>
        <p>User submits what they want the AI to do</p>
        <div class="code-block">
          <div class="code-header">
            <span>POST /v1/decisions</span>
          </div>
          <pre>{
  "intent": {
    "type": "EXECUTE",
    "subject": "email.generate",
    "payload": {
      "recipient": "customer@example.com",
      "context": "Order #12345 delayed",
      "tone": "apologetic"
    }
  },
  "constraints": {
    "maxCost": 0.50,
    "maxTokens": 500
  }
}</pre>
        </div>
      </div>

      <div class="panel">
        <h3>Step 2: Validation</h3>
        <p>Control plane validates the request</p>
        <ul class="feature-list">
          <li>Schema validation passes</li>
          <li>User has permission</li>
          <li>Required fields present</li>
          <li>Constraints are reasonable</li>
        </ul>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px; color: var(--success);">
          ✓ Validation passed
        </div>
      </div>

      <div class="panel">
        <h3>Step 3: Policy Evaluation</h3>
        <p>All applicable policies are checked</p>
        <div class="code-block">
          <pre>Evaluating policies...

1. cost-limit-v1: PASS
   Cost $0.15 within limit $0.50

2. pii-detection-v2: PASS
   No PII detected in prompt

3. content-safety-v1: PASS
   No harmful content detected

4. rate-limit-v1: PASS
   5 requests in last hour (limit: 100)</pre>
        </div>
      </div>

      <div class="panel">
        <h3>Step 4: Decision</h3>
        <p>Immutable decision record created</p>
        <div class="code-block">
          <pre>{
  "decisionId": "dec_8x7h9k2m",
  "status": "APPROVED",
  "timestamp": "2026-02-04T13:45:00Z",
  "policiesEvaluated": 4,
  "allPoliciesPassed": true,
  "estimatedCost": 0.15,
  "approver": "system"
}</pre>
        </div>
      </div>

      <div class="panel">
        <h3>Step 5: Execution</h3>
        <p>AI generates the content</p>
        <div style="padding: 1rem; background: rgba(56, 189, 248, 0.05); border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2);">
          <p style="margin: 0;"><strong>Generated Email:</strong></p>
          <p style="margin-top: 0.5rem; font-style: italic;">"Dear Valued Customer,

We sincerely apologize for the delay with your order #12345. We understand how frustrating this must be and want to assure you that we're working diligently to resolve the issue.

Your satisfaction is our top priority, and we're taking immediate steps to expedite your shipment. We'll keep you updated every step of the way.

Thank you for your patience and understanding.

Best regards,
Customer Service Team"</p>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px; color: var(--success);">
          ✓ Execution completed in 1.2s
        </div>
      </div>

      <div class="panel">
        <h3>Step 6: Audit Trail</h3>
        <p>Complete record for compliance</p>
        <div class="code-block">
          <pre>{
  "decisionId": "dec_8x7h9k2m",
  "tenantId": "org_acme",
  "requestor": "user_jane",
  "intent": {...},
  "policies": [...],
  "decision": "APPROVED",
  "execution": {
    "provider": "anthropic",
    "model": "claude-3-opus",
    "latency": 1243,
    "cost": 0.15,
    "tokens": 284
  },
  "output": "...",
  "hash": "sha256:a7f3c8...",
  "signature": "RSA:9f2e1d..."
}</pre>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>What Just Happened?</h3>
      <div class="stats">
        <div class="stat-card">
          <div class="stat-value">1</div>
          <div class="stat-label">Decision Created</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">4</div>
          <div class="stat-label">Policies Evaluated</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">$0.15</div>
          <div class="stat-label">Cost Tracked</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">100%</div>
          <div class="stat-label">Auditable</div>
        </div>
      </div>

      <div style="margin-top: 2rem;">
        <h4>Key Takeaways</h4>
        <ul class="feature-list">
          <li>Every AI request becomes an explicit, governed decision</li>
          <li>Policies enforce cost, safety, and compliance automatically</li>
          <li>Complete audit trail from intent to execution</li>
          <li>Deterministic - can be replayed exactly</li>
          <li>Fast - adds only ~10ms latency</li>
        </ul>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Try Different Scenarios</h3>
      <div class="grid-3">
        <div class="panel">
          <h4>❌ Policy Violation</h4>
          <p>What if cost exceeds limit?</p>
          <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="runScenario('cost-violation')">Run Scenario</button>
        </div>

        <div class="panel">
          <h4>⚠️ PII Detection</h4>
          <p>What if PII is in prompt?</p>
          <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="runScenario('pii-detection')">Run Scenario</button>
        </div>

        <div class="panel">
          <h4>✅ Replay Decision</h4>
          <p>Recreate any decision exactly</p>
          <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="runScenario('replay')">Run Scenario</button>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Real-Time Monitoring Dashboard</h3>
      <div class="grid-2">
        <div style="padding: 2rem; background: var(--panel); border: 1px solid var(--border); border-radius: 12px;">
          <h4>Decision Volume (Last Hour)</h4>
          <div style="height: 100px; display: flex; align-items: flex-end; gap: 0.5rem; margin-top: 1rem;">
            <div style="flex: 1; background: var(--accent); height: 60%; border-radius: 4px;"></div>
            <div style="flex: 1; background: var(--accent); height: 75%; border-radius: 4px;"></div>
            <div style="flex: 1; background: var(--accent); height: 45%; border-radius: 4px;"></div>
            <div style="flex: 1; background: var(--accent); height: 90%; border-radius: 4px;"></div>
            <div style="flex: 1; background: var(--accent); height: 55%; border-radius: 4px;"></div>
            <div style="flex: 1; background: var(--accent); height: 80%; border-radius: 4px;"></div>
          </div>
          <p style="text-align: center; color: var(--muted); font-size: 0.9rem; margin-top: 1rem;">342 decisions processed</p>
        </div>

        <div style="padding: 2rem; background: var(--panel); border: 1px solid var(--border); border-radius: 12px;">
          <h4>Policy Enforcement</h4>
          <div style="margin-top: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span>Approved</span>
              <span style="color: var(--success);">94%</span>
            </div>
            <div style="height: 8px; background: var(--border); border-radius: 4px; overflow: hidden;">
              <div style="width: 94%; height: 100%; background: var(--success);"></div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 1rem; margin-bottom: 0.5rem;">
              <span>Denied</span>
              <span style="color: var(--danger);">4%</span>
            </div>
            <div style="height: 8px; background: var(--border); border-radius: 4px; overflow: hidden;">
              <div style="width: 4%; height: 100%; background: var(--danger);"></div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 1rem; margin-bottom: 0.5rem;">
              <span>Pending Approval</span>
              <span style="color: var(--warning);">2%</span>
            </div>
            <div style="height: 8px; background: var(--border); border-radius: 4px; overflow: hidden;">
              <div style="width: 2%; height: 100%; background: var(--warning);"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      function runDemo() {
        const steps = ['intent', 'validate', 'policy', 'decision', 'execute', 'audit'];
        const output = document.getElementById('demo-output');
        const content = document.getElementById('demo-content');
        
        output.style.display = 'block';
        content.innerHTML = '<p>Processing decision...</p>';
        
        let currentStep = 0;
        const interval = setInterval(() => {
          if (currentStep > 0) {
            document.getElementById('step-' + steps[currentStep - 1]).style.background = 'var(--success)';
            document.getElementById('step-' + steps[currentStep - 1]).style.borderColor = 'var(--success)';
            document.getElementById('step-' + steps[currentStep - 1]).style.color = 'white';
          }
          
          if (currentStep < steps.length) {
            document.getElementById('step-' + steps[currentStep]).style.background = 'var(--accent)';
            document.getElementById('step-' + steps[currentStep]).style.borderColor = 'var(--accent)';
            document.getElementById('step-' + steps[currentStep]).style.transform = 'scale(1.1)';
            
            content.innerHTML = '<p><strong>Step ' + (currentStep + 1) + ':</strong> ' + getStepMessage(steps[currentStep]) + '</p>';
            currentStep++;
          } else {
            clearInterval(interval);
            document.getElementById('step-audit').style.background = 'var(--success)';
            document.getElementById('step-audit').style.borderColor = 'var(--success)';
            document.getElementById('step-audit').style.color = 'white';
            
            content.innerHTML = \`
              <div style="padding: 1.5rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 2px solid var(--success);">
                <h4 style="color: var(--success); margin: 0 0 1rem 0;">✓ Decision Completed Successfully</h4>
                <p><strong>Decision ID:</strong> dec_8x7h9k2m</p>
                <p><strong>Status:</strong> APPROVED</p>
                <p><strong>Cost:</strong> $0.15</p>
                <p><strong>Latency:</strong> 1.2s</p>
                <p><strong>Policies Evaluated:</strong> 4 (all passed)</p>
                <p style="margin-bottom: 0;"><strong>Audit Trail:</strong> Complete and immutable</p>
              </div>
            \`;
          }
        }, 800);
      }
      
      function resetDemo() {
        const steps = ['intent', 'validate', 'policy', 'decision', 'execute', 'audit'];
        steps.forEach(step => {
          const el = document.getElementById('step-' + step);
          el.style.background = 'var(--bg)';
          el.style.borderColor = 'var(--accent)';
          el.style.color = 'var(--text)';
          el.style.transform = 'scale(1)';
        });
        
        document.getElementById('demo-output').style.display = 'none';
      }
      
      function getStepMessage(step) {
        const messages = {
          intent: 'Receiving intent from application...',
          validate: 'Validating schema and permissions...',
          policy: 'Evaluating governance policies...',
          decision: 'Creating immutable decision record...',
          execute: 'Executing AI request...',
          audit: 'Recording audit trail...'
        };
        return messages[step] || '';
      }
      
      function runScenario(scenario) {
        const content = document.getElementById('demo-content');
        const output = document.getElementById('demo-output');
        output.style.display = 'block';
        
        const scenarios = {
          'cost-violation': \`
            <div style="padding: 1.5rem; background: rgba(239, 68, 68, 0.1); border-radius: 8px; border: 2px solid var(--danger);">
              <h4 style="color: var(--danger); margin: 0 0 1rem 0;">✗ Decision Denied</h4>
              <p><strong>Reason:</strong> Cost limit exceeded</p>
              <p><strong>Policy:</strong> cost-limit-v1</p>
              <p><strong>Details:</strong> Estimated cost $1.50 exceeds limit $0.50</p>
              <p style="margin-bottom: 0;"><strong>Action:</strong> Request blocked, user notified</p>
            </div>
          \`,
          'pii-detection': \`
            <div style="padding: 1.5rem; background: rgba(245, 158, 11, 0.1); border-radius: 8px; border: 2px solid var(--warning);">
              <h4 style="color: var(--warning); margin: 0 0 1rem 0;">⚠ PII Detected</h4>
              <p><strong>Policy:</strong> pii-protection-v2</p>
              <p><strong>Details:</strong> Social Security Number detected in prompt</p>
              <p><strong>Action:</strong> PII automatically redacted</p>
              <p style="margin-bottom: 0;"><strong>Result:</strong> Decision approved after redaction</p>
            </div>
          \`,
          'replay': \`
            <div style="padding: 1.5rem; background: rgba(56, 189, 248, 0.1); border-radius: 8px; border: 2px solid var(--accent);">
              <h4 style="color: var(--accent); margin: 0 0 1rem 0;">🔄 Deterministic Replay</h4>
              <p><strong>Original Decision:</strong> dec_8x7h9k2m (from 3 months ago)</p>
              <p><strong>Replay Result:</strong> Identical output generated</p>
              <p><strong>Verified:</strong> Hash matches original</p>
              <p style="margin-bottom: 0;"><strong>Use Case:</strong> Audit investigation, compliance proof</p>
            </div>
          \`
        };
        
        content.innerHTML = scenarios[scenario] || '<p>Scenario not found</p>';
      }
    </script>

    <div class="panel-no-hover" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, transparent 100%); text-align: center; padding: 3rem;">
      <h3>Ready to Govern Your AI?</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">Start using DecisionMesh to make your AI accountable by design</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#" class="btn btn-primary">Get Started</a>
        <a href="#/architecture" class="btn btn-secondary">Learn More</a>
      </div>
    </div>
  `;
}
