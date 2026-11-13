/**
 * =============================================================================
 * DYNAMIC COMPONENT RENDER ENGINE & SVG ICON MATRIX
 * =============================================================================
 * Renders data-driven components seamlessly from PORTFOLIO_DATA.
 */

// Embedded crisp SVG icons dictionary
const ICONS = {
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>`,
  "message-square": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  "git-commit": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>`,
  activity: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  monitor: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>`,
  zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  box: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  sparkles: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
  server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`,
  globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  wifi: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
  palette: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`,
  layout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path></svg>`,
  bot: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"></rect><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M12 2v4"></path></svg>`,
  eye: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  radio: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`,
  terminal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  thermometer: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`,
  "git-branch": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
  tool: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  award: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  cloud: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
  external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`
};

function getIcon(name, fallback = "code") {
  return ICONS[name] || ICONS[fallback] || ICONS.code;
}

// -----------------------------------------------------------------------------
// Component Rendering Functions
// -----------------------------------------------------------------------------

/**
 * Render Hero Section dynamic data
 */
function renderHero() {
  const p = PORTFOLIO_DATA.personal;

  // System ID / status
  const sysIdEl = document.getElementById("hero-sys-id");
  if (sysIdEl) sysIdEl.textContent = p.systemId;

  // Name
  const nameEl = document.getElementById("hero-name");
  if (nameEl) nameEl.textContent = p.name;

  // Short bio
  const bioEl = document.getElementById("hero-bio");
  if (bioEl) bioEl.textContent = p.shortBio;

  // Status Badge
  const statusEl = document.getElementById("hero-status-badge");
  if (statusEl) statusEl.textContent = p.statusBadge;

  // Avatar Image
  const avatarEl = document.querySelector(".avatar-image");
  if (avatarEl && p.avatar) {
    avatarEl.src = p.avatar;
    avatarEl.alt = `${p.name} Developer Portrait`;
  }

  // Social Links
  const socialsContainer = document.getElementById("hero-socials");
  if (socialsContainer) {
    socialsContainer.innerHTML = PORTFOLIO_DATA.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.name}" title="${s.label}">
          ${getIcon(s.icon)}
          <span class="social-tooltip">${s.name}</span>
        </a>
      `
      )
      .join("");
  }

  // HUD Stats Counter
  const statsContainer = document.getElementById("hero-stats");
  if (statsContainer) {
    statsContainer.innerHTML = PORTFOLIO_DATA.stats
      .map(
        (st) => `
        <div class="stat-hud-card" data-tilt>
          <div class="stat-icon">${getIcon(st.icon)}</div>
          <div class="stat-content">
            <div class="stat-number-wrapper">
              <span class="stat-counter" data-target="${st.value}">${st.value}</span>
              <span class="stat-suffix">${st.suffix}</span>
            </div>
            <div class="stat-label">${st.label}</div>
          </div>
        </div>
      `
      )
      .join("");
  }
}

/**
 * Render About Section dynamic data
 */
function renderAbout() {
  const p = PORTFOLIO_DATA.personal;

  const bioContainer = document.getElementById("about-bio-text");
  if (bioContainer) {
    bioContainer.innerHTML = p.fullBio
      .map((para) => `<p class="about-paragraph">${para}</p>`)
      .join("");
  }

  // Render Pillars
  const pillarsContainer = document.getElementById("about-pillars");
  if (pillarsContainer) {
    pillarsContainer.innerHTML = PORTFOLIO_DATA.aboutPillars
      .map(
        (pil) => `
        <div class="cyber-card pillar-card" data-tilt>
          <div class="pillar-header">
            <span class="pillar-code">${pil.code}</span>
            <div class="pillar-icon">${getIcon(pil.icon)}</div>
          </div>
          <h4 class="pillar-title">${pil.title}</h4>
          <p class="pillar-desc">${pil.desc}</p>
        </div>
      `
      )
      .join("");
  }
}

/**
 * Render Skills Categories & Skill Cards
 */
let currentSkillCategory = "all";
let skillSearchTerm = "";

function renderSkillCategories() {
  const catContainer = document.getElementById("skills-categories");
  if (!catContainer) return;

  catContainer.innerHTML = PORTFOLIO_DATA.skillCategories
    .map(
      (cat) => `
      <button class="skill-tab-btn ${cat.id === currentSkillCategory ? "active" : ""}" data-category="${cat.id}">
        <span class="tab-indicator">//</span> ${cat.label}
      </button>
    `
    )
    .join("");

  catContainer.querySelectorAll(".skill-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSkillCategory = btn.dataset.category;
      catContainer.querySelectorAll(".skill-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("click", 650, 0.03);
      }
      renderSkillCards();
    });
  });
}

function renderSkillCards() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  const filtered = PORTFOLIO_DATA.skills.filter((sk) => {
    const matchesCat = currentSkillCategory === "all" || sk.category === currentSkillCategory;
    const matchesSearch = !skillSearchTerm || sk.name.toLowerCase().includes(skillSearchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="skills-empty-state">
        <p class="t-accent">// NO SYSTEM MODULES MATCHING CRITERIA</p>
        <span>Try searching for another keyword or switch category.</span>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (sk) => `
      <div class="skill-card cyber-card" data-tilt style="--skill-color: ${sk.color}">
        <div class="skill-card-top">
          <div class="skill-icon-wrap" style="color: ${sk.color}">
            ${getIcon(sk.icon)}
          </div>
          <div class="skill-meta">
            <h4 class="skill-name">${sk.name}</h4>
            <span class="skill-badge">${sk.status}</span>
          </div>
        </div>
        <div class="skill-progress-container">
          <div class="skill-progress-header">
            <span class="skill-label">PROFICIENCY</span>
            <span class="skill-percentage">${sk.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" style="width: ${sk.level}%; background: linear-gradient(90deg, var(--neon-cyan), ${sk.color});"></div>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  if (typeof initCyberTilt === "function") {
    initCyberTilt();
  }
  window.dispatchEvent(new CustomEvent("contentRendered"));
}

