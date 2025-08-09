// Mobile menu toggle
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Animate project cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Add hover effects to project previews
document.querySelectorAll(".project-card").forEach((card) => {
  const preview = card.querySelector(".website-preview");

  card.addEventListener("mouseenter", () => {
    preview.style.transform = "scale(1.05)";
    preview.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    preview.style.transform = "scale(1)";
  });
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector(".hero h1");
const originalText = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    heroTitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Create floating particles
function createFloatingElements() {
  const interactiveBg = document.getElementById("interactiveBg");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-element";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration = Math.random() * 6 + 4 + "s";
    interactiveBg.appendChild(particle);
  }
}

// Mouse movement interaction
function initMouseInteraction() {
  const hero = document.querySelector(".hero");
  const shapes = document.querySelectorAll(".shape");

  hero.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth) * 100;
    const yPos = (clientY / innerHeight) * 100;

    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.5;
      const x = (xPos - 50) * speed * 0.01;
      const y = (yPos - 50) * speed * 0.01;

      shape.style.transform = `translate(${x}px, ${y}px) rotate(${x + y}deg)`;
    });
  });
}

// Initialize interactive elements
window.addEventListener("load", () => {
  createFloatingElements();
  initMouseInteraction();
  setTimeout(typeWriter, 1000);
});
