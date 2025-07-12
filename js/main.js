// ==============================
// Main Initialization Script
// ==============================

// 1. AOS Animation Setup
AOS.init({
  duration: 1000,
  once: true,
});

// 2. Load Particle Background
particlesJS.load("particles-js", "particles.json", () => {
  console.log("Particles.js config loaded");
});

// 3. Start Typing Effect (if not auto-loaded from typing.js)
if (typeof typeLoop === "function") {
  document.addEventListener("DOMContentLoaded", typeLoop);
}



