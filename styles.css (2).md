/* ═══════════════════════════════════════════════════════════════════
   NESMA MADAD — Design System CSS
   Palette: #00BCD4 turquoise · #0E3A44 deep teal · #F7F5F1 bone white
            #141414 charcoal · #C85A54 rust (accent)
   Fonts: Space Grotesk (display) · Inter (body)
═══════════════════════════════════════════════════════════════════ */

/* ── Reset & Root ──────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --turquoise:   #00BCD4;
  --teal:        #0E3A44;
  --teal-mid:    #164F5E;
  --bone:        #F7F5F1;
  --bone-dark:   #EEEAE3;
  --charcoal:    #141414;
  --charcoal-60: rgba(20,20,20,0.6);
  --rust:        #C85A54;
  --white:       #FFFFFF;

  /* Signature gradient */
  --grad-main: linear-gradient(135deg, #00BCD4 0%, #0E7A8F 45%, #0E3A44 100%);
  --grad-sweep: linear-gradient(125deg, #00BCD4 0%, #0D6B7C 38%, #0E3A44 70%, #091F27 100%);
  --grad-soft:  linear-gradient(135deg, rgba(0,188,212,0.12) 0%, rgba(14,58,68,0.08) 100%);

  /* Typography scale */
  --font-display: 'Space Grotesk', 'Helvetica Neue', sans-serif;
  --font-body:    'Inter', 'Helvetica Neue', sans-serif;

  --text-xs:   0.65rem;
  --text-sm:   0.8125rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.375rem;
  --text-2xl:  1.75rem;
  --text-3xl:  2.25rem;
  --text-4xl:  3rem;
  --text-5xl:  3.75rem;
  --text-6xl:  5rem;

  /* Spacing */
  --space-xs:  0.5rem;
  --space-sm:  1rem;
  --space-md:  1.5rem;
  --space-lg:  2.5rem;
  --space-xl:  4rem;
  --space-2xl: 6rem;
  --space-3xl: 9rem;

  /* Layout */
  --max-w: 1280px;
  --nav-h: 72px;

  /* Radius */
  --radius-sm:  8px;
  --radius-md:  16px;
  --radius-lg:  24px;
  --radius-xl:  32px;
  --radius-pill: 9999px;

  /* Shadow */
  --shadow-card: 0 2px 12px rgba(14,58,68,0.08), 0 8px 32px rgba(14,58,68,0.06);
  --shadow-lift: 0 8px 32px rgba(14,58,68,0.14), 0 2px 8px rgba(14,58,68,0.06);

  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}

body {
  background: var(--bone);
  color: var(--charcoal);
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.65;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

ul { list-style: none; }

/* ── Typography primitives ─────────────────────────────────────── */
.label-caps {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--turquoise);
  margin-bottom: var(--space-sm);
}
.label-caps.light {
  color: rgba(0,188,212,0.85);
}

.section-headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--charcoal);
  margin-bottom: var(--space-md);
}
.section-headline.light {
  color: var(--white);
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.025em;
  color: var(--white);
  margin-bottom: var(--space-md);
}

/* ── Hairline rules ────────────────────────────────────────────── */
.hairline-rule-h {
  border: none;
  border-top: 1px solid rgba(20,20,20,0.12);
  margin: var(--space-md) 0;
}

/* ── Container ─────────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 5vw, 4rem);
}

/* ── Buttons ───────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-pill);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.22s var(--ease-out);
  white-space: nowrap;
  text-decoration: none;
}
.btn:focus-visible {
  outline: 2px solid var(--turquoise);
  outline-offset: 3px;
}

.btn-primary {
  background: var(--turquoise);
  color: var(--charcoal);
  border-color: var(--turquoise);
}
.btn-primary:hover {
  background: #00a8be;
  border-color: #00a8be;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0,188,212,0.35);
}

.btn-ghost-light {
  background: transparent;
  color: var(--white);
  border-color: rgba(255,255,255,0.55);
}
.btn-ghost-light:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.9);
  transform: translateY(-1px);
}

.btn-pill {
  background: transparent;
  color: var(--charcoal);
  border: 1.5px solid var(--turquoise);
  padding: 0.55rem 1.25rem;
  font-size: 0.8rem;
}
.btn-pill:hover {
  background: var(--turquoise);
  color: var(--charcoal);
}
/* Over hero: pill button adapts to light-on-dark */
.site-nav:not(.scrolled) .btn-pill {
  color: rgba(255,255,255,0.9);
  border-color: rgba(0,188,212,0.7);
}
.site-nav:not(.scrolled) .btn-pill:hover {
  background: var(--turquoise);
  color: var(--charcoal);
  border-color: var(--turquoise);
}

.full-width { width: 100%; }

