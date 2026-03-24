import './style.css';

const blogPosts = [
  {
    title: "Boring manual operations are killing SMB/SMEs in modern AI world",
    excerpt: "Why manual data entry and clunky workflows are actively bleeding revenue from small to medium businesses in the age of AI.",
    date: "Mar 24, 2026",
    id: "manual-operations",
    gradient: "linear-gradient(135deg, #DBEAFE, #E0E7FF)"
  },
  {
    title: "MNCs are killing it in tech, while small businesses are dying due to same old boring tech",
    excerpt: "The tech divide is widening. Here is how local businesses can leverage enterprise-grade automation to level the playing field.",
    date: "Mar 18, 2026",
    id: "tech-divide",
    gradient: "linear-gradient(135deg, #EDE9FE, #FDF2F8)"
  },
  {
    title: "Automation is not a choice, but a need for businesses dependent on operations and management",
    excerpt: "Survival in the modern era demands systemic automation to manage scaling complexities. Here is why it is non-negotiable.",
    date: "Mar 12, 2026",
    id: "automation-necessity",
    gradient: "linear-gradient(135deg, #D1FAE5, #ECFDF5)"
  },
  {
    title: "Tech revolution / Industrial Revolution 4.0 needs to reach at the ground level of businesses",
    excerpt: "We cannot reserve AI and advanced tech just for the top 1%. True economic growth comes from empowering ground-level businesses.",
    date: "Mar 05, 2026",
    id: "industrial-revolution",
    gradient: "linear-gradient(135deg, #FFEDD5, #FEF3C7)"
  },
  {
    title: "Only Tech automation can prevent the monopoly of MNCs / killing of SMBs",
    excerpt: "Defend your market share by matching the operational efficiency of global conglomerates without their overhead.",
    date: "Feb 28, 2026",
    id: "prevent-monopoly",
    gradient: "linear-gradient(135deg, #FFE4E6, #FDF2F8)"
  },
  {
    title: "India needs its own tech automation in manufacturing to compete with China and West",
    excerpt: "A deep dive into how localized supply chain and manufacturing software built natively for India can shift global dynamics.",
    date: "Feb 21, 2026",
    id: "manufacturing-automation",
    gradient: "linear-gradient(135deg, #DBEAFE, #D1FAE5)"
  },
  {
    title: "Manual labour and old boring tech is cheap, but modern automation is the only answer for scaling",
    excerpt: "While initial human capital seems cheaper on paper, compounding errors and bottlenecks cap real business growth permanently.",
    date: "Feb 14, 2026",
    id: "scaling-business",
    gradient: "linear-gradient(135deg, #EDE9FE, #E0E7FF)"
  }
];

document.querySelector('#app').innerHTML = `
  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <div class="logo-icon">AK</div>
        AK Automations
      </a>
      <div class="nav-links" id="navLinks">
        <a href="/#about">About</a>
        <a href="/#solutions">Solutions</a>
        <a href="/#why">Why Us</a>
        <a href="/blog.html">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Book a Meeting</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- BLOG HERO -->
  <section class="blog-page-hero">
    <div class="container">
      <div class="badge badge-brand" style="margin-bottom:16px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg> The Automation Journal</div>
      <h1>Insights & <span class="text-gradient">Perspectives</span></h1>
      <p>Our takes on why automation is the lifeline modern businesses need to survive and thrive.</p>
    </div>
  </section>

  <!-- BLOG ARCHIVE -->
  <section style="background: var(--bg-alt);">
    <div class="container">
      <div class="blog-archive-grid">
        ${blogPosts.map(post => `
          <a href="/post.html?id=${post.id}" class="blog-card reveal">
            <div class="blog-card-img" style="background: ${post.gradient};"></div>
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
  <section class="cta-section" id="contact">
    <div class="container">
      <h2>Got a Business Problem to Solve?</h2>
      <p>Let us show you how automation can transform your operations.</p>
      <a href="#" class="btn btn-book" onclick="event.preventDefault()">Book a Free Meeting →</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand">
            <div class="logo-icon">AK</div>
            AK Automations
          </div>
          <p>Automating the boring stuff so businesses can focus on what matters: growth, customers, and innovation.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">⌘</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="/#solutions">Inventory Management</a></li>
            <li><a href="/#solutions">AI Agents</a></li>
            <li><a href="/#solutions">Sales Optimization</a></li>
            <li><a href="/#solutions">CRM Intelligence</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog.html">The Automation Journal</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <span>© 2026 AK Automations. All rights reserved.</span>
          <span class="powered-by">Powered by <strong>Tephily</strong></span>
        </div>
        <span>Built with <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--rose-500)" stroke="none" style="display:inline;vertical-align:middle;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> for businesses everywhere</span>
      </div>
    </div>
  </footer>

  <!-- ═══ BOOKING MODAL ═══ -->
  <div class="modal-overlay" id="bookingModal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal">&times;</button>
      <div class="modal-icon-wrapper">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <h3>Let's Talk Automation</h3>
      <p>Give us a call to discuss how we can help your business eliminate manual bottlenecks and unlock growth.</p>
      <a href="tel:+917977713281" class="modal-phone-btn">
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

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// Booking Modal Logic
setTimeout(() => {
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
}, 100);
