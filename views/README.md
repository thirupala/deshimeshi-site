# DecisionMesh - AI Decision Control Plane Website

A modern, responsive single-page application (SPA) showcasing DecisionMesh's AI governance platform.

## Features

- 🎨 Modern dark theme design with gradient accents
- 📱 Fully responsive layout
- ⚡ Fast, client-side routing
- 🎭 Smooth animations and transitions
- 🔍 Comprehensive content for all stakeholders
- 🎬 Interactive demo with live decision flow
- 📊 Visual stats and diagrams
- 💼 Industry-specific use cases

## File Structure

```
decisionmesh-spa/
├── index.html          # Main HTML file
├── styles.css          # Comprehensive styling
├── app.js              # Router and navigation
└── views/              # Page components
    ├── overview.js     # Platform overview
    ├── architecture.js # Technical architecture
    ├── product.js      # Product features
    ├── executives.js   # For business leaders
    ├── engineers.js    # For technical teams
    ├── compliance.js   # Compliance & audit
    ├── regulators.js   # For regulators
    ├── industries.js   # Industry use cases
    └── demo.js         # Interactive demo
```

## Quick Start

### Option 1: Open Directly in Browser

1. Download all files
2. Open `index.html` in any modern web browser
3. No server required!

### Option 2: Local Development Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Content Sections

### Overview
- Platform value proposition
- Key benefits and guarantees
- Core principles
- Target audience

### Architecture
- Control Plane vs Execution Plane
- Decision lifecycle
- Policy engine details
- Deterministic replay

### Product
- Feature highlights
- Integration examples
- SDK information
- API reference

### Executives
- Business case for AI governance
- ROI and cost savings
- Risk mitigation
- Strategic questions answered

### Engineers
- Technical architecture
- Quick start guide
- Code examples
- Performance metrics

### Compliance
- Regulatory frameworks (EU AI Act, GDPR, SOC 2, HIPAA)
- Immutable audit trail
- Deterministic replay for investigations
- Evidence export

### Regulators
- Complete traceability
- Audit package generation
- Investigation capabilities
- Compliance verification

### Industries
- Financial Services
- Healthcare
- Insurance
- Enterprise SaaS
- Legal Services
- Government
- Cross-industry capabilities

### Demo
- Interactive decision flow
- Live simulation
- Multiple scenarios
- Real-time monitoring dashboard

## Customization

### Update Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --bg: #0a0e17;           /* Background color */
  --accent: #38bdf8;       /* Accent color */
  --success: #10b981;      /* Success color */
  /* ... etc */
}
```

### Add New Pages

1. Create a new file in `views/` directory:
```javascript
// views/new-page.js
export function newPage() {
  return `
    <h2>New Page Title</h2>
    <div class="panel">
      <p>Your content here</p>
    </div>
  `;
}
```

2. Import in `app.js`:
```javascript
import { newPage } from './views/new-page.js';
```

3. Add to routes:
```javascript
const routes = {
  '/new-page': newPage,
  // ... other routes
};
```

4. Add navigation link in `index.html`:
```html
<a href="#/new-page">New Page</a>
```

### Modify Content

Each view file exports a function that returns HTML. Simply edit the HTML string in any view file to update content.

## Design System

### Panels
```html
<div class="panel">Content with hover effect</div>
<div class="panel-no-hover">Content without hover</div>
```

### Grids
```html
<div class="grid">Auto-fit grid (300px min)</div>
<div class="grid-2">2-column grid (400px min)</div>
<div class="grid-3">3-column grid (280px min)</div>
```

### Highlights
```html
<div class="highlight">Important message</div>
<div class="callout">Callout box</div>
<div class="callout callout-success">Success callout</div>
<div class="callout callout-warning">Warning callout</div>
```

### Code Blocks
```html
<div class="code-block">
  <div class="code-header">
    <span>Title</span>
  </div>
  <pre>Your code here</pre>
</div>
```

### Stats Cards
```html
<div class="stats">
  <div class="stat-card">
    <div class="stat-value">99.99%</div>
    <div class="stat-label">Uptime</div>
  </div>
</div>
```

### Flow Diagrams
```html
<div class="flow">
  <div class="flow-step">Step 1</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">Step 2</div>
</div>
```

### Lists
```html
<ul class="feature-list">
  <li>Checkmark automatically added</li>
</ul>
```

### Tags
```html
<div class="tags">
  <span class="tag">Tag 1</span>
  <span class="tag">Tag 2</span>
</div>
```

### Buttons
```html
<a href="#" class="btn btn-primary">Primary</a>
<a href="#" class="btn btn-secondary">Secondary</a>
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No build step required
- Minimal JavaScript (< 10KB)
- CSS-only animations
- Lazy-loaded content
- Optimized for Core Web Vitals

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and root folder
4. Site will be live at `https://username.github.io/repo-name`

### Netlify

1. Drag and drop folder to Netlify
2. Or connect GitHub repo
3. Auto-deploy on commit

### Vercel

```bash
npm i -g vercel
vercel
```

### Any Static Host

Upload all files to:
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Cloudflare Pages
- Traditional web hosting

## SEO Optimization

The site includes:
- Semantic HTML5
- Meta descriptions
- Proper heading hierarchy
- Alt text for images
- Accessible navigation
- Mobile-responsive design

For better SEO, consider adding:
- Sitemap.xml
- robots.txt
- Open Graph tags
- Schema.org markup

## Accessibility

- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast
- Reduced motion support
- Screen reader friendly

## License

All rights reserved © 2026 DecisionMesh

## Support

For questions or issues:
- Email: support@decisionmesh.com
- Documentation: docs.decisionmesh.com
- GitHub: github.com/decisionmesh

---

**Built with modern web standards. No frameworks required.**
