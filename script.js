/* ----------------------------------------------------------
       Hamburger Menu Toggle
---------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
  mobileNav.setAttribute("aria-hidden", !isOpen);
});

function closeMobileNav() {
  mobileNav.classList.remove("open");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  mobileNav.setAttribute("aria-hidden", "true");
}

// Close mobile nav when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
    closeMobileNav();
  }
});

/* ----------------------------------------------------------
       Scroll-Reveal (IntersectionObserver)
    ---------------------------------------------------------- */
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = Array.from(entry.target.parentElement.children);
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.08}s`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

revealEls.forEach((el) => observer.observe(el));

/* ----------------------------------------------------------
       Active nav link highlight on scroll
    ---------------------------------------------------------- */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.background = "";
          link.style.color = "";
        });
        const active = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );
        if (active && !active.classList.contains("btn")) {
          active.style.background = "var(--pink)";
          active.style.color = "var(--ink)";
        }
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((sec) => sectionObserver.observe(sec));
