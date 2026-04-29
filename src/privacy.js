import './style.css';

document.title = 'Privacy Policy | Kalman Labs';

document.querySelector('#app').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand"><div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>Kalman Labs</a>
      <div class="nav-links" id="navLinks">
        <a href="/#about">About</a>
        <a href="/#solutions">Solutions</a>
        <a href="/#why">Why Us</a>
        <a href="/blog">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Get Started</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <section class="post-hero">
    <div class="container">
      <a href="/" class="post-back">← Back to Home</a>
      <h1>Privacy Policy</h1>
      <div class="post-meta"><span>Last updated: March 31, 2026</span><span class="tag">Privacy</span></div>
    </div>
  </section>

  <div class="post-body">
    <p>This Privacy Policy explains how Kalman Labs collects, uses, and protects information when you visit our website or contact us about our services.</p>

    <h2>Information We Collect</h2>
    <p>We may collect the information you choose to share with us, including your name, phone number, email address, company name, and any project or business details you provide when you contact us.</p>
    <p>We may also collect limited technical information such as browser type, device information, and general usage data to help us improve site performance and user experience.</p>

    <h2>How We Use Information</h2>
    <p>We use your information to respond to inquiries, discuss projects, provide services, improve our website, and maintain communication related to our work.</p>
    <p>We do not use your information for unrelated purposes, and we do not sell personal data.</p>

    <h2>Sharing of Information</h2>
    <p>We may use trusted third-party tools for hosting, analytics, communication, or operational support. Information is only shared when necessary to run the website, respond to requests, or deliver our services.</p>
    <p>We may also disclose information if required by law or to protect our legal rights.</p>

    <h2>Data Retention</h2>
    <p>We retain information only for as long as it is reasonably necessary to respond to inquiries, maintain business records, provide services, or comply with legal obligations.</p>

    <h2>Data Security</h2>
    <p>We take reasonable steps to protect information from unauthorized access, misuse, or disclosure. However, no online system can guarantee absolute security.</p>

    <h2>Your Rights</h2>
    <p>If you want to update, correct, or delete information you have shared with us, you can contact us directly and we will review your request.</p>

    <h2>Contact</h2>
    <p>For privacy-related questions, you can reach us at <a href="mailto:contact@kalman-labs.com">contact@kalman-labs.com</a> or call <a href="tel:+918000012306">+91 80000 12306</a>.</p>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand"><div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>Kalman Labs</div>
          <p>Modern systems designed to simplify operations and support business growth.</p>
        </div>
        <div class="footer-col"><h4>Solutions</h4><ul><li><span class="footer-static">Sales & Lead Optimization</span></li><li><span class="footer-static">Workflow Automation</span></li><li><span class="footer-static">Analytics & Insights</span></li><li><span class="footer-static">Operations Management Systems</span></li></ul></div>
        <div class="footer-col"><h4>Company</h4><ul><li><a href="/blog">Blog</a></li><li><a href="/privacy">Privacy</a></li></ul></div>
        <div class="footer-col"><h4>Contact</h4><ul><li><a href="tel:+918000012306">+91 80000 12306</a></li><li><a href="mailto:contact@kalman-labs.com">contact@kalman-labs.com</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Kalman Labs</span><span class="powered-by">Powered by <strong>Kalman Labs Pvt Ltd</strong></span></div>
    </div>
  </footer>

  <div class="modal-overlay" id="bookingModal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal">&times;</button>
      <div class="modal-icon-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
      <h3>Let's Talk</h3>
      <p>Call us to discuss how we can help automate your business.</p>
      <a href="tel:+918000012306" class="modal-phone-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 80000 12306</a>
      <a href="mailto:contact@kalman-labs.com" class="modal-email-link">contact@kalman-labs.com</a>
    </div>
  </div>
`;

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('active'));

const modal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
document.querySelectorAll('.btn-book').forEach(btn => btn.addEventListener('click', () => modal.classList.add('active')));
closeModal?.addEventListener('click', () => modal.classList.remove('active'));
modal?.addEventListener('click', (e) => e.target === modal && modal.classList.remove('active'));
