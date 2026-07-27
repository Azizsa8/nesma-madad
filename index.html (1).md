<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Inline: add 'js' class to <html> before CSS is applied.
       Progressive-enhancement guard for scroll-reveal:
       elements are fully visible by default; only hidden when JS is active. -->
  <script>document.documentElement.classList.add('js');</script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nesma Madad — Bespoke Furniture &amp; Hospitality Solutions</title>
  <meta name="description" content="Nesma Madad crafts bespoke furniture and fit-out environments for corporate offices, fine dining, cafes, and hospitality venues across the region." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <a href="#hero" class="skip-link">Skip to main content</a>

  <!-- ═══════════════════════════════════════
       NAV
  ═══════════════════════════════════════ -->
  <header class="site-nav" id="site-nav" role="banner">
    <nav class="nav-inner" aria-label="Main navigation">
      <a href="#hero" class="nav-logo" aria-label="Nesma Madad — Home">
        <img src="assets/logo.png" alt="Nesma Madad logo" class="logo-img" />
      </a>

      <ul class="nav-links" id="nav-links" role="list">
        <li><a href="#solutions" class="nav-link">Solutions</a></li>
        <li><a href="#materials" class="nav-link">Materials</a></li>
        <li><a href="#sustainability" class="nav-link">Sustainability</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>

      <a href="#contact" class="btn btn-pill" aria-label="Request a proposal">Request Proposal</a>

      <button class="hamburger" id="hamburger" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <main>

    <!-- ═══════════════════════════════════════
         HERO
    ═══════════════════════════════════════ -->
    <section class="hero" id="hero" aria-label="Hero">
      <div class="hero-gradient-sweep" aria-hidden="true"></div>
      <div class="hero-image-wrap" aria-hidden="true">
        <img src="assets/hero.png" alt="" class="hero-img" />
        <div class="hero-image-overlay" aria-hidden="true"></div>
      </div>
      <div class="hero-content reveal">
        <p class="kicker">Bespoke Furniture &amp; Hospitality</p>
        <h1 class="hero-headline">Furniture &amp;&nbsp;hospitality environments,<br class="br-desk" /> made to order.</h1>
        <div class="hero-rule" aria-hidden="true"></div>
        <p class="hero-sub">Crafted for corporate offices, dining spaces, and hospitality venues across the region. Every detail, considered from the start.</p>
        <div class="hero-ctas">
          <a href="#solutions" class="btn btn-primary">View Solutions</a>
          <a href="#materials" class="btn btn-ghost-light">Explore Materials</a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         INTRO BAND
    ═══════════════════════════════════════ -->
    <section class="intro-band" id="intro" aria-label="Introduction">
      <div class="container reveal">
        <div class="intro-inner">
          <div class="hairline-rule-h" aria-hidden="true"></div>
          <p class="label-caps">Our Work</p>
          <p class="intro-statement">
            Nesma Madad is a precision furniture and fit-out partner for corporate, hospitality, and dining clients across the region. We work with architecture teams, interior designers, and operators to deliver bespoke environments — conceived, manufactured, and installed to exacting standards.
          </p>
          <div class="hairline-rule-h" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         SOLUTIONS / INDUSTRIES
    ═══════════════════════════════════════ -->
    <section class="solutions" id="solutions" aria-label="Solutions and Industries">
      <div class="container">
        <div class="section-header reveal">
          <p class="label-caps">Our Solutions</p>
          <h2 class="section-headline">Four categories.<br />One bespoke partner.</h2>
        </div>

        <div class="solutions-grid">

          <!-- Card 1 -->
          <article class="solution-card reveal" aria-label="Corporate and Executive Offices">
            <div class="solution-img-wrap">
              <img src="assets/industry-corporate.png" alt="Corporate executive office desk and chair" class="solution-img" loading="lazy" />
            </div>
            <div class="solution-body">
              <p class="card-label">Category 01</p>
              <h3 class="card-title">Corporate &amp; Executive Offices</h3>
              <p class="card-desc">Executive desks, conference furniture, acoustic booths, and reception environments engineered for performance and presence.</p>
              <div class="hairline-rule-h" aria-hidden="true"></div>
              <a href="#contact" class="card-link" aria-label="Explore Corporate & Executive Offices">Explore <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="solution-card reveal" aria-label="Cafes and Casual Dining">
            <div class="solution-img-wrap">
              <img src="assets/industry-cafes.png" alt="Cafe chair and bistro table" class="solution-img" loading="lazy" />
            </div>
            <div class="solution-body">
              <p class="card-label">Category 02</p>
              <h3 class="card-title">Cafes &amp; Casual Dining</h3>
              <p class="card-desc">Bar stools, bistro chairs, cafe tables, and counter seating — built for character, durability, and daily volume.</p>
              <div class="hairline-rule-h" aria-hidden="true"></div>
              <a href="#contact" class="card-link" aria-label="Explore Cafes & Casual Dining">Explore <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="solution-card reveal" aria-label="Fine Dining and Restaurants">
            <div class="solution-img-wrap">
              <img src="assets/industry-finedining.png" alt="Fine dining upholstered chair and table" class="solution-img" loading="lazy" />
            </div>
            <div class="solution-body">
              <p class="card-label">Category 03</p>
              <h3 class="card-title">Fine Dining &amp; Restaurants</h3>
              <p class="card-desc">Upholstered dining chairs, banquettes, host stations, and dining tables crafted to elevate every service.</p>
              <div class="hairline-rule-h" aria-hidden="true"></div>
              <a href="#contact" class="card-link" aria-label="Explore Fine Dining & Restaurants">Explore <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <!-- Card 4 -->
          <article class="solution-card reveal" aria-label="Hospitality and Lounges">
            <div class="solution-img-wrap">
              <img src="assets/industry-hospitality.png" alt="Lounge chair for hospitality environments" class="solution-img" loading="lazy" />
            </div>
            <div class="solution-body">
              <p class="card-label">Category 04</p>
              <h3 class="card-title">Hospitality &amp; Lounges</h3>
              <p class="card-desc">Sculptural lounge chairs, modular sofas, lobby and reception seating tailored to world-class venues.</p>
              <div class="hairline-rule-h" aria-hidden="true"></div>
              <a href="#contact" class="card-link" aria-label="Explore Hospitality & Lounges">Explore <span aria-hidden="true">→</span></a>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         MATERIALS
    ═══════════════════════════════════════ -->
    <section class="materials" id="materials" aria-label="Material Library">
      <div class="container">
        <div class="section-header reveal">
          <p class="label-caps">Materials &amp; Craftsmanship</p>
          <h2 class="section-headline">Every finish. Every fibre.<br />Every detail considered.</h2>
        </div>

        <p class="materials-intro reveal">Our material library spans premium wood veneers, fine upholstery, and precision hardware — each selected for tactile quality, longevity, and responsible sourcing.</p>

        <div class="materials-grid">

          <figure class="material-cell reveal" aria-label="Oak Veneer material">
            <div class="material-img-wrap">
              <img src="assets/materials/wood.png" alt="Close-up of oak wood veneer grain" loading="lazy" />
            </div>
            <figcaption>
              <span class="material-label">Oak Veneer</span>
              <span class="material-badge">FSC-Certified</span>
            </figcaption>
          </figure>

          <figure class="material-cell reveal" aria-label="Aniline Leather material">
            <div class="material-img-wrap">
              <img src="assets/materials/leather.png" alt="Close-up of aniline leather surface texture" loading="lazy" />
            </div>
            <figcaption>
              <span class="material-label">Aniline Leather</span>
              <span class="material-badge">Recycled Content</span>
            </figcaption>
          </figure>

          <figure class="material-cell reveal" aria-label="Powder-Coated Steel material">
            <div class="material-img-wrap">
              <img src="assets/materials/matte-steel.png" alt="Close-up of matte black powder-coated steel" loading="lazy" />
            </div>
            <figcaption>
              <span class="material-label">Powder-Coated Steel</span>
              <span class="material-badge">Low-VOC</span>
            </figcaption>
          </figure>

          <figure class="material-cell reveal" aria-label="Brushed Brass material">
            <div class="material-img-wrap">
              <img src="assets/materials/brass-chrome.png" alt="Close-up of brushed brass hardware" loading="lazy" />
            </div>
            <figcaption>
              <span class="material-label">Brushed Brass</span>
              <span class="material-badge">Premium Finish</span>
            </figcaption>
          </figure>

          <figure class="material-cell reveal" aria-label="Wool Boucle material">
            <div class="material-img-wrap">
              <img src="assets/materials/boucle.png" alt="Close-up of wool boucle textile texture" loading="lazy" />
            </div>
            <figcaption>
              <span class="material-label">Wool Boucle</span>
              <span class="material-badge">Recycled Content</span>
            </figcaption>
          </figure>

          <figure class="material-cell reveal" aria-label="Carrara Marble material">
            <div class="material-img-wrap">
              <img src="assets/materials/marble.png" alt="Close-up of Carrara marble surface" loading="lazy" />
            </div>
            <figcaption>
              <span class="material-label">Carrara Marble</span>
              <span class="material-badge">FSC-Certified</span>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         SUSTAINABILITY
    ═══════════════════════════════════════ -->
    <section class="sustainability" id="sustainability" aria-label="Sustainability">
      <div class="sustainability-gradient" aria-hidden="true"></div>
      <div class="container sustainability-inner">
        <div class="section-header reveal">
          <p class="label-caps light">Our Commitment</p>
          <h2 class="section-headline light">Responsible materials.<br />Responsible futures.</h2>
        </div>

        <div class="sustainability-pillars">

          <div class="pillar reveal">
            <div class="pillar-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="17" stroke="#00BCD4" stroke-width="1.5"/>
                <path d="M18 10C14 10 11 13 11 17C11 21 14 25 18 26C22 25 25 21 25 17C25 13 22 10 18 10Z" stroke="#00BCD4" stroke-width="1.2" stroke-linejoin="round"/>
                <path d="M18 14V18L21 20" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="pillar-heading">FSC-Certified Sourcing</h3>
            <p class="pillar-body">All wood-based materials are sourced from responsibly managed forests, certified to FSC standards.</p>
          </div>

          <div class="pillar-divider" aria-hidden="true"></div>

          <div class="pillar reveal">
            <div class="pillar-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="17" stroke="#00BCD4" stroke-width="1.5"/>
                <path d="M23 13L13 23M13 13L23 23" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M18 11V25" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="pillar-heading">Recycled Content Fibres</h3>
            <p class="pillar-body">Upholstery programmes incorporate recycled and low-impact fibres without compromising tactile quality or durability.</p>
          </div>

          <div class="pillar-divider" aria-hidden="true"></div>

          <div class="pillar reveal">
            <div class="pillar-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="17" stroke="#00BCD4" stroke-width="1.5"/>
                <path d="M12 24L18 12L24 24" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 21H22" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="pillar-heading">Low-VOC Finishes</h3>
            <p class="pillar-body">Our lacquers, stains, and topcoats are low or zero-VOC, protecting both interior air quality and the wider environment.</p>
          </div>

        </div>

        <div class="sustainability-stats reveal">
          <div class="stat-chip">
            <span class="stat-num">100%</span>
            <span class="stat-label">FSC-Certified Wood Supply</span>
          </div>
          <div class="stat-chip">
            <span class="stat-num">30%+</span>
            <span class="stat-label">Recycled Fibre Content</span>
          </div>
          <div class="stat-chip">
            <span class="stat-num">Zero</span>
            <span class="stat-label">High-VOC Finish Products</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         ABOUT + CORE VALUES
    ═══════════════════════════════════════ -->
    <section class="about" id="about" aria-label="About Nesma Madad">
      <div class="container">
        <div class="about-grid">
          <div class="about-text reveal">
            <p class="label-caps">About Nesma Madad</p>
            <h2 class="section-headline">Bespoke furniture &amp; fit-out, built for the region.</h2>
            <div class="hairline-rule-h" aria-hidden="true"></div>
            <p class="about-body">We are a precision furniture and fit-out partner for corporate, hospitality, and dining clients across the region. Our team works directly with architecture and design practices to develop and manufacture furniture that is genuinely bespoke — not adapted from a catalogue, but conceived for your space, your brief, and your guests.</p>
            <p class="about-body">From executive environments to intimate fine-dining rooms, every project enters our studio as a brief and leaves as a crafted environment.</p>
            <a href="#contact" class="btn btn-primary" style="margin-top: 2rem; display:inline-block;">Work With Us</a>
          </div>
          <div class="about-gradient-accent" aria-hidden="true"></div>
        </div>

        <div class="values-header reveal">
          <div class="hairline-rule-h" aria-hidden="true"></div>
          <p class="label-caps" style="margin-top: 2.5rem;">Our Principles</p>
        </div>

        <div class="values-row">

          <div class="value-item reveal">
            <div class="value-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="1" y="1" width="26" height="26" rx="2" stroke="#00BCD4" stroke-width="1.2"/>
                <path d="M7 14L11 18L21 10" stroke="#00BCD4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-title">Tailored Solutions</h3>
            <p class="value-desc">Every project is unique. We design and build to your brief, not from a catalogue.</p>
          </div>

          <div class="value-divider" aria-hidden="true"></div>

          <div class="value-item reveal">
            <div class="value-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#00BCD4" stroke-width="1.2"/>
                <circle cx="14" cy="14" r="6" stroke="#00BCD4" stroke-width="1.2"/>
                <circle cx="14" cy="14" r="2" fill="#00BCD4"/>
              </svg>
            </div>
            <h3 class="value-title">Superior Quality</h3>
            <p class="value-desc">Precision manufacturing and premium materials — visible in every joint, surface, and edge.</p>
          </div>

          <div class="value-divider" aria-hidden="true"></div>

          <div class="value-item reveal">
            <div class="value-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3L4 8V14C4 19.5 8.5 24.5 14 26C19.5 24.5 24 19.5 24 14V8L14 3Z" stroke="#00BCD4" stroke-width="1.2" stroke-linejoin="round"/>
                <path d="M10 14L13 17L18 11" stroke="#00BCD4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-title">Expert Guidance</h3>
            <p class="value-desc">Our team brings deep sector knowledge to every consultation — from spec through to installation.</p>
          </div>

          <div class="value-divider" aria-hidden="true"></div>

          <div class="value-item reveal">
            <div class="value-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 14C4 8.5 8.5 4 14 4C19.5 4 24 8.5 24 14" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M14 4V14L20 17" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-title">Efficient Delivery</h3>
            <p class="value-desc">Streamlined project management, transparent timelines, and on-time delivery as standard.</p>
          </div>

          <div class="value-divider" aria-hidden="true"></div>

          <div class="value-item reveal">
            <div class="value-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.5 4 4 8.5 4 14C4 19.5 8.5 24 14 24C19.5 24 24 19.5 24 14" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M20 4L24 8M24 4L20 8" stroke="#00BCD4" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M9 14L13 18L21 10" stroke="#00BCD4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-title">Client Commitment</h3>
            <p class="value-desc">Long-term partnerships, responsive support, and aftercare that matches the quality of our products.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         CONTACT / CTA
    ═══════════════════════════════════════ -->
    <section class="contact" id="contact" aria-label="Contact and Request Proposal">
      <div class="contact-gradient" aria-hidden="true"></div>
      <div class="container contact-inner">
        <div class="contact-header reveal">
          <p class="label-caps light">Get In Touch</p>
          <h2 class="section-headline light">Ready to furnish<br />your space?</h2>
          <p class="contact-sub">Tell us about your project — we'll come back to you within two business days.</p>
        </div>

        <div class="contact-layout">
          <div class="contact-form-wrap reveal">
            <form class="contact-form" action="#" method="post" novalidate aria-label="Contact form">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" id="name" name="name" class="form-input" placeholder="Your full name" autocomplete="name" required aria-required="true" />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="your@email.com" autocomplete="email" required aria-required="true" />
              </div>
              <div class="form-group">
                <label for="project-type" class="form-label">Project Type</label>
                <select id="project-type" name="project-type" class="form-input form-select" required aria-required="true">
                  <option value="" disabled selected>Select a category</option>
                  <option value="corporate">Corporate &amp; Executive Offices</option>
                  <option value="cafes">Cafes &amp; Casual Dining</option>
                  <option value="finedining">Fine Dining &amp; Restaurants</option>
                  <option value="hospitality">Hospitality &amp; Lounges</option>
                  <option value="other">Other / Multi-category</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Project Brief</label>
                <textarea id="message" name="message" class="form-input form-textarea" placeholder="Tell us about your space, timeline, and requirements…" rows="5" required aria-required="true"></textarea>
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn-primary full-width">Send Request</button>
                <p class="form-note">Or email us directly: <a href="mailto:hello@nesma-madad.com" class="form-email-link">hello@nesma-madad.com</a></p>
              </div>
            </form>
          </div>

          <div class="contact-info reveal">
            <div class="contact-details">
              <div class="contact-cta-block">
                <h3 class="contact-cta-heading">Request Proposal</h3>
                <p class="contact-cta-desc">Complete the form and our team will prepare a tailored proposal for your project.</p>
                <a href="mailto:hello@nesma-madad.com" class="btn btn-primary">hello@nesma-madad.com</a>
              </div>
              <div class="hairline-rule-h" aria-hidden="true" style="border-color: rgba(255,255,255,0.15); margin: 2rem 0;"></div>
              <div class="contact-cta-block">
                <h3 class="contact-cta-heading">Book Consultation</h3>
                <p class="contact-cta-desc">Prefer to speak with a project advisor? Book a 30-minute consultation with our team.</p>
                <a href="mailto:hello@nesma-madad.com?subject=Consultation%20Request" class="btn btn-ghost-light">Book Consultation</a>
              </div>
              <div class="hairline-rule-h" aria-hidden="true" style="border-color: rgba(255,255,255,0.15); margin: 2rem 0;"></div>
              <address class="contact-address">
                <p class="label-caps light" style="font-size: 0.65rem; margin-bottom: 0.75rem;">Contact Details</p>
                <p>hello@nesma-madad.com</p>
                <p>nesma-madad.com</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ═══════════════════════════════════════
       FOOTER
  ═══════════════════════════════════════ -->
  <footer class="site-footer" role="contentinfo">
    <div class="footer-rule" aria-hidden="true"></div>
    <div class="container footer-inner">
      <div class="footer-left">
        <a href="#hero" aria-label="Nesma Madad — Back to top">
          <img src="assets/logo.png" alt="Nesma Madad" class="footer-logo" />
        </a>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="#solutions" class="footer-nav-link">Solutions</a>
        <a href="#materials" class="footer-nav-link">Materials</a>
        <a href="#sustainability" class="footer-nav-link">Sustainability</a>
        <a href="#about" class="footer-nav-link">About</a>
        <a href="#contact" class="footer-nav-link">Contact</a>
      </nav>
      <div class="footer-right">
        <a href="https://nesma-madad.com" class="footer-url" aria-label="nesma-madad.com website">nesma-madad.com</a>
        <p class="footer-copy">&copy; 2025 Nesma Madad. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
