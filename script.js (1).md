/*!
 * Nesma Madad — Interactive JS
 * Vanilla ES6+ · No dependencies
 *
 * BUG FIX: Progressive-enhancement scroll-reveal.
 *
 * The html.js class is added via an inline <script> in <head> (before CSS
 * is parsed) so the CSS rule `html.js .reveal { opacity: 0 }` only applies
 * when JS is active. Without JS, every .reveal element is fully visible.
 *
 * Reveal strategy (layered for robustness):
 *   1. IntersectionObserver with generous rootMargin reveals on scroll.
 *   2. On window 'load': force-reveal any element already in viewport.
 *   3. 2-second safety-net timer reveals any still-hidden stragglers.
 *   4. prefers-reduced-motion: skip animation entirely, reveal all at once.
 */

// Note: document.documentElement.classList.add('js') is in the inline
// <script> tag in <head> — runs before CSS is applied, preventing FOUC.

(function () {
  'use strict';

  /* ─── Sticky nav scroll state ──────────────────────────────── */
  const nav = document.getElementById('site-nav');
  const SCROLL_THRESHOLD = 40;

  function updateNavState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();


  /* ─── Mobile hamburger menu ────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });


  /* ─── Smooth scroll for anchor links ──────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();

      const navHeight = nav.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* ─── Scroll-reveal — progressive enhancement ───────────────
     Content is visible by default (html.js CSS hides it only when
     JS is active). IntersectionObserver re-reveals on scroll.
  ────────────────────────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  function revealAll(els) {
    els.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* Respect prefers-reduced-motion: show everything immediately */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    revealAll(revealEls);
    return; // nothing more to do
  }

  /* Stagger delays for grid children */
  var groups = document.querySelectorAll(
    '.solutions-grid, .materials-grid, .sustainability-pillars, .values-row, .sustainability-stats, .contact-layout'
  );
  groups.forEach(function (group) {
    var children = group.querySelectorAll('.reveal');
    children.forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  if ('IntersectionObserver' in window) {
    /* Generous rootMargin: trigger reveal 120px before element enters */
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 120px 0px' }
    );

    revealEls.forEach(function (el) { observer.observe(el); });

    /* Step 2 — On load: reveal anything already in or near the viewport */
    window.addEventListener('load', function () {
      revealEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 300) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    });

    /* Step 3 — Safety net: reveal any stragglers after 2 seconds */
    setTimeout(function () {
      revealAll(document.querySelectorAll('.reveal:not(.is-visible)'));
    }, 2000);

  } else {
    /* No IntersectionObserver: reveal everything immediately */
    revealAll(revealEls);
  }


  /* ─── Contact form validation ──────────────────────────────── */
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = form.querySelector('[type="submit"]');
      var name  = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var msg   = form.querySelector('#message').value.trim();

      if (!name || !email || !msg) {
        showFormMessage(form, 'Please fill in all required fields.', 'error');
        return;
      }
      if (!isValidEmail(email)) {
        showFormMessage(form, 'Please enter a valid email address.', 'error');
        return;
      }

      submitBtn.textContent = 'Request Sent \u2713';
      submitBtn.disabled = true;
      submitBtn.style.background = '#0E3A44';
      submitBtn.style.borderColor = '#0E3A44';
      submitBtn.style.color = '#fff';
      showFormMessage(form, 'Thank you! We\u2019ll be in touch within two business days.', 'success');
      form.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormMessage(form, message, type) {
    var existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    var el = document.createElement('p');
    el.className = 'form-message';
    el.textContent = message;
    el.style.cssText = [
      'font-size: 0.8125rem',
      'padding: 0.75rem 1rem',
      'border-radius: 8px',
      'margin-top: 1rem',
      'font-family: var(--font-display, sans-serif)',
      type === 'success'
        ? 'background: rgba(0,188,212,0.12); color: #33d6ea; border: 1px solid rgba(0,188,212,0.3);'
        : 'background: rgba(200,90,84,0.12); color: #e07c78; border: 1px solid rgba(200,90,84,0.3);'
    ].join('; ');
    form.appendChild(el);
  }


  /* ─── Active nav link on scroll ────────────────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navLinksAll = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    var scrollY = window.scrollY + nav.offsetHeight + 60;
    var currentId = '';

    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinksAll.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

})();
