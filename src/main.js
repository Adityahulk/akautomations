import './style.css';

const blogPostsPreview = [
  {
    title: "Manual Ops Are Killing SMBs in the AI Era",
    excerpt: "Why legacy workflows drain revenue from modern businesses.",
    date: "Mar 24, 2026",
    id: "manual-operations"
  },
  {
    title: "The Tech Divide: MNCs vs Small Business",
    excerpt: "How local businesses can level the playing field with automation.",
    date: "Mar 18, 2026",
    id: "tech-divide"
  },
  {
    title: "Automation: No Longer Optional",
    excerpt: "Survival demands systemic automation. Here's why.",
    date: "Mar 12, 2026",
    id: "automation-necessity"
  }
];

document.querySelector('#app').innerHTML = `
  <!-- ═══ NAVBAR ═══ -->
  <nav class="navbar" id="navbar" data-testid="navbar">
    <div class="nav-inner">
      <a href="/" class="nav-brand" data-testid="nav-brand">
        <div class="logo-icon">AK</div>
        AK Automations
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#about" data-testid="nav-about">About</a>
        <a href="#solutions" data-testid="nav-solutions">Solutions</a>
        <a href="#why" data-testid="nav-why">Why Us</a>
        <a href="/blog.html" data-testid="nav-blog">Blog</a>
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="nav-book-btn">Get Started</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" data-testid="nav-toggle">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ═══ HERO ═══ -->
  <section class="hero" id="hero" data-testid="hero-section">
    <div id="particles-hero"></div>
    <div class="hero-content">
      <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> Next-Gen Automation</div>
      <h1>Automate Chaos.<br/><span class="text-gradient">Scale Without Limits.</span></h1>
      <p>Enterprise-grade AI software that eliminates manual bottlenecks. Stop revenue leakage. Outperform competition.</p>
      <div class="hero-actions">
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="hero-cta-btn">Book Free Consultation</a>
        <a href="#solutions" class="btn btn-secondary" data-testid="hero-solutions-btn">Explore Solutions</a>
      </div>
    </div>
  </section>

  <!-- ═══ STATS BAR ═══ -->
  <section class="stats-bar" data-testid="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item reveal" data-testid="stat-businesses">
          <h3>500+</h3>
          <p>Businesses Automated</p>
        </div>
        <div class="stat-item reveal reveal-delay-1" data-testid="stat-products">
          <h3>8+</h3>
          <p>Software Products</p>
        </div>
        <div class="stat-item reveal reveal-delay-2" data-testid="stat-approach">
          <h3>AI-First</h3>
          <p>Engineering</p>
        </div>
        <div class="stat-item reveal reveal-delay-3" data-testid="stat-grade">
          <h3>100%</h3>
          <p>Enterprise-Grade</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ ABOUT ═══ -->
  <section class="section about-section" id="about" data-testid="about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-text reveal">
          <div class="badge" style="margin-bottom: 20px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Our Mission</div>
          <h2>Industrial Revolution 4.0 for <span class="text-gradient">Every Business</span></h2>
          <p>While the market moves at AI speed, most businesses are stuck in the past. We deliver the automation toolkit that levels the playing field.</p>
          <p>Building the most trusted automation engines using cutting-edge AI, frameworks, and models.</p>
        </div>
        <div class="about-pillars reveal reveal-delay-2">
          <div class="pillar-card" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.15">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
            <h4>Automate Everything</h4>
            <p>Eliminate manual processes in ops, sales & management.</p>
          </div>
          <div class="pillar-card" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.15">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h4>Enterprise-Grade</h4>
            <p>User-friendly yet powerful. Built for real scale.</p>
          </div>
          <div class="pillar-card" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.15">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg></div>
            <h4>Trusted Brand</h4>
            <p>Becoming the name in business automation.</p>
          </div>
          <div class="pillar-card" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.15">
            <div class="pillar-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg></div>
            <h4>Infinite Scale</h4>
            <p>Built to grow with you from day one.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ SOLUTIONS ═══ -->
  <section class="section solutions-section" id="solutions" data-testid="solutions-section">
    <div class="container">
      <div class="section-header">
        <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> What We Build</div>
        <h2>Powerful Software for <span class="text-gradient">Modern Business</span></h2>
        <p>From inventory to AI agents — full spectrum enterprise automation.</p>
      </div>
      <div class="solutions-grid">
        <div class="solution-card reveal" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-inventory">
          <div class="solution-icon icon-cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>
          <h3>Inventory Management</h3>
          <p>Real-time stock control, logistics tracking & warehouse automation. Zero manual counting.</p>
        </div>
        <div class="solution-card reveal reveal-delay-1" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-slm">
          <div class="solution-icon icon-violet"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg></div>
          <h3>Private SLMs</h3>
          <p>On-premise AI models. Your data never leaves.</p>
        </div>
        <div class="solution-card reveal reveal-delay-2" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-agents">
          <div class="solution-icon icon-cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg></div>
          <h3>AI Agents</h3>
          <p>24/7 intelligent automation for support & queries.</p>
        </div>
        <div class="solution-card reveal reveal-delay-3" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-sales">
          <div class="solution-icon icon-pink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
          <h3>Sales Optimization</h3>
          <p>AI insights that forecast & accelerate deals.</p>
        </div>
        <div class="solution-card reveal" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-leads">
          <div class="solution-icon icon-violet"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
          <h3>AI Lead Management</h3>
          <p>Qualify, score & route leads with predictive AI.</p>
        </div>
        <div class="solution-card reveal reveal-delay-1" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-crm">
          <div class="solution-icon icon-cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></div>
          <h3>CRM Intelligence</h3>
          <p>AI-powered contract reconciliation. Stop revenue leakage.</p>
        </div>
        <div class="solution-card reveal reveal-delay-2" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-compliance">
          <div class="solution-icon icon-pink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
          <h3>Compliance & Risk</h3>
          <p>Automated auditing & regulatory monitoring.</p>
        </div>
        <div class="solution-card reveal reveal-delay-3" data-tilt data-tilt-max="6" data-tilt-speed="400" data-testid="solution-custom">
          <div class="solution-icon icon-violet"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>Custom Solutions</h3>
          <p>Bespoke software to replace legacy systems. Built for your unique needs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ WHY US ═══ -->
  <section class="section why-section" id="why" data-testid="why-section">
    <div class="container">
      <div class="section-header">
        <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Why AK Automations</div>
        <h2>Built Different. <span class="text-gradient">Built Better.</span></h2>
        <p>Not just software. Your automation partner.</p>
      </div>
      <div class="why-grid why-grid-5">
        <div class="why-card reveal" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1" data-testid="why-ai">
          <div class="why-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></div>
          <h3>AI-First Engineering</h3>
          <p>AI at the core, not bolted on. Latest models & frameworks.</p>
        </div>
        <div class="why-card reveal reveal-delay-1" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1" data-testid="why-ux">
          <div class="why-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>Zero Training UX</h3>
          <p>Intuitive interfaces. Team adopts day one.</p>
        </div>
        <div class="why-card reveal reveal-delay-2" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1" data-testid="why-revenue">
          <div class="why-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
          <h3>Revenue Impact Focus</h3>
          <p>Measurable outcomes: cost savings & growth.</p>
        </div>
        <div class="why-card reveal reveal-delay-3" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1" data-testid="why-support">
          <div class="why-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3>Instant Dev Support</h3>
          <p>Rapid fixes & enhancements. One call away.</p>
        </div>
        <div class="why-card reveal reveal-delay-4" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1" data-testid="why-security">
          <div class="why-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
          <h3>Enterprise Security</h3>
          <p>Private deployments. Full data sovereignty.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIALS ═══ -->
  <section class="section testimonials-section" data-testid="testimonials-section">
    <div class="container">
      <div class="section-header">
        <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg> Testimonials</div>
        <h2>Trusted by <span class="text-gradient">500+ Businesses</span></h2>
        <p>From startups to enterprises — eliminating inefficiency at scale.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card reveal" data-testid="testimonial-1">
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
        <div class="testimonial-card reveal reveal-delay-1" data-testid="testimonial-2">
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
        <div class="testimonial-card reveal reveal-delay-2" data-testid="testimonial-3">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Identified revenue leakage we'd missed for years. Absolute game changer."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">AK</div>
            <div>
              <div class="testimonial-name">Amit Kapoor</div>
              <div class="testimonial-role">CFO, TradeBridge India</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-3" data-testid="testimonial-4">
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

  <!-- ═══ CTA ═══ -->
  <section class="cta-section" id="contact" data-testid="cta-section">
    <div id="particles-cta"></div>
    <div class="container">
      <h2>Ready to <span class="text-gradient">Automate</span>?</h2>
      <p>Book a free consultation. Discover how we eliminate bottlenecks and unlock growth.</p>
      <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="cta-book-btn">Book Free Meeting</a>
    </div>
  </section>

  <!-- ═══ BLOG PREVIEW ═══ -->
  <section class="section blog-section" id="blog" data-testid="blog-section">
    <div class="container">
      <div class="section-header">
        <div class="badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg> Insights</div>
        <h2>The Automation <span class="text-gradient">Journal</span></h2>
        <p>Perspectives on why automation is the lifeline for modern business.</p>
      </div>
      <div class="blog-grid">
        ${blogPostsPreview.map((post, i) => `
          <a href="/post.html?id=${post.id}" class="blog-card reveal ${i > 0 ? 'reveal-delay-' + i : ''}" data-testid="blog-card-${post.id}">
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
        <a href="/blog.html" class="btn btn-secondary" data-testid="view-all-articles">View All Articles</a>
      </div>
    </div>
  </section>

  <!-- ═══ FOOTER ═══ -->
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
            <a href="#" aria-label="Twitter" data-testid="social-twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn" data-testid="social-linkedin">in</a>
            <a href="#" aria-label="GitHub" data-testid="social-github">⌘</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#solutions">Inventory</a></li>
            <li><a href="#solutions">AI Agents</a></li>
            <li><a href="#solutions">Sales Optimization</a></li>
            <li><a href="#solutions">CRM Intelligence</a></li>
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
        <span>© 2026 AK Automations. All rights reserved.</span>
        <span class="powered-by">Powered by <strong>Tephily</strong></span>
      </div>
    </div>
  </footer>

  <!-- ═══ BOOKING MODAL ═══ -->
  <div class="modal-overlay" id="bookingModal" data-testid="booking-modal">
    <div class="modal-content">
      <button class="modal-close" id="closeModal" data-testid="modal-close-btn">&times;</button>
      <div class="modal-icon-wrapper">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <h3>Let's Talk Automation</h3>
      <p>Call us to discuss how we can eliminate bottlenecks and unlock growth.</p>
      <a href="tel:+917977713281" class="modal-phone-btn" data-testid="modal-phone-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +91 79777 13281
      </a>
    </div>
  </div>
