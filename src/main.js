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
        <a href="#projects">Projects</a>
        <a href="#why">Why Us</a>
        <a href="/blog">Blog</a>
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
        <span class="text-reveal hero-title-setup"><span class="text-reveal-inner">Automate your business with</span></span><br/>
        <span class="text-reveal hero-title-payoff"><span class="text-reveal-inner" style="animation-delay:0.35s">easy to use solutions</span></span>
      </h1>
      <p class="hero-sub">AI-powered systems built for how businesses actually work.</p>
      <div class="hero-actions">
        <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="hero-cta">Book a Free Call</a>
        <a href="#projects" class="btn btn-secondary" data-testid="hero-solutions">View Projects</a>
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
          <h3><span class="stat-number" data-target="45">0</span>K+</h3>
          <p>Minutes AI-Processed</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-number" data-target="8">0</span>+</h3>
          <p>AI Systems Shipped</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-number" data-target="6">0</span>+</h3>
          <p>Enterprise Clients</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-number" data-target="6">0</span></h3>
          <p>Published Research Papers</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="section projects-section" id="projects" data-testid="projects-section">
    <div class="container">
      <div class="section-header">
        <h2>What We've <span class="text-gradient">Shipped</span></h2>
        <p>Complex AI systems built for real businesses. Not prototypes — production.</p>
      </div>

      <!-- Featured Projects (2 large) -->
      <div class="projects-featured">
        <div class="project-card project-card--featured project-card--gold reveal">
          <div class="shine"></div>
          <div class="project-badge project-badge--gold">Client Project · Private</div>
          <span class="project-num project-num--gold">01 — Legal AI Platform</span>
          <h3>AI Legal Intelligence Platform — US Law Firms</h3>
          <p class="project-desc">Full-stack AI legal platform for US law firms. <strong>Product 1 — Contract Comparison:</strong> Automated clause-level diff engine using LLM-as-Judge reasoning to catch semantic deviations keyword diff misses. <strong>Product 2 — AI Legal Assistant:</strong> Agentic multi-role platform with LangGraph triage → research → draft workflow. Supports public LLM or fully on-premise private SLM deployment for attorney-client privilege.</p>
          <div class="project-tags">
            <span class="project-tag project-tag--gold">LangGraph Agents</span>
            <span class="project-tag project-tag--gold">Graph-RAG / Neo4j</span>
            <span class="project-tag project-tag--gold">LLM-as-Judge</span>
            <span class="project-tag project-tag--gold">Weaviate</span>
            <span class="project-tag project-tag--gold">Cohere Rerank</span>
            <span class="project-tag project-tag--gold">FastAPI</span>
            <span class="project-tag project-tag--gold">K8s / AWS</span>
          </div>
          <a href="https://legal-design.kalman-labs.com/" class="project-link project-link--gold" target="_blank" rel="noopener noreferrer">System Design Docs</a>
        </div>

        <div class="project-card project-card--featured project-card--rust reveal reveal-delay-1">
          <div class="shine"></div>
          <div class="project-badge project-badge--rust"><span class="pulse-dot"></span> DeepTech · In Development</div>
          <span class="project-num project-num--rust">02 — Longevity AI Platform</span>
          <h3>Tessera — AI-Driven Longevity & Biomarker Platform</h3>
          <p class="project-desc">Deep-tech longevity platform building personalised health-extension programs from a 56-marker biomarker panel. AI engine calculates biological age via Levine PhenoAge formula, then outputs a four-lever protocol — nutrition, training, recovery, supplementation. AI + doctor hybrid workflow with 90-day tracking cycles and re-assessment loops.</p>
          <div class="project-tags">
            <span class="project-tag project-tag--rust">PhenoAge Algorithm</span>
            <span class="project-tag project-tag--rust">Biomarker Intelligence</span>
            <span class="project-tag project-tag--rust">56-Marker Panel</span>
            <span class="project-tag project-tag--rust">AI Protocol Engine</span>
            <span class="project-tag project-tag--rust">Doctor-AI Workflow</span>
          </div>
          <a href="https://tessera.kalman-labs.com/tessera-rulebook" class="project-link project-link--rust" target="_blank" rel="noopener noreferrer">Platform Rulebook</a>
        </div>
      </div>

      <!-- Regular Projects Grid (4 cards) -->
      <div class="projects-grid">
        <div class="project-card project-card--cyan reveal">
          <div class="shine"></div>
          <span class="project-num project-num--cyan">03 — AI Video Engine</span>
          <h3>VidSimplify — Manim AI Animation Engine</h3>
          <div class="project-metrics">
            <div class="project-metric"><div class="project-metric-val">15K+</div><div class="project-metric-label">Minutes Generated</div></div>
            <div class="project-metric"><div class="project-metric-val">1K+</div><div class="project-metric-label">Users</div></div>
            <div class="project-metric"><div class="project-metric-val">4</div><div class="project-metric-label">Enterprise</div></div>
          </div>
          <p class="project-desc">AI video production engine converting natural language to polished Manim animations via Reflexion-style multi-step LLM reasoning. Async GPU-backed rendering with job resumption and intelligent caching.</p>
          <div class="project-tags">
            <span class="project-tag project-tag--cyan">Reflexion Agent</span>
            <span class="project-tag project-tag--cyan">DeepSeek</span>
            <span class="project-tag project-tag--cyan">Manim</span>
            <span class="project-tag project-tag--cyan">Async GPU</span>
          </div>
        </div>

        <div class="project-card project-card--indigo reveal reveal-delay-1">
          <div class="shine"></div>
          <span class="project-num project-num--indigo">04 — Video Intelligence</span>
          <h3>AI Viral Clip Intelligence Engine</h3>
          <div class="project-metrics">
            <div class="project-metric"><div class="project-metric-val">30K+</div><div class="project-metric-label">Minutes Processed</div></div>
          </div>
          <p class="project-desc">Production video intelligence backend — ingests hour-long videos, surfaces highest-engagement clips using ML virality scoring, auto subtitle generation, and multilingual dubbing with voice synthesis.</p>
          <div class="project-tags">
            <span class="project-tag project-tag--indigo">Virality Scoring</span>
            <span class="project-tag project-tag--indigo">Whisper / ASR</span>
            <span class="project-tag project-tag--indigo">Multilingual TTS</span>
            <span class="project-tag project-tag--indigo">Distributed Workers</span>
          </div>
        </div>

        <div class="project-card project-card--emerald reveal reveal-delay-2">
          <div class="shine"></div>
          <span class="project-num project-num--emerald">05 — EdTech AI</span>
          <h3>Knewbit Max — Adaptive AI Learning Platform</h3>
          <p class="project-desc">Personalized learning platform powered by Google Gemini LearnLM. Socratic tutoring methodology, multilingual video dubbing, auto-generated adaptive flashcards, and skill-graph-aware course recommendations.</p>
          <div class="project-tags">
            <span class="project-tag project-tag--emerald">Gemini LearnLM</span>
            <span class="project-tag project-tag--emerald">Socratic AI</span>
            <span class="project-tag project-tag--emerald">Recommendation Engine</span>
            <span class="project-tag project-tag--emerald">Adaptive Learning</span>
          </div>
        </div>

        <div class="project-card project-card--violet reveal reveal-delay-3">
          <div class="shine"></div>
          <span class="project-num project-num--violet">06 — Medical AI</span>
          <h3>Handwritten Prescription OCR & Clinical AI</h3>
          <p class="project-desc">Production-grade OCR for handwritten Indian prescriptions. Multi-model benchmarking (MiniCPM-V, Gemini Vision, LLaMA). Extended into Docmate — a multimodal medical chatbot for prescriptions, lab reports, and imaging.</p>
          <div class="project-tags">
            <span class="project-tag project-tag--violet">MiniCPM-V</span>
            <span class="project-tag project-tag--violet">Gemini Vision</span>
            <span class="project-tag project-tag--violet">HuaTuo-GPT</span>
            <span class="project-tag project-tag--violet">Clinical NLP</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY US -->
  <section class="section why-section" id="why" data-testid="why-section">
    <div class="container">
      <div class="section-header">
        <h2>Built Different. <span class="text-gradient">Built Better.</span></h2>
        <p>Five reasons businesses choose Kalman Labs for complex AI.</p>
      </div>
      <div class="why-grid why-grid-5">
        <div class="why-card reveal">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg></div>
          <h3>Mobile Friendly Solutions</h3>
          <p>Mobile-first interfaces your team can use, no desktop required.</p>
        </div>
        <div class="why-card reveal reveal-delay-1">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg></div>
          <h3>Every Repetitive Task, Automated</h3>
          <p>Follow-ups, reports, data entry, approvals, we automate it all.</p>
        </div>
        <div class="why-card reveal reveal-delay-2">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg></div>
          <h3>Production-Grade Systems</h3>
          <p>Not demos or prototypes. We ship systems that handle real load, real users, real data.</p>
        </div>
        <div class="why-card reveal reveal-delay-3">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></div>
          <h3>Research-Backed AI</h3>
          <p>6 published papers in speech & signal ML. Our AI is grounded in research, not marketing.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3>One Call Away, Always</h3>
          <p>Dedicated support - not a ticket queue. We move as fast as you do.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section testimonials-section" data-testid="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>Trusted by <span class="text-gradient">Industry Leaders</span></h2>
        <p>From legal firms to healthcare startups.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Their AI contract analysis tool catches semantic deviations our paralegals missed. Document review time dropped 70%."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">JM</div>
            <div>
              <div class="testimonial-name">James Mitchell</div>
              <div class="testimonial-role">Managing Partner, Mitchell & Associates</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-1">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"15,000 minutes of AI-generated animation — and they built the entire pipeline from scratch. Seriously impressive engineering."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">SK</div>
            <div>
              <div class="testimonial-name">Sanjay Kumar</div>
              <div class="testimonial-role">CTO, EduVision Media</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-2">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"The biomarker intelligence engine they built interprets 56 markers and generates personalised protocols. No other vendor came close."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">DR</div>
            <div>
              <div class="testimonial-name">Dr. Rajan Mehta</div>
              <div class="testimonial-role">Chief Medical Officer, Tessera Health</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card reveal reveal-delay-3">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Processed 30K+ video minutes, multi-language dubbing, engagement scoring — all automated. Our content pipeline is unrecognisable now."</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">AK</div>
            <div>
              <div class="testimonial-name">Anita Kapoor</div>
              <div class="testimonial-role">VP Content, StreamFlow Digital</div>
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
      <h2>Build something <span class="text-gradient">complex.</span></h2>
      <p>Got a hard AI problem? Multi-agent systems, production ML, custom intelligence — let's talk.</p>
      <a href="#" class="btn btn-primary btn-book" onclick="event.preventDefault()" data-testid="cta-book">Book Free Meeting</a>
    </div>
  </section>

  <!-- BLOG -->
  <section class="section blog-section" id="blog" data-testid="blog-section">
    <div class="container">
      <div class="section-header">
        <h2>From the <span class="text-gradient">Journal</span></h2>
        <p>Perspectives on modern business automation.</p>
      </div>
      <div class="blog-grid">
        ${blogPostsPreview.map((post, i) => {
  const illustrations = [
    // Operations — clock + manual work
    `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
              <rect width="280" height="160" fill="#0a0a0a"/>
              <circle cx="80" cy="80" r="40" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
              <circle cx="80" cy="80" r="32" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
              <line x1="80" y1="80" x2="80" y2="52" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>
              <line x1="80" y1="80" x2="98" y2="88" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="80" y1="44" x2="80" y2="48" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
              <line x1="80" y1="110" x2="80" y2="114" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
              <line x1="44" y1="80" x2="48" y2="80" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
              <line x1="110" y1="80" x2="114" y2="80" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
              <rect x="150" y="40" width="90" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <rect x="150" y="60" width="70" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <rect x="150" y="80" width="80" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <rect x="150" y="100" width="60" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
              <text x="156" y="50" font-size="7" fill="rgba(255,255,255,0.3)" font-family="monospace">manually update stock</text>
              <text x="156" y="70" font-size="7" fill="rgba(255,255,255,0.3)" font-family="monospace">send follow-up email</text>
              <text x="156" y="90" font-size="7" fill="rgba(255,255,255,0.3)" font-family="monospace">prepare weekly report</text>
              <text x="156" y="110" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">reconcile entries...</text>
            </svg>`,
    // Strategy — bar chart rising
    `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
              <rect width="280" height="160" fill="#0a0a0a"/>
              <line x1="40" y1="20" x2="40" y2="130" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
              <line x1="40" y1="130" x2="240" y2="130" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
              <rect x="60" y="90" width="28" height="40" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
              <rect x="100" y="70" width="28" height="60" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
              <rect x="140" y="50" width="28" height="80" rx="2" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
              <rect x="180" y="28" width="28" height="102" rx="2" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
              <polyline points="74,90 114,70 154,50 194,28" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
              <circle cx="74" cy="90" r="3" fill="rgba(255,255,255,0.5)"/>
              <circle cx="114" cy="70" r="3" fill="rgba(255,255,255,0.5)"/>
              <circle cx="154" cy="50" r="3" fill="rgba(255,255,255,0.5)"/>
              <circle cx="194" cy="28" r="4" fill="rgba(255,255,255,0.75)"/>
              <text x="46" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q1</text>
              <text x="106" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q2</text>
              <text x="146" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q3</text>
              <text x="186" y="145" font-size="7" fill="rgba(255,255,255,0.2)" font-family="monospace">Q4</text>
            </svg>`,
    // Automation — loop/cycle diagram
    `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
              <rect width="280" height="160" fill="#0a0a0a"/>
              <circle cx="140" cy="80" r="48" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 3"/>
              <rect x="54" y="66" width="40" height="28" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
              <text x="74" y="84" font-size="8" fill="rgba(255,255,255,0.5)" font-family="monospace" text-anchor="middle">Input</text>
              <rect x="120" y="54" width="40" height="28" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
              <text x="140" y="72" font-size="8" fill="rgba(255,255,255,0.6)" font-family="monospace" text-anchor="middle">AI</text>
              <rect x="186" y="66" width="40" height="28" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
              <text x="206" y="84" font-size="8" fill="rgba(255,255,255,0.5)" font-family="monospace" text-anchor="middle">Done ✓</text>
              <path d="M94 80 Q107 54 120 68" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
              <path d="M160 68 Q173 54 186 80" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
              <path d="M186 94 Q140 130 94 94" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
              <circle cx="74" cy="113" r="2" fill="rgba(255,255,255,0.2)"/>
              <circle cx="106" cy="126" r="2" fill="rgba(255,255,255,0.2)"/>
              <circle cx="140" cy="130" r="2" fill="rgba(255,255,255,0.2)"/>
              <circle cx="174" cy="126" r="2" fill="rgba(255,255,255,0.2)"/>
              <circle cx="206" cy="113" r="2" fill="rgba(255,255,255,0.2)"/>
            </svg>`,
    // Analytics — data/dashboard
    `<svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
              <rect width="280" height="160" fill="#0a0a0a"/>
              <rect x="30" y="20" width="220" height="120" rx="6" stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="rgba(255,255,255,0.02)"/>
              <line x1="30" y1="44" x2="250" y2="44" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
              <circle cx="46" cy="32" r="4" fill="rgba(255,255,255,0.2)"/>
              <circle cx="60" cy="32" r="4" fill="rgba(255,255,255,0.1)"/>
              <circle cx="74" cy="32" r="4" fill="rgba(255,255,255,0.06)"/>
              <rect x="44" y="58" width="65" height="32" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <text x="76" y="71" font-size="14" fill="rgba(255,255,255,0.7)" font-family="monospace" text-anchor="middle" font-weight="bold">98%</text>
              <text x="76" y="83" font-size="6" fill="rgba(255,255,255,0.25)" font-family="monospace" text-anchor="middle">satisfaction</text>
              <rect x="117" y="58" width="65" height="32" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <text x="149" y="71" font-size="14" fill="rgba(255,255,255,0.7)" font-family="monospace" text-anchor="middle" font-weight="bold">6h</text>
              <text x="149" y="83" font-size="6" fill="rgba(255,255,255,0.25)" font-family="monospace" text-anchor="middle">saved/day</text>
              <rect x="190" y="58" width="52" height="32" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <text x="216" y="71" font-size="11" fill="rgba(255,255,255,0.6)" font-family="monospace" text-anchor="middle" font-weight="bold">↑32%</text>
              <text x="216" y="83" font-size="6" fill="rgba(255,255,255,0.25)" font-family="monospace" text-anchor="middle">revenue</text>
              <polyline points="44,130 74,118 104,122 134,104 164,108 194,94 224,82 244,78" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" fill="none"/>
              <polyline points="44,130 74,118 104,122 134,104 164,108 194,94 224,82 244,78 244,140 44,140" fill="rgba(255,255,255,0.03)"/>
            </svg>`,
  ];
  const img = illustrations[i % illustrations.length];
  return `
          <a href="/post?id=${post.id}" class="blog-card reveal ${i > 0 ? 'reveal-delay-' + i : ''}" data-testid="blog-${post.id}">
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
      <div class="blog-view-all">
        <a href="/blog" class="btn btn-secondary" data-testid="view-all">View All Articles</a>
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
          <p>Complex AI systems, built for production. Research-backed engineering.</p>
        </div>
        <div class="footer-col">
          <h4>Projects</h4>
          <ul>
            <li><span class="footer-static">AI Legal Intelligence</span></li>
            <li><span class="footer-static">Tessera Longevity AI</span></li>
            <li><span class="footer-static">VidSimplify Animation</span></li>
            <li><span class="footer-static">Clinical & Medical AI</span></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+918000012306">+91 80000 12306</a></li>
            <li><a href="mailto:contact@kalman-labs.com">contact@kalman-labs.com</a></li>
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
      <a href="tel:+918000012306" class="modal-phone-btn" data-testid="modal-phone">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +91 80000 12306
      </a>
      <a href="mailto:contact@kalman-labs.com" class="modal-email-link">contact@kalman-labs.com</a>
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
// STICK FIGURE ANIMATION — refined, editorial
//
// Scene: a figure at a desk with a laptop screen.
// Tasks (small doc icons) queue up on the left, flow in a smooth
// bezier arc toward the AI circle top-right, disappearing into it.
// On automation: figure leans back, legs up, checkmarks emit
// from the AI circle in arcs downward.
//
// White lines only. Smooth easing throughout. Loops every 7s.
// ═══════════════════════════════════════════════════════════════
class StickFigureAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.isActive = false;
    this.animFrame = null;
    this.startTime = 0;
    this.CYCLE = 7000;
    this.tasks = [];
    this.checks = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const p = this.canvas.parentElement;
    this.W = p.clientWidth || 600;
    this.H = p.clientHeight || 700;
    this.canvas.width = this.W * devicePixelRatio;
    this.canvas.height = this.H * devicePixelRatio;
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  // ── Easing ───────────────────────────────────────────────────
  easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

  // ── Bezier point at t along P0→CP→P1 ─────────────────────────
  bezier(t, p0x, p0y, cpx, cpy, p1x, p1y) {
    const u = 1 - t;
    return {
      x: u * u * p0x + 2 * u * t * cpx + t * t * p1x,
      y: u * u * p0y + 2 * u * t * cpy + t * t * p1y
    };
  }

  // ── Stroke helper ─────────────────────────────────────────────
  stroke(fn, color = 'rgba(255,255,255,0.88)', lw = 2) {
    const ctx = this.ctx;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    fn(ctx);
    ctx.restore();
  }

  // ── Stick figure ─────────────────────────────────────────────
  // hip = {x, y}, lean = radians forward, armL/R = angle from body-axis
  drawFigure({ hipX, hipY, lean = 0, armL = 0.7, armR = 0.7, relaxed = false }) {
    const S = Math.min(this.W, this.H) * 0.115;

    // ── Chair (drawn first, behind figure) ───────────────────────
    const seatY = hipY + S * 0.07;
    const seatL = hipX - S * 0.26;
    const seatR = hipX + S * 0.26;
    const legBot = seatY + S * 0.44;
    this.stroke(ctx => {
      // Seat surface
      ctx.beginPath(); ctx.moveTo(seatL, seatY); ctx.lineTo(seatR, seatY); ctx.stroke();
      // Back legs
      ctx.beginPath(); ctx.moveTo(seatL, seatY); ctx.lineTo(seatL, legBot); ctx.stroke();
      // Front leg
      ctx.beginPath(); ctx.moveTo(seatR, seatY); ctx.lineTo(seatR, legBot); ctx.stroke();
      // Chair back (vertical)
      ctx.beginPath(); ctx.moveTo(seatL, seatY); ctx.lineTo(seatL, seatY - S * 0.52); ctx.stroke();
      // Chair back rail (horizontal)
      ctx.beginPath(); ctx.moveTo(seatL, seatY - S * 0.44); ctx.lineTo(seatL + S * 0.18, seatY - S * 0.44); ctx.stroke();
    }, 'rgba(255,255,255,0.18)', 1.3);

    // ── Figure anatomy ───────────────────────────────────────────
    const spineLen = S * 0.7;
    const spineX = hipX + Math.sin(lean) * spineLen;
    const spineY = hipY - Math.cos(lean) * spineLen;
    const shX = hipX + Math.sin(lean) * spineLen * 0.58;
    const shY = hipY - Math.cos(lean) * spineLen * 0.58;
    const headX = spineX;
    const headY = spineY - S * 0.22;
    const headR = S * 0.155;

    // Seated legs — thigh forward, lower leg hanging
    const thighLen = S * 0.50;
    const kneeRX = hipX + thighLen * 0.92;
    const kneeRY = hipY + thighLen * 0.22;
    // Relaxed: feet lifted; working: feet flat on floor
    const footRX = relaxed ? kneeRX + S * 0.30 : kneeRX + S * 0.03;
    const footRY = relaxed ? kneeRY - S * 0.40 : kneeRY + thighLen * 0.62;
    // Left leg slightly behind
    const kneeLX = hipX + thighLen * 0.74;
    const kneeLY = hipY + thighLen * 0.30;
    const footLX = relaxed ? kneeLX + S * 0.22 : kneeLX - S * 0.02;
    const footLY = relaxed ? kneeLY - S * 0.30 : kneeLY + thighLen * 0.55;

    this.stroke(ctx => {
      // Spine
      ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(spineX, spineY); ctx.stroke();

      // Head
      ctx.beginPath(); ctx.arc(headX, headY, headR, 0, Math.PI * 2); ctx.stroke();

      // Left arm
      const laAngle = lean - armL;
      ctx.beginPath();
      ctx.moveTo(shX, shY);
      ctx.lineTo(shX + Math.cos(laAngle) * S * 0.54, shY + Math.sin(laAngle) * S * 0.54);
      ctx.stroke();

      // Right arm
      const raAngle = lean + armR;
      ctx.beginPath();
      ctx.moveTo(shX, shY);
      ctx.lineTo(shX + Math.cos(raAngle) * S * 0.54, shY + Math.sin(raAngle) * S * 0.54);
      ctx.stroke();

      // Right thigh (hip → knee)
      ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(kneeRX, kneeRY); ctx.stroke();
      // Right lower leg (knee → foot)
      ctx.beginPath(); ctx.moveTo(kneeRX, kneeRY); ctx.lineTo(footRX, footRY); ctx.stroke();

      // Left thigh (slightly behind)
      ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(kneeLX, kneeLY); ctx.stroke();
      // Left lower leg
      ctx.beginPath(); ctx.moveTo(kneeLX, kneeLY); ctx.lineTo(footLX, footLY); ctx.stroke();
    });
  }

  // ── Desk ─────────────────────────────────────────────────────
  drawDesk(cx, cy, w) {
    this.stroke(ctx => {
      // Surface
      ctx.beginPath(); ctx.moveTo(cx - w / 2, cy); ctx.lineTo(cx + w / 2, cy); ctx.stroke();
      // Legs
      ctx.beginPath(); ctx.moveTo(cx - w / 2 + 14, cy); ctx.lineTo(cx - w / 2 + 14, cy + 52); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + w / 2 - 14, cy); ctx.lineTo(cx + w / 2 - 14, cy + 52); ctx.stroke();
    }, 'rgba(255,255,255,0.38)', 1.8);
  }

  // ── Laptop on desk ────────────────────────────────────────────
  drawLaptop(cx, cy, alpha) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    this.stroke(c => {
      // Screen (tilted rectangle)
      c.beginPath();
      c.moveTo(cx - 22, cy); c.lineTo(cx - 18, cy - 32);
      c.lineTo(cx + 18, cy - 32); c.lineTo(cx + 22, cy);
      c.closePath(); c.stroke();
      // Base
      c.beginPath(); c.moveTo(cx - 26, cy); c.lineTo(cx + 26, cy); c.stroke();
    }, 'rgba(255,255,255,0.55)', 1.4);
    ctx.restore();
  }

  // ── Result card — labeled automation output pill ─────────────
  drawResultCard(cx, cy, label, alpha) {
    const ctx = this.ctx;
    const pad = 14;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = 'bold 13px Inter, system-ui, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    const tw = ctx.measureText(label).width;
    const checkW = 20;
    const totalW = checkW + tw + pad * 2 + 6;
    const h = 36;
    const x = cx - totalW / 2;
    const y = cy - h / 2;

    // Pill background — slightly less transparent so it reads clearly
    ctx.fillStyle = 'rgba(0,0,0,0.82)';
    ctx.beginPath();
    ctx.roundRect(x, y, totalW, h, h / 2);
    ctx.fill();

    // Pill border — more visible
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(x, y, totalW, h, h / 2);
    ctx.stroke();

    // Checkmark — bold, clearly visible
    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const ckX = x + pad;
    const ckY = cy;
    ctx.beginPath();
    ctx.moveTo(ckX - 3, ckY + 2);
    ctx.lineTo(ckX + 1, ckY + 6);
    ctx.lineTo(ckX + 9, ckY - 4);
    ctx.stroke();

    // Label text
    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    ctx.fillText(label, x + pad + checkW, cy + 0.5);

    ctx.restore();
  }

  drawTask(x, y, alpha) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.lineWidth = 1.2;
    ctx.lineCap = 'round';
    // Document outline
    ctx.beginPath();
    ctx.moveTo(x - 7, y - 10); ctx.lineTo(x + 4, y - 10);
    ctx.lineTo(x + 7, y - 7); ctx.lineTo(x + 7, y + 10);
    ctx.lineTo(x - 7, y + 10); ctx.closePath(); ctx.stroke();
    // Corner fold
    ctx.beginPath(); ctx.moveTo(x + 4, y - 10); ctx.lineTo(x + 4, y - 7); ctx.lineTo(x + 7, y - 7); ctx.stroke();
    // Text lines
    ctx.beginPath();
    ctx.moveTo(x - 4, y - 2); ctx.lineTo(x + 4, y - 2);
    ctx.moveTo(x - 4, y + 2); ctx.lineTo(x + 4, y + 2);
    ctx.moveTo(x - 4, y + 6); ctx.lineTo(x + 1, y + 6);
    ctx.stroke();
    ctx.restore();
  }

  // ── AI circle ─────────────────────────────────────────────────
  drawAI(cx, cy, r, alpha, tRaw) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;

    // Rotating outer arc
    ctx.save();
    ctx.translate(cx, cy); ctx.rotate(tRaw * 0.55);
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(0, 0, r + 20, 0, Math.PI * 1.4); ctx.stroke();
    ctx.restore();

    // Counter-rotating second arc
    ctx.save();
    ctx.translate(cx, cy); ctx.rotate(-tRaw * 0.3);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(0, 0, r + 30, Math.PI * 0.2, Math.PI * 1.0); ctx.stroke();
    ctx.restore();

    // Main ring
    ctx.strokeStyle = 'rgba(255,255,255,0.72)';
    ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

    // Text
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = `${Math.round(r * 0.48)}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AI', cx, cy);

    ctx.restore();
  }

  // ── Main render ───────────────────────────────────────────────
  draw() {
    if (!this.isActive) return;
    const ctx = this.ctx;
    const now = performance.now();
    const tRaw = now / 1000;
    const phase = ((now - this.startTime) % this.CYCLE) / this.CYCLE; // 0→1

    const W = this.W, H = this.H;
    ctx.clearRect(0, 0, W, H);

    // ── Scene layout ──────────────────────────────────────────
    const figHipX = W * 0.30;
    const figHipY = H * 0.60;
    const deskCX = figHipX + W * 0.08;
    const deskY = H * 0.60;
    const deskW = W * 0.44;
    const laptopX = figHipX + W * 0.12;
    const laptopY = deskY;
    const aiCX = W * 0.74;
    const aiCY = H * 0.36;
    const aiR = Math.min(W, H) * 0.095;

    // Phase boundaries:
    // 0.00–0.45 → manual work (frantic)
    // 0.45–0.58 → AI appears, figure slows
    // 0.58–1.00 → automated (figure relaxes)

    // ── Figure state ──────────────────────────────────────────
    // arm angles: laAngle = lean - armL, raAngle = lean + armR
    // Toward keyboard: laAngle ≈ 0.28, raAngle ≈ 0.58
    // Arms overhead:   laAngle ≈ -1.9,  raAngle ≈ -1.0
    let lean = 0;
    let armL = 0;
    let armR = 0;
    let relaxed = false;
    let aiAlpha = 0;

    if (phase < 0.45) {
      // Calm, deliberate typing — slow alternating arm toward laptop
      const swing = Math.sin(tRaw * 3.2) * 0.12;
      lean = 0.08;                          // subtle forward lean only
      armL = lean - (0.28 + swing);         // left hand toward keyboard, light oscillation
      armR = (0.58 - swing) - lean;         // right hand alternates
    } else if (phase < 0.58) {
      // AI appears — figure sits back gently, arms slow to rest
      const p = (phase - 0.45) / 0.13;
      const e = this.easeInOut(p);
      lean = 0.08 - e * 0.08;
      armL = (lean - 0.28) * (1 - e);      // arms ease toward neutral
      armR = (0.58 - lean) * (1 - e) + 0.45 * e;
      aiAlpha = e;
    } else {
      // Relaxed — leaned back, arms raised overhead (hands-behind-head stretch)
      const p = (phase - 0.58) / 0.42;
      const e = this.easeInOut(p);
      lean = -(e * 0.14);                   // lean back into chair
      // laAngle = -1.9 (overhead-left), raAngle = -1.0 (overhead-right)
      armL = lean - (-1.9);                 // ≈ 1.76
      armR = (-1.0) - lean;                 // ≈ -0.86 (still valid, points up-right)
      relaxed = e > 0.38;
      aiAlpha = 1;
    }

    // ── Spawn tasks (manual phase only) ──────────────────────
    if (phase < 0.45 && this.tasks.length < 12 && Math.random() < 0.06) {
      // Stagger spawn position on and around desk
      const col = this.tasks.length % 4;
      const row = Math.floor(this.tasks.length / 4);
      const spawnX = (figHipX - W * 0.05) + col * 32 + (Math.random() - 0.5) * 8;
      const spawnY = deskY - 20 - row * 26 + (Math.random() - 0.5) * 6;
      // Bezier control point (arc up and right toward AI)
      const cpX = (spawnX + aiCX) / 2 + (Math.random() - 0.5) * 60;
      const cpY = Math.min(spawnY, aiCY) - H * 0.18 - Math.random() * H * 0.06;
      this.tasks.push({ spawnX, spawnY, cpX, cpY, alpha: 0, t: 0, flying: false });
    }

    // ── Move tasks toward AI (automated phase) ────────────────
    if (phase >= 0.58 && aiAlpha > 0.3) {
      this.tasks.forEach(task => { task.flying = true; });
    }

    // ── Reset ──────────────────────────────────────────────────
    if (phase < 0.02) { this.tasks = []; this.checks = []; }

    // ── Update tasks ─────────────────────────────────────────
    this.tasks.forEach(task => {
      task.alpha = Math.min(task.alpha + 0.06, 0.85);
      if (task.flying) {
        task.t = Math.min(task.t + 0.018, 1);
        const pos = this.bezier(task.t, task.spawnX, task.spawnY, task.cpX, task.cpY, aiCX, aiCY);
        task.x = pos.x; task.y = pos.y;
        if (task.t > 0.85) task.alpha = Math.max(0, (1 - task.t) / 0.15);
      } else {
        task.x = task.spawnX; task.y = task.spawnY;
      }
    });
    this.tasks = this.tasks.filter(t => !(t.flying && t.t >= 1));

    // ── Draw scene ────────────────────────────────────────────
    this.drawDesk(deskCX, deskY, deskW);
    this.drawLaptop(laptopX, laptopY, 0.6);

    // Tasks (manual phase documents)
    this.tasks.forEach(t => this.drawTask(t.x, t.y, t.alpha));

    // AI circle
    if (aiAlpha > 0.01) this.drawAI(aiCX, aiCY, aiR, aiAlpha, tRaw);

    // ── Automation result cards (automated phase) ──────────────
    // Three labeled outputs arc-in from the AI circle to fixed spots
    const resultSlots = [
      { label: 'Invoice Sent', ox: W * 0.10, oy: H * 0.15 },
      { label: 'Report Ready', ox: W * 0.06, oy: -H * 0.03 },
      { label: 'Task Done', ox: W * 0.09, oy: -H * 0.20 },
    ];
    if (phase >= 0.58) {
      const automPhase = (phase - 0.58) / 0.42;
      resultSlots.forEach((slot, i) => {
        const delay = i * 0.18;
        const p = Math.max(0, Math.min(1, (automPhase - delay) / 0.28));
        const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
        if (e <= 0) return;
        const tx = aiCX + slot.ox;
        const ty = aiCY + slot.oy;
        const cpx = aiCX + slot.ox * 0.4 - 20;
        const cpy = aiCY + slot.oy * 0.4 - 40;
        const u = 1 - e;
        const rx = u * u * aiCX + 2 * u * e * cpx + e * e * tx;
        const ry = u * u * aiCY + 2 * u * e * cpy + e * e * ty;
        const alpha = Math.min(1, e * 2.5);
        this.drawResultCard(rx, ry, slot.label, alpha);
      });
    }

    // Stick figure (drawn last, always on top)
    this.drawFigure({ hipX: figHipX, hipY: figHipY, lean, armL, armR, relaxed });

    // Phase label — very faint bottom
    const labels = [[0, 0.45, 'Manual work'], [0.45, 0.58, 'AI takes over'], [0.58, 1, 'Automated ✓']];
    const lbl = labels.find(([s, e]) => phase >= s && phase < e);
    if (lbl) {
      ctx.font = '10px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(lbl[2], 20, H - 20);
    }


    this.animFrame = requestAnimationFrame(() => this.draw());
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
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
  entries => entries.forEach(e => e.isIntersecting ? stickAnim.start() : stickAnim.stop()),
  { threshold: 0.1 }
);
const stickHero = document.getElementById('hero');
if (stickHero) stickObserver.observe(stickHero);
