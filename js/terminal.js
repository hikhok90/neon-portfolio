/**
 * =============================================================================
 * INTERACTIVE CYBER TERMINAL WIDGET
 * =============================================================================
 * Allows visitors to interact with a realistic CLI terminal inside the About section.
 */

class CyberTerminal {
  constructor() {
    this.container = document.getElementById("cyber-terminal");
    if (!this.container) return;

    this.body = this.container.querySelector(".terminal-body");
    this.input = this.container.querySelector(".terminal-input");
    this.form = this.container.querySelector(".terminal-form");
    this.history = [];
    this.historyIndex = -1;

    this.init();
  }

  init() {
    if (!this.form || !this.input) return;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const rawCmd = this.input.value.trim();
      if (!rawCmd) return;

      this.executeCommand(rawCmd);
      this.history.push(rawCmd);
      this.historyIndex = this.history.length;
      this.input.value = "";
    });

    // Arrow keys for command history
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = "";
        }
      }
    });

    // Quick command buttons
    const quickBtns = this.container.querySelectorAll(".quick-cmd-btn");
    quickBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cmd = btn.dataset.cmd;
        this.input.value = cmd;
        this.executeCommand(cmd);
        this.input.value = "";
        if (typeof CyberAudio !== "undefined") {
          CyberAudio.play("click", 700, 0.03);
        }
      });
    });
  }

  executeCommand(cmd) {
    const cleanCmd = cmd.toLowerCase().trim();

    // Append user input row
    const userRow = document.createElement("div");
    userRow.className = "terminal-line terminal-user";
    userRow.innerHTML = `<span class="t-prompt">visitor@jayvee-nexus:~$</span> <span class="t-cmd">${this.escapeHTML(cmd)}</span>`;
    this.body.appendChild(userRow);

    // Look up command in data
    const outputText = PORTFOLIO_DATA.terminalCommands[cleanCmd];

    const respRow = document.createElement("div");
    respRow.className = "terminal-line terminal-response";

    if (outputText === "__CLEAR__") {
      this.body.innerHTML = `
        <div class="terminal-line t-system">
          <span class="t-accent">// TERMINAL BUFFER CLEARED</span> Type 'help' for instructions.
        </div>
      `;
      return;
    } else if (outputText) {
      respRow.innerHTML = `<pre class="t-text">${this.escapeHTML(outputText)}</pre>`;
    } else {
      respRow.innerHTML = `<span class="t-error">Command not recognized: '${this.escapeHTML(cleanCmd)}'. Type <span class="t-accent">'help'</span> for available protocols.</span>`;
    }

    this.body.appendChild(respRow);

    // Scroll to bottom
    this.body.scrollTop = this.body.scrollHeight;
  }

  escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
}
