/**
 * scripts/utils.js
 * Pure helper functions: input formatters, field validators, and animation utilities.
 * Exposes window.LuminarUtils so components.js can consume it after dynamic loading.
 */

var LuminarUtils = {

  /**
   * Formats a phone input event value into (XX) XXXXX-XXXX.
   * Attach as an 'input' event handler on a <input type="tel"> element.
   */
  formatPhoneInput: function (e) {
    var v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (v.length > 6) {
      v = v.replace(/^(\d{2})(\d{4})(\d+)$/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d+)$/, '($1) $2');
    }
    e.target.value = v;
  },

  /**
   * Returns true when a phone string contains at least 10 digits.
   */
  validatePhone: function (value) {
    return value.replace(/\D/g, '').length >= 10;
  },

  /**
   * Animates a counter element from 0 to its data-count value
   * using a cubic ease-out curve over ~1800 ms.
   */
  animateCount: function (el) {
    var target   = parseInt(el.getAttribute('data-count'), 10);
    var duration = 1800;
    var start    = null;
    var suffix   = target === 98 ? '%' : '+';

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + (progress < 1 ? '' : suffix);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
};
