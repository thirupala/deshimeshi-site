export function architecture() {
  return `
    <h2>Architecture</h2>

    <div class="highlight">
      DecisionMesh separates AI governance from AI execution. The Control Plane makes decisions about what should happen; the Execution Plane carries them out.
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>🎯 Control Plane</h3>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          <li><strong>Intent Intake:</strong> Receive and validate AI requests</li>
          <li><strong>Planning:</strong> Determine how to fulfill the intent</li>
          <li><strong>Policy Enforcement:</strong> Apply governance rules</li>
          <li><strong>Decision Recording:</strong> Create immutable audit trail</li>
          <li><strong>Lifecycle Management:</strong> Track decision state from creation to completion</li>
        </ul>
        
        <p style="margin-top: 1.5rem;"><strong>Key Properties:</strong></p>
        <div class="tags">
          <span class="tag">Deterministic</span>
          <span class="tag">Replayable</span>
          <span class="tag">Auditable</span>
          <span class="tag">Policy-Driven</span>
        </div>
      </div>

      <div class="panel">
        <h3>⚡ Execution Plane</h3>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          <li><strong>LLM Calls:</strong> Execute approved prompts</li>
          <li><strong>Agent Orchestration:</strong> Coordinate multi-step workflows</li>
          <li><strong>Tool Integration:</strong> Connect to databases, APIs, systems</li>
          <li><strong>Result Aggregation:</strong> Combine outputs</li>
          <li><strong>Execution Reporting:</strong> Report outcomes back to Control Plane</li>
        </ul>
        
        <p style="margin-top: 1.5rem;"><strong>Key Properties:</strong></p>
        <div class="tags">
          <span class="tag">Isolated</span>
          <span class="tag">Pluggable</span>
          <span class="tag">Observable</span>
          <span class="tag">Fault-Tolerant</span>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Decision Lifecycle</h3>
      <p>Every AI decision flows through a rigorous, auditable lifecycle:</p>
      
      <div class="timeline">
        <div class="timeline-item">
          <h4>1. Intent Submission</h4>
          <p>User or system submits an intent (e.g., "Generate a customer email")</p>
          <div class="code-block">
            <div class="code-header">
              <span>Example Intent</span>
            </div>
            <pre>{
  "type": "EXECUTE",
  "subject": "email.generate",
  "payload": {
    "recipient": "customer@example.com",
    "context": "Order #12345 delayed"
  },
  "constraints": {
    "maxCost": 0.50,
    "requireApproval": false
  }
}</pre>
          </div>
        </div>

        <div class="timeline-item">
          <h4>2. Validation & Planning</h4>
          <p>Control Plane validates the intent and creates an execution plan</p>
          <ul>
            <li>Schema validation</li>
            <li>Permission checks</li>
            <li>Resource allocation</li>
            <li>Plan generation</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h4>3. Policy Evaluation</h4>
          <p>Policies are evaluated to determine if execution is allowed</p>
          <ul>
            <li>Cost limits (e.g., max $1 per request)</li>
            <li>Safety constraints (e.g., no PII in prompts)</li>
            <li>Compliance rules (e.g., GDPR data handling)</li>
            <li>Business logic (e.g., approval workflows)</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h4>4. Decision Recording</h4>
          <p>An immutable decision record is created with all context</p>
          <div class="code-block">
            <div class="code-header">
              <span>Decision Record</span>
            </div>
            <pre>{
  "decisionId": "dec_8x7h9k2m",
  "tenantId": "org_acme",
  "status": "APPROVED",
  "intent": {...},
  "plan": {...},
  "policiesEvaluated": [
    {
      "policyId": "cost-limit-v1",
      "result": "PASS",
      "reason": "Cost $0.12 within limit $0.50"
    }
  ],
  "timestamp": "2026-02-04T13:45:00Z",
  "createdBy": "user_jane"
}</pre>
          </div>
        </div>

        <div class="timeline-item">
          <h4>5. Execution</h4>
          <p>If approved, the Execution Plane carries out the decision</p>
          <ul>
            <li>Execution isolated from governance logic</li>
            <li>All steps traced and logged</li>
            <li>Results captured for audit</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h4>6. Audit Trail</h4>
          <p>Complete record available for compliance and investigation</p>
          <ul>
            <li>What was requested</li>
            <li>Why it was approved/denied</li>
            <li>Who made the decision</li>
            <li>What actually executed</li>
            <li>What the outcome was</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Policy Engine</h3>
      <p>Policies are versioned, reusable rules that govern AI decisions. They can:</p>
      
      <div class="grid-3">
        <div class="panel">
          <h4>Block Execution</h4>
          <p>Prevent decisions that violate rules</p>
          <div class="code-block">
            <pre>{
  "id": "block-pii",
  "condition": "contains_pii(intent)",
  "action": "DENY",
  "reason": "PII detected"
}</pre>
          </div>
        </div>

        <div class="panel">
          <h4>Require Approval</h4>
          <p>Route high-risk decisions to humans</p>
          <div class="code-block">
            <pre>{
  "id": "approve-high-cost",
  "condition": "cost > 10.00",
  "action": "REQUIRE_APPROVAL",
  "approvers": ["manager"]
}</pre>
          </div>
        </div>

        <div class="panel">
          <h4>Modify Execution</h4>
          <p>Inject constraints or transformations</p>
          <div class="code-block">
            <pre>{
  "id": "redact-sensitive",
  "condition": "true",
  "action": "TRANSFORM",
  "transformation": "redact_ssn"
}</pre>
          </div>
        </div>
      </div>
    </div>

    <div class="callout">
      <h3>🔄 Deterministic Replay</h3>
      <p>DecisionMesh can recreate any decision exactly as it happened, even months later:</p>
      <ul class="feature-list">
        <li>Replay with the same inputs produces the same outputs</li>
        <li>Investigate incidents by stepping through decision logic</li>
        <li>Prove compliance by showing decision was correct at the time</li>
        <li>Test policy changes against historical decisions</li>
      </ul>
    </div>

    <div class="comparison">
      <div class="comparison-item">
        <div class="comparison-header">❌ Without DecisionMesh</div>
        <ul>
          <li>LLM calls scattered across codebase</li>
          <li>No centralized governance</li>
          <li>Each team implements own guardrails</li>
          <li>Logs get deleted or corrupted</li>
          <li>Cannot prove what happened</li>
          <li>Impossible to replay decisions</li>
        </ul>
      </div>

      <div class="comparison-item">
        <div class="comparison-header">✅ With DecisionMesh</div>
        <ul>
          <li>All AI goes through Control Plane</li>
          <li>Centralized policy enforcement</li>
          <li>Consistent governance everywhere</li>
          <li>Immutable audit trail</li>
          <li>Complete decision transparency</li>
          <li>Deterministic replay capability</li>
        </ul>
      </div>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>See It In Action</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">Watch how DecisionMesh processes a live AI decision</p>
      <a href="#/demo" class="cta-button">Try Interactive Demo</a>
    </div>
  `;
}
