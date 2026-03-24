import './style.css';

const blogPosts = [
  {
    title: "Manual Ops Are Killing SMBs in the AI Era",
    excerpt: "Why legacy workflows drain revenue from modern businesses.",
    date: "Mar 24, 2026",
    id: "manual-operations"
  },
  {
    title: "The Tech Divide: MNCs vs Small Business",
    excerpt: "How local businesses can leverage automation to level the playing field.",
    date: "Mar 18, 2026",
    id: "tech-divide"
  },
  {
    title: "Automation: No Longer Optional",
    excerpt: "Survival demands systemic automation. Here's why.",
    date: "Mar 12, 2026",
    id: "automation-necessity"
  },
  {
    title: "Industrial Revolution 4.0 at Ground Level",
    excerpt: "True growth comes from empowering ground-level businesses.",
    date: "Mar 05, 2026",
    id: "industrial-revolution"
  },
  {
    title: "Tech Automation vs MNC Monopoly",
    excerpt: "Match enterprise efficiency without the overhead.",
    date: "Feb 28, 2026",
    id: "prevent-monopoly"
  },
  {
    title: "India's Manufacturing Automation Future",
    excerpt: "Localized software built natively for India.",
    date: "Feb 21, 2026",
    id: "manufacturing-automation"
  },
  {
    title: "Why Cheap Labor Caps Growth",
    excerpt: "Compounding errors cap real business growth permanently.",
    date: "Feb 14, 2026",
    id: "scaling-business"
  }
];

document.querySelector('#app').innerHTML = `
  <!-- NAVBAR -->
  <nav class="navbar" id="navbar" data-testid="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand" data-testid="nav-brand">
        <div class="logo-icon">AK</div>
        AK Automations
      </a>
      <div class="nav-links" id="navLinks">
        <a href="/#about">About</a>
        <a href="/#solutions">Solutions</a>
        <a href="/#why">Why Us</a>
        <a href="/blog.html">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="nav-book-btn">Get Started</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- BLOG HERO -->
  <section class="blog-page-hero" data-testid="blog-hero">
    <div class="container">
      <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg> Insights</div>
      <h1>The Automation <span class="text-gradient">Journal</span></h1>
      <p>Perspectives on why automation is the lifeline for modern business.</p>
    </div>
  </section>

  <!-- BLOG ARCHIVE -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="blog-archive-grid">
        ${blogPosts.map((post, i) => `
          <a href="/post.html?id=${post.id}" class="blog-card reveal ${i > 0 ? 'reveal-delay-' + Math.min(i, 3) : ''}" data-testid="blog-card-${post.id}">
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
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section" id="contact" data-testid="cta-section">
    <div class="container">
      <h2>Got a Problem to <span class="text-gradient">Solve</span>?</h2>
      <p>Let us show you how automation transforms operations.</p>
      <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="cta-book-btn">Book Free Meeting</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer" data-testid="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand">
            <div class="logo-icon">AK</div>
            AK Automations
          </div>
          <p>Automating the boring stuff so you can focus on growth, customers, and innovation.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">⌘</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/#solutions">Inventory</a></li>
            <li><a href="/#solutions">AI Agents</a></li>
            <li><a href="/#solutions">Sales Optimization</a></li>
            <li><a href="/#solutions">CRM Intelligence</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/#contact">Contact</a></li>
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
        <span>© 2026 AK Automations. All rights reserved.</span>
        <span class="powered-by">Powered by <strong>Tephily</strong></span>
      </div>
    </div>
  </footer>

  <!-- BOOKING MODAL -->
  <div class="modal-overlay" id="bookingModal" data-testid="booking-modal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal" data-testid="modal-close-btn">&times;</button>
      <div class="modal-icon-wrapper">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <h3>Let's Talk Automation</h3>
      <p>Call us to discuss how we eliminate bottlenecks and unlock growth.</p>
      <a href="tel:+917977713281" class="modal-phone-btn" data-testid="modal-phone-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +91 79777 13281
      </a>
    </div>
  </div>
`;

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// Booking Modal Logic
const bookingModal = document.getElementById('bookingModal');
const closeModalBtn = document.getElementById('closeModal');
const bookBtns = document.querySelectorAll('.btn-book');

if (bookingModal && closeModalBtn) {
  const openModal = () => bookingModal.classList.add('active');
  const hideModal = () => bookingModal.classList.remove('active');

  bookBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeModalBtn.addEventListener('click', hideModal);
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) hideModal();
  });
}

// Lenis smooth scroll
function initLenis() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

document.addEventListener('DOMContentLoaded', initLenis);
setTimeout(initLenis, 500);
