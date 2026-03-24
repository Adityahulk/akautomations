import './style.css';

const blogPosts = {
  "manual-operations": { title: "Manual Ops Are Killing SMBs", date: "Mar 24, 2026", tag: "Operations", content: `<p>SMEs are the backbone of every economy. Yet many still run on spreadsheets and legacy systems.</p><h2>The Hidden Cost</h2><p>Manual data entry has 1-4% error rate. At 100 invoices daily, that's thousands in reconciliation nightmares.</p><blockquote>The businesses that survive won't be the biggest. They'll be the most automated.</blockquote><h2>AI is Now</h2><p>MNCs use AI for support, demand forecasting, contracts. The question: can SMBs afford NOT to automate?</p>` },
  "tech-divide": { title: "The Tech Divide", date: "Mar 18, 2026", tag: "Industry", content: `<p>Fortune 500: real-time dashboards, AI assistants. Typical SME: Excel, WhatsApp, manual reconciliation.</p><h2>The Chasm Widens</h2><p>MNCs invest billions in digital transformation. SMEs need affordable, simple solutions.</p><blockquote>The tech divide is about operational excellence, not just tools.</blockquote>` },
  "automation-necessity": { title: "Automation: No Longer Optional", date: "Mar 12, 2026", tag: "Automation", content: `<p>If your business relies on operations, manual management creates compounding errors.</p><h2>Automation = Survival</h2><p>Data integrity, predictive insights, instant execution. Not a luxury—a fundamental need.</p><blockquote>In the AI age, manual operations are a competitive liability.</blockquote>` },
  "industrial-revolution": { title: "Industry 4.0 at Ground Level", date: "Mar 05, 2026", tag: "Vision", content: `<p>AI, IoT, cognitive computing reshape work. But benefits stay at the top.</p><h2>Democratizing Industry 4.0</h2><p>Bring the revolution to local manufacturers, mid-sized logistics, regional providers.</p><blockquote>True revolution empowers every business, regardless of size.</blockquote>` },
  "prevent-monopoly": { title: "Tech vs MNC Monopoly", date: "Feb 28, 2026", tag: "Strategy", content: `<p>MNCs automate, reduce costs, scale, squeeze competitors. They win through efficiency.</p><h2>Level the Field</h2><p>Through AI agents and intelligent CRM, SMEs match operational output without matching budgets.</p><blockquote>You don't need a billion-dollar budget. You need smart automation.</blockquote>` },
  "manufacturing-automation": { title: "India's Manufacturing Future", date: "Feb 21, 2026", tag: "Manufacturing", content: `<p>India needs localized tech for its unique infrastructure and business culture.</p><h2>Built for India</h2><p>Smart inventory for multi-location warehouses, GST compliance automation—homegrown solutions.</p><blockquote>India won't become a superpower by importing Western software.</blockquote>` },
  "scaling-business": { title: "Why Cheap Labor Caps Growth", date: "Feb 14, 2026", tag: "Growth", content: `<p>Manual labor seems cost-effective. This calculation is fundamentally flawed.</p><h2>Automation Scales Infinitely</h2><p>100 invoices or 100,000—same cost. No fatigue, no errors, no sick days.</p><blockquote>Manual labor isn't cheap. It's a growth ceiling.</blockquote>` }
};

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const post = blogPosts[postId];
if (post) document.title = post.title + ' | AK Automations';

document.querySelector('#app').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand"><div class="logo-icon">AK</div>AK Automations</a>
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

  ${post ? `
    <section class="post-hero">
      <div class="container">
        <a href="/blog.html" class="post-back">← Back to Journal</a>
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
        <a href="/blog.html" class="btn btn-primary" style="margin-top: 24px;">Back to Blog</a>
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
          <div class="footer-brand"><div class="logo-icon">AK</div>AK Automations</div>
          <p>Automating the boring stuff.</p>
          <div class="footer-socials"><a href="#">𝕏</a><a href="#">in</a><a href="#">⌘</a></div>
        </div>
        <div class="footer-col"><h4>Solutions</h4><ul><li><a href="/#solutions">Inventory</a></li><li><a href="/#solutions">AI Agents</a></li><li><a href="/#solutions">Sales</a></li><li><a href="/#solutions">CRM</a></li></ul></div>
        <div class="footer-col"><h4>Company</h4><ul><li><a href="/#about">About</a></li><li><a href="/blog.html">Blog</a></li><li><a href="/#contact">Contact</a></li><li><a href="#">Careers</a></li></ul></div>
        <div class="footer-col"><h4>Resources</h4><ul><li><a href="/blog.html">Journal</a></li><li><a href="#">Case Studies</a></li><li><a href="#">Docs</a></li><li><a href="#">Privacy</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>© 2026 AK Automations</span><span class="powered-by">Powered by <strong>Tephily</strong></span></div>
    </div>
  </footer>

  <div class="modal-overlay" id="bookingModal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal">&times;</button>
      <div class="modal-icon-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
      <h3>Let's Talk</h3>
      <p>Call us to discuss automation.</p>
      <a href="tel:+917977713281" class="modal-phone-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+91 79777 13281</a>
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