/**
 * Render Project Showcase Cards & Categories
 */
let currentProjectCategory = "all";

function renderProjectCategories() {
  const catContainer = document.getElementById("project-categories");
  if (!catContainer) return;

  const categories = [
    { id: "all", label: "All Protocols" },
    { id: "aiml", label: "AI & Neural" },
    { id: "cyber", label: "Cyber & Security" },
    { id: "iot", label: "IoT & Swarm" },
    { id: "fullstack", label: "Full-Stack Web" }
  ];

  catContainer.innerHTML = categories
    .map(
      (c) => `
      <button class="project-pill-btn ${c.id === currentProjectCategory ? "active" : ""}" data-category="${c.id}">
        ${c.label}
      </button>
    `
    )
    .join("");

  catContainer.querySelectorAll(".project-pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentProjectCategory = btn.dataset.category;
      catContainer.querySelectorAll(".project-pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("click", 700, 0.03);
      }
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = PORTFOLIO_DATA.projects.filter(
    (p) => currentProjectCategory === "all" || p.category === currentProjectCategory
  );

  grid.innerHTML = filtered
    .map(
      (proj) => `
      <article class="project-card cyber-card" data-tilt data-project-id="${proj.id}">
        <div class="project-thumb-wrap">
          <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" />
          <div class="project-thumb-overlay"></div>
          <div class="project-status-chip" style="--status-color: ${proj.statusColor}">
            <span class="status-pulse-dot"></span>
            ${proj.status}
          </div>
          ${proj.featured ? '<div class="project-featured-badge">FEATURED PROTOCOL</div>' : ""}
        </div>
        
        <div class="project-body">
          <div class="project-header">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-tagline">${proj.tagline}</p>
          </div>

          <p class="project-desc">${proj.description}</p>

          <div class="project-tech-tags">
            ${proj.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>

          <div class="project-actions">
            <button class="btn-cyber-primary btn-sm view-project-btn" data-project-id="${proj.id}">
              <span>View Protocol</span>
              ${getIcon("external")}
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-cyber-secondary btn-sm" aria-label="Source code">
              ${getIcon("github")}
              <span>Source</span>
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  // Attach modal trigger listeners
  grid.querySelectorAll(".view-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.projectId;
      openProjectModal(pid);
    });
  });

  if (typeof initCyberTilt === "function") {
    initCyberTilt();
  }
  window.dispatchEvent(new CustomEvent("contentRendered"));
}

/**
 * Project Detail Modal Handler
 */
function openProjectModal(projectId) {
  const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-body");
  if (!modal || !modalContent) return;

  if (typeof CyberAudio !== "undefined") {
    CyberAudio.play("modal", 350, 0.08);
  }

  modalContent.innerHTML = `
    <div class="modal-project-header">
      <div class="modal-status-badge" style="color: ${proj.statusColor}">
        <span class="status-pulse-dot" style="background: ${proj.statusColor}"></span>
        STATUS: ${proj.status.toUpperCase()}
      </div>
      <h2 class="modal-project-title">${proj.title}</h2>
      <p class="modal-project-tagline">${proj.tagline}</p>
    </div>

    <div class="modal-img-container">
      <img src="${proj.image}" alt="${proj.title}" class="modal-img" />
      <div class="modal-img-scanline"></div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">// SYSTEM ARCHITECTURE & OVERVIEW</h4>
      <p class="modal-overview-text">${proj.fullOverview}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">// KEY INNOVATIONS & BENCHMARKS</h4>
      <ul class="modal-highlights-list">
        ${proj.highlights.map((h) => `<li><span class="t-accent">▸</span> ${h}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-metrics-grid">
      ${Object.entries(proj.metrics || {})
        .map(
          ([k, v]) => `
          <div class="metric-card">
            <span class="metric-label">${k.toUpperCase()}</span>
            <span class="metric-val">${v}</span>
          </div>
        `
        )
        .join("")}
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">// DEPLOYED STACK</h4>
      <div class="project-tech-tags">
        ${proj.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="modal-actions-bar">
      <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary">
        <span>Launch Live Interface</span>
        ${getIcon("external")}
      </a>
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-cyber-secondary">
        ${getIcon("github")}
        <span>Inspect Repository</span>
      </a>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Render Experience & Education Dual Timeline
 */
let currentTimelineTab = "experience";

function renderTimelineTabs() {
  const tabContainer = document.getElementById("timeline-tab-btns");
  if (!tabContainer) return;

  tabContainer.querySelectorAll(".tab-switch-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTimelineTab = btn.dataset.tab;
      tabContainer.querySelectorAll(".tab-switch-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (typeof CyberAudio !== "undefined") {
        CyberAudio.play("click", 620, 0.03);
      }
      renderTimeline();
    });
  });
}

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const dataList =
    currentTimelineTab === "experience" ? PORTFOLIO_DATA.experience : PORTFOLIO_DATA.education;

  container.innerHTML = `
    <div class="timeline-track"></div>
    <div class="timeline-items-wrapper">
      ${dataList
        .map(
          (item, idx) => `
        <div class="timeline-node" style="animation-delay: ${idx * 0.15}s">
          <div class="timeline-marker">
            <div class="marker-core"></div>
            <div class="marker-pulse"></div>
          </div>
          <div class="timeline-card cyber-card" data-tilt>
            <div class="timeline-card-header">
              <span class="timeline-period">// ${item.period}</span>
              <span class="timeline-badge">${item.badge}</span>
            </div>
            <h3 class="timeline-title">${item.title || item.degree}</h3>
            <div class="timeline-meta">
              <span class="timeline-org">${item.company || item.institution}</span>
              <span class="meta-separator">•</span>
              <span class="timeline-loc">${item.location}</span>
            </div>
            <p class="timeline-desc">${item.description}</p>
            ${
              item.achievements
                ? `
              <ul class="timeline-bullets">
                ${item.achievements.map((ach) => `<li>${ach}</li>`).join("")}
              </ul>
            `
                : ""
            }
            <div class="timeline-tags">
              ${item.tags.map((tg) => `<span class="tech-tag">${tg}</span>`).join("")}
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  if (typeof initCyberTilt === "function") {
    initCyberTilt();
  }
  window.dispatchEvent(new CustomEvent("contentRendered"));
}

/**
 * Render Certifications & Achievements Grid
 */
function renderCertifications() {
  const grid = document.getElementById("certifications-grid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.certifications
    .map(
      (cert) => `
      <div class="cyber-card cert-card" data-tilt style="--cert-accent: ${cert.accent}">
        <div class="cert-header">
          <div class="cert-icon-wrap" style="color: ${cert.accent}; border-color: ${cert.accent}">
            ${getIcon(cert.icon)}
          </div>
          <div class="cert-meta">
            <span class="cert-date">${cert.date}</span>
            <span class="cert-id">${cert.credentialId}</span>
          </div>
        </div>
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-issuer">ISSUED BY: <span class="t-accent">${cert.issuer}</span></div>
        <p class="cert-desc">${cert.description}</p>
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
          <span>Verify Credential</span>
          ${getIcon("external")}
        </a>
      </div>
    `
    )
    .join("");

  if (typeof initCyberTilt === "function") {
    initCyberTilt();
  }
  window.dispatchEvent(new CustomEvent("contentRendered"));
}

/**
 * Render Contact Details and Clock
 */
function renderContactInfo() {
  const p = PORTFOLIO_DATA.personal;
  const emailItem = PORTFOLIO_DATA.socials.find((s) => s.name.toLowerCase() === "email");
  const displayEmail = (emailItem && emailItem.label) || p.email || "jayvee.developer@example.com";

  const emailValEl = document.getElementById("contact-email-value");
  if (emailValEl) emailValEl.textContent = displayEmail;

  const locValEl = document.getElementById("contact-location-value");
  if (locValEl) locValEl.textContent = p.location;

  const statusValEl = document.getElementById("contact-status-value");
  if (statusValEl) statusValEl.textContent = p.statusText;

  // Real-time digital clock
  function updateClock() {
    const clockEl = document.getElementById("digital-clock");
    if (!clockEl) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", { hour12: false });
    clockEl.textContent = `${timeStr} UTC+8`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Copy email button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(displayEmail).then(() => {
        showToast("✓ Email copied to clipboard!", "success");
        if (typeof CyberAudio !== "undefined") {
          CyberAudio.play("transmit", 900, 0.05);
        }
      });
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = "info") {
  const toastContainer = document.getElementById("cyber-toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `cyber-toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-indicator"></div>
    <div class="toast-message">${message}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
