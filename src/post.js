import './style.css';
import { blogPostsById } from './blogPosts.js';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const post = blogPostsById[postId];
if (post) document.title = post.title + ' | Kalman Labs';

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

  ${post ? `
    <section class="post-hero">
      <div class="container">
        <a href="/blog" class="post-back">← Back to Journal</a>
        <h1>${post.title}</h1>
        <div class="post-meta"><span>${post.date}</span><span class="tag">${post.tag}</span></div>
      </div>
    </section>
    <div class="post-body">${post.content}</div>
  ` : `
    <section class="blog-page-hero" style="min-height: 60vh; display: flex; align-items: center;">
      <div class="container">
        <h1>Post Not Found</h1>
        <p>The article doesn't exist.</p>
        <a href="/blog" class="btn btn-primary" style="margin-top: 24px;">Back to Blog</a>
      </div>
    </section>
  `}

  <section class="cta-section" id="contact">
    <div class="container">
      <h2>Ready to <span class="text-gradient">Automate</span>?</h2>
      <p>Book a free consultation.</p>
      <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Book Free Meeting</a>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand"><div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>Kalman Labs</div>
          <p>Automating the boring stuff.</p>
        </div>
        <div class="footer-col"><h4>Solutions</h4><ul><li><span class="footer-static">Sales & Lead Optimization</span></li><li><span class="footer-static">Workflow Automation</span></li><li><span class="footer-static">Analytics & Insights</span></li><li><span class="footer-static">Operations Management Systems</span></li></ul></div>
        <div class="footer-col"><h4>Company</h4><ul><li><a href="/blog">Blog</a></li><li><a href="/privacy">Privacy</a></li></ul></div>
        <div class="footer-col"><h4>Contact</h4><ul><li><a href="tel:+918000012306">+91 80000 12306</a></li><li><a href="mailto:contact@kalman-labs.com">contact@kalman-labs.com</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Kalman Labs</span><span class="powered-by">Powered by <strong>Tephily</strong></span></div>
    </div>
  </footer>

  <div class="modal-overlay" id="bookingModal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal">&times;</button>
      <div class="modal-icon-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
      <h3>Let's Talk</h3>
      <p>Call us to discuss automation.</p>
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
