export function product() {
  return `
    <h2>Product Features</h2>

    <div class="highlight">
      DecisionMesh is the only platform that provides end-to-end AI governance from intent to execution to audit.
    </div>

    <div class="grid">
      <div class="panel">
        <h3>🎯 Intent-Based API</h3>
        <p>Developers don't call LLMs directly. They submit <strong>intents</strong>:</p>
        <div class="code-block">
          <pre>POST /v1/decisions
{
  "intent": {
    "type": "EXECUTE",
    "subject": "summarize.document",
    "payload": {
      "documentId": "doc_123",
      "maxLength": 500
    }
  }
}</pre>
        </div>
        <ul class="feature-list">
          <li>Declarative: Say <em>what</em> you want, not <em>how</em></li>
          <li>Validated: Schema-checked before execution</li>
          <li>Traceable: Every request gets a decision ID</li>
        </ul>
      </div>

      <div class="panel">
        <h3>📋 Policy-as-Code</h3>
        <p>Define governance rules that apply automatically:</p>
        <div class="code-block">
          <pre>// Limit cost per request
{
  "id": "cost-limit",
  "scope": { "all": true },
  "conditions": {
    "estimatedCost": { "$gt": 5.00 }
  },
  "actions": {
    "deny": true,
    "reason": "Exceeds cost limit"
  }
}</pre>
        </div>
        <ul class="feature-list">
          <li>Versioned: Track policy changes over time</li>
          <li>Testable: Validate before deployment</li>
          <li>Auditable: See which policies triggered</li>
        </ul>
      </div>

      <div class="panel">
        <h3>🔍 Real-Time Monitoring</h3>
        <p>Dashboard showing all AI activity:</p>
        <ul class="feature-list">
          <li>Decision volume and status</li>
          <li>Cost tracking and forecasting</li>
          <li>Policy enforcement metrics</li>
          <li>Latency and performance</li>
          <li>Error rates and failures</li>
        </ul>
      </div>

      <div class="panel">
        <h3>📊 Audit & Compliance</h3>
        <p>Built-in compliance features:</p>
        <ul class="feature-list">
          <li>Immutable decision ledger</li>
          <li>EU AI Act conformance</li>
          <li>SOC2 evidence generation</li>
          <li>GDPR data handling</li>
          <li>Export for auditors</li>
        </ul>
      </div>

      <div class="panel">
        <h3>🔄 Deterministic Replay</h3>
        <p>Recreate any decision exactly:</p>
        <ul class="feature-list">
          <li>Time-travel debugging</li>
          <li>Incident investigation</li>
          <li>Policy impact analysis</li>
          <li>Regression testing</li>
        </ul>
      </div>

      <div class="panel">
        <h3>🔌 Multi-Provider Support</h3>
        <p>Works with any LLM or AI service:</p>
        <ul class="feature-list">
          <li>OpenAI (GPT-4, GPT-3.5)</li>
          <li>Anthropic (Claude)</li>
          <li>Google (PaLM, Gemini)</li>
          <li>Open-source models</li>
          <li>Custom endpoints</li>
        </ul>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Advanced Capabilities</h3>
      
      <div class="grid-2">
        <div>
          <h4>Cost Management</h4>
          <ul>
            <li>Set budgets per team, project, or user</li>
            <li>Track spending in real-time</li>
            <li>Get alerts before hitting limits</li>
            <li>Optimize provider selection for cost</li>
          </ul>
        </div>

        <div>
          <h4>Safety & Security</h4>
          <ul>
            <li>PII detection and redaction</li>
            <li>Prompt injection prevention</li>
            <li>Output filtering for harmful content</li>
            <li>Rate limiting and abuse prevention</li>
          </ul>
        </div>

        <div>
          <h4>Performance Optimization</h4>
          <ul>
            <li>Intelligent caching</li>
            <li>Provider failover</li>
            <li>Load balancing</li>
            <li>Batch processing</li>
          </ul>
        </div>

        <div>
          <h4>Developer Experience</h4>
          <ul>
            <li>SDKs for Python, Node.js, Java</li>
            <li>REST and gRPC APIs</li>
            <li>Comprehensive documentation</li>
            <li>Testing and staging environments</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>Integration Example</h3>
      <p>Integrate DecisionMesh in minutes, not weeks:</p>
      <div class="code-block">
        <div class="code-header">
          <span>Python Example</span>
        </div>
        <pre>from decisionmesh import Client

# Initialize client
dm = Client(api_key="your_api_key")

# Submit intent
decision = dm.submit_intent({
    "type": "EXECUTE",
    "subject": "chat.completion",
    "payload": {
        "messages": [
            {"role": "user", "content": "Explain quantum computing"}
        ],
        "model": "gpt-4"
    },
    "constraints": {
        "maxCost": 1.00,
        "maxTokens": 500
    }
})

# Check status
if decision.status == "APPROVED":
    result = decision.wait_for_completion()
    print(result.output)
else:
    print(f"Denied: {decision.reason}")</pre>
      </div>
    </div>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">&lt;5min</div>
        <div class="stat-label">Time to First Decision</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">99.99%</div>
        <div class="stat-label">Uptime SLA</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">∞</div>
        <div class="stat-label">Decisions Retained</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">50+</div>
        <div class="stat-label">Policy Types</div>
      </div>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>Ready to Get Started?</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">See DecisionMesh in action with our interactive demo</p>
      <div class="header-actions">
        <a href="#/demo" class="cta-button">Try Demo</a>
        <a href="#" class="btn-secondary">Read Documentation</a>
      </div>
    </div>
  `;
}
