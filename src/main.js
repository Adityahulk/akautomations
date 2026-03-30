import './style.css';
import { blogPosts } from './blogPosts.js';

const blogPostsPreview = blogPosts;

document.querySelector('#app').innerHTML = `
  <!-- NAVBAR -->
  <nav class="navbar" id="navbar" data-testid="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand" data-testid="nav-brand">
        <div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>
        Kalman Labs
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#about">About</a>
        <a href="#solutions">Solutions</a>
        <a href="#why">Why Us</a>
        <a href="/blog.html">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="nav-cta">Get Started</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" data-testid="nav-toggle">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- HERO — 2-column: text left, stick figure right -->
  <section class="hero" id="hero" data-testid="hero-section">
    <div class="hero-blob"></div>
    <div class="hero-grid"></div>
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>
    <div class="hero-orb hero-orb-3"></div>
    <div class="hero-orb hero-orb-4"></div>
    <div class="hero-orb hero-orb-5"></div>

    <!-- Left: headline + CTAs -->
    <div class="hero-content">
      <h1>
        <span class="text-reveal hero-title-setup"><span class="text-reveal-inner">Automate your business with</span></span><br/>
        <span class="text-reveal hero-title-payoff"><span class="text-reveal-inner" style="animation-delay:0.35s">easy to use solutions</span></span>
      </h1>
      <div class="hero-actions">
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="hero-cta">Book Free Consultation</a>
        <a href="#solutions" class="btn btn-secondary" data-testid="hero-solutions">Explore Solutions</a>
      </div>
    </div>

    <!-- Right: stick figure animation -->
    <div class="hero-canvas-col">
      <canvas id="stickCanvas"></canvas>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats-bar" data-testid="stats-section">
    <div class="container">
      <div class="stats-grid stagger-reveal">
        <div class="stat-item">
          <h3><span class="stat-number" data-target="500">0</span>+</h3>
          <p>Businesses Automated</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-number" data-target="4">0</span>+</h3>
          <p>Software Products</p>
        </div>
        <div class="stat-item">
          <h3><span>AI</span>-First</h3>
          <p>Engineering</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-number" data-target="100">0</span>%</h3>
          <p>Enterprise-Grade</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section about-section" id="about" data-testid="about-section">
    <div class="container">
      <div class="section-header reveal">
        <h2>Built Around Four <span class="text-gradient">Core Capabilities</span></h2>
      </div>
      <div class="about-grid">
        <div class="about-pillars reveal reveal-delay-1">
          <div class="pillar-card">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
            <h4>Analytics & Visualization</h4>
            <p>Clear dashboards and reports for smarter decisions.</p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h4>Customized Solutions</h4>
            <p>Systems built around your workflows and goals.</p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg></div>
            <h4>Mobile-Based Applications</h4>
            <p>Fast, responsive tools built for everyday business use.</p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg></div>
            <h4>AI Integration</h4>
            <p>Smarter control across core business systems.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SOLUTIONS -->
  <section class="section solutions-section" id="solutions" data-testid="solutions-section">
    <div class="container">
      <div class="section-header">
        <h2>Essential Systems for <span class="text-gradient">Modern Businesses</span></h2>
      </div>
      <div class="solutions-grid">
        <div class="solution-card reveal">
          <div class="shine"></div>
          <div class="solution-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>
          <h3>Inventory Management Platform</h3>
          <p>Track stock and operations across locations.</p>
        </div>
        <div class="solution-card reveal reveal-delay-1">
          <div class="shine"></div>
          <div class="solution-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg></div>
          <h3>Sales & Lead Optimization Platform</h3>
          <p>Organize pipelines and improve lead conversions.</p>
        </div>
        <div class="solution-card reveal reveal-delay-2">
          <div class="shine"></div>
          <div class="solution-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg></div>
          <h3>Financial Management Platform</h3>
          <p>Manage finances with better visibility and control.</p>
        </div>
        <div class="solution-card reveal reveal-delay-3">
          <div class="shine"></div>
          <div class="solution-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
          <h3>Reporting Optimization Systems</h3>
          <p>Turn business data into clear reports and insights.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY US -->
  <section class="section why-section" id="why" data-testid="why-section">
    <div class="container">
      <div class="section-header">
        <h2>Built Different. <span class="text-gradient">Built Better.</span></h2>
      </div>
      <div class="why-grid why-grid-5">
        <div class="why-card reveal">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></div>
          <h3>AI-First Engineering</h3>
          <p>AI at the core, not bolted on. Latest models & frameworks.</p>
        </div>
        <div class="why-card reveal reveal-delay-1">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>Zero Training UX</h3>
          <p>Intuitive interfaces. Team adopts day one.</p>
        </div>
        <div class="why-card reveal reveal-delay-2">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
          <h3>Revenue Impact</h3>
          <p>Measurable outcomes: cost savings & growth.</p>
        </div>
        <div class="why-card reveal reveal-delay-3">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3>Instant Support</h3>
          <p>Rapid fixes & enhancements. One call away.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
          <h3>Enterprise Security</h3>
          <p>Private deployments. Full data sovereignty.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section testimonials-section" data-testid="testimonials-section">
    <div class="container">
      <div class="section-header">
        <div class="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
          Testimonials
        </div>
        <h2>Trusted by <span class="text-gradient">500+ Businesses</span></h2>
        <p>From startups to enterprises.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Transformed our inventory workflow. 6 hours daily → fully automated. ROI visible in month one."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">RS</div>
            <div>
              <div class="testimonial-name">Rajesh Sharma</div>
              <div class="testimonial-role">COO, NexGen Logistics</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-1">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"AI agents handle 80% of queries now. Seamless implementation, incredible support."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">PM</div>
            <div>
              <div class="testimonial-name">Priya Menon</div>
              <div class="testimonial-role">Head of Ops, FinStack</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-2">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Identified revenue leakage we'd missed for years. Absolute game changer."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">KL</div>
            <div>
              <div class="testimonial-name">Amit Kapoor</div>
              <div class="testimonial-role">CFO, TradeBridge India</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-3">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Replaced three legacy systems. Team adopted on day one, no training needed."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">VR</div>
            <div>
              <div class="testimonial-name">Vikram Reddy</div>
              <div class="testimonial-role">Founder, AutoParts Pro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section" id="contact" data-testid="cta-section">
    <div class="cta-glow"></div>
    <div class="container">
      <h2>Ready to <span class="text-gradient">Automate</span>?</h2>
      <p>Book a free consultation. Discover how we eliminate bottlenecks and unlock growth.</p>
      <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="cta-book">Book Free Meeting</a>
    </div>
  </section>

  <!-- BLOG -->
  <section class="section blog-section" id="blog" data-testid="blog-section">
    <div class="container">
      <div class="section-header">
        <div class="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
          Insights
        </div>
        <h2>The Automation <span class="text-gradient">Journal</span></h2>
        <p>Perspectives on modern business automation.</p>
      </div>
      <div class="blog-grid">
        ${blogPostsPreview.map((post, i) => `
          <a href="/post.html?id=${post.id}" class="blog-card reveal ${i > 0 ? 'reveal-delay-' + i : ''}" data-testid="blog-${post.id}">
            <div class="blog-card-img"></div>
            <div class="blog-card-body">
              <div class="blog-card-date">${post.date}</div>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <span class="blog-card-link">Read More →</span>
            </div>
          </a>
        `).join('')}
      </div>
      <div class="blog-view-all">
        <a href="/blog.html" class="btn btn-secondary" data-testid="view-all">View All Articles</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer" data-testid="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand">
            <div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>
            Kalman Labs
          </div>
          <p>Automating the boring stuff so you can focus on growth.</p>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#solutions">Inventory</a></li>
            <li><a href="#solutions">Sales & Leads</a></li>
            <li><a href="#solutions">Financial Management</a></li>
            <li><a href="#solutions">Reporting</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog.html">Journal</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Kalman Labs</span>
        <span class="powered-by">Powered by <strong>Tephily Pvt Ltd</strong></span>
      </div>
    </div>
  </footer>

  <!-- MODAL -->
  <div class="modal-overlay" id="bookingModal" data-testid="modal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal" data-testid="modal-close">&times;</button>
      <div class="modal-icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <h3>Let's Talk</h3>
      <p>Call us to discuss how we can help automate your business.</p>
      <a href="tel:+917977713281" class="modal-phone-btn" data-testid="modal-phone">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +91 79777 13281
      </a>
    </div>
  </div>
`;

