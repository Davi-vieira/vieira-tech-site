/**
 * Vieira Tech - Core Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const contactForm = document.getElementById('contactForm');
  const terminalBody = document.getElementById('terminalBody');
  const terminalRunBtn = document.getElementById('terminalRunBtn');
  const backToTopBtn = document.getElementById('backToTop');

  // Project Modals Data
  const projectDetailsData = {
    analix: {
      pt: {
        title: "Analix — Arquitetura de Extração & Inteligência B2B",
        subtitle: "Engenharia de dados não-estruturados e reconciliação fiscal autônoma",
        problem: "Grandes empresas gastavam centenas de horas humanas conferindo faturas complexas, relatórios fiscais e recibos com tabelas irregulares.",
        solution: "Desenvolvimento de um pipeline em Python assíncrono acoplado a OCR avançado e validação semântica com LLMs locais e de nuvem. Inclui reconciliação direta com bancos de dados relacionais (PostgreSQL) com verificação de divergências de centavos.",
        stack: ["Python 3.12 (FastAPI & AsyncIO)", "PyTorch & Tesseract OCR", "PostgreSQL com Índices GIN", "Docker & Redis Queue", "Linux High-Perf Node"],
        results: [
          "99.8% de precisão sem necessidade de intervenção manual",
          "Redução de 95% no tempo de fechamento e auditoria fiscal",
          "Processamento de 10.000+ documentos/hora em infraestrutura enxuta"
        ]
      },
      en: {
        title: "Analix — B2B Extraction & Document Intelligence Architecture",
        subtitle: "Unstructured data parsing and autonomous financial reconciliation",
        problem: "Enterprise teams were wasting hundreds of labor hours cross-checking complex PDF invoices, tax documents, and irregular receipt tables.",
        solution: "Engineered an asynchronous Python pipeline combining advanced OCR with semantic validation through local and cloud LLMs. Performs direct deterministic reconciliation against PostgreSQL databases with penny-level variance detection.",
        stack: ["Python 3.12 (FastAPI & AsyncIO)", "PyTorch & Tesseract OCR", "PostgreSQL with GIN indexes", "Docker & Redis Queue", "Linux High-Perf Node"],
        results: [
          "99.8% semantic extraction accuracy with zero human touch needed",
          "95% reduction in monthly audit and reconciliation lead time",
          "10,000+ documents processed per hour on lean cloud footprints"
        ]
      }
    },
    vieiranews: {
      pt: {
        title: "Vieira News — Pipeline Autônomo de Curadoria com IA",
        subtitle: "Ingestão contínua em tempo real e síntese executiva multicanal",
        problem: "Excesso de ruído de informação em portais de tecnologia, feeds RSS e canais de mercado, tornando difícil filtrar fatos críticos com rapidez.",
        solution: "Arquitetura orientada a eventos com microsserviços em Python que varrem 40+ fontes simultaneamente via webhooks e scrapers assíncronos. Agentes de IA dedicados executam deduplicação semântica, cálculo de relevância e geram resumos de 3 parágrafos prontos para consumo.",
        stack: ["Python (AsyncIO / aiohttp)", "OpenAI / Claude API Agents", "Redis (Pub/Sub & Caching)", "Webhooks & Telegram Bot API", "SQLite / PostgreSQL"],
        results: [
          "Latência inferior a 45 segundos entre a publicação e a curadoria",
          "Eliminação de 85% de matérias duplicadas ou clickbait",
          "Disparo automatizado para canais corporativos e assinantes"
        ]
      },
      en: {
        title: "Vieira News — Autonomous AI Curation & Ingestion Pipeline",
        subtitle: "Continuous real-time stream ingestion and executive multi-channel synthesis",
        problem: "Information overload across technology portals, RSS feeds, and financial channels made capturing critical events immediately almost impossible.",
        solution: "Event-driven architecture with Python microservices scanning 40+ concurrent sources via webhooks and asynchronous scrapers. Dedicated AI agents execute semantic deduplication, compute relevance scores, and synthesize crisp 3-paragraph executive digests.",
        stack: ["Python (AsyncIO / aiohttp)", "OpenAI / Claude API Agents", "Redis (Pub/Sub & Caching)", "Webhooks & Telegram Bot API", "SQLite / PostgreSQL"],
        results: [
          "Under 45s latency between source publish and curated dispatch",
          "85% reduction in repetitive noise and clickbait feeds",
          "Automated real-time distribution across private channels and feeds"
        ]
      }
    },
    linuxinfra: {
      pt: {
        title: "Infraestrutura Linux & Servidores de Alta Disponibilidade",
        subtitle: "Engenharia de sistemas, hardening e confiabilidade 24/7",
        problem: "Aplicações críticas sofrendo com lentidão, quedas inesperadas e vulnerabilidades de configurações padrão em servidores de nuvem.",
        solution: "Engenharia de servidores Linux sob medida com ajuste fino de kernel (sysctl, limites de descritores de arquivo, balanceamento de I/O), isolamento seguro com contêineres Docker, proxies reversos Nginx de altíssimo throughput, políticas rígidas de firewall (iptables/ufw) e pipelines de backup criptografado offsite.",
        stack: ["Linux (Debian / Ubuntu Server / Alpine)", "Nginx & Caddy (SSL/TLS 1.3)", "Docker & Docker Compose", "Bash / POSIX Shell Scripting", "Systemd & Prom/Grafana"],
        results: [
          "Disponibilidade contínua de 99.99% sem quedas não programadas",
          "Redução de latência de resposta em mais de 40%",
          "Recuperação automática (failover) em menos de 3 segundos"
        ]
      },
      en: {
        title: "Linux Infrastructure & High Availability Systems",
        subtitle: "Bare-metal & cloud systems engineering, security hardening, and 24/7 resilience",
        problem: "Mission-critical applications plagued by latency spikes, unexplained crashes, and vulnerable default cloud configurations.",
        solution: "Tailored Linux systems engineering with kernel parameter tuning (sysctl, file descriptor limits, I/O schedulers), container sandboxing with Docker, ultra-fast Nginx reverse proxies, strict zero-trust firewall configurations, and automated off-site encrypted backup routines.",
        stack: ["Linux (Debian / Ubuntu Server / Alpine)", "Nginx & Caddy (SSL/TLS 1.3)", "Docker & Docker Compose", "Bash / POSIX Shell Scripting", "Systemd & Prom/Grafana"],
        results: [
          "99.99% continuous availability SLA reached and maintained",
          "Over 40% reduction in average TTFB (Time to First Byte)",
          "Automated container and service failover under 3 seconds"
        ]
      }
    }
  };

  // Toast Function
  window.showToast = function(msg) {
    if (!toast) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  // Clipboard Copy helper
  window.copyToClipboard = function(text, customMsg) {
    navigator.clipboard.writeText(text).then(() => {
      const msg = customMsg || (currentLang === 'pt' ? 'Copiado para a área de transferência!' : 'Copied to clipboard!');
      window.showToast(msg);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Interactive Terminal Simulator
  const terminalLines = [
    { text: "$ vieira-tech-agent --init --pipeline=all", delay: 100, class: "text-zinc-100 font-semibold" },
    { text: "[init] Initializing Vieira Tech Autonomous Engine v2.4...", delay: 350, class: "text-cyan-400" },
    { text: "[analix] Loading neural OCR parser & B2B tax validation schema...", delay: 600, class: "text-zinc-300" },
    { text: "[analix] Processing 500 queued invoices: 100% matched, 0.00% variance.", delay: 900, class: "text-emerald-400" },
    { text: "[vieira_news] Streaming real-time tech feeds via async workers...", delay: 1200, class: "text-zinc-300" },
    { text: "[vieira_news] AI Agents filtered 1,240 items -> 6 high-value insights dispatched.", delay: 1500, class: "text-emerald-400" },
    { text: "[infra] Linux kernel health check: Uptime 184d, Load: 0.08, TLS 1.3 Active.", delay: 1800, class: "text-blue-400" },
    { text: "[ready] Vieira Tech Core active. Awaiting client mission.", delay: 2100, class: "text-cyan-300 font-bold" }
  ];

  let isTerminalRunning = false;
  function runTerminalSimulation() {
    if (isTerminalRunning || !terminalBody) return;
    isTerminalRunning = true;
    terminalBody.innerHTML = '';

    terminalLines.forEach((item, index) => {
      setTimeout(() => {
        const p = document.createElement('div');
        p.className = `font-mono text-xs sm:text-sm py-0.5 leading-relaxed ${item.class}`;
        p.textContent = item.text;
        terminalBody.appendChild(p);
        terminalBody.scrollTop = terminalBody.scrollHeight;

        if (index === terminalLines.length - 1) {
          const prompt = document.createElement('div');
          prompt.className = "font-mono text-xs sm:text-sm text-cyan-400 mt-2 flex items-center";
          prompt.innerHTML = `<span>vieira_tech@prod:~$ </span><span class="typing-cursor"></span>`;
          terminalBody.appendChild(prompt);
          isTerminalRunning = false;
        }
      }, item.delay);
    });
  }

  if (terminalRunBtn) {
    terminalRunBtn.addEventListener('click', runTerminalSimulation);
  }

  // Initial terminal run
  runTerminalSimulation();

  // Contact Form Handling
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const serviceInput = document.getElementById('formService');
      const messageInput = document.getElementById('formMessage');
      const submitBtn = document.getElementById('formSubmitBtn');

      // Validation
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        const errMsg = currentLang === 'pt' ? 'Por favor, preencha todos os campos.' : 'Please fill out all fields.';
        window.showToast(errMsg);
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        const emailErrMsg = currentLang === 'pt' ? 'Insira um e-mail corporativo válido.' : 'Please enter a valid email address.';
        window.showToast(emailErrMsg);
        return;
      }

      // Visual feedback: Sending state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>${currentLang === 'pt' ? 'Enviando...' : 'Sending...'}</span>
      `;

      // Simulate network request
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        contactForm.reset();

        const successMsg = currentLang === 'pt'
          ? 'Mensagem enviada com sucesso! Davi Vieira entrará em contato em breve.'
          : 'Message sent successfully! Davi Vieira will contact you shortly.';
        window.showToast(successMsg);
      }, 1200);
    });
  }

  // Project Details Modal Logic
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalProblem = document.getElementById('modalProblem');
  const modalSolution = document.getElementById('modalSolution');
  const modalStack = document.getElementById('modalStack');
  const modalResults = document.getElementById('modalResults');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  window.openProjectModal = function(projectId) {
    if (!projectDetailsData[projectId] || !modal) return;
    const data = projectDetailsData[projectId][currentLang] || projectDetailsData[projectId]['pt'];

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalProblem.textContent = data.problem;
    modalSolution.textContent = data.solution;

    // Stack pills
    modalStack.innerHTML = '';
    data.stack.forEach(tech => {
      const pill = document.createElement('span');
      pill.className = "px-3 py-1 text-xs font-mono font-medium rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/60";
      pill.textContent = tech;
      modalStack.appendChild(pill);
    });

    // Results items
    modalResults.innerHTML = '';
    data.results.forEach(res => {
      const li = document.createElement('li');
      li.className = "flex items-start text-sm text-zinc-300";
      li.innerHTML = `
        <svg class="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <span>${res}</span>
      `;
      modalResults.appendChild(li);
    });

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  window.closeProjectModal = function() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });

  // Back to top behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn?.classList.remove('opacity-100', 'pointer-events-auto');
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