/* ── Reveal animation ──────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.72s var(--ease-out), transform 0.72s var(--ease-out);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ══════════════════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════════════════ */
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  height: var(--nav-h);
  background: transparent;
  transition: background 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out), border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.site-nav.scrolled {
  background: rgba(247,245,241,0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: rgba(20,20,20,0.1);
  box-shadow: 0 1px 16px rgba(20,20,20,0.06);
}

.nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 5vw, 4rem);
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.nav-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.logo-img {
  height: 44px;
  width: auto;
  filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%);
  transition: filter 0.3s;
}
/* Over hero (transparent nav) show logo in white */
.site-nav:not(.scrolled) .logo-img {
  filter: brightness(0) invert(1);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--charcoal);
  position: relative;
  transition: color 0.2s;
}
.site-nav:not(.scrolled) .nav-link {
  color: rgba(255,255,255,0.88);
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--turquoise);
  transition: width 0.25s var(--ease-out);
}
.nav-link:hover::after,
.nav-link:focus-visible::after {
  width: 100%;
}
.nav-link:hover {
  color: var(--turquoise);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--charcoal);
  transition: all 0.25s var(--ease-out);
}
.site-nav:not(.scrolled) .hamburger span {
  background: var(--white);
}
.hamburger.open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ══════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════ */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--teal);
}

.hero-gradient-sweep {
  position: absolute;
  inset: 0;
  background: var(--grad-sweep);
  z-index: 0;
}

/* Diagonal shape / curved sweep overlay */
.hero-gradient-sweep::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 55%;
  height: 100%;
  background: linear-gradient(115deg, transparent 38%, rgba(14,58,68,0.55) 55%, rgba(14,58,68,0.92) 100%);
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.hero-image-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-image-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(100deg, rgba(14,58,68,0.92) 0%, rgba(14,58,68,0.72) 40%, rgba(0,0,0,0.2) 75%, transparent 100%),
    linear-gradient(to bottom, rgba(14,58,68,0.25) 0%, transparent 30%, transparent 70%, rgba(14,58,68,0.4) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: var(--max-w);
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--nav-h) + 3rem) clamp(1.25rem, 5vw, 4rem) 5rem;
  max-width: 780px;
  padding-left: clamp(1.25rem, 5vw, 4rem);
}

.kicker {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--turquoise);
  margin-bottom: var(--space-md);
}

.hero-rule {
  width: 3rem;
  height: 1px;
  background: rgba(255,255,255,0.35);
  margin: var(--space-md) 0;
}

.hero-sub {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: rgba(255,255,255,0.78);
  max-width: 520px;
  line-height: 1.65;
  margin-bottom: var(--space-lg);
}

.hero-ctas {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.br-desk { display: inline; }

/* ══════════════════════════════════════════════════════════════════
   INTRO BAND
══════════════════════════════════════════════════════════════════ */
.intro-band {
  background: var(--white);
  padding: var(--space-3xl) 0;
}

.intro-inner {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.intro-statement {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--charcoal-60);
  line-height: 1.75;
  font-weight: 300;
  padding: var(--space-lg) 0;
  letter-spacing: 0.01em;
}

/* ══════════════════════════════════════════════════════════════════
   SOLUTIONS / INDUSTRIES
══════════════════════════════════════════════════════════════════ */
.solutions {
  background: var(--bone);
  padding: var(--space-3xl) 0;
}

.section-header {
  margin-bottom: var(--space-2xl);
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 2.5vw, 2rem);
}

.solution-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
  display: flex;
  flex-direction: column;
}
.solution-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lift);
}

.solution-img-wrap {
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: var(--bone-dark);
}
.solution-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s var(--ease-out);
}
.solution-card:hover .solution-img {
  transform: scale(1.04);
}

.solution-body {
  padding: clamp(1.25rem, 3vw, 2rem);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-label {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--turquoise);
  margin-bottom: var(--space-xs);
}

.card-title {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--charcoal);
  margin-bottom: var(--space-sm);
  line-height: 1.25;
}

.card-desc {
  font-size: var(--text-sm);
  color: var(--charcoal-60);
  line-height: 1.65;
  flex: 1;
}

.card-link {
  display: inline-block;
  margin-top: var(--space-sm);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--turquoise);
  letter-spacing: 0.04em;
  transition: letter-spacing 0.2s, color 0.2s;
}
.card-link:hover {
  letter-spacing: 0.08em;
  color: #00a0b8;
}

/* ══════════════════════════════════════════════════════════════════
   MATERIALS
══════════════════════════════════════════════════════════════════ */
.materials {
  background: var(--white);
  padding: var(--space-3xl) 0;
}

