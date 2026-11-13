/**
 * =============================================================================
 * CYBERPUNK SOUND EFFECTS ENGINE (Web Audio API)
 * =============================================================================
 * Generates futuristic sci-fi sound effects procedurally.
 * No external audio files needed; 100% reliable and instantaneous.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("cyber_sfx_muted") === "true";
    this.initContext = this.initContext.bind(this);
  }

  initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("cyber_sfx_muted", this.muted ? "true" : "false");
    if (!this.muted) {
      this.initContext();
      this.play("beep", 880, 0.05);
    }
    return this.muted;
  }

  play(type = "click", freq = 600, duration = 0.04) {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + duration);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      } else if (type === "hover") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.linearRampToValueAtTime(520, now + 0.03);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.03);
        duration = 0.03;
      } else if (type === "modal") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        duration = 0.08;
      } else if (type === "transmit") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        duration = 0.15;
      } else if (type === "glitch") {
        osc.type = "square";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.setValueAtTime(450, now + 0.02);
        osc.frequency.setValueAtTime(120, now + 0.04);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.06);
        duration = 0.06;
      }

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }
}

const CyberAudio = new SoundEngine();
