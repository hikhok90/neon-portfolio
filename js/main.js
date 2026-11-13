/**
 * =============================================================================
 * MAIN APPLICATION ORCHESTRATOR
 * =============================================================================
 * Handles navbar interactions, scroll spy, modal lifecycles, form processing,
 * typewriter effects, and audio state toggling.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Audio SFX Toggle
  initAudioToggle();

  // 2. Initialize Canvas Background Particles
  new CyberParticleCanvas("cyber-bg-canvas");

  // 3. Initialize Futuristic Cursor
  new CyberCursor();

  // 4. Render Dynamic Content from data.js
  renderHero();
  renderAbout();
  renderSkillCategories();
  renderSkillCards();
  renderProjectCategories();
  renderProjects();
  renderTimelineTabs();
  renderTimeline();
  renderCertifications();
  renderContactInfo();

  // 5. Initialize Interactive Terminal
  new CyberTerminal();

  // 6. Initialize 3D Tilt on Cards
  initCyberTilt();

  // 7. Initialize Rotating Typewriter Effect
  initTypewriter();

  // 8. Initialize Scroll Spy & Navbar Behavior
  initNavigation();

  // 9. Initialize Stats Counter Observer
  initStatsCounter();

  // 10. Initialize Contact Form
  initContactForm();

  // 11. Initialize Skill Search Bar
  initSkillSearch();

  // 12. Initialize Modal Handlers (Project & Resume)
  initModals();

  // Notify listeners (e.g. cursor hover binder)
  window.dispatchEvent(new CustomEvent("contentRendered"));
});

/**
 * Audio SFX Toggle in Navbar
 */
function initAudioToggle() {
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (!toggleBtn) return;

  function updateIcon() {
    const isMuted = CyberAudio.isMuted();
    toggleBtn.classList.toggle("muted", isMuted);
    toggleBtn.setAttribute("title", isMuted ? "Audio: Muted (Click to Enable)" : "Audio: Active (Click to Mute)");
    const iconSpan = toggleBtn.querySelector(".audio-state-text");
    if (iconSpan) {
      iconSpan.textContent = isMuted ? "SFX // OFF" : "SFX // ON";
    }
  }

  updateIcon();

  toggleBtn.addEventListener("click", () => {
    CyberAudio.toggleMute();
    updateIcon();
  });
}

/**
 * Typewriter & Glitch Effect for Roles
 */
function initTypewriter() {
  const roleEl = document.getElementById("hero-dynamic-role");
  if (!roleEl) return;

  const roles = PORTFOLIO_DATA.personal.rotatingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      roleEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      roleEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/**
 * Navigation, Scroll Spy & Mobile Drawer
 */
function initNavigation() {
  const navbar = document.getElementById("cyber-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const progressBar = document.getElementById("scroll-progress-bar");
  const sections = document.querySelectorAll("section[id]");

  // Scroll event
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sticky nav state
    if (navbar) {
      navbar.classList.toggle("scrolled", scrollY > 50);
    }

    // Scroll reading progress
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }

    // Scroll spy
    let currentId = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileToggle.classList.toggle("active", isOpen);
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("click", 500, 0.03);
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        mobileToggle.classList.remove("active");
      });
    });
  }

  // Smooth scroll with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * Numbers Count-Up on Scroll
 */
function initStatsCounter() {
  const statSection = document.getElementById("hero-stats");
  if (!statSection) return;

  let triggered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !triggered) {
        triggered = true;
        const counters = document.querySelectorAll(".stat-counter");

        counters.forEach((c) => {
          const rawTarget = c.dataset.target;
          const target = parseFloat(rawTarget);
          if (isNaN(target)) return;

          const isFloat = rawTarget.includes(".");
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeProgress;

            c.textContent = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              c.textContent = rawTarget;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(statSection);
}

/**
 * Skill Search Bar
 */
function initSkillSearch() {
  const searchInput = document.getElementById("skill-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    skillSearchTerm = e.target.value.trim();
    renderSkillCards();
  });
}

/**
 * Modal Handlers: Close on backdrop, ESC key, or close button
 */
function initModals() {
  const modals = document.querySelectorAll(".cyber-modal");

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector(".modal-close-btn");

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("click", 450, 0.03);
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((m) => {
        m.classList.remove("open");
      });
      document.body.style.overflow = "";
    }
  });

  // Resume Modal Trigger
  const resumeBtns = document.querySelectorAll(".trigger-resume-modal");
  const resumeModal = document.getElementById("resume-modal");

  resumeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (resumeModal) {
        resumeModal.classList.add("open");
        document.body.style.overflow = "hidden";
        if (typeof CyberAudio !== "undefined") {
          CyberAudio.play("modal", 380, 0.06);
        }
      }
    });
  });

  // Resume Download button inside modal
  const downloadResumeBtn = document.getElementById("resume-download-btn");
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", () => {
      showToast("✓ Generating encrypted transmission package...", "info");
      setTimeout(() => {
        showToast("✓ Resume download ready for offline review!", "success");
      }, 1000);
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("transmit", 850, 0.08);
      }
    });
  }
}

/**
 * Interactive Contact Form
 */
function initContactForm() {
  const form = document.getElementById("cyber-contact-form");
  if (!form) return;

  const submitBtn = form.querySelector(".submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic form validation
    const name = form.querySelector("#contact-name").value.trim();
    const email = form.querySelector("#contact-email").value.trim();
    const subject = form.querySelector("#contact-subject").value.trim();
    const message = form.querySelector("#contact-message").value.trim();

    if (!name || !email || !message) {
      showToast("⚠ Please provide all required transmission coordinates.", "warning");
      return;
    }

    // Play cyber transmit sound
    if (typeof CyberAudio !== "undefined") {
      CyberAudio.play("transmit", 920, 0.12);
    }

    // Simulate sending state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add("transmitting");
      submitBtn.innerHTML = `
        <span class="btn-spinner"></span>
        <span>TRANSMITTING VIA SECURE MESH...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("transmitting");
        submitBtn.innerHTML = `
          <span>TRANSMIT MESSAGE</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        `;
      }

      form.reset();
      showToast("✓ Message transmitted! System response dispatched to your inbox.", "success");
    }, 1400);
  });
}
