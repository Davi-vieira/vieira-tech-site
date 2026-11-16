# Vieira Tech — Landing Page Institucional

Landing page oficial da **Vieira Tech** (`vieira_tech`), fundada por **Davi Vieira**. Focada em Engenharia de Software de Alto Desempenho, Automação Inteligente de Processos, Agentes de IA e Infraestruturas Linux de Missão Crítica.

---

## ⚡ Visão Geral & Tecnologias

- **Design:** Dark Mode de alto contraste (`#09090b` / `#111827`) com iluminação e detalhes em ciano elétrico (`#06b6d4`), azul cobalto e verde esmeralda.
- **Tipografia:** `Inter` (UI / textos) e `JetBrains Mono` (código, terminal e métricas).
- **Stack:**
  - HTML5 Semântico com acessibilidade (ARIA labels).
  - Tailwind CSS (via CDN otimizado com extensões de cores personalizadas).
  - Vanilla JavaScript (i18n nativo, terminal interativo, modais de arquitetura técnica).
  - 100% estático — pronto para deploy com custo zero em **Cloudflare Pages**, **Vercel**, **Netlify** ou servidores **Nginx/Caddy**.

---

## 🌐 Internacionalização (PT-BR / EN-US)

O site conta com um seletor de idiomas dinâmico no cabeçalho:
- **Português (Brasil):** Focado no mercado corporativo brasileiro e parcerias locais.
- **English (US):** Focado em clientes internacionais, mantenedores open-source e parcerias globais.
- A preferência de idioma é armazenada automaticamente no `localStorage` do visitante.

---

## 🚀 Seções da Landing Page

1. **Header & Navegação:** Identidade visual `<V/>`, menu de navegação responsivo, alternador de idioma e botão de ação rápida.
2. **Hero Section:**
   - Badge com status de disponibilidade para novos projetos.
   - Headline assertiva sobre engenharia sob medida e agentes autônomos.
   - Chamadas para ação ("Ver Projetos / GitHub" e "Entrar em Contato").
   - **Terminal Interativo:** Simulador de pipeline da Vieira Tech com comandos em tempo real.
   - Métricas de destaque (99.9% Uptime, 10x+ Aceleração, Zero Overhead).
3. **Serviços & Especialidades:**
   - Automação de Processos & Agentes de IA
   - Desenvolvimento Backend & APIs de Alto Desempenho (Python, C, SQL)
   - Engenharia Open-Source & Infraestrutura Linux
4. **Portfólio / Projetos em Destaque:**
   - **Analix:** Extração semântica e conciliação documental contábil B2B.
   - **Vieira News:** Ingestão contínua, deduplicação e curadoria de notícias via agentes de IA.
   - **Infraestrutura Linux:** Servidores bare-metal e cloud com tolerância a falhas e alta disponibilidade.
   - Modal interativo com arquitetura técnica detalhada, desafios resolvidos e métricas.
5. **Sobre Davi Vieira:** Filosofia de engenharia (código enxuto, previsibilidade operacional e rigor de baixo nível).
6. **Contato & Conexões:** Links oficiais para GitHub ([github.com/Davi-vieira](https://github.com/Davi-vieira)), e-mail corporativo, botão de contato direto e formulário com validação client-side.

---

## 🛠️ Como Executar Localmente

### Opção 1: Abrir diretamente no navegador
Basta abrir o arquivo `index.html` em qualquer navegador web moderno.

### Opção 2: Via servidor HTTP local (Python)
```bash
python -m http.server 8000
# Acesse no navegador: http://localhost:8000
```

### Opção 3: Via Node / npx
```bash
npx serve .
```

---

## 📦 Deploy em Produção

### Deploy no Cloudflare Pages
1. Conecte o repositório GitHub no painel do **Cloudflare Pages**.
2. Deixe o campo *Build command* vazio (projeto 100% estático).
3. Defina o *Build output directory* como `/` ou `.`.
4. Clique em **Deploy**.

### Deploy na Vercel
```bash
npx vercel
# Ou conecte o repositório diretamente em vercel.com
```

---

## 👤 Autor

**Davi Vieira**  
- GitHub: [@Davi-vieira](https://github.com/Davi-vieira)  
- E-mail: `vieira.tech2000@gmail.com`
