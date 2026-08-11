document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navLinks) {
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
      @media (max-width: 900px) {
        .nav-links.mobile-open {
          display: flex !important;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          flex-direction: column;
          align-items: stretch;
          gap: 4px;
          padding: 14px 20px 18px;
          background: rgba(8,17,31,.98);
          border-bottom: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 20px 35px rgba(0,0,0,.25);
        }
        .nav-links.mobile-open a { display: block; padding: 12px 10px; }
        .nav-links.mobile-open .nav-product { display: flex; }
      }
    `;
    document.head.appendChild(mobileStyle);

    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('mobile-open');
      hamburger.setAttribute('aria-expanded', String(open));
      hamburger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  if (navbar) {
    const updateNavbar = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  const animated = document.querySelectorAll('.service-card, .threat-stats, .value-grid > div');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    animated.forEach(el => observer.observe(el));
  }
});
