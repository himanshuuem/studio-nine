const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");
const form = document.querySelector(".contact-form");
const status = form.querySelector(".form-status");

function setMenu(open) {
  menu.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "Close" : "Menu";
}

menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

function animateCount(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? "";
  const duration = 1200;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add("visible");
    entry.target.querySelectorAll("[data-count]").forEach((el) => {
      if (reducedMotion) el.textContent = `${el.dataset.count}${el.dataset.suffix ?? ""}`;
      else animateCount(el);
    });
    observer.unobserve(entry.target);
  }
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let firstInvalid = null;
  for (const field of form.querySelectorAll("[required]")) {
    const value = field.value.trim();
    const invalid = !value || (field.type === "email" && !EMAIL_PATTERN.test(value));
    field.setAttribute("aria-invalid", String(invalid));
    if (invalid && !firstInvalid) firstInvalid = field;
  }
  if (firstInvalid) {
    status.textContent = "Please fill in the highlighted fields.";
    firstInvalid.focus();
    return;
  }
  // Demo site: no backend. Show the success state a real endpoint would trigger.
  const name = form.elements.name.value.trim().split(" ")[0];
  status.textContent = `Thanks, ${name}! This is a demo, so nothing was sent, but on a live site we'd be in touch soon.`;
  form.reset();
});
