import './style.css';
import { blogPosts } from './blogPosts.js';

document.querySelector('#app').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand"><div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>Kalman Labs</a>
      <div class="nav-links" id="navLinks">
        <a href="/#about">About</a>
        <a href="/#solutions">Solutions</a>
        <a href="/#why">Why Us</a>
        <a href="/blog.html">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Get Started</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <section class="blog-page-hero">
    <div class="container">
      <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg> Insights</div>
      <h1>The Automation <span class="text-gradient">Journal</span></h1>
      <p>Four focused reads on automation, analytics, and practical business systems.</p>
    </div>
  </section>

  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="blog-archive-grid">
        ${blogPosts.map((post, i) => {
          const illustrations = [
            `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="280" height="160" fill="#0a0a0a"/><circle cx="80" cy="80" r="40" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/><circle cx="80" cy="80" r="32" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><line x1="80" y1="80" x2="80" y2="52" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><line x1="80" y1="80" x2="98" y2="88" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" stroke-linecap="round"/><line x1="80" y1="44" x2="80" y2="48" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><line x1="80" y1="110" x2="80" y2="114" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><line x1="44" y1="80" x2="48" y2="80" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><line x1="110" y1="80" x2="114" y2="80" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><rect x="150" y="40" width="90" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><rect x="150" y="60" width="70" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><rect x="150" y="80" width="80" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><rect x="150" y="100" width="60" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/><text x="156" y="50" font-size="7" fill="rgba(255,255,255,0.3)" font-family="monospace">manually update stock</text><text x="156" y="70" font-size="7" fill="rgba(255,255,255,0.3)" font-family="monospace">send follow-up email</text><text x="156" y="90" font-size="7" fill="rgba(255,255,255,0.3)" font-family="monospace">prepare weekly report</text><text x="156" y="110" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">reconcile entries...</text></svg>`,
            `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="280" height="160" fill="#0a0a0a"/><line x1="40" y1="20" x2="40" y2="130" stroke="rgba(255,255,255,0.12)" stroke-width="1"/><line x1="40" y1="130" x2="240" y2="130" stroke="rgba(255,255,255,0.12)" stroke-width="1"/><rect x="60" y="90" width="28" height="40" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/><rect x="100" y="70" width="28" height="60" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/><rect x="140" y="50" width="28" height="80" rx="2" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/><rect x="180" y="28" width="28" height="102" rx="2" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/><polyline points="74,90 114,70 154,50 194,28" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/><circle cx="74" cy="90" r="3" fill="rgba(255,255,255,0.5)"/><circle cx="114" cy="70" r="3" fill="rgba(255,255,255,0.5)"/><circle cx="154" cy="50" r="3" fill="rgba(255,255,255,0.5)"/><circle cx="194" cy="28" r="4" fill="rgba(255,255,255,0.75)"/><text x="46" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q1</text><text x="106" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q2</text><text x="146" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q3</text><text x="186" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q4</text></svg>`,
            `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="280" height="160" fill="#0a0a0a"/><circle cx="140" cy="80" r="48" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 3"/><rect x="54" y="66" width="40" height="28" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/><text x="74" y="84" font-size="8" fill="rgba(255,255,255,0.5)" font-family="monospace" text-anchor="middle">Input</text><rect x="120" y="54" width="40" height="28" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/><text x="140" y="72" font-size="8" fill="rgba(255,255,255,0.6)" font-family="monospace" text-anchor="middle">AI</text><rect x="186" y="66" width="40" height="28" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/><text x="206" y="84" font-size="8" fill="rgba(255,255,255,0.5)" font-family="monospace" text-anchor="middle">Done ✓</text><path d="M94 80 Q107 54 120 68" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/><path d="M160 68 Q173 54 186 80" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/><path d="M186 94 Q140 130 94 94" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/><circle cx="140" cy="130" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="174" cy="126" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="106" cy="126" r="2" fill="rgba(255,255,255,0.2)"/></svg>`,
            `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="280" height="160" fill="#0a0a0a"/><rect x="30" y="20" width="220" height="120" rx="6" stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="rgba(255,255,255,0.02)"/><line x1="30" y1="44" x2="250" y2="44" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><circle cx="46" cy="32" r="4" fill="rgba(255,255,255,0.2)"/><circle cx="60" cy="32" r="4" fill="rgba(255,255,255,0.1)"/><circle cx="74" cy="32" r="4" fill="rgba(255,255,255,0.06)"/><rect x="44" y="58" width="65" height="32" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text x="76" y="71" font-size="14" fill="rgba(255,255,255,0.7)" font-family="monospace" text-anchor="middle" font-weight="bold">98%</text><text x="76" y="83" font-size="6" fill="rgba(255,255,255,0.25)" font-family="monospace" text-anchor="middle">satisfaction</text><rect x="117" y="58" width="65" height="32" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text x="149" y="71" font-size="14" fill="rgba(255,255,255,0.7)" font-family="monospace" text-anchor="middle" font-weight="bold">6h</text><text x="149" y="83" font-size="6" fill="rgba(255,255,255,0.25)" font-family="monospace" text-anchor="middle">saved/day</text><rect x="190" y="58" width="52" height="32" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text x="216" y="71" font-size="11" fill="rgba(255,255,255,0.6)" font-family="monospace" text-anchor="middle" font-weight="bold">↑32%</text><text x="216" y="83" font-size="6" fill="rgba(255,255,255,0.25)" font-family="monospace" text-anchor="middle">revenue</text><polyline points="44,130 74,118 104,122 134,104 164,108 194,94 224,82 244,78" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" fill="none"/><polyline points="44,130 74,118 104,122 134,104 164,108 194,94 224,82 244,78 244,140 44,140" fill="rgba(255,255,255,0.03)"/></svg>`,
          ];
          const img = illustrations[i % illustrations.length];
          return `
          <a href="/post.html?id=${post.id}" class="blog-card reveal ${i > 0 ? 'reveal-delay-' + Math.min(i, 3) : ''}">
            <div class="blog-card-img">${img}</div>
            <div class="blog-card-body">
              <div class="blog-card-date">${post.date}</div>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <span class="blog-card-link">Read More →</span>
            </div>
          </a>`;
        }).join('')}
      </div>
    </div>
  </section>

  <section class="cta-section" id="contact">
    <div class="container">
      <h2>Got a Problem to <span class="text-gradient">Solve</span>?</h2>
      <p>Let us show you how automation transforms operations.</p>
      <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Book Free Meeting</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand"><div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>Kalman Labs</div>
          <p>Automating the boring stuff so you can focus on growth.</p>
        </div>
        <div class="footer-col"><h4>Solutions</h4><ul><li><a href="/#solutions">Inventory</a></li><li><a href="/#solutions">Sales & Leads</a></li><li><a href="/#solutions">Financial Management</a></li><li><a href="/#solutions">Reporting</a></li></ul></div>
        <div class="footer-col"><h4>Company</h4><ul><li><a href="/#about">About</a></li><li><a href="/blog.html">Blog</a></li><li><a href="/#contact">Contact</a></li><li><a href="#">Careers</a></li></ul></div>
        <div class="footer-col"><h4>Resources</h4><ul><li><a href="/blog.html">Journal</a></li><li><a href="#">Case Studies</a></li><li><a href="#">Docs</a></li><li><a href="#">Privacy</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Kalman Labs</span><span class="powered-by">Powered by <strong>Tephily</strong></span></div>
    </div>
  </footer>

  <div class="modal-overlay" id="bookingModal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal">&times;</button>
      <div class="modal-icon-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
      <h3>Let's Talk</h3>
      <p>Call us to discuss automation for your business.</p>
      <a href="tel:+918000012306" class="modal-phone-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 80000 12306</a>
    </div>
  </div>
`;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('active'));

const modal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
document.querySelectorAll('.btn-book').forEach(btn => btn.addEventListener('click', () => modal.classList.add('active')));
closeModal?.addEventListener('click', () => modal.classList.remove('active'));
modal?.addEventListener('click', (e) => e.target === modal && modal.classList.remove('active'));
