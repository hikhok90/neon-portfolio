/**
 * =============================================================================
 * 3D CYBER TILT EFFECT
 * =============================================================================
 * Adds futuristic 3D perspective tilt and dynamic specular glow on cards.
 */

function initCyberTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cards = document.querySelectorAll("[data-tilt]");

  cards.forEach((card) => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "true";

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Update dynamic light reflection coordinates
      const lightX = (x / rect.width) * 100;
      const lightY = (y / rect.height) * 100;
      card.style.setProperty("--light-x", `${lightX}%`);
      card.style.setProperty("--light-y", `${lightY}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}
