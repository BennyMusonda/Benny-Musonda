document.documentElement.classList.replace('no-js', 'js-enabled');

// Lightweight page loading indicator.
const preloader = document.getElementById('preloader');
const preloaderFill = document.querySelector('.preloader-fill');
const preloaderPercent = document.getElementById('preloaderPercent');

if (preloader) {
  document.body.classList.add('is-loading');
  const startTime = performance.now();
  const minimumDisplayTime = 240;
  let progress = 0;

  const progressTimer = window.setInterval(() => {
    progress = Math.min(90, progress + Math.max(1, (90 - progress) * 0.12));
    if (preloaderFill) preloaderFill.style.width = `${progress}%`;
    if (preloaderPercent) preloaderPercent.textContent = `${Math.round(progress)}%`;
  }, 90);

  const hidePreloader = () => {
    const wait = Math.max(0, minimumDisplayTime - (performance.now() - startTime));

    window.setTimeout(() => {
      window.clearInterval(progressTimer);
      if (preloaderFill) preloaderFill.style.width = '100%';
      if (preloaderPercent) preloaderPercent.textContent = '100%';

      window.setTimeout(() => {
        preloader.classList.add('is-hidden');
        document.body.classList.remove('is-loading');
        window.setTimeout(() => preloader.remove(), 750);
      }, 140);
    }, wait);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hidePreloader, { once: true });
  } else {
    hidePreloader();
  }
}

// Header navigation and scroll progress.
const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const progressBar = document.getElementById('pageProgress');

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  if (progressBar) progressBar.style.width = `${progress}%`;
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

if (menuToggle && nav) {
  const menuIcon = menuToggle.querySelector('i');

  const setMenuState = isOpen => {
    nav.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    if (menuIcon) menuIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };

  menuToggle.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('open'));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });
}

// Reveal content as it enters the viewport and keep section navigation in sync.
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

if (nav && 'IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main section[id]');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(section => sectionObserver.observe(section));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Shared Formspree submission and status handling for both enquiry forms.
function attachFormspreeSubmission(form, status, submitButton, successMessage) {
  if (!form || !status || !submitButton) return;

  const submitLabel = submitButton.querySelector('.submit-label');
  const submitIcon = submitButton.querySelector('i');
  if (!submitLabel || !submitIcon) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const originalLabel = submitLabel.textContent;
    const originalIconClass = submitIcon.className;
    submitButton.disabled = true;
    submitLabel.textContent = 'Sending…';
    submitIcon.className = 'fa-solid fa-spinner fa-spin';
    submitButton.setAttribute('aria-busy', 'true');
    status.hidden = true;
    status.className = 'form-status';
    status.querySelector('i').className = 'fa-solid';
    status.querySelector('span').textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Formspree rejected the submission.');

      form.reset();
      status.classList.add('is-success');
      status.querySelector('i').classList.add('fa-circle-check');
      status.querySelector('span').textContent = successMessage;
      status.hidden = false;
    } catch (error) {
      status.classList.add('is-error');
      status.querySelector('i').classList.add('fa-circle-xmark');
      status.querySelector('span').textContent =
        'Message not delivered. Please try again or email bennymusonda92@gmail.com.';
      status.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitLabel.textContent = originalLabel;
      submitIcon.className = originalIconClass;
    }
  });
}

attachFormspreeSubmission(
  document.getElementById('contactForm'),
  document.getElementById('formStatus'),
  document.getElementById('submitButton'),
  'Message delivered. Thanks for reaching out — I’ll be in touch.'
);

attachFormspreeSubmission(
  document.getElementById('projectInquiryForm'),
  document.getElementById('projectFormStatus'),
  document.getElementById('projectSubmitButton'),
  'Project inquiry delivered. I’ll be in touch to discuss the scope and next steps.'
);

// Native dialog handles focus containment and Escape-to-close behavior.
const projectInquiryDialog = document.getElementById('projectInquiryDialog');
const openProjectInquiry = document.getElementById('openProjectInquiry');
const closeProjectInquiry = document.getElementById('closeProjectInquiry');
if (projectInquiryDialog && openProjectInquiry && closeProjectInquiry) {
  openProjectInquiry.addEventListener(
    'click',
    () => projectInquiryDialog.showModal()
  );
  closeProjectInquiry.addEventListener(
    'click',
    () => projectInquiryDialog.close()
  );
  projectInquiryDialog.addEventListener('click', event => {
    if (event.target === projectInquiryDialog) projectInquiryDialog.close();
  });
}

// Payment options are displayed now; payment actions remain disabled until Lenco is configured.
const supportPaymentDialog = document.getElementById('supportPaymentDialog');
const openSupportPayments = document.getElementById('openSupportPayments');
const closeSupportPayments = document.getElementById('closeSupportPayments');
if (supportPaymentDialog && openSupportPayments && closeSupportPayments) {
  openSupportPayments.addEventListener(
    'click',
    () => supportPaymentDialog.showModal()
  );
  closeSupportPayments.addEventListener(
    'click',
    () => supportPaymentDialog.close()
  );
  supportPaymentDialog.addEventListener('click', event => {
    if (event.target === supportPaymentDialog) supportPaymentDialog.close();
  });
}

// Accessible project category filtering.
const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card[data-category]');

projectFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;

    projectFilters.forEach(button => {
      const selected = button === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    projectCards.forEach(card => {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) card.classList.add('visible');
    });
  });
});