// Smooth scroll reveal - optimized with requestAnimationFrame
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      requestAnimationFrame(() => entry.target.classList.add('visible'));
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger reveal for stats
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate counters
      entry.target.querySelectorAll('.stat-number[data-target]').forEach(counter => {
        animateCounter(counter);
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stagger-reveal').forEach(el => staggerObserver.observe(el));

// Animated counter function
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * easeOut);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// Cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorGlow.classList.add('active');
});

document.addEventListener('mouseleave', () => {
  cursorGlow.classList.remove('active');
});

function updateCursorGlow() {
  glowX += (mouseX - glowX) * 0.1;
  glowY += (mouseY - glowY) * 0.1;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top = glowY + 'px';
  requestAnimationFrame(updateCursorGlow);
}
updateCursorGlow();

// Magnetic button effect
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('active'));

// Modal
const modal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
const bookBtns = document.querySelectorAll('.btn-book');

const openModal = () => modal.classList.add('active');
const hideModal = () => modal.classList.remove('active');

bookBtns.forEach(btn => btn.addEventListener('click', openModal));
closeModal?.addEventListener('click', hideModal);
modal?.addEventListener('click', (e) => e.target === modal && hideModal());

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('active');
    }
  });
});

// ═══════════════════════════════════════════════════════════════
// STICK FIGURE ANIMATION — refined, editorial
//
// Scene: a figure at a desk with a laptop screen.
// Tasks (small doc icons) queue up on the left, flow in a smooth
// bezier arc toward the AI circle top-right, disappearing into it.
// On automation: figure leans back, legs up, checkmarks emit
// from the AI circle in arcs downward.
//
// White lines only. Smooth easing throughout. Loops every 7s.
// ═══════════════════════════════════════════════════════════════
class StickFigureAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.isActive = false;
    this.animFrame = null;
    this.startTime = 0;
    this.CYCLE = 7000;
    this.tasks = [];
    this.checks = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const p = this.canvas.parentElement;
    this.W = p.clientWidth || 600;
    this.H = p.clientHeight || 700;
    this.canvas.width = this.W * devicePixelRatio;
    this.canvas.height = this.H * devicePixelRatio;
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  // ── Easing ───────────────────────────────────────────────────
  easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

  // ── Bezier point at t along P0→CP→P1 ─────────────────────────
  bezier(t, p0x, p0y, cpx, cpy, p1x, p1y) {
    const u = 1 - t;
    return {
      x: u * u * p0x + 2 * u * t * cpx + t * t * p1x,
      y: u * u * p0y + 2 * u * t * cpy + t * t * p1y
    };
  }

  // ── Stroke helper ─────────────────────────────────────────────
  stroke(fn, color = 'rgba(255,255,255,0.88)', lw = 2) {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    fn(ctx);
    ctx.restore();
  }

  // ── Stick figure ─────────────────────────────────────────────
  // hip = {x, y}, lean = radians forward, armL/R = angle from body-axis
  drawFigure({ hipX, hipY, lean = 0, armL = 0.7, armR = 0.7, relaxed = false }) {
    const S = Math.min(this.W, this.H) * 0.115; // scale unit

    // Spine direction
    const spineX = hipX + Math.sin(lean) * S;
    const spineY = hipY - Math.cos(lean) * S;

    // Shoulder midpoint (60% up spine)
    const shX = hipX + Math.sin(lean) * S * 0.6;
    const shY = hipY - Math.cos(lean) * S * 0.6;

    // Head centre
    const headX = spineX;
    const headY = spineY - S * 0.24;
    const headR = S * 0.16;

    this.stroke(ctx => {
      // Spine
      ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(spineX, spineY); ctx.stroke();

      // Head
      ctx.beginPath(); ctx.arc(headX, headY, headR, 0, Math.PI * 2); ctx.stroke();

      // Left arm
      const laAngle = lean - armL;
      ctx.beginPath();
      ctx.moveTo(shX, shY);
      ctx.lineTo(shX + Math.cos(laAngle) * S * 0.58, shY + Math.sin(laAngle) * S * 0.58);
      ctx.stroke();

      // Right arm
      const raAngle = lean + armR;
      ctx.beginPath();
      ctx.moveTo(shX, shY);
      ctx.lineTo(shX + Math.cos(raAngle) * S * 0.58, shY + Math.sin(raAngle) * S * 0.58);
      ctx.stroke();

      // Legs
      if (relaxed) {
        // Feet-up: legs extend forward at an angle
        ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(hipX - S * 0.4, hipY - S * 0.38); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(hipX + S * 0.05, hipY - S * 0.44); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(hipX - S * 0.25, hipY + S * 0.55); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(hipX + S * 0.25, hipY + S * 0.55); ctx.stroke();
      }
    });

    // Stress marks (wavy lines above head) — drawn extra-faintly
    if (!relaxed && lean > 0.08) {
      this.stroke(ctx => {
        for (let i = 0; i < 3; i++) {
          const ox = (i - 1) * headR * 1.5;
          ctx.beginPath();
          ctx.moveTo(headX + ox, headY - headR - 4);
          ctx.bezierCurveTo(
            headX + ox + 5, headY - headR - 14,
            headX + ox - 5, headY - headR - 22,
            headX + ox, headY - headR - 30
          );
          ctx.stroke();
        }
      }, 'rgba(255,255,255,0.22)', 1.2);
    }
  }

  // ── Desk ─────────────────────────────────────────────────────
  drawDesk(cx, cy, w) {
    this.stroke(ctx => {
      // Surface
      ctx.beginPath(); ctx.moveTo(cx - w / 2, cy); ctx.lineTo(cx + w / 2, cy); ctx.stroke();
      // Legs
      ctx.beginPath(); ctx.moveTo(cx - w / 2 + 14, cy); ctx.lineTo(cx - w / 2 + 14, cy + 52); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + w / 2 - 14, cy); ctx.lineTo(cx + w / 2 - 14, cy + 52); ctx.stroke();
    }, 'rgba(255,255,255,0.38)', 1.8);
  }

  // ── Laptop on desk ────────────────────────────────────────────
  drawLaptop(cx, cy, alpha) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    this.stroke(c => {
      // Screen (tilted rectangle)
      c.beginPath();
      c.moveTo(cx - 22, cy); c.lineTo(cx - 18, cy - 32);
      c.lineTo(cx + 18, cy - 32); c.lineTo(cx + 22, cy);
      c.closePath(); c.stroke();
      // Base
      c.beginPath(); c.moveTo(cx - 26, cy); c.lineTo(cx + 26, cy); c.stroke();
    }, 'rgba(255,255,255,0.55)', 1.4);
    ctx.restore();
  }

  // ── Result card — labeled automation output pill ─────────────
  drawResultCard(cx, cy, label, alpha) {
    const ctx = this.ctx;
    const pad = 14;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = 'bold 13px Inter, system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    const tw = ctx.measureText(label).width;
    const checkW = 20;
    const totalW = checkW + tw + pad * 2 + 6;
    const h = 36;
    const x = cx - totalW / 2;
    const y = cy - h / 2;

    // Pill background — slightly less transparent so it reads clearly
    ctx.fillStyle = 'rgba(0,0,0,0.82)';
    ctx.beginPath();
    ctx.roundRect(x, y, totalW, h, h / 2);
    ctx.fill();

    // Pill border — more visible
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(x, y, totalW, h, h / 2);
    ctx.stroke();

    // Checkmark — bold, clearly visible
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const ckX = x + pad;
    const ckY = cy;
    ctx.beginPath();
    ctx.moveTo(ckX - 3, ckY + 2);
    ctx.lineTo(ckX + 1, ckY + 6);
    ctx.lineTo(ckX + 9, ckY - 4);
    ctx.stroke();

    // Label text
    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    ctx.fillText(label, x + pad + checkW, cy + 0.5);

    ctx.restore();
  }

  drawTask(x, y, alpha) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.lineWidth = 1.2;
    ctx.lineCap = 'round';
    // Document outline
    ctx.beginPath();
    ctx.moveTo(x - 7, y - 10); ctx.lineTo(x + 4, y - 10);
    ctx.lineTo(x + 7, y - 7); ctx.lineTo(x + 7, y + 10);
    ctx.lineTo(x - 7, y + 10); ctx.closePath(); ctx.stroke();
    // Corner fold
    ctx.beginPath(); ctx.moveTo(x + 4, y - 10); ctx.lineTo(x + 4, y - 7); ctx.lineTo(x + 7, y - 7); ctx.stroke();
    // Text lines
    ctx.beginPath();
    ctx.moveTo(x - 4, y - 2); ctx.lineTo(x + 4, y - 2);
    ctx.moveTo(x - 4, y + 2); ctx.lineTo(x + 4, y + 2);
    ctx.moveTo(x - 4, y + 6); ctx.lineTo(x + 1, y + 6);
    ctx.stroke();
    ctx.restore();
  }

  // ── AI circle ─────────────────────────────────────────────────
  drawAI(cx, cy, r, alpha, tRaw) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;

    // Rotating outer arc
    ctx.save();
    ctx.translate(cx, cy); ctx.rotate(tRaw * 0.55);
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(0, 0, r + 20, 0, Math.PI * 1.4); ctx.stroke();
    ctx.restore();

    // Counter-rotating second arc
    ctx.save();
    ctx.translate(cx, cy); ctx.rotate(-tRaw * 0.3);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(0, 0, r + 30, Math.PI * 0.2, Math.PI * 1.0); ctx.stroke();
    ctx.restore();

    // Main ring
    ctx.strokeStyle = 'rgba(255,255,255,0.72)';
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

    // Text
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = `${Math.round(r * 0.48)}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AI', cx, cy);

    ctx.restore();
  }

  // ── Main render ───────────────────────────────────────────────
  draw() {
    if (!this.isActive) return;
    const ctx = this.ctx;
    const now = performance.now();
    const tRaw = now / 1000;
    const phase = ((now - this.startTime) % this.CYCLE) / this.CYCLE; // 0→1

    const W = this.W, H = this.H;
    ctx.clearRect(0, 0, W, H);

    // ── Scene layout ──────────────────────────────────────────
    const figHipX = W * 0.30;
    const figHipY = H * 0.60;
    const deskCX = figHipX + W * 0.08;
    const deskY = H * 0.60;
    const deskW = W * 0.44;
    const laptopX = figHipX + W * 0.12;
    const laptopY = deskY;
    const aiCX = W * 0.74;
    const aiCY = H * 0.36;
    const aiR = Math.min(W, H) * 0.095;

    // Phase boundaries:
    // 0.00–0.45 → manual work (frantic)
    // 0.45–0.58 → AI appears, figure slows
    // 0.58–1.00 → automated (figure relaxes)

    // ── Figure state ──────────────────────────────────────────
    let lean = 0;
    let armL = 0.65;
    let armR = 0.65;
    let relaxed = false;
    let stressed = false;
    let aiAlpha = 0;

    if (phase < 0.45) {
      // Frantic typing: arms oscillate
      const swing = Math.sin(tRaw * 9) * 0.4;
      lean = 0.16;
      armL = 0.55 + swing;
      armR = 0.55 - swing;
      stressed = phase > 0.25;
    } else if (phase < 0.58) {
      const p = (phase - 0.45) / 0.13;
      const e = this.easeInOut(p);
      lean = 0.16 - e * 0.16;
      armL = 0.65 - e * 0.35;
      armR = 0.65 - e * 0.35;
      aiAlpha = e;
    } else {
      const p = (phase - 0.58) / 0.42;
      const e = this.easeInOut(p);
      lean = -(e * 0.18);
      armL = 0.3 - e * 0.22;
      armR = 0.3 + e * 0.22;
      relaxed = e > 0.4;
      aiAlpha = 1;
    }

    // ── Spawn tasks (manual phase only) ──────────────────────
    if (phase < 0.45 && this.tasks.length < 12 && Math.random() < 0.06) {
      // Stagger spawn position on and around desk
      const col = this.tasks.length % 4;
      const row = Math.floor(this.tasks.length / 4);
      const spawnX = (figHipX - W * 0.05) + col * 32 + (Math.random() - 0.5) * 8;
      const spawnY = deskY - 20 - row * 26 + (Math.random() - 0.5) * 6;
      // Bezier control point (arc up and right toward AI)
      const cpX = (spawnX + aiCX) / 2 + (Math.random() - 0.5) * 60;
      const cpY = Math.min(spawnY, aiCY) - H * 0.18 - Math.random() * H * 0.06;
      this.tasks.push({ spawnX, spawnY, cpX, cpY, alpha: 0, t: 0, flying: false });
    }

    // ── Move tasks toward AI (automated phase) ────────────────
    if (phase >= 0.58 && aiAlpha > 0.3) {
      this.tasks.forEach(task => { task.flying = true; });
    }

    // ── Reset ──────────────────────────────────────────────────
    if (phase < 0.02) { this.tasks = []; this.checks = []; }

    // ── Update tasks ─────────────────────────────────────────
    this.tasks.forEach(task => {
      task.alpha = Math.min(task.alpha + 0.06, 0.85);
      if (task.flying) {
        task.t = Math.min(task.t + 0.018, 1);
        const pos = this.bezier(task.t, task.spawnX, task.spawnY, task.cpX, task.cpY, aiCX, aiCY);
        task.x = pos.x; task.y = pos.y;
        if (task.t > 0.85) task.alpha = Math.max(0, (1 - task.t) / 0.15);
      } else {
        task.x = task.spawnX; task.y = task.spawnY;
      }
    });
    this.tasks = this.tasks.filter(t => !(t.flying && t.t >= 1));

    // ── Draw scene ────────────────────────────────────────────
    this.drawDesk(deskCX, deskY, deskW);
    this.drawLaptop(laptopX, laptopY, 0.6);

    // Tasks (manual phase documents)
    this.tasks.forEach(t => this.drawTask(t.x, t.y, t.alpha));

    // AI circle
    if (aiAlpha > 0.01) this.drawAI(aiCX, aiCY, aiR, aiAlpha, tRaw);

    // ── Automation result cards (automated phase) ──────────────
    // Three labeled outputs arc-in from the AI circle to fixed spots
    const resultSlots = [
      { label: 'Invoice Sent', ox: W * 0.10, oy: H * 0.15 },
      { label: 'Report Ready', ox: W * 0.06, oy: -H * 0.03 },
      { label: 'Task Done',    ox: W * 0.09, oy: -H * 0.20 },
    ];
    if (phase >= 0.58) {
      const automPhase = (phase - 0.58) / 0.42;
      resultSlots.forEach((slot, i) => {
        const delay = i * 0.18;
        const p = Math.max(0, Math.min(1, (automPhase - delay) / 0.28));
        const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
        if (e <= 0) return;
        const tx = aiCX + slot.ox;
        const ty = aiCY + slot.oy;
        const cpx = aiCX + slot.ox * 0.4 - 20;
        const cpy = aiCY + slot.oy * 0.4 - 40;
        const u = 1 - e;
        const rx = u*u*aiCX + 2*u*e*cpx + e*e*tx;
        const ry = u*u*aiCY + 2*u*e*cpy + e*e*ty;
        const alpha = Math.min(1, e * 2.5);
        this.drawResultCard(rx, ry, slot.label, alpha);
      });
    }

    // Stick figure (drawn last, always on top)
    this.drawFigure({ hipX: figHipX, hipY: figHipY, lean, armL, armR, relaxed });

    // Phase label — very faint bottom
    const labels = [[0, 0.45, 'Manual work'], [0.45, 0.58, 'AI takes over'], [0.58, 1, 'Automated ✓']];
    const lbl = labels.find(([s, e]) => phase >= s && phase < e);
    if (lbl) {
      ctx.font = '10px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(lbl[2], 20, H - 20);
    }


    this.animFrame = requestAnimationFrame(() => this.draw());
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.startTime = performance.now();
    this.draw();
  }

  stop() {
    this.isActive = false;
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
  }
}

const stickAnim = new StickFigureAnimation('stickCanvas');
const stickObserver = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting ? stickAnim.start() : stickAnim.stop()),
  { threshold: 0.1 }
);
const stickHero = document.getElementById('hero');
if (stickHero) stickObserver.observe(stickHero);

