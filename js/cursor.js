/**
 * =============================================================================
 * FUTURISTIC CYBERNETIC CURSOR
 * =============================================================================
 * Smooth lerp cursor with trailing neon reticle, hover expansion, and click burst.
 * Automatically disabled on mobile/touch screens for accessibility.
 */

class CyberCursor {
  constructor() {
    // Only initialize on desktop / non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    this.cursorDot = document.querySelector(".cursor-dot");
    this.cursorRing = document.querySelector(".cursor-ring");
    if (!this.cursorDot || !this.cursorRing) return;

    this.pos = { x: -100, y: -100 };
    this.ringPos = { x: -100, y: -100 };
    this.speed = 0.18;
    this.isHovering = false;
    this.isClicking = false;

    this.init();
    this.render = this.render.bind(this);
    requestAnimationFrame(this.render);
  }

  init() {
    window.addEventListener("mousemove", (e) => {
      this.pos.x = e.clientX;
      this.pos.y = e.clientY;
      this.cursorDot.style.opacity = "1";
      this.cursorRing.style.opacity = "1";
    });

    window.addEventListener("mousedown", () => {
      this.isClicking = true;
      this.cursorRing.classList.add("cursor-click");
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("click", 750, 0.04);
      }
    });

    window.addEventListener("mouseup", () => {
      this.isClicking = false;
      this.cursorRing.classList.remove("cursor-click");
    });

    // Attach hover effects to interactive elements dynamically
    this.attachHoverListeners();

    // Re-attach after dynamic content renders
    window.addEventListener("contentRendered", () => {
      this.attachHoverListeners();
    });
  }

  attachHoverListeners() {
    const targets = document.querySelectorAll(
      "a, button, input, textarea, select, .project-card, .skill-card, .cyber-card, .tab-btn, .timeline-card"
    );

    targets.forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "true";

      el.addEventListener("mouseenter", () => {
        this.isHovering = true;
        this.cursorRing.classList.add("cursor-hover");
        if (typeof CyberAudio !== "undefined" && !el.dataset.noAudio) {
          CyberAudio.play("hover", 500, 0.02);
        }
      });

      el.addEventListener("mouseleave", () => {
        this.isHovering = false;
        this.cursorRing.classList.remove("cursor-hover");
      });
    });
  }

  render() {
    // Lerp outer ring
    this.ringPos.x += (this.pos.x - this.ringPos.x) * this.speed;
    this.ringPos.y += (this.pos.y - this.ringPos.y) * this.speed;

    this.cursorDot.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0)`;
    this.cursorRing.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0)`;

    requestAnimationFrame(this.render);
  }
}
