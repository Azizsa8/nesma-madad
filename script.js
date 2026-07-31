/*!
 * Nesma Madad — Interactive JS with Full i18n & Arabic Switcher
 * Vanilla ES6+ · No dependencies
 */

(function () {
  'use strict';

  /* ─── i18n Dictionary ────────────────────────────────────────── */
  const translations = {
    en: {
      'doc-title': 'Nesma Madad — Bespoke Furniture & Hospitality Solutions',
      'doc-desc': 'Nesma Madad crafts bespoke furniture and fit-out environments for corporate offices, fine dining, cafes, and hospitality venues across the region.',
      'skip-link': 'Skip to main content',
      'nav-logo-aria': 'Nesma Madad — Home',
      'nav-catalogue': 'Catalogue',
      'nav-materials': 'Materials',
      'nav-sustainability': 'Sustainability',
      'nav-about': 'About',
      'nav-contact': 'Contact',
      'nav-proposal': 'Request Proposal',
      'hero-kicker': 'Bespoke Furniture & Hospitality',
      'hero-headline': 'Furniture & hospitality environments,<br class="br-desk" /> made to order.',
      'hero-sub': 'Crafted for corporate offices, dining spaces, and hospitality venues across the region. Every detail, considered from the start.',
      'hero-btn-catalogue': 'View Catalogue',
      'hero-btn-materials': 'Explore Materials',
      'cat-label': 'Our Catalogue',
      'cat-headline': 'Explore Our Bespoke Creations',
      'cat-intro': 'Browse our comprehensive digital brochure showcasing our custom office systems, fine dining concepts, and luxury lounge environments.',
      'cat-badge': 'Official 2026 Collection',
      'cat-card-title': 'Nesma Madad Digital Catalogue',
      'cat-card-desc': 'Click anywhere on this section to open our complete bespoke brochure directly in PDF format, featuring our full lineup of executive offices, hospitality venues, and custom joinery.',
      'cat-card-action': 'Open Catalogue PDF ↗',
      'cat-click-hint': 'Click to Open PDF ↗',
      'cat-btn-open': 'Open Catalogue PDF ↗',
      'cat-download': 'Download Full Catalogue',
      'mat-label': 'Materials & Craftsmanship',
      'mat-headline': 'Every finish. Every fibre.<br />Every detail considered.',
      'mat-intro': 'Our material library spans premium wood veneers, fine upholstery, and precision hardware — each selected for tactile quality, longevity, and responsible sourcing.',
      'mat-1-title': 'Oak Veneer',
      'mat-1-badge': 'FSC-Certified',
      'mat-2-title': 'Aniline Leather',
      'mat-2-badge': 'Recycled Content',
      'mat-3-title': 'Powder-Coated Steel',
      'mat-3-badge': 'Low-VOC',
      'mat-4-title': 'Brushed Brass',
      'mat-4-badge': 'Premium Finish',
      'mat-5-title': 'Wool Boucle',
      'mat-5-badge': 'Recycled Content',
      'mat-6-title': 'Carrara Marble',
      'mat-6-badge': 'FSC-Certified',
      'sust-label': 'Our Commitment',
      'sust-headline': 'Responsible materials.<br />Responsible futures.',
      'sust-p1-title': 'FSC-Certified Sourcing',
      'sust-p1-body': 'All wood-based materials are sourced from responsibly managed forests, certified to FSC standards.',
      'sust-p2-title': 'Recycled Content Fibres',
      'sust-p2-body': 'Upholstery programmes incorporate recycled and low-impact fibres without compromising tactile quality or durability.',
      'sust-p3-title': 'Low-VOC Finishes',
      'sust-p3-body': 'Our lacquers, stains, and topcoats are low or zero-VOC, protecting both interior air quality and the wider environment.',
      'sust-stat1-num': '100%',
      'sust-stat1-label': 'FSC-Certified Wood Supply',
      'sust-stat2-num': '30%+',
      'sust-stat2-label': 'Recycled Fibre Content',
      'sust-stat3-num': 'Zero',
      'sust-stat3-label': 'High-VOC Finish Products',
      'about-label': 'About Nesma Madad',
      'about-headline': 'Bespoke furniture & fit-out, built for the region.',
      'about-body1': 'We are a precision furniture and fit-out partner for corporate, hospitality, and dining clients across the region. Our team works directly with architecture and design practices to develop and manufacture furniture that is genuinely bespoke — not adapted from a catalogue, but conceived for your space, your brief, and your guests.',
      'about-body2': 'From executive environments to intimate fine-dining rooms, every project enters our studio as a brief and leaves as a crafted environment.',
      'about-btn': 'Work With Us',
      'principles-label': 'Our Principles',
      'val-1-title': 'Tailored Solutions',
      'val-1-desc': 'Every project is unique. We design and build to your brief, not from a catalogue.',
      'val-2-title': 'Superior Quality',
      'val-2-desc': 'Precision manufacturing and premium materials — visible in every joint, surface, and edge.',
      'val-3-title': 'Expert Guidance',
      'val-3-desc': 'Our team brings deep sector knowledge to every consultation — from spec through to installation.',
      'val-4-title': 'Efficient Delivery',
      'val-4-desc': 'Streamlined project management, transparent timelines, and on-time delivery as standard.',
      'val-5-title': 'Client Commitment',
      'val-5-desc': 'Long-term partnerships, responsive support, and aftercare that matches the quality of our products.',
      'contact-label': 'Get In Touch',
      'contact-headline': 'Ready to furnish<br />your space?',
      'contact-sub': "Tell us about your project — we'll come back to you within two business days.",
      'form-name-label': 'Full Name',
      'form-name-placeholder': 'Your full name',
      'form-email-label': 'Email Address',
      'form-email-placeholder': 'your@email.com',
      'form-project-label': 'Project Type',
      'form-project-placeholder': 'Select a category',
      'form-opt-corp': 'Corporate & Executive Offices',
      'form-opt-cafes': 'Cafes & Casual Dining',
      'form-opt-fine': 'Fine Dining & Restaurants',
      'form-opt-hosp': 'Hospitality & Lounges',
      'form-opt-other': 'Other / Multi-category',
      'form-msg-label': 'Project Brief',
      'form-msg-placeholder': 'Tell us about your space, timeline, and requirements…',
      'form-submit': 'Send Request',
      'form-email-direct': 'Or email us directly:',
      'cta-1-title': 'Request Proposal',
      'cta-1-desc': 'Complete the form and our team will prepare a tailored proposal for your project.',
      'cta-2-title': 'Book Consultation',
      'cta-2-desc': 'Prefer to speak with a project advisor? Book a 30-minute consultation with our team.',
      'cta-2-btn': 'Book Consultation',
      'details-label': 'Contact Details',
      'footer-logo-aria': 'Nesma Madad — Back to top',
      'footer-copy': '© 2025 Nesma Madad. All rights reserved.'
    },
    ar: {
      'doc-title': 'نسمة مدد — حلول الأثاث والتجهيز المخصص للضيافة والشركات',
      'doc-desc': 'تُصمّم ونُصنّع نسمة مدد الأثاث والتجهيزات الفاخرة المخصصة للمكاتب التنفيذية، المطاعم الفاخرة، المقاهي، ووجهات الضيافة في كافة أنحاء المنطقة.',
      'skip-link': 'الانتقال إلى المحتوى الرئيسي',
      'nav-logo-aria': 'نسمة مدد — الرئيسية',
      'nav-catalogue': 'الكتالوج',
      'nav-materials': 'المواد والحرفية',
      'nav-sustainability': 'الاستدامة',
      'nav-about': 'عن الشركة',
      'nav-contact': 'اتصل بنا',
      'nav-proposal': 'طلب عرض سعر',
      'hero-kicker': 'أثاث وتجهيزات مخصصة للضيافة والشركات',
      'hero-headline': 'أثاث وبيئات ضيافة<br class="br-desk" /> صُمّمت حسب الطلب.',
      'hero-sub': 'مُصنّعة للمكاتب التنفيذية، ومساحات المطاعم، ووجهات الضيافة في كافة أنحاء المنطقة. كل تفصيل مدروس بعناية من البداية.',
      'hero-btn-catalogue': 'استعرض الكتالوج',
      'hero-btn-materials': 'استكشف المواد',
      'cat-label': 'كتالوج المنتجات',
      'cat-headline': 'اكتشف إبداعاتنا المخصصة',
      'cat-intro': 'تصفح كتالوجنا الرقمي الشامل الذي يعرض أنظمتنا المكتبية المخصصة، ومفاهيم المطاعم الفاخرة، وبيئات الصالات الفندقية الراقية.',
      'cat-badge': 'المجموعة الرسمية لعام ٢٠٢٦',
      'cat-card-title': 'كتالوج نسمة مدد الرقمي',
      'cat-card-desc': 'اضغط على هذا القسم لفتح الكتالوج الرقمي الشامل مباشرة بصيغة PDF، والذي يعرض كافة حلول المكاتب التنفيذية، المطاعم الفاخرة، ووجهات الضيافة.',
      'cat-card-action': 'فتح الكتالوج PDF ↗',
      'cat-click-hint': 'اضغط لفتح PDF ↗',
      'cat-btn-open': 'فتح الكتالوج PDF ↗',
      'cat-download': 'تحميل الكتالوج الكامل (PDF)',
      'mat-label': 'المواد والحرفية',
      'mat-headline': 'كل لمسة نهائية. كل ألياف.<br />كل تفصيل بعناية.',
      'mat-intro': 'تتنوع مكتبة موادنا بين قشرة الخشب الفاخرة، والتنجيد الرفيع، وإكسسوارات الدقة — المُختارة خصيصاً لملمسها الراقي، ومتانتها، ومصادرها المستدامة.',
      'mat-1-title': 'قشرة خشب البلوط',
      'mat-1-badge': 'معتمد من FSC',
      'mat-2-title': 'جلد أنيلين فاخر',
      'mat-2-badge': 'محتوى معاد تدويره',
      'mat-3-title': 'فولاذ مكسو بالبودرة',
      'mat-3-badge': 'منخفض المركبات العضوية',
      'mat-4-title': 'نحاس أصفر مصقول',
      'mat-4-badge': 'لمسة نهائية فاخرة',
      'mat-5-title': 'قماش بوكلي صوف',
      'mat-5-badge': 'محتوى معاد تدويره',
      'mat-6-title': 'رخام كارارا',
      'mat-6-badge': 'طبيعي مستدام',
      'sust-label': 'التزامنا بالبيئة',
      'sust-headline': 'مواد مسؤولة.<br />مستقبل مستدام.',
      'sust-p1-title': 'مصادر معتمدة من FSC',
      'sust-p1-body': 'جميع المواد الخشبية تُستورد من غابات تُدار بمسؤولية وفق معايير FSC العالمية.',
      'sust-p2-title': 'ألياف معاد تدويرها',
      'sust-p2-body': 'تعتمد برامج التنجيد لدينا على ألياف معاد تدويرها وقليلة الأثر البيئي دون المساومة على الفخامة أو المتانة.',
      'sust-p3-title': 'طلاءات منخفضة الانبعاثات',
      'sust-p3-body': 'طلاءاتنا ومواد التلميع لدينا خالية أو منخفضة المركبات العضوية لحماية جودة الهواء الداخلي والبيئة.',
      'sust-stat1-num': '١٠٠٪',
      'sust-stat1-label': 'توريد خشب معتمد من FSC',
      'sust-stat2-num': '٣٠٪+',
      'sust-stat2-label': 'ألياف معاد تدويرها',
      'sust-stat3-num': 'صفر',
      'sust-stat3-label': 'مركبات ضارة بالهواء الداخلي',
      'about-label': 'عن نسمة مدد',
      'about-headline': 'أثاث وتجهيزات مخصصة صُمّمت وُصنّعت للمنطقة.',
      'about-body1': 'نحن شريك الدقة والتميز في تصنيع الأثاث والتجهيزات الداخلية لقطاعات الشركات والضيافة والمطاعم في المنطقة. يعمل فريقنا مباشرة مع مكاتب الهندسة والتصميم لتطوير وتصنيع أثاث مخصص كلياً — ليس من كتالوج جاهز، بل مبتكر خصيصاً لمساحتك، متطلباتك، وضيافة ضيوفك.',
      'about-body2': 'من البيئات المكتبية التنفيذية إلى صالات الطعام الفاخرة، يدخل كل مشروع استوديو التصميم لدينا كرؤية أولية ويخرج كبيئة متكاملة فائقة الإتقان.',
      'about-btn': 'ابنِ مشروعك معنا',
      'principles-label': 'مبادؤنا الرئيسية',
      'val-1-title': 'حلول مخصصة كلياً',
      'val-1-desc': 'كل مشروع له خصوصيته الفريدة. نصمم ونبني خصيصاً وفقاً لمتطلباتك.',
      'val-2-title': 'جودة فائقة',
      'val-2-desc': 'تصنيع دقيق ومواد فاخرة — تتجلى في كل وصلة، سطح، وزاوية.',
      'val-3-title': 'استشارات متخصصة',
      'val-3-desc': 'يقدم فريقنا خبرة عميقة في كل استشارة — بدءاً من المواصفات وحتى التركيب النهائي.',
      'val-4-title': 'تسليم دقيق وفوري',
      'val-4-desc': 'إدارة مشاريع متطورة، وجداول زمنية شفافة، والتزام تام بالمواعيد.',
      'val-5-title': 'التزام دائم بالعملاء',
      'val-5-desc': 'شراكات طويلة الأمد، ودعم فوري، وخدمة مابعد البيع تعكس جودة منتجاتنا.',
      'contact-label': 'تواصل معنا',
      'contact-headline': 'هل أنت جاهز لتجهيز<br />مساحتك؟',
      'contact-sub': 'أخبرنا عن تفاصيل مشروعك — وسنتواصل معك خلال يومي عمل.',
      'form-name-label': 'الاسم الكامل',
      'form-name-placeholder': 'اسمك الكامل',
      'form-email-label': 'البريد الإلكتروني',
      'form-email-placeholder': 'name@example.com',
      'form-project-label': 'نوع المشروع',
      'form-project-placeholder': 'اختر الفئة',
      'form-opt-corp': 'المكاتب التنفيذية والشركات',
      'form-opt-cafes': 'المقاهي والمطاعم الخفيفة',
      'form-opt-fine': 'المطاعم الفاخرة',
      'form-opt-hosp': 'الفنادق والصالات الفندقية',
      'form-opt-other': 'فئات متعددة / أخرى',
      'form-msg-label': 'تفاصيل وتطلعات المشروع',
      'form-msg-placeholder': 'أخبرنا عن مساحة مشروعك، الجدول الزمني، والمتطلبات الخاصة…',
      'form-submit': 'إرسال الطلب',
      'form-email-direct': 'أو تراسل معنا مباشرة:',
      'cta-1-title': 'طلب عرض سعر',
      'cta-1-desc': 'قم بتعبئة النموذج وسيقوم فريقنا بإعداد عرض سعر مخصص لمشروعك.',
      'cta-2-title': 'حجز استشارة',
      'cta-2-desc': 'هل تفضل التحدث مع مستشار مشاريع؟ احجز استشارة مدتها 30 دقيقة مع فريقنا.',
      'cta-2-btn': 'احجز استشارة الآن',
      'details-label': 'بيانات التواصل',
      'footer-logo-aria': 'نسمة مدد — العودة للأعلى',
      'footer-copy': '© 2025 نسمة مدد. جميع الحقوق محفوظة.'
    }
  };

  /* ─── Language Switcher Logic ───────────────────────────────── */
  function getInitialLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && (langParam === 'ar' || langParam === 'en')) {
      return langParam;
    }
    const saved = localStorage.getItem('nesma_lang');
    if (saved && (saved === 'ar' || saved === 'en')) {
      return saved;
    }
    return 'en';
  }

  let currentLang = getInitialLang();

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('nesma_lang', lang);

    // Update <html> lang and dir
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update document title & meta description
    if (translations[lang]['doc-title']) {
      document.title = translations[lang]['doc-title'];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang]['doc-desc']) {
      metaDesc.setAttribute('content', translations[lang]['doc-desc']);
    }

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update input placeholders with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update aria labels with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[lang][key]) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    // Update switcher active states
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      const btnLang = btn.getAttribute('data-lang-btn');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Bind language switcher buttons
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = this.getAttribute('data-lang-btn');
      setLanguage(lang);
    });
  });

  // Apply language on DOM content loaded
  setLanguage(currentLang);


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

  if (hamburger && navLinks) {
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
  }


  /* ─── Smooth scroll for anchor links ──────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();

      const navHeight = nav ? nav.offsetHeight : 0;
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

      const isAr = currentLang === 'ar';

      // Client-side validation check
      if (!name || !email || !msg) {
        const errorMsg = isAr ? 'يرجى تعبئة جميع الحقول المطلوبة.' : 'Please fill in all required fields.';
        showFormMessage(form, errorMsg, 'error');
        return;
      }
      if (!isValidEmail(email)) {
        const emailErr = isAr ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.' : 'Please enter a valid email address.';
        showFormMessage(form, emailErr, 'error');
        return;
      }

      // Simulate success state
      const successBtnText = isAr ? 'تم إرسال الطلب ✓' : 'Request Sent ✓';
      const successFormMsg = isAr ? 'شكراً لك! وسنتواصل معك خلال يومي عمل.' : "Thank you! We'll be in touch within two business days.";

      submitBtn.textContent = successBtnText;
      submitBtn.disabled = true;
      submitBtn.style.background = '#0E3A44';
      submitBtn.style.borderColor = '#0E3A44';
      submitBtn.style.color = '#fff';
      showFormMessage(form, successFormMsg, 'success');
      form.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormMessage(form, message, type) {
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
    const navHeight = nav ? nav.offsetHeight : 0;
    const scrollY = window.scrollY + navHeight + 60;
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
