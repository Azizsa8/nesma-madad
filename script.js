/*!
 * Nesma Madad — Interactive JS
 * Vanilla ES6+ · No dependencies
 */

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
  updateNavState(); // run on load


  /* ─── Mobile hamburger menu ────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
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

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });


  /* ─── Scroll-reveal (IntersectionObserver) ─────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  // Stagger children within a parent group
  function setStaggerDelays() {
    const groups = document.querySelectorAll(
      '.solutions-grid, .materials-grid, .sustainability-pillars, .values-row, .sustainability-stats, .contact-layout'
    );
    groups.forEach(function (group) {
      const children = group.querySelectorAll('.reveal');
      children.forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.08) + 's';
      });
    });
  }
  setStaggerDelays();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ─── Contact form — front-end only validation + UX ────────── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('[type="submit"]');
      const name  = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const msg   = form.querySelector('#message').value.trim();

      // Simple client-side check
      if (!name || !email || !msg) {
        showFormMessage(form, 'Please fill in all required fields.', 'error');
        return;
      }
      if (!isValidEmail(email)) {
        showFormMessage(form, 'Please enter a valid email address.', 'error');
        return;
      }

      // Simulate success state
      submitBtn.textContent = 'Request Sent ✓';
      submitBtn.disabled = true;
      submitBtn.style.background = '#0E3A44';
      submitBtn.style.borderColor = '#0E3A44';
      submitBtn.style.color = '#fff';
      showFormMessage(form, "Thank you! We'll be in touch within two business days.", 'success');
      form.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormMessage(form, message, type) {
    // Remove existing message
    const existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    const el = document.createElement('p');
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
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.scrollY + nav.offsetHeight + 60;
    let currentId = '';

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
