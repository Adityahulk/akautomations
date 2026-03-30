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
        <span class="text-reveal"><span class="text-reveal-inner">Automate your business with</span></span><br/>
        <span class="text-reveal"><span class="text-reveal-inner" style="animation-delay:0.35s">easy to use solutions</span></span>
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
// STICK FIGURE ANIMATION — right column of hero
//
// Scene: A figure at a desk doing manual work (stressed, frantic),
// tasks pile up. Then an AI circle appears, tasks flow into it,
// figure leans back relaxed while automation handles everything.
//
// Pure white lines on black. Loops every 6 seconds.
// ═══════════════════════════════════════════════════════════════
class StickFigureAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.isActive = false;
    this.animFrame = null;
    this.startTime = 0;
    this.CYCLE = 6000; // ms per loop
    this.tasks  = [];
    this.checks = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const p = this.canvas.parentElement;
    this.W = p.clientWidth;
    this.H = p.clientHeight;
    this.canvas.width  = this.W * devicePixelRatio;
    this.canvas.height = this.H * devicePixelRatio;
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  line(x1, y1, x2, y2, w = 2) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.lineWidth = w;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  circle(x, y, r) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  drawFigure(cx, cy, { armAngle = 0.6, leanAngle = 0, stressed = false, relaxed = false } = {}) {
    const ctx = this.ctx;
    const s = Math.min(this.W, this.H) * 0.12;
    ctx.strokeStyle = 'rgba(255,255,255,0.92)';
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';

    // Body (leaned)
    const bx = cx + Math.sin(leanAngle) * s;
    const by = cy - Math.cos(leanAngle) * s;
    this.line(cx, cy, bx, by);

    // Head
    this.circle(bx, by - s * 0.28, s * 0.18);

    // Arms (shoulder midpoint)
    const shx = bx + Math.sin(leanAngle) * s * 0.5;
    const shy = by - Math.cos(leanAngle) * s * 0.5;
    // Left arm
    const la = leanAngle - armAngle;
    this.line(shx, shy, shx + Math.cos(la) * s * 0.55, shy + Math.sin(la) * s * 0.55);
    // Right arm
    const ra = leanAngle + armAngle;
    this.line(shx, shy, shx + Math.cos(ra) * s * 0.55, shy + Math.sin(ra) * s * 0.55);

    // Legs
    if (relaxed) {
      this.line(cx, cy, cx - s * 0.35, cy - s * 0.38);
      this.line(cx, cy, cx + s * 0.05, cy - s * 0.42);
    } else {
      this.line(cx, cy, cx - s * 0.28, cy + s * 0.55);
      this.line(cx, cy, cx + s * 0.28, cy + s * 0.55);
    }

    // Stress wavy lines above head
    if (stressed) {
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 3; i++) {
        const ox = (i - 1) * s * 0.28;
        ctx.beginPath();
        ctx.moveTo(bx + ox, by - s * 0.5);
        ctx.bezierCurveTo(
          bx + ox + s * 0.1, by - s * 0.65,
          bx + ox - s * 0.1, by - s * 0.75,
          bx + ox, by - s * 0.9
        );
        ctx.stroke();
      }
    }
  }

  drawDesk(cx, dy, dw) {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    this.line(cx - dw / 2, dy, cx + dw / 2, dy, 2);
    this.line(cx - dw / 2 + 12, dy, cx - dw / 2 + 12, dy + 55, 1.5);
    this.line(cx + dw / 2 - 12, dy, cx + dw / 2 - 12, dy + 55, 1.5);
  }

  drawTaskIcon(x, y, alpha) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 1.3;
    ctx.lineCap = 'round';
    ctx.strokeRect(x - 9, y - 11, 18, 22);
    ctx.beginPath();
    ctx.moveTo(x - 5, y - 4); ctx.lineTo(x + 5, y - 4);
    ctx.moveTo(x - 5, y);     ctx.lineTo(x + 5, y);
    ctx.moveTo(x - 5, y + 4); ctx.lineTo(x + 2, y + 4);
    ctx.stroke();
    ctx.restore();
  }

  drawAICircle(cx, cy, r, alpha, tRaw) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;

    // Slow outer arc
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(tRaw * 0.5);
    ctx.beginPath();
    ctx.arc(0, 0, r + 18, 0, Math.PI * 1.5);
    ctx.stroke();
    ctx.restore();

    // Main ring
    ctx.strokeStyle = 'rgba(255,255,255,0.75)';
    ctx.lineWidth = 1.8;
    this.circle(cx, cy, r);

    // AI text
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = `${Math.round(r * 0.5)}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AI', cx, cy);
    ctx.restore();
  }

  draw() {
    if (!this.isActive) return;
    const ctx  = this.ctx;
    const now  = performance.now();
    const tRaw = now / 1000;
    const phase = ((now - this.startTime) % this.CYCLE) / this.CYCLE;

    const W = this.W, H = this.H;
    ctx.clearRect(0, 0, W, H);

    // Layout
    const figX = W * 0.30;
    const figY = H * 0.60;
    const deskY = H * 0.60;
    const deskW = W * 0.48;
    const aiCX  = W * 0.72;
    const aiCY  = H * 0.40;
    const aiR   = Math.min(W, H) * 0.1;

    // Figure state
    let armAngle  = 0.65;
    let leanAngle = 0;
    let stressed  = false;
    let relaxed   = false;
    let aiAlpha   = 0;

    if (phase < 0.48) {
      // Working frantically
      armAngle  = 0.5 + Math.sin(tRaw * 8) * 0.38;
      leanAngle = 0.14;
      stressed  = phase > 0.28;
    } else if (phase < 0.62) {
      const p = (phase - 0.48) / 0.14;
      armAngle  = 0.65 - p * 0.3;
      leanAngle = 0.14 - p * 0.14;
      aiAlpha   = p;
    } else {
      const p = (phase - 0.62) / 0.38;
      armAngle  = Math.max(0.08, 0.35 - p * 0.27);
      leanAngle = -(p * 0.20);
      relaxed   = p > 0.35;
      aiAlpha   = 1;
    }

    // Spawn tasks (working phase only)
    if (phase < 0.48 && Math.random() < 0.05 && this.tasks.length < 16) {
      this.tasks.push({
        x: figX + (Math.random() - 0.5) * deskW * 0.5,
        y: deskY - 18 - Math.random() * 70,
        alpha: 0, vx: (Math.random() - 0.5) * 0.3, vy: -Math.random() * 0.2,
      });
    }

    // Move tasks toward AI (automated phase)
    if (phase >= 0.62 && aiAlpha > 0.4) {
      this.tasks.forEach(task => {
        const dx = aiCX - task.x, dy = aiCY - task.y;
        const d  = Math.hypot(dx, dy) || 1;
        task.vx += (dx / d) * 1.5;
        task.vy += (dy / d) * 1.5;
      });
      if (Math.random() < 0.018) {
        this.checks.push({
          x: aiCX + (Math.random() - 0.5) * 50,
          y: aiCY,
          alpha: 1, vy: -1 - Math.random() * 1.4, vx: (Math.random() - 0.5) * 2.5,
        });
      }
    }

    // Reset on cycle start
    if (phase < 0.02) { this.tasks = []; this.checks = []; }

    // Update tasks
    this.tasks.forEach(task => {
      task.alpha = Math.min(task.alpha + 0.05, 0.8);
      task.x += task.vx; task.y += task.vy;
      if (Math.hypot(task.x - aiCX, task.y - aiCY) < aiR + 8) {
        task.alpha = Math.max(0, task.alpha - 0.15);
      }
    });
    this.tasks = this.tasks.filter(t => t.alpha > 0.01 || t.alpha === 0);

    this.checks.forEach(c => {
      c.x += c.vx; c.y += c.vy; c.vy *= 0.94; c.alpha *= 0.97;
    });
    this.checks = this.checks.filter(c => c.alpha > 0.02);

    // ─ Draw ─
    this.drawDesk(figX + W * 0.08, deskY, deskW);
    this.tasks.forEach(t => this.drawTaskIcon(t.x, t.y, t.alpha));
    if (aiAlpha > 0.01) this.drawAICircle(aiCX, aiCY, aiR, aiAlpha, tRaw);
    this.checks.forEach(c => {
      ctx.save();
      ctx.globalAlpha = c.alpha;
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(c.x - 7, c.y); ctx.lineTo(c.x - 2, c.y + 6); ctx.lineTo(c.x + 8, c.y - 6);
      ctx.stroke();
      ctx.restore();
    });
    this.drawFigure(figX, figY, { armAngle, leanAngle, stressed, relaxed });

    // Tiny phase label
    const labels = [[0, 0.48, 'Manual work'], [0.48, 0.62, 'AI takes over'], [0.62, 1, 'Automated ✓']];
    const label  = labels.find(([s, e]) => phase >= s && phase < e);
    if (label) {
      ctx.font = '11px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(label[2], 20, H - 20);
    }

    this.animFrame = requestAnimationFrame(() => this.draw());
  }

  start() {
    if (this.isActive) return;
    this.isActive  = true;
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
  (entries) => entries.forEach(e => e.isIntersecting ? stickAnim.start() : stickAnim.stop()),
  { threshold: 0.1 }
);
const stickHero = document.getElementById('hero');
if (stickHero) stickObserver.observe(stickHero);

