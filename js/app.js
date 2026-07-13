/* ============================================================
   IARA EM TRAVESSIA — Lógica do site
   ============================================================ */

// -------- Estado --------
const CHAVE_LOCAL = "iara-travessia-livros";
let livrosLocais = carregarLocais(); // resenhas criadas pelo navegador
let filtroBusca = "";
let filtroGenero = "todos";
let filtroStatus = "todos";
let notaNova = 0;

// Junta os livros do arquivo data.js com os criados no navegador
function todosLivros() {
  return [...LIVROS, ...livrosLocais];
}

// -------- Utilidades --------
function carregarLocais() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_LOCAL)) || [];
  } catch {
    return [];
  }
}

function salvarLocais() {
  localStorage.setItem(CHAVE_LOCAL, JSON.stringify(livrosLocais));
}

function formatarData(iso) {
  if (!iso) return "";
  const meses = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez",
  ];
  const [ano, mes, dia] = iso.split("-");
  return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]}. ${ano}`;
}

function estrelasHTML(nota) {
  if (!nota) return '<span style="color:var(--texto-tenue);font-size:.85rem">sem nota ainda</span>';
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (nota >= i) html += "★";
    else if (nota >= i - 0.5) html += "⯪";
    else html += '<span class="vazia">★</span>';
  }
  return `<span class="estrelas" title="${nota} de 5">${html}</span>`;
}

function statusRotulo(status) {
  return { lido: "Lido", lendo: "Lendo agora", "quero-ler": "Quero ler" }[status] || status;
}

function escapar(t = "") {
  const d = document.createElement("div");
  d.textContent = t;
  return d.innerHTML;
}

// -------- Estatísticas --------
function renderStats() {
  const livros = todosLivros();
  const lidos = livros.filter((l) => l.status === "lido");
  const lendo = livros.filter((l) => l.status === "lendo");
  const paginas = lidos.reduce((s, l) => s + (l.paginas || 0), 0);
  const notas = lidos.filter((l) => l.nota > 0);
  const media = notas.length
    ? (notas.reduce((s, l) => s + l.nota, 0) / notas.length).toFixed(1)
    : "—";

  // A meta do ano conta apenas os livros lidos em 2026
  const lidos2026 = lidos.filter((l) => (l.dataLeitura || "").startsWith(String(ANO_ATUAL)));

  const totalArtigos = typeof ARTIGOS !== "undefined" ? ARTIGOS.length : 0;

  document.getElementById("stat-lidos").textContent = lidos.length;
  document.getElementById("stat-lendo").textContent = lendo.length;
  document.getElementById("stat-artigos").textContent = totalArtigos;
  document.getElementById("stat-paginas").textContent = paginas.toLocaleString("pt-BR");
  document.getElementById("stat-media").textContent = media;

  const pct = Math.min(100, Math.round((lidos2026.length / META_ANO) * 100));
  document.getElementById("meta-texto").innerHTML =
    `<span><strong>${lidos2026.length}</strong> de ${META_ANO} livros lidos em ${ANO_ATUAL}</span><span>${pct}% da meta</span>`;
  setTimeout(() => {
    document.getElementById("meta-preenchida").style.width = pct + "%";
  }, 150);
}

// -------- Cartão de livro --------
function cartaoHTML(livro) {
  const gradiente = `linear-gradient(150deg, ${livro.cor[0]}, ${livro.cor[1]})`;
  const selo =
    livro.status !== "lido"
      ? `<span class="status-selo ${livro.status}">${statusRotulo(livro.status)}</span>`
      : "";
  const rascunho = livro.local ? '<span class="selo-rascunho">rascunho</span>' : "";
  const data = livro.dataLeitura ? formatarData(livro.dataLeitura) : statusRotulo(livro.status);

  return `
    <article class="cartao" data-id="${livro.id}">
      <div class="capa" style="background:${gradiente}">
        ${selo}${rascunho}
        <div>
          <div class="capa-titulo">${escapar(livro.titulo)}</div>
          <div class="capa-autor">${escapar(livro.autor)}</div>
        </div>
      </div>
      <div class="cartao-corpo">
        <div class="cartao-meta">
          <span class="genero-tag">${escapar(livro.genero)}</span>
          <span>•</span>
          <span>${livro.ano || ""}</span>
        </div>
        <div class="estrelas-linha">${estrelasHTML(livro.nota)}</div>
        <p class="cartao-resumo">${escapar(livro.resumo || "")}</p>
        <div class="cartao-rodape">
          <span>${data}</span>
          <span class="ler-mais">Ler resenha →</span>
        </div>
      </div>
    </article>`;
}

// -------- Grade / filtros --------
function livrosFiltrados() {
  const b = filtroBusca.toLowerCase().trim();
  return todosLivros().filter((l) => {
    const casaBusca =
      !b ||
      l.titulo.toLowerCase().includes(b) ||
      l.autor.toLowerCase().includes(b) ||
      (l.resumo || "").toLowerCase().includes(b);
    const casaGenero = filtroGenero === "todos" || l.genero === filtroGenero;
    const casaStatus = filtroStatus === "todos" || l.status === filtroStatus;
    return casaBusca && casaGenero && casaStatus;
  });
}

function renderGrade() {
  const grade = document.getElementById("grade");
  const lista = livrosFiltrados();
  if (!lista.length) {
    grade.innerHTML =
      '<div class="vazio"><span class="emoji">🌊</span>Nenhuma leitura encontrada por aqui.<br>Tente outro filtro ou busca.</div>';
    return;
  }
  grade.innerHTML = lista.map(cartaoHTML).join("");
  grade.querySelectorAll(".cartao").forEach((c) => {
    c.addEventListener("click", () => abrirArtigo(c.dataset.id));
  });
}

// -------- Destaques --------
function renderDestaques() {
  const dest = todosLivros().filter((l) => l.destaque);
  const alvo = dest.length ? dest : todosLivros().slice(0, 2);
  const el = document.getElementById("destaques");
  el.innerHTML = alvo.map(cartaoHTML).join("");
  el.querySelectorAll(".cartao").forEach((c) => {
    c.addEventListener("click", () => abrirArtigo(c.dataset.id));
  });
}

// -------- Chips de gênero --------
function renderChips() {
  const generosUsados = [...new Set(todosLivros().map((l) => l.genero))];
  const cont = document.getElementById("chips-genero");
  const chips = ["todos", ...generosUsados];
  cont.innerHTML = chips
    .map(
      (g) =>
        `<button class="chip ${g === filtroGenero ? "ativo" : ""}" data-genero="${escapar(g)}">${
          g === "todos" ? "Todos os gêneros" : escapar(g)
        }</button>`
    )
    .join("");
  cont.querySelectorAll(".chip").forEach((c) => {
    c.addEventListener("click", () => {
      filtroGenero = c.dataset.genero;
      renderChips();
      renderGrade();
    });
  });
}

// -------- Artigo (resenha completa) --------
function abrirArtigo(id) {
  const livro = todosLivros().find((l) => l.id === id);
  if (!livro) return;

  const gradiente = `linear-gradient(150deg, ${livro.cor[0]}, ${livro.cor[1]})`;
  const paragrafos = (livro.resenha || "")
    .split("\n\n")
    .filter((p) => p.trim())
    .map((p) => `<p>${escapar(p)}</p>`)
    .join("");
  const citacao = livro.frase
    ? `<blockquote class="citacao">“${escapar(livro.frase)}”</blockquote>`
    : "";

  document.getElementById("artigo-conteudo").innerHTML = `
    <a class="voltar" id="btn-voltar">← Voltar às leituras</a>
    <div class="artigo-capa" style="background:${gradiente}">
      <div>
        <div class="capa-titulo">${escapar(livro.titulo)}</div>
        <div class="capa-autor">${escapar(livro.autor)}</div>
      </div>
    </div>
    <header class="artigo-cabecalho">
      <span class="artigo-genero">${escapar(livro.genero)}</span>
      <h1>${escapar(livro.titulo)}</h1>
      <p class="artigo-autor">por ${escapar(livro.autor)} · ${livro.ano || ""}</p>
      <div class="artigo-info">
        ${estrelasHTML(livro.nota)}
        <span>· ${statusRotulo(livro.status)}</span>
        ${livro.paginas ? `<span>· ${livro.paginas} páginas</span>` : ""}
        ${livro.dataLeitura ? `<span>· lido em ${formatarData(livro.dataLeitura)}</span>` : ""}
      </div>
    </header>
    ${citacao}
    <div class="artigo-corpo">${paragrafos || "<p><em>Resenha em breve…</em></p>"}</div>
    <footer class="artigo-rodape">
      <a class="voltar" id="btn-voltar2">← Voltar às leituras</a>
      <a class="botao botao-secundario" href="https://instagram.com/iaraemtravessia" target="_blank" rel="noopener">Seguir @iaraemtravessia</a>
    </footer>`;

  document.getElementById("btn-voltar").addEventListener("click", () => mostrarVista("blog"));
  document.getElementById("btn-voltar2").addEventListener("click", () => mostrarVista("blog"));
  mostrarVista("artigo");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// -------- Estante --------
function renderEstante() {
  const grupos = [
    { chave: "lido", titulo: "📖 Já li", },
    { chave: "lendo", titulo: "🔖 Lendo agora" },
    { chave: "quero-ler", titulo: "🌱 Quero ler" },
  ];
  const cont = document.getElementById("estante-conteudo");
  cont.innerHTML = grupos
    .map((g) => {
      const livros = todosLivros().filter((l) => l.status === g.chave);
      if (!livros.length) return "";
      const lombadas = livros
        .map(
          (l) =>
            `<div class="lombada" data-id="${l.id}" style="background:linear-gradient(160deg, ${l.cor[0]}, ${l.cor[1]})" title="${escapar(l.titulo)}"><span>${escapar(l.titulo)}</span></div>`
        )
        .join("");
      return `<div class="estante-prateleira">
        <h3>${g.titulo} <span style="color:var(--texto-tenue);font-size:.9rem;font-weight:400">(${livros.length})</span></h3>
        <div class="estante-linha">${lombadas}</div>
      </div>`;
    })
    .join("");
  cont.querySelectorAll(".lombada").forEach((l) => {
    l.addEventListener("click", () => abrirArtigo(l.dataset.id));
  });
}

// -------- Navegação entre vistas --------
function mostrarVista(nome) {
  document.querySelectorAll(".vista").forEach((v) => v.classList.remove("ativa"));
  const alvo = document.getElementById("vista-" + nome);
  if (alvo) alvo.classList.add("ativa");

  document.querySelectorAll(".nav a").forEach((a) => {
    a.classList.toggle("ativo", a.dataset.vista === nome);
  });
}

// -------- Tema claro/escuro --------
function iniciarTema() {
  const salvo = localStorage.getItem("iara-tema");
  const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const tema = salvo || (prefereEscuro ? "escuro" : "claro");
  document.documentElement.setAttribute("data-tema", tema);
  atualizarIconeTema(tema);
}

function alternarTema() {
  const atual = document.documentElement.getAttribute("data-tema");
  const novo = atual === "escuro" ? "claro" : "escuro";
  document.documentElement.setAttribute("data-tema", novo);
  localStorage.setItem("iara-tema", novo);
  atualizarIconeTema(novo);
}

function atualizarIconeTema(tema) {
  document.getElementById("btn-tema").textContent = tema === "escuro" ? "☀️" : "🌙";
}

// -------- Modal: nova resenha --------
function abrirModal() {
  document.getElementById("modal").classList.add("aberto");
  notaNova = 0;
  renderNotaSelect();
}
function fecharModal() {
  document.getElementById("modal").classList.remove("aberto");
  document.getElementById("form-resenha").reset();
}

function renderNotaSelect() {
  const cont = document.getElementById("nota-select");
  cont.innerHTML = [1, 2, 3, 4, 5]
    .map((n) => `<span data-n="${n}" class="${n <= notaNova ? "aceso" : ""}">★</span>`)
    .join("");
  cont.querySelectorAll("span").forEach((s) => {
    s.addEventListener("click", () => {
      notaNova = parseInt(s.dataset.n);
      renderNotaSelect();
    });
  });
}

function salvarResenha(e) {
  e.preventDefault();
  const f = e.target;
  const cores = [
    ["#1f6f78", "#e9b44c"], ["#7a3b2e", "#f2c14e"], ["#3d348b", "#e0aaff"],
    ["#005f73", "#94d2bd"], ["#6a040f", "#ffba08"], ["#2b2d42", "#8d99ae"],
  ];
  const novo = {
    id: "local-" + Date.now(),
    titulo: f.titulo.value.trim(),
    autor: f.autor.value.trim() || "Autor desconhecido",
    ano: f.ano.value || "",
    genero: f.genero.value,
    status: f.status.value,
    nota: notaNova,
    paginas: parseInt(f.paginas.value) || 0,
    dataLeitura: f.status.value === "lido" ? new Date().toISOString().slice(0, 10) : "",
    destaque: false,
    cor: cores[Math.floor(Math.random() * cores.length)],
    frase: f.frase.value.trim(),
    resumo: f.resumo.value.trim(),
    resenha: f.resenha.value.trim(),
    local: true,
  };
  if (!novo.titulo) return;
  livrosLocais.push(novo);
  salvarLocais();
  fecharModal();
  renderTudo();
  mostrarVista("blog");
  abrirArtigo(novo.id);
}

// -------- Preencher select de gêneros do modal --------
function preencherGeneros() {
  const sel = document.getElementById("campo-genero");
  sel.innerHTML = GENEROS.map((g) => `<option value="${g}">${g}</option>`).join("");
}

// -------- Artigos --------
function renderArtigos() {
  const secao = document.getElementById("artigos-secao");
  const cont = document.getElementById("artigos-lista");
  if (!cont || !secao) return;
  const lista = typeof ARTIGOS !== "undefined" ? ARTIGOS : [];
  if (!lista.length) {
    secao.style.display = "none";
    return;
  }
  secao.style.display = "";
  cont.innerHTML = lista
    .map((a) => {
      const meta = [a.fonte, a.data ? formatarData(a.data) : ""]
        .filter(Boolean)
        .map(escapar)
        .join(" · ");
      const seta = a.link ? '<span class="artigo-seta">↗</span>' : "";
      const tag = a.link ? "a" : "div";
      const href = a.link ? ` href="${escapar(a.link)}" target="_blank" rel="noopener"` : "";
      return `
        <${tag} class="artigo-item"${href}>
          <span class="artigo-icone">📄</span>
          <span class="artigo-conteudo">
            <span class="artigo-titulo-lista">${escapar(a.titulo)}</span>
            ${meta ? `<span class="artigo-meta-lista">${meta}</span>` : ""}
          </span>
          ${seta}
        </${tag}>`;
    })
    .join("");
}

// -------- Instagram --------
function renderInstagram() {
  const cont = document.getElementById("insta-grade");
  if (!cont || typeof INSTAGRAM === "undefined") return;
  cont.innerHTML = INSTAGRAM.map((p) => {
    const gradiente = `linear-gradient(150deg, ${p.cor[0]}, ${p.cor[1]})`;
    return `
      <a class="insta-post" style="background:${gradiente}" href="${p.link}" target="_blank" rel="noopener">
        <span class="insta-glyph">📷</span>
        ${p.tag ? `<span class="insta-tag">${escapar(p.tag)}</span>` : ""}
        <span class="insta-legenda">${escapar(p.legenda)}</span>
      </a>`;
  }).join("");
}

// -------- Render geral --------
function renderTudo() {
  renderStats();
  renderDestaques();
  renderChips();
  renderGrade();
  renderEstante();
  renderArtigos();
  renderInstagram();
}

// -------- Eventos iniciais --------
function iniciar() {
  iniciarTema();
  preencherGeneros();
  renderTudo();

  // Navegação
  document.querySelectorAll("[data-vista]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarVista(el.dataset.vista);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Botões de status (filtro)
  document.querySelectorAll("[data-status]").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroStatus = btn.dataset.status;
      document.querySelectorAll("[data-status]").forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      renderGrade();
    });
  });

  // Busca
  document.getElementById("busca").addEventListener("input", (e) => {
    filtroBusca = e.target.value;
    renderGrade();
  });

  // Tema
  document.getElementById("btn-tema").addEventListener("click", alternarTema);

  // Modal
  document.getElementById("btn-nova").addEventListener("click", abrirModal);
  const btnNovaHero = document.getElementById("btn-nova-hero");
  if (btnNovaHero) btnNovaHero.addEventListener("click", abrirModal);
  document.getElementById("btn-fechar-modal").addEventListener("click", fecharModal);
  document.getElementById("btn-cancelar").addEventListener("click", fecharModal);
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") fecharModal();
  });
  document.getElementById("form-resenha").addEventListener("submit", salvarResenha);
}

document.addEventListener("DOMContentLoaded", iniciar);
