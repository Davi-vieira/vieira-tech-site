/**
 * Vieira Tech - Internationalization (i18n) Engine
 * Supported Locales: PT-BR (default), EN-US
 */

const translations = {
  pt: {
    // Meta & Brand
    pageTitle: "Vieira Tech | Engenharia de Software, Automação & Sistemas Sob Medida",
    navHome: "Início",
    navServices: "Serviços",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    navContactBtn: "Iniciar Projeto",

    // Status Pill
    statusPill: "Disponível para novos projetos e consultorias técnicas",

    // Hero Section
    heroBadge: "ENGENHARIA DE SOFTWARE ROBUSTA & IA",
    heroTitle: "Sistemas Sob Medida, Automação Inteligente e Engenharia de Software de Alto Desempenho",
    heroSubtitle: "A Vieira Tech projeta arquiteturas de backend resilientes, agentes autônomos de IA e pipelines de alto volume com precisão milimétrica e código enxuto.",
    heroBtnProjects: "Ver Projetos / GitHub",
    heroBtnContact: "Entrar em Contato",
    heroMetric1Value: "99.9%",
    heroMetric1Label: "Confiabilidade & Uptime",
    heroMetric2Value: "10x+",
    heroMetric2Label: "Aceleração de Processos",
    heroMetric3Value: "Zero",
    heroMetric3Label: "Overhead Desnecessário",

    // Terminal Widget
    terminalTitle: "vieira_tech_agent — bash — 80x24",
    terminalBtnRun: "Executar Pipeline",
    terminalStatusReady: "Status: Operacional | Agentes: Ativos | Carga: Nominal",

    // Tech Bar
    techStackHeading: "Tecnologias e Ferramentas Fundamentais",

    // Services Section
    servicesSubtitle: "NOSSAS CAPACIDADES",
    servicesTitle: "Especialidades de Engenharia",
    servicesDescription: "Desenvolvemos soluções sólidas onde confiabilidade, velocidade e manutenibilidade são requisitos primordiais, não opcionais.",
    
    service1Title: "Automação de Processos & Agentes de IA",
    service1Desc: "Desenvolvimento de pipelines autônomos, robôs de processamento e orquestração de Large Language Models (LLMs) integrados a fluxos de trabalho corporativos.",
    service1Item1: "Extração inteligente e estruturação de dados não estruturados",
    service1Item2: "Agentes autônomos para tomada de decisão e triagem",
    service1Item3: "Integração segura via APIs com sistemas legados e ERPs",

    service2Title: "Desenvolvimento Backend & APIs de Alto Desempenho",
    service2Desc: "Construção de APIs robustas, microsserviços e motores de processamento com arquitetura escalável e foco estrito em baixa latência.",
    service2Item1: "Python assíncrono (FastAPI, AsyncIO) e microsserviços modernos",
    service2Item2: "Engenharia em C para módulos de alta performance e baixo nível",
    service2Item3: "Modelagem relacional e otimização avançada de queries SQL (PostgreSQL)",

    service3Title: "Engenharia Open-Source & Infraestrutura Linux",
    service3Desc: "Ambientes Linux otimizados para missão crítica, manutenção contínua de software de código aberto e arquiteturas resilientes.",
    service3Item1: "Automação de servidores Linux, hardening de segurança e Nginx/Caddy",
    service3Item2: "Auditoria, refatoração e manutenção preventiva de bases de código",
    service3Item3: "Contêineres com Docker, monitoramento contínuo e CI/CD confiável",

    // Portfolio Section
    projectsSubtitle: "PORTFÓLIO DE IMPACTO",
    projectsTitle: "Projetos em Destaque",
    projectsDescription: "Soluções reais desenvolvidas para otimizar operações, reduzir custos e eliminar gargalos técnicos.",

    project1Name: "Analix",
    project1Category: "Automação B2B & Inteligência Documental",
    project1Desc: "Sistema enterprise para extração, validação e conciliação automatizada de dados em documentos B2B (notas fiscais, contratos, pedidos e relatórios de medição). Elimina 95% do esforço manual de digitação e auditoria.",
    project1Tag1: "Extração Documental",
    project1Tag2: "Validação Contábil",
    project1Tag3: "Pipelines Assíncronos",
    project1Metric1: "99.8% de precisão na extração",
    project1Metric2: "Mais de 10.000 docs/hora",

    project2Name: "Vieira News",
    project2Category: "IA Generativa & Curadoria Automatizada",
    project2Desc: "Pipeline automatizado de coleta, sumarização e curadoria em tempo real de notícias tecnológicas e de mercado. Utiliza agentes de IA especializados para deduplicação, análise de sentimento e distribuição multicanal.",
    project2Tag1: "Agentes de Curadoria",
    project2Tag2: "Sumarização com LLMs",
    project2Tag3: "Ingestão Contínua",
    project2Metric1: "Tempo real (< 45s do evento)",
    project2Metric2: "Deduplicação de 85% de ruído",

    project3Name: "Infraestrutura Linux & Servidores de Alta Disponibilidade",
    project3Category: "Engenharia de Sistemas & Resiliência",
    project3Desc: "Projetos de infraestrutura bare-metal e cloud hardening com Linux para operação 24/7 sem interrupções. Inclui configuração avançada de proxies reversos, automações de backup criptografado e tolerância a falhas.",
    project3Tag1: "Hardening de Kernel",
    project3Tag2: "Zero Downtime Deploy",
    project3Tag3: "Alta Disponibilidade",
    project3Metric1: "SLA de 99.99% alcançado",
    project3Metric2: "Failover automático < 3s",

    projectBtnGithub: "Explorar Código no GitHub",
    projectBtnDetails: "Detalhes Técnicos",

    // About / Founder Section
    aboutSubtitle: "SOBRE A VIEIRA TECH",
    aboutTitle: "Engenharia de Raiz & Visão Pragmática",
    aboutFounderRole: "Fundada por Davi Vieira — Engenheiro de Software",
    aboutP1: "A Vieira Tech nasceu da convicção de que software profissional deve ser rápido, determinístico e construído para durar. Não acreditamos em camadas desnecessárias de abstração nem em soluções genéricas que sobrecarregam sua infraestrutura.",
    aboutP2: "Combinamos o rigor da engenharia de baixo nível (C, Linux, internals de sistemas operacionais) com o poder prático das tecnologias modernas (Python, agentes autônomos de IA, arquiteturas distribuídas) para criar produtos que geram valor palpável no mundo real.",
    aboutStat1: "Foco Total em Eficiência",
    aboutStat1Desc: "Arquiteturas projetadas para consumir menos recursos computacionais com máximo throughput.",
    aboutStat2: "Padrão de Código Limpo",
    aboutStat2Desc: "Código auditável, bem documentado e pronto para manutenibilidade a longo prazo.",
    aboutStat3: "Comunicação Técnica Clara",
    aboutStat3Desc: "Relatórios transparentes, alinhamento técnico sem jargões vazios e entregas contínuas.",

    // Contact Section
    contactSubtitle: "VAMOS CONVERSAR",
    contactTitle: "Transforme seus Processos com Tecnologia de Alto Nível",
    contactDescription: "Precisa de automação inteligente, uma API de alto rendimento ou consultoria técnica para infraestrutura crítica? Entre em contato diretamente com a Vieira Tech.",
    
    contactCardGithubTitle: "GitHub Oficial",
    contactCardGithubDesc: "Repositórios, contribuições open-source e código-fonte.",
    contactCardGithubAction: "github.com/Davi-vieira",
    
    contactCardEmailTitle: "E-mail Corporativo",
    contactCardEmailDesc: "Para propostas formais, RFPs e parcerias.",
    contactCardEmailAction: "vieira.tech2000@gmail.com",

    contactCardDirectTitle: "Contato Rápido",
    contactCardDirectDesc: "Canal direto para alinhamentos ágeis de escopo.",
    contactCardDirectAction: "Enviar Mensagem Direta",

    // Form
    formNameLabel: "Seu Nome Completo",
    formNamePlaceholder: "Ex: Roberto Silveira",
    formEmailLabel: "Seu E-mail Corporativo",
    formEmailPlaceholder: "roberto@empresa.com",
    formServiceLabel: "Tipo de Projeto",
    formServiceOpt1: "Automação de Processos & Agentes de IA",
    formServiceOpt2: "Desenvolvimento Backend / APIs (Python, C, SQL)",
    formServiceOpt3: "Infraestrutura Linux & Servidores de Alta Disponibilidade",
    formServiceOpt4: "Consultoria Técnica Geral",
    formMsgLabel: "Descrição do Projeto / Desafio",
    formMsgPlaceholder: "Conte-nos sobre o que você precisa desenvolver ou automatizar...",
    formSubmitBtn: "Enviar Mensagem",
    formSubmitting: "Enviando mensagem...",
    formSuccess: "Mensagem recebida com sucesso! Davi Vieira responderá em breve.",
    formError: "Por favor, preencha todos os campos obrigatórios.",

    // Footer
    footerDesc: "Engenharia de software especializada, automações de missão crítica e infraestrutura resiliente para negócios que exigem estabilidade e velocidade.",
    footerNavTitle: "Navegação",
    footerServicesTitle: "Especialidades",
    footerLegalTitle: "Conexões",
    footerRights: "Todos os direitos reservados. Vieira Tech.",
    footerDevBy: "Desenvolvido com excelência técnica por Davi Vieira.",
    footerStatus: "Todos os sistemas operacionais (100%)",

    // Modal Details
    modalClose: "Fechar",
    modalTechSpecs: "Especificações de Engenharia",
    copiedToast: "Copiado para a área de transferência!"
  },

  en: {
    // Meta & Brand
    pageTitle: "Vieira Tech | High-Performance Software Engineering, Automation & Systems",
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    navContactBtn: "Start a Project",

    // Status Pill
    statusPill: "Available for new projects & technical consulting",

    // Hero Section
    heroBadge: "ROBUST SOFTWARE ENGINEERING & AI",
    heroTitle: "Tailored Systems, Intelligent Automation & High-Performance Software Engineering",
    heroSubtitle: "Vieira Tech architects resilient backend systems, autonomous AI agents, and high-throughput pipelines with pinpoint accuracy and lean, clean code.",
    heroBtnProjects: "View Projects / GitHub",
    heroBtnContact: "Contact Us",
    heroMetric1Value: "99.9%",
    heroMetric1Label: "Reliability & Uptime",
    heroMetric2Value: "10x+",
    heroMetric2Label: "Process Acceleration",
    heroMetric3Value: "Zero",
    heroMetric3Label: "Unnecessary Overhead",

    // Terminal Widget
    terminalTitle: "vieira_tech_agent — bash — 80x24",
    terminalBtnRun: "Run Pipeline",
    terminalStatusReady: "Status: Operational | Agents: Active | Load: Nominal",

    // Tech Bar
    techStackHeading: "Core Technologies and Engineering Tooling",

    // Services Section
    servicesSubtitle: "OUR CAPABILITIES",
    servicesTitle: "Engineering Specialties",
    servicesDescription: "We deliver solid software solutions where reliability, speed, and maintainability are fundamental requirements, never an afterthought.",
    
    service1Title: "Process Automation & AI Agents",
    service1Desc: "Design and deployment of autonomous pipelines, processing workers, and Large Language Model (LLM) orchestration integrated into core enterprise workflows.",
    service1Item1: "Intelligent extraction and structuring of unstructured document data",
    service1Item2: "Autonomous decision-making, scoring, and triage agents",
    service1Item3: "Secure API integrations with legacy environments and ERPs",

    service2Title: "High-Performance Backend & API Development",
    service2Desc: "Crafting bulletproof APIs, distributed microservices, and computation engines engineered with strict focus on low latency and scalability.",
    service2Item1: "Modern asynchronous Python (FastAPI, AsyncIO) microservices",
    service2Item2: "Systems engineering in C for mission-critical, low-level modules",
    service2Item3: "Advanced SQL optimization, schema modeling & tuning (PostgreSQL)",

    service3Title: "Open-Source Engineering & Linux Infrastructure",
    service3Desc: "Linux environments optimized for mission-critical reliability, open-source codebase maintenance, and resilient deployment architectures.",
    service3Item1: "Linux server provisioning, security hardening, and Nginx/Caddy proxies",
    service3Item2: "Codebase auditing, refactoring, and proactive maintenance",
    service3Item3: "Containerization with Docker, live observability, and rock-solid CI/CD",

    // Portfolio Section
    projectsSubtitle: "PROVEN IMPACT",
    projectsTitle: "Featured Projects",
    projectsDescription: "Real-world solutions built to streamline operations, reduce processing overhead, and eliminate bottlenecks.",

    project1Name: "Analix",
    project1Category: "B2B Automation & Document Intelligence",
    project1Desc: "Enterprise system for automated extraction, semantic parsing, and financial reconciliation of B2B documents (invoices, contracts, POs, and technical logs). Eliminates 95% of manual paperwork audit overhead.",
    project1Tag1: "Document Extraction",
    project1Tag2: "Financial Reconciliation",
    project1Tag3: "Async Pipelines",
    project1Metric1: "99.8% extraction accuracy",
    project1Metric2: "10,000+ docs processed/hour",

    project2Name: "Vieira News",
    project2Category: "Generative AI & Automated News Curation",
    project2Desc: "Automated real-time ingestion, summarization, and curation pipeline for tech and financial market news. Powered by specialized AI agents performing cross-source deduplication, sentiment analysis, and instant multi-channel dispatch.",
    project2Tag1: "Curation Agents",
    project2Tag2: "LLM Summarization",
    project2Tag3: "Continuous Ingestion",
    project2Metric1: "Real-time latency (< 45s event-to-feed)",
    project2Metric2: "85% noise elimination",

    project3Name: "Linux Infrastructure & High Availability Clusters",
    project3Category: "Systems Engineering & Infrastructure Resilience",
    project3Desc: "High-uptime bare-metal and cloud Linux architectures designed for 24/7 continuous operations. Incorporates reverse proxy tuning, encrypted automated backup pipelines, and sub-second failover redundancy.",
    project3Tag1: "Kernel Hardening",
    project3Tag2: "Zero-Downtime Deploy",
    project3Tag3: "High Availability",
    project3Metric1: "99.99% verified uptime SLA",
    project3Metric2: "Automated failover under 3 seconds",

    projectBtnGithub: "Inspect Source on GitHub",
    projectBtnDetails: "Technical Architecture",

    // About / Founder Section
    aboutSubtitle: "ABOUT VIEIRA TECH",
    aboutTitle: "Principled Engineering & Pragmatic Vision",
    aboutFounderRole: "Founded by Davi Vieira — Software Engineer & Architect",
    aboutP1: "Vieira Tech was born from the conviction that software engineering must be predictable, lightning-fast, and built to withstand real production loads. We reject bloated abstractions and generic templates that burden infrastructure.",
    aboutP2: "We fuse low-level systems discipline (C, Linux kernel internals, direct OS interaction) with modern pragmatic tooling (Python, autonomous AI agents, distributed queues) to deliver systems that create tangible operational value.",
    aboutStat1: "Efficiency First",
    aboutStat1Desc: "Architectures designed to maximize computational throughput with minimal footprint.",
    aboutStat2: "Clean Code Standards",
    aboutStat2Desc: "Auditable, robustly documented code prepared for sustainable long-term evolution.",
    aboutStat3: "Transparent Engineering",
    aboutStat3Desc: "Clarity in technical communication, no empty buzzwords, and continuous verification.",

    // Contact Section
    contactSubtitle: "LET'S TALK",
    contactTitle: "Elevate Your Systems with Precision Engineering",
    contactDescription: "Seeking intelligent automation, a high-throughput backend API, or technical leadership for mission-critical infrastructure? Connect directly with Vieira Tech.",
    
    contactCardGithubTitle: "Official GitHub",
    contactCardGithubDesc: "Repositories, open-source work, and codebase contributions.",
    contactCardGithubAction: "github.com/Davi-vieira",
    
    contactCardEmailTitle: "Corporate Inquiries",
    contactCardEmailDesc: "For formal RFPs, architecture reviews, and consulting.",
    contactCardEmailAction: "vieira.tech2000@gmail.com",

    contactCardDirectTitle: "Direct Contact",
    contactCardDirectDesc: "Fast-track channel for agile scope discussions.",
    contactCardDirectAction: "Send Direct Message",

    // Form
    formNameLabel: "Full Name",
    formNamePlaceholder: "e.g. John Doe",
    formEmailLabel: "Work Email",
    formEmailPlaceholder: "john@company.com",
    formServiceLabel: "Project Scope",
    formServiceOpt1: "Process Automation & AI Agents",
    formServiceOpt2: "Backend Development / APIs (Python, C, SQL)",
    formServiceOpt3: "Linux Infrastructure & High Availability Servers",
    formServiceOpt4: "General Technical Consulting",
    formMsgLabel: "Project Scope / Challenge Description",
    formMsgPlaceholder: "Describe your goals, requirements, or architecture challenge...",
    formSubmitBtn: "Send Message",
    formSubmitting: "Sending message...",
    formSuccess: "Message received! Davi Vieira will respond promptly.",
    formError: "Please fill out all required fields.",

    // Footer
    footerDesc: "Specialized software engineering, mission-critical automations, and resilient Linux infrastructure for organizations demanding stability and speed.",
    footerNavTitle: "Navigation",
    footerServicesTitle: "Specialties",
    footerLegalTitle: "Connect",
    footerRights: "All rights reserved. Vieira Tech.",
    footerDevBy: "Engineered with precision by Davi Vieira.",
    footerStatus: "All systems fully operational (100%)",

    // Modal Details
    modalClose: "Close",
    modalTechSpecs: "Engineering Specifications",
    copiedToast: "Copied to clipboard!"
  }
};

let currentLang = 'pt';

/**
 * Switch language and re-render all elements with [data-i18n] and [data-i18n-placeholder]
 * @param {string} lang - 'pt' or 'en'
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('vieira_tech_lang', lang);

  // Update document language & title
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  if (translations[lang].pageTitle) {
    document.title = translations[lang].pageTitle;
  }

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML content where formatting is needed
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update active state in UI buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active', 'bg-cyan-500', 'text-zinc-950', 'font-bold');
      btn.classList.remove('text-zinc-400', 'hover:text-white');
    } else {
      btn.classList.remove('active', 'bg-cyan-500', 'text-zinc-950', 'font-bold');
      btn.classList.add('text-zinc-400', 'hover:text-white');
    }
  });
}

// Initialize language on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('vieira_tech_lang') || 
                    (navigator.language.startsWith('pt') ? 'pt' : 'en');
  setLanguage(savedLang);

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });
});
