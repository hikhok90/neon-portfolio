/**
 * =============================================================================
 * FUTURISTIC NEON PARTICLE & CYBER GRID CANVAS
 * =============================================================================
 * High-performance 60fps canvas animation rendering glowing constellation
 * nodes, neon energy filaments, and interactive mouse repulsion.
 */

class CyberParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.particleCount = 55;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 160 };
    this.colors = [
      "rgba(0, 240, 255, ",   // Electric Cyan
      "rgba(255, 0, 127, ",   // Neon Magenta
      "rgba(157, 78, 221, ",  // Cyber Purple
      "rgba(0, 255, 157, "    // Neon Emerald
    ];

    this.init();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    this.createParticles();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;

    // Adjust particle density based on screen width
    if (this.width < 768) {
      this.particleCount = 28;
      this.maxDistance = 100;
    } else if (this.width < 1200) {
      this.particleCount = 42;
      this.maxDistance = 120;
    } else {
      this.particleCount = 65;
      this.maxDistance = 150;
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      const colorBase = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        colorBase: colorBase,
        alpha: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseDir: 1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Pulse alpha for neon breathing effect
      p.alpha += p.pulseSpeed * p.pulseDir;
      if (p.alpha > 0.85 || p.alpha < 0.25) {
        p.pulseDir *= -1;
      }

      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around canvas edges
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse interaction (repulsion)
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      // Draw particle with glow
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.colorBase}${p.alpha})`;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = `${p.colorBase}0.8)`;
      this.ctx.fill();
      this.ctx.restore();

      // Connect nearby particles with glowing neon lines
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const lineAlpha = (1 - dist / this.maxDistance) * 0.25;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
          this.ctx.restore();
        }
      }

      // Connect to mouse pointer
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const mouseAlpha = (1 - dist / this.mouse.radius) * 0.45;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(255, 0, 127, ${mouseAlpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          this.ctx.restore();
        }
      }
    }

    requestAnimationFrame(this.animate);
  }
}
