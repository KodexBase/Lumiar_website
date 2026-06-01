/**
 * scripts/components.js
 * Component initialization functions: header scroll, mobile menu, active nav,
 * scroll-reveal animations, stat counters, and contact form validation.
 * Depends on LuminarUtils being already loaded. Exposes window.LuminarComponents.
 */

var LuminarComponents = (function (U) {

  function initHeader() {
    var header = document.getElementById('header');
    if (!header) return;
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMobileMenu() {
    var burger    = document.getElementById('burger');
    var mobileNav = document.getElementById('mobile-nav');
    if (!burger || !mobileNav) return;
    var open = false;

    function toggle() {
      open = !open;
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      mobileNav.classList.toggle('open', open);
      mobileNav.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    burger.addEventListener('click', toggle);

    document.querySelectorAll('.mobile-nav__link, .mobile-nav__cta .btn').forEach(function (el) {
      el.addEventListener('click', function () { if (open) toggle(); });
    });

    document.addEventListener('click', function (e) {
      if (open && !burger.contains(e.target) && !mobileNav.contains(e.target)) toggle();
    });
  }

  function initActiveNav() {
    var links    = document.querySelectorAll('.nav__link[href^="#"]');
    var sections = Array.from(document.querySelectorAll('section[id]'));

    function update() {
      var scrollY = window.scrollY + 120;
      var current = '';
      sections.forEach(function (s) {
        if (scrollY >= s.offsetTop) current = s.id;
      });
      links.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    if (!window.IntersectionObserver) {
      targets.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    targets.forEach(function (el) { obs.observe(el); });
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length || !window.IntersectionObserver) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          U.animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { obs.observe(c); });
  }

  function initContactForm() {
    var form    = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    var btn     = document.getElementById('form-btn');
    if (!form) return;

    function setError(inputId, errId, show) {
      var input = document.getElementById(inputId);
      var err   = document.getElementById(errId);
      if (!input || !err) return;
      input.classList.toggle('err', show);
      err.classList.toggle('show', show);
    }

    function validate() {
      var valid = true;

      var name = document.getElementById('name');
      if (!name.value.trim()) {
        setError('name', 'name-err', true); valid = false;
      } else { setError('name', 'name-err', false); }

      var phone = document.getElementById('phone');
      if (!U.validatePhone(phone.value)) {
        setError('phone', 'phone-err', true); valid = false;
      } else { setError('phone', 'phone-err', false); }

      var svc = document.getElementById('service');
      if (!svc.value) {
        setError('service', 'service-err', true); valid = false;
      } else { setError('service', 'service-err', false); }

      return valid;
    }

    var phoneInput = document.getElementById('phone');
    if (phoneInput) phoneInput.addEventListener('input', U.formatPhoneInput);

    ['name', 'phone', 'service'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      function clearError() {
        el.classList.remove('err');
        var errEl = document.getElementById(id + '-err');
        if (errEl) errEl.classList.remove('show');
      }
      el.addEventListener('input', clearError);
      el.addEventListener('change', clearError);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) return;
      btn.disabled    = true;
      btn.textContent = 'Enviando…';
      setTimeout(function () {
        form.querySelector('.form-fields').style.display = 'none';
        success.classList.add('show');
      }, 900);
    });
  }

  return {
    initHeader:       initHeader,
    initMobileMenu:   initMobileMenu,
    initActiveNav:    initActiveNav,
    initScrollReveal: initScrollReveal,
    initCounters:     initCounters,
    initContactForm:  initContactForm
  };

}(LuminarUtils));