.materials-intro {
  font-size: var(--text-base);
  color: var(--charcoal-60);
  max-width: 560px;
  line-height: 1.7;
  margin-bottom: var(--space-2xl);
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.75rem, 2vw, 1.5rem);
}

.material-cell {
  background: var(--bone);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
  cursor: default;
}
.material-cell:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lift);
}

.material-img-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.material-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}
.material-cell:hover .material-img-wrap img {
  transform: scale(1.05);
}

.material-cell figcaption {
  padding: 1rem 1.25rem 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.material-label {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--charcoal);
  letter-spacing: -0.005em;
}

.material-badge {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--turquoise);
  border: 1px solid var(--turquoise);
  border-radius: var(--radius-pill);
  padding: 0.18rem 0.65rem;
  width: fit-content;
}

/* ══════════════════════════════════════════════════════════════════
   SUSTAINABILITY
══════════════════════════════════════════════════════════════════ */
.sustainability {
  position: relative;
  padding: var(--space-3xl) 0;
  overflow: hidden;
}

.sustainability-gradient {
  position: absolute;
  inset: 0;
  background: var(--grad-sweep);
  z-index: 0;
}
.sustainability-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 20%, rgba(0,188,212,0.2) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(14,58,68,0.6) 0%, transparent 60%);
}

.sustainability-inner {
  position: relative;
  z-index: 1;
}

.sustainability-pillars {
  display: flex;
  gap: 0;
  margin: var(--space-2xl) 0 var(--space-xl);
  align-items: stretch;
}

.pillar {
  flex: 1;
  padding: 0 clamp(1rem, 3vw, 2.5rem);
  text-align: center;
}
.pillar:first-child { padding-left: 0; }
.pillar:last-child  { padding-right: 0; }

.pillar-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(0,188,212,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-md);
  background: rgba(0,188,212,0.06);
}

.pillar-heading {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--white);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.pillar-body {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
}

.pillar-divider {
  width: 1px;
  background: rgba(255,255,255,0.12);
  align-self: stretch;
  flex-shrink: 0;
}

.sustainability-stats {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--space-xl);
}

.stat-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius-md);
  padding: 1.25rem 2rem;
  gap: 0.35rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.stat-num {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--turquoise);
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-label {
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  font-family: var(--font-display);
}

/* ══════════════════════════════════════════════════════════════════
   ABOUT + VALUES
══════════════════════════════════════════════════════════════════ */
.about {
  background: var(--bone);
  padding: var(--space-3xl) 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: var(--space-2xl);
  align-items: center;
  margin-bottom: var(--space-2xl);
}

.about-text {}

.about-body {
  font-size: var(--text-base);
  color: var(--charcoal-60);
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: var(--space-sm);
}

.about-gradient-accent {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-xl);
  background: var(--grad-sweep);
  position: relative;
  overflow: hidden;
}
.about-gradient-accent::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 70%, rgba(0,188,212,0.3) 0%, transparent 65%);
}

/* Values */
.values-header { margin-bottom: var(--space-xl); }

.values-row {
  display: flex;
  gap: 0;
  align-items: stretch;
}

.value-item {
  flex: 1;
  padding: var(--space-md) clamp(1rem, 2vw, 1.75rem);
  text-align: center;
}
.value-item:first-child { padding-left: 0; }
.value-item:last-child  { padding-right: 0; }

.value-icon {
  margin: 0 auto var(--space-md);
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-title {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--charcoal);
  margin-bottom: var(--space-xs);
  letter-spacing: -0.005em;
}

.value-desc {
  font-size: 0.8125rem;
  color: var(--charcoal-60);
  line-height: 1.65;
}

.value-divider {
  width: 1px;
  background: rgba(20,20,20,0.1);
  align-self: stretch;
  flex-shrink: 0;
}

/* ══════════════════════════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════════════════════════ */
.contact {
  position: relative;
  padding: var(--space-3xl) 0;
  overflow: hidden;
}

.contact-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0E3A44 0%, #0B2D38 50%, #091F27 100%);
  z-index: 0;
}
.contact-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 20%, rgba(0,188,212,0.18) 0%, transparent 55%);
}

.contact-inner {
  position: relative;
  z-index: 1;
}

.contact-header {
  margin-bottom: var(--space-2xl);
}

.contact-sub {
  font-size: var(--text-lg);
  color: rgba(255,255,255,0.65);
  max-width: 480px;
  line-height: 1.6;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
}

/* Form */
.contact-form-wrap {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 3rem);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.55rem;
}

