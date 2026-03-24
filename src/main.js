import './style.css';

const blogPostsPreview = [
  {
    title: "Boring manual operations are killing SMB/SMEs in modern AI world",
    excerpt: "Why manual data entry and clunky workflows are actively bleeding revenue from small to medium businesses in the age of AI.",
    date: "Mar 24, 2026",
    id: "manual-operations",
    color: "var(--blue-100)",
    gradient: "linear-gradient(135deg, #DBEAFE, #E0E7FF)"
  },
  {
    title: "MNCs are killing it in tech, while small businesses are dying due to same old boring tech",
    excerpt: "The tech divide is widening. Here is how local businesses can leverage enterprise-grade automation to level the playing field.",
    date: "Mar 18, 2026",
    id: "tech-divide",
    color: "var(--purple-100)",
    gradient: "linear-gradient(135deg, #EDE9FE, #FDF2F8)"
  },
  {
    title: "Automation is not a choice, but a need for businesses dependent on operations",
    excerpt: "Survival in the modern era demands systemic automation to manage complexity. Here is why it is non-negotiable.",
    date: "Mar 12, 2026",
    id: "automation-necessity",
    color: "var(--emerald-100)",
    gradient: "linear-gradient(135deg, #D1FAE5, #ECFDF5)"
  }
];

