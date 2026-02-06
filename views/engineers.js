export function engineers() {
  return `
    <h2>For Engineers & Platform Teams</h2>

    <div class="highlight">
      Stop building custom governance for every AI feature. Use DecisionMesh as your centralized AI control plane.
    </div>

    <div class="flow">
      <div class="flow-step">Intent</div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">Validate</div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">Plan</div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">Policy</div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">Decision</div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">Execute</div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">Audit</div>
    </div>

    <div class="panel-no-hover">
      <h3>Why Engineers Love DecisionMesh</h3>
      <div class="grid-2">
        <div class="panel">
          <h4>🎯 Deterministic Behavior</h4>
          <p>AI systems that you can reason about:</p>
          <ul>
            <li>Every decision is reproducible</li>
            <li>No hidden state or side effects</li>
            <li>Time-travel debugging</li>
            <li>Regression testing with historical data</li>
          </ul>
        </div>

        <div class="panel">
          <h4>🔍 Observability Built-In</h4>
          <p>Full visibility into every AI operation:</p>
          <ul>
            <li>Distributed tracing for decisions</li>
            <li>Detailed execution logs</li>
            <li>Performance metrics and SLIs</li>
            <li>Cost attribution per request</li>
          </ul>
        </div>

        <div class="panel">
          <h4>🛡️ Centralized Policy</h4>
          <p>Stop reimplementing guardrails:</p>
          <ul>
            <li>Define policies once, apply everywhere</li>
            <li>Version control for governance</li>
            <li>Test policies before deployment</li>
            <li>Gradual rollout of policy changes</li>
          </ul>
        </div>

        <div class="panel">
          <h4>⚡ Developer Velocity</h4>
          <p>Ship AI features faster:</p>
          <ul>
            <li>Governance handled by platform</li>
            <li>No compliance bottlenecks</li>
            <li>Reusable decision patterns</li>
            <li>Safe experimentation</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Technical Architecture</h3>
      <div class="code-block">
        <div class="code-header">
          <span>System Design</span>
        </div>
        <pre>┌─────────────────────────────────────────────────────────┐
│                  Your Application                       │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Intent API                                      │  │
│  │  dm.submit_intent({...})                        │  │
│  └───────────────┬──────────────────────────────────┘  │
└──────────────────┼─────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│             DecisionMesh Control Plane                  │
│                                                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │ Validator  │→ │  Planner   │→ │Policy Eval │       │
│  └────────────┘  └────────────┘  └────────────┘       │
│         │                                │             │
│         ▼                                ▼             │
│  ┌────────────────────────────────────────────┐       │
│  │        Decision Record (Immutable)         │       │
│  └────────────────────────────────────────────┘       │
│                                      │                 │
│                                      ▼                 │
│  ┌────────────────────────────────────────────┐       │
│  │         Execution Coordinator              │       │
│  └────────────────────────────────────────────┘       │
└──────────────────────┼──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│             Execution Plane                             │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  OpenAI  │  │ Anthropic│  │  Custom  │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘</pre>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Quick Start</h3>
      
      <div class="code-block">
        <div class="code-header">
          <span>1. Install SDK</span>
        </div>
        <pre>pip install decisionmesh</pre>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span>2. Submit Your First Intent</span>
        </div>
        <pre>from decisionmesh import Client

dm = Client(api_key=os.getenv("DECISIONMESH_API_KEY"))

# Submit intent
decision = dm.submit_intent({
    "type": "EXECUTE",
    "subject": "chat.completion",
    "payload": {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant"},
            {"role": "user", "content": "Explain Docker in 3 sentences"}
        ]
    },
    "constraints": {
        "maxCost": 0.10,
        "maxTokens": 200
    }
})

# Wait for result
result = decision.wait()
print(result.output)</pre>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span>3. Check Decision History</span>
        </div>
        <pre># List all decisions
decisions = dm.list_decisions(limit=10)

# Get specific decision
decision = dm.get_decision("dec_8x7h9k2m")

# Replay decision
replay_result = dm.replay_decision("dec_8x7h9k2m")</pre>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <h3>API Reference</h3>
        <h4>Core Methods</h4>
        <ul>
          <li><code>submit_intent(intent)</code> - Submit new decision</li>
          <li><code>get_decision(id)</code> - Retrieve decision</li>
          <li><code>list_decisions(filters)</code> - Query decisions</li>
          <li><code>replay_decision(id)</code> - Replay historical decision</li>
        </ul>
        
        <h4>Policy Management</h4>
        <ul>
          <li><code>create_policy(policy)</code> - Define new policy</li>
          <li><code>update_policy(id, policy)</code> - Update policy</li>
          <li><code>test_policy(policy, intents)</code> - Test before deploy</li>
        </ul>
      </div>

      <div class="panel">
        <h3>SDKs & Integrations</h3>
        <h4>Official SDKs</h4>
        <div class="tags">
          <span class="tag">Python</span>
          <span class="tag">Node.js</span>
          <span class="tag">Java</span>
          <span class="tag">Go</span>
        </div>
        
        <h4>Framework Integrations</h4>
        <div class="tags">
          <span class="tag">LangChain</span>
          <span class="tag">Semantic Kernel</span>
          <span class="tag">Haystack</span>
          <span class="tag">AutoGen</span>
        </div>

        <h4>Observability</h4>
        <div class="tags">
          <span class="tag">Prometheus</span>
          <span class="tag">Grafana</span>
          <span class="tag">DataDog</span>
          <span class="tag">New Relic</span>
        </div>
      </div>
    </div>

    <div class="callout">
      <h3>Advanced: Policy-as-Code</h3>
      <p>Define governance rules that automatically apply to all decisions:</p>
      <div class="code-block">
        <div class="code-header">
          <span>Example Policy</span>
        </div>
        <pre>// policies/cost-limit.json
{
  "id": "cost-limit-v1",
  "name": "Enforce Cost Limits",
  "version": 1,
  "scope": {
    "intent.type": "EXECUTE"
  },
  "conditions": {
    "$or": [
      {
        "estimatedCost": { "$gt": 5.00 },
        "constraints.approvalRequired": { "$ne": true }
      }
    ]
  },
  "actions": {
    "deny": true,
    "reason": "Cost exceeds $5.00 limit. Approval required."
  },
  "metadata": {
    "owner": "platform-team",
    "tags": ["cost-control", "production"]
  }
}</pre>
      </div>
    </div>

    <div class="panel-no-hover">
      <h3>Testing & Debugging</h3>
      
      <div class="grid-2">
        <div>
          <h4>Unit Testing</h4>
          <div class="code-block">
            <pre>def test_decision_approval():
    mock_dm = MockDecisionMesh()
    
    decision = mock_dm.submit_intent({
        "type": "EXECUTE",
        "subject": "test.action",
        "payload": {"test": True}
    })
    
    assert decision.status == "APPROVED"
    assert "cost-limit" in decision.policies_evaluated</pre>
          </div>
        </div>

        <div>
          <h4>Policy Testing</h4>
          <div class="code-block">
            <pre>policy = load_policy("cost-limit-v1")

# Test with sample intents
results = dm.test_policy(
    policy,
    intents=[
        {"estimatedCost": 3.00},  # Should pass
        {"estimatedCost": 10.00}, # Should fail
    ]
)

assert results[0].allowed == True
assert results[1].allowed == False</pre>
          </div>
        </div>
      </div>
    </div>

    <div class="callout callout-success">
      <h3>Performance Characteristics</h3>
      <div class="stats">
        <div class="stat-card">
          <div class="stat-value">&lt;10ms</div>
          <div class="stat-label">P99 Decision Latency</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">99.99%</div>
          <div class="stat-label">Availability SLA</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">10K+</div>
          <div class="stat-label">Decisions/sec</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">Global</div>
          <div class="stat-label">Multi-Region</div>
        </div>
      </div>
    </div>

    <div class="panel-no-hover" style="text-align: center; padding: 3rem;">
      <h3>Ready to Build?</h3>
      <p style="font-size: 1.1rem; margin-bottom: 2rem;">Try DecisionMesh with our interactive demo or read the docs</p>
      <div class="header-actions">
        <a href="#/demo" class="cta-button">Interactive Demo</a>
        <a href="#" class="btn-secondary">API Documentation</a>
      </div>
    </div>
  `;
}
