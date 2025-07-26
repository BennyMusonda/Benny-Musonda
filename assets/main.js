document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      statusEl.textContent = 'Message sent! I’ll be in touch soon.';
      form.reset();
    } else {
      const errorData = await response.json();
      statusEl.textContent = errorData.error || 'Oops! Something went wrong.';
    }
  } catch (error) {
    statusEl.textContent = 'Network error. Please try again later.';
  }
});


const skillBars = document.querySelectorAll('.bar');
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const bar = entry.target;
      bar.style.setProperty('--fill', bar.dataset.level);
      obs.unobserve(bar);
    });
  },
  { threshold: 0.6 }
);

skillBars.forEach(bar => observer.observe(bar));
