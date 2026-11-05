(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('nav-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('nav-open');
    }));
  }

  const success = document.querySelector('#form-success');
  if (success && new URLSearchParams(window.location.search).get('success') === 'true') {
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
})();
