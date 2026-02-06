import { overview } from './views/overview.js';
import { architecture } from './views/architecture.js';
import { executives } from './views/executives.js';
import { engineers } from './views/engineers.js';
import { compliance } from './views/compliance.js';
import { regulators } from './views/regulators.js';
import { product } from './views/product.js';
import { industries } from './views/industries.js';
import { demo } from './views/demo.js';

const app = document.getElementById('app');
const routes = {
  '/': overview,
  '/architecture': architecture,
  '/executives': executives,
  '/engineers': engineers,
  '/compliance': compliance,
  '/regulators': regulators,
  '/product': product,
  '/industries': industries,
  '/demo': demo
};

function render() {
  const path = location.hash.replace('#', '') || '/';
  
  // Add fade out
  app.style.opacity = '0';
  
  setTimeout(() => {
    // Render content
    const content = (routes[path] || overview)();
    app.innerHTML = content;
    
    // Update active navigation
    updateActiveNav(path);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fade in
    app.style.opacity = '1';
  }, 150);
}

function updateActiveNav(currentPath) {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Scroll effect for nav
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Smooth transitions
app.style.transition = 'opacity 0.3s ease';

// Event listeners
window.addEventListener('hashchange', render);
window.addEventListener('load', render);

export { render };