.form-input {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: var(--radius-sm);
  padding: 0.875rem 1.1rem;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--white);
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  appearance: none;
  -webkit-appearance: none;
}
.form-input::placeholder { color: rgba(255,255,255,0.3); }
.form-input:focus {
  border-color: var(--turquoise);
  background: rgba(0,188,212,0.06);
}
.form-input option {
  background: var(--teal);
  color: var(--white);
}
.form-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8'%3E%3Cpath d='M1 1l6 6 6-6' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}
.form-textarea {
  resize: vertical;
  min-height: 130px;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-note {
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.45);
  text-align: center;
}
.form-email-link {
  color: var(--turquoise);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Info column */
.contact-info {}

.contact-details {
  padding-top: var(--space-sm);
}

.contact-cta-block {
  margin-bottom: var(--space-sm);
}

.contact-cta-heading {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.015em;
  margin-bottom: var(--space-xs);
}

.contact-cta-desc {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.6);
  line-height: 1.65;
  margin-bottom: var(--space-md);
}

.contact-address {
  font-style: normal;
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.55);
  line-height: 1.8;
}

/* ══════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════ */
.site-footer {
  background: #071B22;
  padding: var(--space-xl) 0;
}

.footer-rule {
  height: 1px;
  background: rgba(255,255,255,0.1);
  width: 100%;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-lg);
  padding-top: var(--space-xl);
}

.footer-logo {
  height: 38px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.85;
  transition: opacity 0.2s;
}
.footer-logo:hover { opacity: 1; }

.footer-nav {
  display: flex;
  gap: var(--space-lg);
  flex-wrap: wrap;
  justify-content: center;
}

.footer-nav-link {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  transition: color 0.2s;
}
.footer-nav-link:hover { color: var(--turquoise); }

.footer-right {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.footer-url {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--turquoise);
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.footer-url:hover { color: #33cde0; }

.footer-copy {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.06em;
}

/* ══════════════════════════════════════════════════════════════════
   RESPONSIVE — Tablet
══════════════════════════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .solutions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .materials-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-gradient-accent {
    display: none;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .footer-nav {
    order: 3;
    grid-column: 1 / -1;
    justify-content: flex-start;
    gap: var(--space-md);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: var(--space-md);
    margin-top: var(--space-sm);
  }
}

/* ══════════════════════════════════════════════════════════════════
   RESPONSIVE — Mobile
══════════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  :root {
    --nav-h: 64px;
    --space-3xl: 5rem;
    --space-2xl: 3.5rem;
  }

  /* Nav mobile */
  .hamburger { display: flex; }

  .nav-links {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    width: 100%;
    background: rgba(247,245,241,0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    flex-direction: column;
    gap: 0;
    padding: 0;
    transform: translateY(-110%);
    transition: transform 0.35s var(--ease-out);
    border-bottom: 1px solid rgba(20,20,20,0.1);
    z-index: 890;
  }
  .nav-links.open {
    transform: translateY(0);
  }
  .nav-links li {
    border-bottom: 1px solid rgba(20,20,20,0.07);
  }
  .nav-link {
    display: block;
    padding: 1rem 1.5rem;
    font-size: var(--text-base);
    color: var(--charcoal) !important;
  }
  .site-nav:not(.scrolled) .nav-link {
    color: var(--charcoal) !important;
  }
  .nav-links .btn-pill {
    display: none;
  }
  .site-nav > .nav-inner > .btn-pill {
    display: none;
  }

  /* Hero */
  .hero-content {
    padding: calc(var(--nav-h) + 2rem) 1.25rem 4rem;
    max-width: 100%;
  }
  .br-desk { display: none; }

  /* Solutions */
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  /* Materials */
  .materials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Sustainability */
  .sustainability-pillars {
    flex-direction: column;
    gap: var(--space-xl);
  }
  .pillar-divider { display: none; }
  .pillar { padding: 0 !important; }

  /* Values */
  .values-row {
    flex-direction: column;
    gap: var(--space-xl);
  }
  .value-divider { display: none; }
  .value-item {
    padding: 0 !important;
    text-align: left;
    display: flex;
    gap: var(--space-md);
    align-items: flex-start;
  }
  .value-icon {
    flex-shrink: 0;
    margin: 0;
  }

  /* Footer */
  .footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-right { text-align: center; }
  .footer-nav { justify-content: center; }

  .stat-chip {
    min-width: 140px;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .materials-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-headline {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .sustainability-stats {
    flex-direction: column;
    align-items: center;
  }
}

/* ══════════════════════════════════════════════════════════════════
   UTILITY
══════════════════════════════════════════════════════════════════ */
:focus-visible {
  outline: 2px solid var(--turquoise);
  outline-offset: 3px;
  border-radius: 3px;
}

/* Active nav link */
.nav-link.active {
  color: var(--turquoise) !important;
}
.nav-link.active::after {
  width: 100%;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--turquoise);
  color: var(--charcoal);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  z-index: 9999;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 1rem;
}

/* Smooth scrollbar feel on desktop */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
