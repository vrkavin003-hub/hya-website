(function () {
  'use strict';

  var root = document.documentElement;
  var themeButton = document.querySelector('.theme-toggle');
  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.primary-nav');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeButton) themeButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('hya-theme', next); } catch {}
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 }) : null;

  document.querySelectorAll('.reveal').forEach(function (element) {
    if (observer) observer.observe(element); else element.classList.add('is-visible');
  });
})();
