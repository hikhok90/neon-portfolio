# 🚀 Jayvee // Futuristic Cyberpunk Developer Portfolio

A modern, visually stunning, high-performance personal portfolio website built with a **futuristic cyberpunk neon aesthetic**. Designed for software developers, computer scientists, AI engineers, and tech creators who want a standout, memorable online presence.

---

## 🌟 Key Features

### 1. Futuristic Cyberpunk & Neon Design
- **Deep Void Background**: `#05070e` with glowing electric cyan (`#00f0ff`), neon magenta (`#ff007f`), cyber purple (`#9d4edd`), and neon emerald (`#00ff9d`) accents.
- **Glassmorphism**: Backdrop blur with glowing borders, corner brackets, and dynamic 3D specular reflection on mouse movement.
- **Concentric Holographic Avatar Frame**: Rotating orbital neon rings with subtle cyber scanline overlays and real-time status beacon.
- **Top Reading Progress Bar**: Real-time gradient progress tracking as visitors scroll through sections.

### 2. Interactive Animations & Audio
- **Procedural Canvas Particle Matrix**: 60fps constellation mesh reacting dynamically to mouse movement with distance-based neon filament connections and repulsion.
- **Synthesized Web Audio SFX**: Procedural sci-fi interface sounds (clicks, hovers, modal pops, transmission chirps) generated using the native Web Audio API — **zero external audio files needed** with a persistent SFX toggle (Mute / Unmute).
- **Custom Cybernetic Cursor**: Smooth lerp tracking cursor with a pulsing electric cyan core reticle and expanding outer magenta target ring (automatically disabled on mobile/touch screens).
- **Interactive Cyber Terminal**: An embedded CLI terminal in the About section where visitors can type commands (`help`, `skills`, `projects`, `about`, `contact`, `matrix`, `clear`) or click quick-run chips.

### 3. Dynamic Data-Driven Architecture
- **Single Central Configuration File (`js/data.js`)**: All personal details, bio, statistics, skills, projects, experience, education, certifications, and contact channels are defined in **one clean file**. Customize your entire portfolio in minutes without touching HTML or CSS!
- **Interactive Skills Matrix**: Filter skills by category (*Languages, Frontend, Backend, Databases, UI/UX, AI & ML, IoT, DevOps*) or search technologies in real-time.
- **Featured Project Showcase**: Filter projects by domain (*All, AI & Neural, Cyber & Security, IoT & Swarm, Full-Stack Web*). Click **"View Protocol"** to open an in-depth modal featuring architecture breakdowns, key benchmarks, performance metrics, and links.
- **Dual-Track Timeline**: Switch effortlessly between **Work Experience & Internships** and **Academic Background**.
- **Interactive Contact Node**: Real-time live digital clock (UTC+8 / local time), one-click email copy button with toast notification, and an interactive transmission form with live validation and sound feedback.

---

## 📁 Project Structure

```
simple-website/
├── index.html              # Semantic, accessible single-page layout
├── README.md               # Documentation and customization guide
├── css/
│   ├── style.css           # Design tokens, variables, typography, navigation & footer
│   ├── components.css      # Glassmorphic cards, HUD badges, buttons, modals, terminal
│   └── animations.css      # Cyber cursor, scanlines, keyframes & neon breathing
├── js/
│   ├── data.js             # ⚡ CENTRAL CONFIG: Customize all your info here!
│   ├── audio.js            # Web Audio API procedural sound engine
│   ├── particles.js        # Interactive HTML5 Canvas neon particle constellation
│   ├── cursor.js           # Futuristic trailing neon cursor
│   ├── tilt.js             # 3D perspective card tilt with specular reflection
│   ├── terminal.js         # Interactive CLI terminal widget
│   ├── components.js       # Dynamic SVG icon matrix & component renderers
│   └── main.js             # Navbar scroll spy, typewriter, modals, form handler
└── assets/                 # Folder for your custom resume PDF, photos, and assets
```

---

## ⚡ How to Run & Preview

This website is **100% self-contained and zero-build**: no `node_modules` or build pipeline is required.

### Option 1: Direct File Opening
Double-click `index.html` to open it directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).

### Option 2: Local HTTP Server (Python)
If you prefer running a local development server with Python:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3: Local HTTP Server (Node.js)
```bash
npx serve .
```

---

## ✏️ How to Customize Your Portfolio

Open [js/data.js](file:///c:/Users/Jayvee/Documents/simple-website/js/data.js) in your text editor:

1. **Change Your Name & Bio**:
   ```javascript
   personal: {
     name: "Your Name",
     primaryRole: "Your Headline Here",
     rotatingRoles: ["Role 1", "Role 2", "Role 3"],
     shortBio: "Your elevator pitch...",
     fullBio: [ ... ]
   }
   ```
2. **Add Your Social Links**:
   Update `socials` array with your GitHub, LinkedIn, Twitter/X, Discord, or Email URLs.
3. **Update Skills**:
   Add or edit skills in the `skills` array with your proficiency percentages (e.g. `level: 95`) and category.
4. **Showcase Your Projects**:
   Add your projects to the `projects` array with thumbnails, descriptions, highlights, technologies, and GitHub / live demo links.
5. **Update Experience & Certifications**:
   Add your career milestones, degrees, and cloud/security certifications under `experience`, `education`, and `certifications`.

---

## 🛠️ Technologies Used

- **Core**: Semantic HTML5, CSS3 Custom Properties, Modern JavaScript (ESNext, modular architecture)
- **Visuals & Effects**: HTML5 Canvas API (interactive particle & filament grid), CSS Glassmorphism (`backdrop-filter`), 3D CSS Perspective Transforms
- **Audio Synthesizer**: Native Web Audio API (zero external sound files)
- **Typography**: Google Fonts (`Orbitron`, `Rajdhani`, `Inter`, `JetBrains Mono`)
- **Hosting & Infrastructure**: Vercel Static Hosting, GitHub Pages, or any modern CDN / static web server

---

## 🚀 Deployment Guide

### 1. Push to GitHub

The repository is already initialized on branch `main` with a clean production commit and `.gitignore`.

1. Go to [github.com/new](https://github.com/new) and create a repository named **`neon-portfolio`** (leave "Initialize this repository with a README" unchecked).
2. Connect your local repository and push:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/neon-portfolio.git
   git push -u origin main
   ```

---

### 2. Deploy to Vercel

The project includes a production-ready `vercel.json` configured with security headers and asset caching.

#### Method A: Direct GitHub Import (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Under **"Import Git Repository"**, select your `neon-portfolio` repository.
3. Keep default settings:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`
   - **Build Command**: *None (Static HTML/CSS/JS)*
   - **Output Directory**: *None (root `./`)*
4. Click **Deploy**. Vercel will build and assign an instant production URL (e.g. `https://neon-portfolio.vercel.app`).

#### Method B: Deploy using Vercel CLI
If you have Node.js and Vercel CLI installed:
```bash
# In the project root:
npx vercel
# Follow the interactive prompt, then deploy to production:
npx vercel --prod
```

