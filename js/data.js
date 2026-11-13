/**
 * =============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * You can easily customize your entire portfolio by editing the data in this file.
 * All sections (Hero, About, Skills, Projects, Timeline, Certifications, Contact)
 * automatically read from this configuration.
 */

const PORTFOLIO_DATA = {
  // ---------------------------------------------------------------------------
  // Personal & Identity Information
  // ---------------------------------------------------------------------------
  personal: {
    name: "Jayvee",
    nickname: "JV",
    systemId: "SYS_ID // 2026.INIT",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    statusText: "OPERATIONAL // AVAILABLE FOR TRANSMISSION",
    statusBadge: "Available for Hire",
    location: "Metro Manila / Remote Worldwide",
    timeZone: "Asia/Manila (UTC+8)",
    primaryRole: "Aspiring Developer | Tech Enthusiast | Problem Solver",
    rotatingRoles: [
      "Full-Stack Architect",
      "AI & Machine Learning Explorer",
      "Cybersecurity Enthusiast",
      "Futuristic UI/UX Crafter",
      "Autonomous Systems Builder"
    ],
    shortBio: "Architecting cutting-edge digital experiences at the intersection of modern web technologies, artificial intelligence, and cyberpunk aesthetics. Dedicated to clean architecture, high-performance computing, and elegant user-centric design.",
    fullBio: [
      "I am a passionate software developer and technology enthusiast obsessed with crafting high-performance, futuristic digital products. My journey spans full-stack web development, intelligent algorithms, and cyber-aesthetic user interfaces.",
      "With a relentless drive for problem-solving, I transform complex ideas into intuitive, scalable software architectures. Whether engineering real-time decentralized protocols, crafting responsive web dashboards, or exploring neural network models, I push boundaries with precision.",
      "When I am not coding into the late hours, I explore emerging tech paradigms, optimize development workflows, contribute to open-source software, and experiment with hardware IoT prototypes."
    ],
    resumeUrl: "#", // Replace with link to your PDF resume (e.g. "assets/resume.pdf")
    resumeFileName: "Jayvee_Resume_2026.pdf"
  },

  // ---------------------------------------------------------------------------
  // Social & Contact Links
  // ---------------------------------------------------------------------------
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
      label: "github.com/jayvee-dev"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
      label: "linkedin.com/in/jayvee-dev"
    },
    {
      name: "X / Twitter",
      url: "https://twitter.com",
      icon: "twitter",
      label: "@jayvee_tech"
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: "message-square",
      label: "jayvee#2026"
    },
    {
      name: "Email",
      url: "mailto:jayvee.developer@example.com",
      icon: "mail",
      label: "jayvee.developer@example.com"
    }
  ],

  // ---------------------------------------------------------------------------
  // HUD Statistics Counter
  // ---------------------------------------------------------------------------
  stats: [
    { label: "Completed Projects", value: "24", suffix: "+", icon: "code" },
    { label: "Tech Stacks Mastered", value: "18", suffix: "+", icon: "layers" },
    { label: "Code Commits", value: "1.4", suffix: "k+", icon: "git-commit" },
    { label: "Uptime & Reliability", value: "99.9", suffix: "%", icon: "activity" }
  ],

  // ---------------------------------------------------------------------------
  // About Section Pillars
  // ---------------------------------------------------------------------------
  aboutPillars: [
    {
      code: "MOD_01",
      title: "Core Architecture & Scalability",
      desc: "Engineering high-throughput, fault-tolerant backend infrastructures with modular microservices and event-driven patterns.",
      icon: "cpu"
    },
    {
      code: "MOD_02",
      title: "Futuristic Glassmorphic Frontend",
      desc: "Building immersive, 60fps responsive interfaces utilizing modern CSS3, WebGL shaders, Canvas graphics, and fluid micro-interactions.",
      icon: "monitor"
    },
    {
      code: "MOD_03",
      title: "AI & Machine Learning",
      desc: "Integrating predictive models, deep neural networks, and generative AI agents to supercharge data-driven decision workflows.",
      icon: "zap"
    },
    {
      code: "MOD_04",
      title: "Zero-Trust Security & IoT",
      desc: "Adopting strict cryptographic standards, distributed telemetry, and hardware-software synergy for connected devices.",
      icon: "shield"
    }
  ],

  // ---------------------------------------------------------------------------
  // Technical Skills & Categories
  // ---------------------------------------------------------------------------
  skillCategories: [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "uiux", label: "UI / UX" },
    { id: "aiml", label: "AI & ML" },
    { id: "iot", label: "IoT & Hardware" },
    { id: "tools", label: "DevOps & Tools" }
  ],

  skills: [
    // Programming Languages
    { name: "TypeScript", category: "languages", level: 92, status: "Master", icon: "typescript", color: "#3178c6" },
    { name: "JavaScript (ESNext)", category: "languages", level: 96, status: "Master", icon: "javascript", color: "#f7df1e" },
    { name: "Python", category: "languages", level: 90, status: "Advanced", icon: "python", color: "#3776ab" },
    { name: "C++", category: "languages", level: 82, status: "Proficient", icon: "cplusplus", color: "#00599c" },
    { name: "Rust", category: "languages", level: 75, status: "Proficient", icon: "rust", color: "#dea584" },
    { name: "SQL", category: "languages", level: 88, status: "Advanced", icon: "database", color: "#00f0ff" },

    // Frontend Development
    { name: "React / Next.js", category: "frontend", level: 94, status: "Master", icon: "react", color: "#61dafb" },
    { name: "Vue.js / Nuxt", category: "frontend", level: 84, status: "Advanced", icon: "vue", color: "#42b883" },
    { name: "Tailwind CSS", category: "frontend", level: 95, status: "Master", icon: "tailwind", color: "#38bdf8" },
    { name: "HTML5 & Modern CSS3", category: "frontend", level: 98, status: "Master", icon: "code", color: "#e34f26" },
    { name: "Three.js / WebGL", category: "frontend", level: 78, status: "Proficient", icon: "box", color: "#ff007f" },
    { name: "WebGL & Canvas API", category: "frontend", level: 82, status: "Advanced", icon: "sparkles", color: "#9d4edd" },

    // Backend Development
    { name: "Node.js & Express", category: "backend", level: 92, status: "Master", icon: "nodejs", color: "#339933" },
    { name: "FastAPI / Python", category: "backend", level: 88, status: "Advanced", icon: "zap", color: "#009688" },
    { name: "NestJS", category: "backend", level: 80, status: "Proficient", icon: "server", color: "#e0234e" },
    { name: "GraphQL & REST APIs", category: "backend", level: 90, status: "Advanced", icon: "globe", color: "#e535ab" },
    { name: "WebSockets / Socket.io", category: "backend", level: 87, status: "Advanced", icon: "wifi", color: "#00ff9d" },

    // Database Management
    { name: "PostgreSQL", category: "database", level: 90, status: "Advanced", icon: "database", color: "#336791" },
    { name: "MongoDB", category: "database", level: 88, status: "Advanced", icon: "database", color: "#47a248" },
    { name: "Redis Cache", category: "database", level: 85, status: "Advanced", icon: "database", color: "#dc382d" },
    { name: "Prisma / Drizzle ORM", category: "database", level: 89, status: "Advanced", icon: "layers", color: "#5a67d8" },

    // UI/UX Design
    { name: "Figma (Prototyping & Systems)", category: "uiux", level: 90, status: "Advanced", icon: "figma", color: "#f24e1e" },
    { name: "Cyberpunk & Dark Theme Systems", category: "uiux", level: 96, status: "Master", icon: "palette", color: "#00f0ff" },
    { name: "Design Tokens & Responsive Layouts", category: "uiux", level: 94, status: "Master", icon: "layout", color: "#ff007f" },
    { name: "Micro-interactions & Motion UI", category: "uiux", level: 88, status: "Advanced", icon: "activity", color: "#9d4edd" },

    // AI & Machine Learning
    { name: "PyTorch & Deep Learning", category: "aiml", level: 80, status: "Proficient", icon: "brain", color: "#ee4c2c" },
    { name: "LLM Orchestration & Prompt Eng.", category: "aiml", level: 88, status: "Advanced", icon: "cpu", color: "#00ff9d" },
    { name: "OpenAI / Claude / Gemini APIs", category: "aiml", level: 92, status: "Master", icon: "bot", color: "#10a37f" },
    { name: "Computer Vision (OpenCV)", category: "aiml", level: 76, status: "Proficient", icon: "eye", color: "#5c3ee8" },

    // Embedded Systems / IoT
    { name: "ESP32 & Arduino C++", category: "iot", level: 84, status: "Advanced", icon: "cpu", color: "#00979d" },
    { name: "MQTT & IoT Protocols", category: "iot", level: 86, status: "Advanced", icon: "radio", color: "#660066" },
    { name: "Raspberry Pi & Linux SBCs", category: "iot", level: 82, status: "Proficient", icon: "terminal", color: "#c51a4a" },
    { name: "Sensors & Telemetry Arrays", category: "iot", level: 80, status: "Proficient", icon: "thermometer", color: "#ffb703" },

    // Tools & Technologies
    { name: "Git & GitHub CI/CD", category: "tools", level: 95, status: "Master", icon: "git-branch", color: "#f05032" },
    { name: "Docker & Containerization", category: "tools", level: 86, status: "Advanced", icon: "box", color: "#2496ed" },
    { name: "Linux Administration", category: "tools", level: 88, status: "Advanced", icon: "terminal", color: "#fcc624" },
    { name: "Vite & Webpack Toolchains", category: "tools", level: 92, status: "Master", icon: "tool", color: "#646cff" }
  ],

  // ---------------------------------------------------------------------------
  // Showcase Projects
  // ---------------------------------------------------------------------------
  projects: [
    {
      id: "project-1",
      title: "NeuroNet // Neural Telemetry Hub",
      tagline: "Brain-Computer Interface & Neural Activity Visualizer",
      category: "aiml",
      status: "Completed",
      statusColor: "#00ff9d",
      featured: true,
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      description: "An advanced, high-framerate real-time telemetry dashboard designed to simulate and monitor multi-channel neural stream matrices. Visualizes synaptic spiking patterns and low-latency brainwave frequencies with WebGL shaders.",
      fullOverview: "NeuroNet provides biomedical researchers and neurotechnology developers with an interactive, GPU-accelerated telemetry workbench. It streams 64-channel synthetic EEG/BCI data over high-throughput WebSockets, applies Fourier transforms in real time, and renders interactive 3D spatial node topologies.",
      highlights: [
        "Sub-15ms WebSocket pipeline streaming multi-channel neural telemetry",
        "Custom 3D WebGL brain topological heat mapping using Three.js shaders",
        "Interactive frequency band breakdown (Delta, Theta, Alpha, Beta, Gamma)",
        "Zero-latency spike anomaly detection powered by lightweight ONNX runtime"
      ],
      technologies: ["React", "TypeScript", "Three.js", "FastAPI", "WebSockets", "Tailwind CSS"],
      demoUrl: "https://example.com/demo/neuronet",
      githubUrl: "https://github.com/example/neuronet-telemetry",
      metrics: { latency: "12ms", throughput: "64ch / 1kHz", uptime: "99.98%" }
    },
    {
      id: "project-2",
      title: "CyberVault // Zero-Knowledge Auth",
      tagline: "Cryptographic Identity & Decentralized Key Vault",
      category: "cyber",
      status: "Completed",
      statusColor: "#00ff9d",
      featured: true,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      description: "A decentralized authentication protocol and encrypted credential fortress leveraging zero-knowledge proofs (zk-SNARKs) and post-quantum encryption standards to protect sensitive assets without leaking credentials.",
      fullOverview: "CyberVault redefines modern identity verification by separating authentication from personal credential disclosure. Built with Rust and WebAssembly on the client side, credentials never leave the user's encrypted local enclave unhashed.",
      highlights: [
        "Zero-knowledge authentication protocol eliminating server credential leaks",
        "Client-side AES-256-GCM encryption with Argon2id memory-hard key derivation",
        "Hardware security token integration (WebAuthn / FIDO2 / YubiKey)",
        "Futuristic cyber-HUD dashboard with real-time audit ledger logging"
      ],
      technologies: ["Rust", "WebAssembly", "TypeScript", "Next.js", "Tailwind CSS", "Cryptography"],
      demoUrl: "https://example.com/demo/cybervault",
      githubUrl: "https://github.com/example/cybervault-zk",
      metrics: { security: "Post-Quantum", encryption: "AES-256-GCM", audits: "100% Passed" }
    },
    {
      id: "project-3",
      title: "QuantumPulse // IoT Drone Swarm",
      tagline: "Distributed Edge Sensor Telemetry & Fleet Controller",
      category: "iot",
      status: "In Progress",
      statusColor: "#00f0ff",
      featured: true,
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      description: "A mission-critical edge computing ground control station managing decentralized autonomous drone swarms. Features waypoint mesh plotting, thermal payload telemetry, and dynamic obstacle evasion algorithms.",
      fullOverview: "QuantumPulse integrates microcontrollers (ESP32 / PX4) with high-speed MQTT brokers and an interactive radar UI. Field operators can monitor geofence perimeters, battery depletion curves, and autonomous collision avoidance telemetry on an intuitive cyberpunk tactical display.",
      highlights: [
        "Distributed MQTT message bus streaming 50Hz sensor telemetry",
        "Interactive 2D/3D tactical map with geofencing and dynamic obstacle avoidance",
        "Edge-computed mission path planning with automated return-to-base protocols",
        "Low-bandwidth satellite fallback packet compression format"
      ],
      technologies: ["C++", "ESP32", "Python", "React", "MapLibre", "MQTT", "Docker"],
      demoUrl: "https://example.com/demo/quantumpulse",
      githubUrl: "https://github.com/example/quantumpulse-swarm",
      metrics: { swarmSize: "16 Drones", frequency: "50 Hz", range: "12 km" }
    },
    {
      id: "project-4",
      title: "AetherOS // Web-Based Cyber Desktop",
      tagline: "High-Performance Futuristic Browser Operating System",
      category: "fullstack",
      status: "Completed",
      statusColor: "#00ff9d",
      featured: false,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      description: "A futuristic browser-based operating system featuring a floating window manager, functional cyber terminal with custom shell commands, audio synthesizer, and interactive cyber-apps.",
      fullOverview: "AetherOS explores how rich desktop-grade multitasking can thrive within a modern web browser. Designed with sleek glassmorphism, glowing neon borders, sound synthesizer feedback, and a pluggable virtual filesystem.",
      highlights: [
        "Custom desktop windowing manager with snap, minimize, and 3D stacking",
        "Embedded terminal emulator with 30+ built-in utility commands",
        "Virtual filesystem persisting state to IndexedDB with export/import",
        "Synthesizer sound engine powered by the Web Audio API"
      ],
      technologies: ["JavaScript ESNext", "HTML5", "CSS3 Canvas", "Web Audio API", "IndexedDB"],
      demoUrl: "https://example.com/demo/aetheros",
      githubUrl: "https://github.com/example/aether-os",
      metrics: { bundleSize: "85 kB", bootTime: "0.4s", fps: "60 FPS" }
    },
    {
      id: "project-5",
      title: "Nexus 3D // Spatial E-Commerce",
      tagline: "Interactive WebGL Spatial Cyber Commerce Experience",
      category: "fullstack",
      status: "Upcoming",
      statusColor: "#ff007f",
      featured: false,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "An experimental 3D cyber-storefront with interactive product inspection, real-time lighting physics, and a futuristic sci-fi aesthetic for next-generation hardware and apparel.",
      fullOverview: "Nexus 3D replaces flat e-commerce grids with a visually arresting 3D showroom. Shoppers can rotate, explode, and customize cyberpunk gadgets in real time with dynamic ray-traced shadows and ambient occlusion.",
      highlights: [
        "Interactive 3D model disassembly and component inspection",
        "Dynamic procedural neon glow shaders and bloom post-processing",
        "Seamless Stripe test checkout integration with instant digital receipts",
        "Ultra-optimized asset compression for instant mobile loading"
      ],
      technologies: ["React", "Three.js", "GLSL Shaders", "Node.js", "Stripe API"],
      demoUrl: "https://example.com/demo/nexus3d",
      githubUrl: "https://github.com/example/nexus-3d-store",
      metrics: { models: "100% WebGL", loadTime: "<1.2s", fidelity: "4K Textures" }
    }
  ],

  // ---------------------------------------------------------------------------
  // Timeline: Experience & Education
  // ---------------------------------------------------------------------------
  experience: [
    {
      period: "2024 — Present",
      title: "Lead Frontend & Systems Architect",
      company: "Nexus Dynamics Lab",
      location: "Innovation Hub / Remote",
      badge: "Full-Time",
      description: "Directing the frontend architecture and design systems for client-facing cloud observability platforms. Engineered modular UI components that slashed page load latency by 45%.",
      achievements: [
        "Spearheaded design system overhaul adopting neon-glass dark UI with 100% accessibility compliance",
        "Architected real-time WebSocket data visualization panels handling 25,000+ data points/sec",
        "Mentored junior developers in reactive programming, state synchronization, and clean code"
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "UI/UX"]
    },
    {
      period: "2023 — 2024",
      title: "Full-Stack Software Engineering Intern",
      company: "CyberPulse Innovations",
      location: "Tech District",
      badge: "Internship",
      description: "Developed scalable RESTful APIs, optimized database indexes, and built interactive admin dashboards for distributed edge device fleets.",
      achievements: [
        "Implemented Redis caching layer decreasing API response time from 380ms to 42ms",
        "Developed automated end-to-end integration test suites boosting code coverage to 92%",
        "Collaborated with hardware team to parse raw telemetry into readable JSON feeds"
      ],
      tags: ["Node.js", "PostgreSQL", "Express", "Docker", "Jest"]
    },
    {
      period: "2022 — 2023",
      title: "Junior Web Developer & Tech Consultant",
      company: "Freelance & Open Source Collaborations",
      location: "Remote",
      badge: "Contract",
      description: "Crafted custom responsive web applications, landing pages, and interactive brand platforms for emerging startups and tech organizations.",
      achievements: [
        "Delivered 12+ client projects on time with 100% positive satisfaction feedback",
        "Authored open-source micro-libraries for CSS neon glow effects and canvas particle meshes",
        "Integrated modern payment gateways and CMS headless workflows"
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "Git", "Figma"]
    }
  ],

  education: [
    {
      period: "2022 — 2026",
      degree: "Bachelor of Science in Computer Science",
      institution: "Technological State University",
      location: "Metro Campus",
      badge: "Expected Grad 2026",
      description: "Specializing in Software Systems, Artificial Intelligence, and Distributed Networks. Consistently maintained Dean's Honor Roll standing.",
      achievements: [
        "President & Founder of the Cyber-Devs Student Engineering Society",
        "Published undergraduate research paper on Edge AI optimization for IoT devices",
        "Led university team to top podium finish in the Inter-Collegiate Algorithmic Hackathon"
      ],
      tags: ["Algorithms", "Data Structures", "Computer Networks", "Machine Learning", "OS"]
    },
    {
      period: "2020 — 2022",
      degree: "Senior High School — STEM Strand",
      institution: "Academy of Science and Technology",
      location: "City Campus",
      badge: "With Highest Honors",
      description: "Focused on Advanced Mathematics, Physics, and Foundational Programming. Awarded Excellence in Information and Communications Technology.",
      achievements: [
        "First Place in Regional Science Fair for Automated Irrigation IoT Model",
        "Captain of the Robotics and Computer Programming Club"
      ],
      tags: ["Calculus", "Physics", "Python Fundamentals", "Robotics", "IoT"]
    }
  ],

  // ---------------------------------------------------------------------------
  // Achievements & Certifications
  // ---------------------------------------------------------------------------
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      credentialId: "AWS-ARCH-99824X",
      verifyUrl: "https://aws.amazon.com/verification",
      icon: "cloud",
      accent: "#ff9900",
      description: "Demonstrated expertise in designing highly available, cost-efficient, fault-tolerant, and scalable distributed cloud systems on AWS."
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "Aug 2024",
      credentialId: "GCP-DEV-44781A",
      verifyUrl: "https://cloud.google.com",
      icon: "cpu",
      accent: "#4285f4",
      description: "Mastery of scalable cloud-native architectures, containerized deployments, Kubernetes orchestration, and serverless architectures."
    },
    {
      title: "1st Place Grand Champion",
      issuer: "National CyberTech Hackathon 2025",
      date: "Feb 2025",
      credentialId: "HACK-CHAMP-2025",
      verifyUrl: "https://example.com/hackathon",
      icon: "award",
      accent: "#00ff9d",
      description: "Built an autonomous emergency response mesh network utilizing edge AI and LoRa wireless protocols in a 48-hour sprint."
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI / Coursera",
      date: "May 2024",
      credentialId: "DL-SPEC-7712B",
      verifyUrl: "https://coursera.org",
      icon: "brain",
      accent: "#a855f7",
      description: "Comprehensive mastery of neural networks, backpropagation, CNNs, sequence models (RNN/Transformers), and hyperparameter optimization."
    },
    {
      title: "Certified Ethical Hacker (CEH) Associate",
      issuer: "EC-Council",
      date: "Nov 2023",
      credentialId: "ECC-CEH-30219",
      verifyUrl: "https://eccouncil.org",
      icon: "shield",
      accent: "#ff007f",
      description: "Practical knowledge of penetration testing, vulnerability assessment, network packet analysis, and zero-day defense protocols."
    },
    {
      title: "Meta Certified Front-End Developer",
      issuer: "Meta",
      date: "Jan 2023",
      credentialId: "META-FED-10948",
      verifyUrl: "https://coursera.org",
      icon: "code",
      accent: "#00f0ff",
      description: "Advanced web engineering, responsive user interfaces, React state management, and modern performance profiling."
    }
  ],

  // ---------------------------------------------------------------------------
  // Interactive Terminal Commands (Easter Egg in About Section)
  // ---------------------------------------------------------------------------
  terminalCommands: {
    help: "Available commands:\n  • about     - Output developer summary\n  • skills    - List top technical proficiencies\n  • projects  - Highlight featured creations\n  • contact   - Display direct communication channels\n  • matrix    - Toggle cyber neon rain effect\n  • clear     - Clear terminal buffer",
    about: "SYS_USER: Jayvee\nROLE: Full-Stack Architect & AI Explorer\nMISSION: Building the digital frontier with 60fps performance & cyberpunk aesthetics.",
    skills: "CORE MATRIX:\n  Languages: TypeScript, JavaScript, Python, C++, Rust, SQL\n  Frontend:  React, Next.js, Three.js, Tailwind CSS\n  Backend:   Node.js, FastAPI, PostgreSQL, Redis, Docker",
    projects: "TOP PROTOCOLS:\n  1. NeuroNet       [Neural Telemetry Hub]\n  2. CyberVault     [Zero-Knowledge Auth]\n  3. QuantumPulse   [IoT Drone Swarm]\n  4. AetherOS       [Web Cyber Desktop]",
    contact: "COMMUNICATION CHANNELS:\n  Email:   jayvee.developer@example.com\n  Discord: jayvee#2026\n  Status:  Transmissions Open",
    matrix: "MATRIX_OVERDRIVE: Cyber pulse calibrated. All systems operating at maximum neon flux.",
    clear: "__CLEAR__"
  }
};

// Freeze the configuration to prevent accidental mutations
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}

// Ensure global availability
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof globalThis !== "undefined") {
  globalThis.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