document.querySelector('#app').innerHTML = `
  <!-- ═══ NAVBAR ═══ -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <div class="logo-icon">AK</div>
        AK Automations
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#about">About</a>
        <a href="#solutions">Solutions</a>
        <a href="#why">Why Us</a>
        <a href="/blog.html">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Book a Meeting</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ═══ HERO ═══ -->
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-content">
        <div class="badge badge-brand"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"/></svg> The Automation Engine</div>
        <h1>Your Business Runs on Chaos <span class="text-gradient">We Automate the Fix</span></h1>
        <p>We build enterprise-grade AI software that automates operations, sales, and management for businesses. Stop revenue leakage. Scale efficiently. Outperform the competition.</p>
        <div class="hero-actions">
          <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()">Book a Free Consultation →</a>
          <a href="#solutions" class="btn btn-secondary">See Our Solutions</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-blob"></div>
        <div class="hero-float-card">
          <div class="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>
          <div>
            <div style="font-weight: 600;">Inventory Automated</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">98% accuracy</div>
          </div>
        </div>
        <div class="hero-float-card">
          <div class="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg></div>
          <div>
            <div style="font-weight: 600;">AI Agent Active</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">24/7 operations</div>
          </div>
        </div>
        <div class="hero-float-card">
          <div class="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
          <div>
            <div style="font-weight: 600;">Revenue Recovered</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">₹12L saved/yr</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ STATS BAR ═══ -->
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item reveal">
          <h3><span>500+</span></h3>
          <p>Businesses Automated</p>
        </div>
        <div class="stat-item reveal reveal-delay-1">
          <h3><span>8+</span></h3>
          <p>Software Products</p>
        </div>
        <div class="stat-item reveal reveal-delay-2">
          <h3><span>AI</span>-First</h3>
          <p>Engineering Approach</p>
        </div>
        <div class="stat-item reveal reveal-delay-3">
          <h3><span>100%</span></h3>
          <p>Enterprise-Grade</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ ABOUT / MISSION ═══ -->
  <section class="section about-section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-text reveal">
          <div class="badge badge-brand" style="margin-bottom: 16px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Our Mission</div>
          <h2>The Industrial Revolution 4.0 Must Reach <span class="text-gradient">Every Business</span></h2>
          <p>Most businesses still run on outdated manual processes while the market moves at AI speed. We are here to change that. We believe that automation is not a choice, but a survival requirement.</p>
          <p>We are becoming the brand in automation engines, building the tools that empower businesses of every size to operate at peak efficiency using the latest AI, frameworks, and models.</p>
        </div>
        <div class="about-pillars reveal reveal-delay-2">
          <div class="pillar-card">
            <div class="pillar-icon" style="background: var(--blue-100); color: var(--blue-600);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
            <h4>Automate Everything</h4>
            <p>Eliminating boring manual processes in operations, sales, and management.</p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon" style="background: var(--purple-100); color: var(--purple-600);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h4>Enterprise-Grade Software</h4>
            <p>User-friendly yet powerful software built for real business scale.</p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon" style="background: var(--emerald-100); color: var(--emerald-500);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
            <h4>Brand in Automation</h4>
            <p>Building the most trusted name in business automation engines.</p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon" style="background: var(--orange-100); color: var(--orange-500);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg></div>
            <h4>Scalable Architecture</h4>
            <p>Software built to grow with your business from day one to enterprise scale.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ SOLUTIONS ═══ -->
  <section class="section solutions-section" id="solutions">
    <div class="container">
      <div class="section-header">
        <div class="badge badge-brand"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> What We Build</div>
        <h2>Powerful Software for <span class="text-gradient">Modern Businesses</span></h2>
        <p>From inventory to AI agents, we cover the full spectrum of enterprise automation needs.</p>
      </div>
      <div class="solutions-grid">
        <div class="solution-card reveal">
          <div class="solution-icon icon-blue"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>
          <h3>Inventory Management</h3>
          <p>Streamlined real-time stock control, logistics tracking, and warehouse automation that eliminates manual counting and human errors.</p>
        </div>
        <div class="solution-card reveal reveal-delay-1">
          <div class="solution-icon icon-purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M12 18v4"/></svg></div>
          <h3>Private Local SLMs</h3>
          <p>Secure, on-premise Small Language Models deployed locally for enterprises. Your data never leaves your infrastructure.</p>
        </div>
        <div class="solution-card reveal reveal-delay-2">
          <div class="solution-icon icon-emerald"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg></div>
          <h3>AI Agents & KB Chatbots</h3>
          <p>Intelligent conversational agents that automate customer support, internal queries, and knowledge management 24/7.</p>
        </div>
        <div class="solution-card reveal reveal-delay-3">
          <div class="solution-icon icon-orange"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
          <h3>Sales Optimization</h3>
          <p>Data-driven applications that analyze sales patterns, forecast revenue, and accelerate deal closures with AI insights.</p>
        </div>
        <div class="solution-card reveal">
          <div class="solution-icon icon-rose"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
          <h3>AI Lead Management</h3>
          <p>Intelligently qualify, score, and route leads using predictive AI algorithms. Never miss a high-value opportunity again.</p>
        </div>
        <div class="solution-card reveal reveal-delay-1">
          <div class="solution-icon icon-blue"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h4"/><path d="M10 16h4"/></svg></div>
          <h3>CRM & Contract Intelligence</h3>
          <p>AI-powered reconciliation between legal contracts and billing systems to identify and stop revenue leakage instantly.</p>
        </div>
        <div class="solution-card reveal reveal-delay-2">
          <div class="solution-icon icon-purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
          <h3>Compliance & Risk Management</h3>
          <p>Robust regulatory compliance monitoring, automated auditing, and risk detection tailored for fintech and enterprises.</p>
        </div>
        <div class="solution-card reveal reveal-delay-3">
          <div class="solution-icon icon-emerald"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>Custom SMB/SME Software</h3>
          <p>Bespoke software solutions built from scratch to replace legacy systems and unlock operational efficiency for your unique needs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ WHY CHOOSE US ═══ -->
  <section class="section why-section" id="why">
    <div class="container">
      <div class="section-header">
        <div class="badge badge-brand"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Why AK Automations</div>
        <h2>Built Different. <span class="text-gradient">Built Better.</span></h2>
        <p>We are not just another software vendor. We are your automation partner.</p>
      </div>
      <div class="why-grid why-grid-5">
        <div class="why-card reveal">
          <div class="why-icon" style="background: var(--blue-100); color: var(--blue-600);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></div>
          <h3>AI-First Engineering</h3>
          <p>Every product is built with AI at the core, not bolted on as an afterthought. We use the latest models, agents, and frameworks.</p>
        </div>
        <div class="why-card reveal reveal-delay-1">
          <div class="why-icon" style="background: var(--emerald-100); color: var(--emerald-500);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>User-Friendly Design</h3>
          <p>Intuitive, easy-to-use interfaces that require zero training. Your team adopts the software on day one without friction.</p>
        </div>
        <div class="why-card reveal reveal-delay-2">
          <div class="why-icon" style="background: var(--purple-100); color: var(--purple-600);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
          <h3>Revenue Impact Focus</h3>
          <p>We deliver measurable business outcomes: cost savings, revenue recovery, and accelerated growth, not just software.</p>
        </div>
        <div class="why-card reveal reveal-delay-3">
          <div class="why-icon" style="background: var(--orange-100); color: var(--orange-500);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3>Instant Dev & Enhancement Support</h3>
          <p>Dedicated developer support for rapid fixes, feature enhancements, and continuous improvement. We are always one call away.</p>
        </div>
        <div class="why-card reveal reveal-delay-4">
          <div class="why-icon" style="background: var(--rose-100); color: var(--rose-500);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
          <h3>Enterprise-Grade Security</h3>
          <p>Private deployments, local SLMs, and full data sovereignty. Your data stays within your infrastructure, always.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIALS ═══ -->
  <section class="section testimonials-section">
    <div class="container">
      <div class="section-header">
        <div class="badge badge-brand"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg> What Our Clients Say</div>
        <h2>Trusted by <span class="text-gradient">500+ Businesses</span></h2>
        <p>From startups to established enterprises, we have helped businesses eliminate inefficiency and scale.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"AK Automations completely transformed our inventory workflow. What used to take our team 6 hours daily now runs automatically with near-zero errors. The ROI was visible within the first month."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: var(--gradient-brand);">RS</div>
            <div>
              <div class="testimonial-name">Rajesh Sharma</div>
              <div class="testimonial-role">COO, NexGen Logistics</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-1">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Their AI agents handle 80% of our customer queries now. The implementation was seamless, the support team is incredibly responsive, and the software just works beautifully."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: linear-gradient(135deg, var(--emerald-500), var(--blue-500));">PM</div>
            <div>
              <div class="testimonial-name">Priya Menon</div>
              <div class="testimonial-role">Head of Operations, FinStack</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-2">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"We were losing lakhs in revenue leakage from contract mismatches. Their CRM Intelligence tool identified discrepancies we had missed for years. Absolute game changer."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: linear-gradient(135deg, var(--purple-500), var(--rose-500));">AK</div>
            <div>
              <div class="testimonial-name">Amit Kapoor</div>
              <div class="testimonial-role">CFO, TradeBridge India</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-3">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"The custom software they built for our manufacturing unit replaced three legacy systems. Our team adopted it on day one, no training needed. The user experience is phenomenal."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: linear-gradient(135deg, var(--orange-500), var(--rose-500));">VR</div>
            <div>
              <div class="testimonial-name">Vikram Reddy</div>
              <div class="testimonial-role">Founder, AutoParts Pro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ CTA / BOOK MEETING ═══ -->
  <section class="cta-section" id="contact">
    <div class="container">
      <h2>Ready to Automate Your Business?</h2>
      <p>Book a free consultation and discover how we can eliminate your manual bottlenecks and unlock growth.</p>
      <a href="#" class="btn btn-book" onclick="event.preventDefault()">Book a Free Meeting →</a>
    </div>
  </section>

  <!-- ═══ BLOG PREVIEW ═══ -->
  <section class="section blog-section" id="blog">
    <div class="container">
      <div class="section-header">
        <div class="badge badge-brand"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg> The Automation Journal</div>
        <h2>Insights & <span class="text-gradient">Perspectives</span></h2>
        <p>Our takes on why automation is the lifeline for modern businesses.</p>
      </div>
      <div class="blog-grid">
        ${blogPostsPreview.map(post => `
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
      <div class="blog-view-all">
        <a href="/blog.html" class="btn btn-secondary">View All Articles →</a>
      </div>
    </div>
  </section>

  <!-- ═══ FOOTER ═══ -->
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
            <li><a href="#solutions">Inventory Management</a></li>
            <li><a href="#solutions">AI Agents</a></li>
            <li><a href="#solutions">Sales Optimization</a></li>
            <li><a href="#solutions">CRM Intelligence</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
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
        </div>
          <span class="powered-by">Powered by <strong>Tephily</strong></span>
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

// ── Scroll Reveal Animation ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Navbar Scroll Effect ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Mobile Nav Toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ── Booking Modal Logic ──
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
