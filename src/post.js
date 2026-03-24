import './style.css';

const blogPosts = {
  "manual-operations": {
    title: "Manual Ops Are Killing SMBs in the AI Era",
    date: "Mar 24, 2026",
    tag: "Operations",
    content: `
      <p>SMEs are the backbone of every economy. Yet in 2026, many still run on spreadsheets, paper registers, and legacy systems.</p>

      <h2>The Hidden Cost of "It Works Fine"</h2>
      <p>Manual data entry has 1-4% error rate. At 100 invoices daily, that's thousands in reconciliation nightmares quarterly.</p>

      <blockquote>The businesses that survive won't be the biggest. They'll be the most automated.</blockquote>

      <h2>AI is Not the Future — It's Now</h2>
      <p>MNCs use AI agents for support, predictive models for demand, automated pipelines for contracts. This tech is proven and available.</p>
      <p>The question: can SMBs afford NOT to automate?</p>

      <h2>What Can Be Automated Today</h2>
      <p>Inventory management, lead qualification, compliance auditing, contract analysis, customer support — all prime candidates. ROI: 30-60% cost reduction in year one.</p>
    `
  },
  "tech-divide": {
    title: "The Tech Divide: MNCs vs Small Business",
    date: "Mar 18, 2026",
    tag: "Industry",
    content: `
      <p>Fortune 500: real-time dashboards, AI assistants, 24/7 compliance systems. Typical SME: Excel sheets, WhatsApp for tasks, manual reconciliation.</p>

      <h2>The Chasm is Widening</h2>
      <p>MNCs invest billions in digital transformation. SMEs can't keep up — not from lack of will, but lack of affordable, simple solutions.</p>

      <blockquote>The tech divide is about access to operational excellence, not just tools.</blockquote>

      <h2>The Solution: Enterprise-Grade, SME-Priced</h2>
      <p>Next-gen software must be enterprise-capable but built for SME budgets. AI-first design, instant deployment, pay-as-you-grow pricing.</p>
    `
  },
  "automation-necessity": {
    title: "Automation: No Longer Optional",
    date: "Mar 12, 2026",
    tag: "Automation",
    content: `
      <p>If your business relies on operations — logistics, retail, manufacturing — manual management creates compounding errors that destroy profitability.</p>

      <h2>Operations Are the Heartbeat</h2>
      <p>Every minute of downtime, every miscount, every missed delivery directly hits the bottom line.</p>

      <h2>Automation = Survival</h2>
      <p>Automation ensures data integrity, enables predictive insights, unlocks instant execution.</p>

      <blockquote>In the AI age, manual operations aren't just inefficient — they're a competitive liability.</blockquote>
    `
  },
  "industrial-revolution": {
    title: "Industrial Revolution 4.0 at Ground Level",
    date: "Mar 05, 2026",
    tag: "Vision",
    content: `
      <p>The Fourth Industrial Revolution — AI, IoT, cognitive computing — is reshaping work. But benefits remain consolidated at the top.</p>

      <h2>The Ground Level is Ignored</h2>
      <p>Tech giants build self-driving factories while local manufacturers track orders on paper. This isn't a tech problem — it's a distribution problem.</p>

      <h2>Democratizing Industry 4.0</h2>
      <p>We must bring this revolution to local manufacturers, mid-sized logistics, regional service providers.</p>

      <blockquote>True industrial revolution must empower every business, regardless of size.</blockquote>
    `
  },
  "prevent-monopoly": {
    title: "Tech Automation vs MNC Monopoly",
    date: "Feb 28, 2026",
    tag: "Strategy",
    content: `
      <p>MNCs use economies of scale and advanced software to undercut local businesses. Without equivalent efficiency, SMBs fight a losing battle.</p>

      <h2>The Monopoly Playbook</h2>
      <p>Automate → reduce costs → scale → squeeze competitors. They win through efficiency, not just better products.</p>

      <h2>Level the Playing Field</h2>
      <p>Through AI agents, automated pipelines, and intelligent CRM, SMEs can match operational output without matching budgets.</p>

      <blockquote>You don't need a billion-dollar tech budget. You need smart automation.</blockquote>
    `
  },
  "manufacturing-automation": {
    title: "India's Manufacturing Automation Future",
    date: "Feb 21, 2026",
    tag: "Manufacturing",
    content: `
      <p>India needs localized tech automation that understands Indian infrastructure, supply chains, and business culture.</p>

      <h2>One Size Doesn't Fit</h2>
      <p>Western software fails with multi-language workforces, fragmented supply chains, cash-heavy economies, unique regulations.</p>

      <h2>Built for India, by India</h2>
      <p>From smart inventory for multi-location warehouses to GST compliance automation — homegrown solutions for homegrown challenges.</p>

      <blockquote>India won't become a manufacturing superpower by importing Western software.</blockquote>
    `
  },
  "scaling-business": {
    title: "Why Cheap Labor Caps Growth",
    date: "Feb 14, 2026",
    tag: "Growth",
    content: `
      <p>Cheap manual labor seems cost-effective on paper. This calculation is fundamentally flawed.</p>

      <h2>Hidden Costs of Manual Labor</h2>
      <p>Humans don't scale linearly. More people = more coordination, communication gaps, errors, management layers. 5 people doing data entry costs 5x for maybe 3x output.</p>

      <h2>Automation Scales Infinitely</h2>
      <p>An automated system processes 100 invoices the same as 100,000. No fatigue, no errors, no sick days. Marginal cost of scaling: near zero.</p>

      <blockquote>Manual labor isn't cheap. It's a growth ceiling disguised as cost saving.</blockquote>
    `
  }
};

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const post = blogPosts[postId];

if (post) {
  document.title = post.title + ' | AK Automations';
}

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

  ${post ? `
    <!-- POST HERO -->
    <section class="post-hero" data-testid="post-hero">
      <div class="container">
        <a href="/blog.html" class="post-back" data-testid="post-back">← Back to Journal</a>
        <h1>${post.title}</h1>
        <div class="post-meta">
          <span>${post.date}</span>
          <span class="tag">${post.tag}</span>
        </div>
      </div>
    </section>

    <!-- POST BODY -->
    <div class="post-body" data-testid="post-body">
      ${post.content}
    </div>
  ` : `
    <section class="blog-page-hero" style="min-height: 60vh; display: flex; align-items: center;">
      <div class="container">
        <h1>Post Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <a href="/blog.html" class="btn btn-primary" style="margin-top: 24px;">Back to Blog</a>
      </div>
    </section>
  `}

  <!-- CTA -->
  <section class="cta-section" id="contact" data-testid="cta-section">
    <div class="container">
      <h2>Ready to <span class="text-gradient">Automate</span>?</h2>
      <p>Book a free consultation. Discover the right solution for your needs.</p>
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
          <p>Automating the boring stuff so you can focus on growth.</p>
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
