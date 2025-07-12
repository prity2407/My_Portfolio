  const roles = ["Web Developer", "Tech Explorer", "AI Enthusiast", "Lifelong Learner"];
  const typingSpan = document.getElementById("typing-text");

  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeLoop() {
    const currentRole = roles[roleIndex];

    if (typing) {
      typingSpan.textContent = currentRole.substring(0, charIndex++);
      if (charIndex > currentRole.length) {
        typing = false;
        setTimeout(typeLoop, 1500); // Wait before deleting
        return;
      }
    } else {
      typingSpan.textContent = currentRole.substring(0, charIndex--);
      if (charIndex === 0) {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, 300); // Slight pause before re-typing
        return;
      }
    }

    setTimeout(typeLoop, typing ? 100 : 50); // Typing/backspacing speed
  }

 
  document.addEventListener("DOMContentLoaded", typeLoop);
