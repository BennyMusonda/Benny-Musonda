// THEME TOGGLE
const themeButton = document.getElementById("theme-toggle");
const themeIcon = themeButton.querySelector("i");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.className = "fa-solid fa-moon";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.className = "fa-regular fa-moon"; // Fixed: targets icon class instead of setting button text
    localStorage.setItem("theme", "light");
  }
});

// LOAD SAVED THEME
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.className = "fa-solid fa-moon";
} else {
  themeIcon.className = "fa-regular fa-moon";
}
// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// SKILL BAR ANIMATION
const skillBars = document.querySelectorAll(".bar span");

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.level;
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach((bar) => {
  skillObserver.observe(bar);
});

// CONTACT FORM SUBMISSION
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  status.textContent = "";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      status.textContent = "Message sent successfully. Thank you!";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
    }
  } catch (error) {
    status.textContent = "Network error. Please check your connection.";
  }

  submitButton.disabled = false;
  submitButton.textContent = "Send Message";
});

// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();