`;

// ═══ INITIALIZATION ═══

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
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

// ═══ PARTICLES (tsParticles) ═══
function initParticles() {
  if (typeof tsParticles !== 'undefined') {
    const particleConfig = {
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: ["#00F0FF", "#8A2BE2"] },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 2, random: true },
        links: {
          enable: true,
          distance: 150,
          color: "#00F0FF",
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.4 } }
        }
      },
      detectRetina: true
    };

    if (document.getElementById('particles-hero')) {
      tsParticles.load('particles-hero', particleConfig);
    }
    if (document.getElementById('particles-cta')) {
      tsParticles.load('particles-cta', { ...particleConfig, particles: { ...particleConfig.particles, number: { value: 40 } } });
    }
  }
}

// ═══ SMOOTH SCROLL (Lenis) ═══
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

// ═══ TILT EFFECT (Vanilla Tilt) ═══
function initTilt() {
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }
}

// ═══ GSAP ANIMATIONS ═══
function initGSAP() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero content animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    });

    // Stats counter animation
    gsap.utils.toArray('.stat-item h3').forEach(stat => {
      gsap.from(stat, {
        scrollTrigger: { trigger: stat, start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  }
}

// Initialize all on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initLenis();
  initTilt();
  initGSAP();
});

// Also try init after a short delay (for CDN scripts that load async)
setTimeout(() => {
  initParticles();
  initLenis();
  initTilt();
  initGSAP();
}, 500);
