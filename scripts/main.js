/**
 * scripts/main.js
 * Entry point — dynamically loads utils.js then components.js in sequence,
 * then initializes all components once the DOM is ready.
 *
 * This approach works with the file:// protocol (no local server required)
 * because it uses classic <script> injection instead of ES module imports.
 */

(function () {

  function loadScript(src, callback) {
    var s    = document.createElement('script');
    s.src    = src;
    s.onload = callback;
    document.head.appendChild(s);
  }

  function init() {
    var C = LuminarComponents;
    C.initHeader();
    C.initMobileMenu();
    C.initActiveNav();
    C.initScrollReveal();
    C.initCounters();
    C.initContactForm();
  }

  /* Load utils → components → run init, respecting DOM readiness */
  loadScript('scripts/utils.js', function () {
    loadScript('scripts/components.js', function () {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    });
  });

}());
