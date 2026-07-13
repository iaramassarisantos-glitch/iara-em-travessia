/* ============================================================
   IARA EM TRAVESSIA — Base de dados
   ------------------------------------------------------------
   Este é o único arquivo que você precisa editar para mudar o
   conteúdo do site: suas resenhas (lista LIVROS) e os posts do
   Instagram (lista INSTAGRAM, lá embaixo).

   Cada livro tem estes campos:
   - id: um código único, sem espaços. Ex: "sobre-o-amor"
   - titulo, autor, ano (de publicação)
   - genero: um dos gêneros da lista GENEROS
   - status: "lido", "lendo" ou "quero-ler"
   - nota: de 0 a 5 (aceita meio, tipo 4.5). Use 0 se não avaliou.
   - paginas, dataLeitura ("2026-05-25")
   - destaque: true para aparecer em destaque na home
   - cor: as duas cores da capa. Ex: ["#cf6a34", "#e6a935"]
   - frase: uma citação que você marcou (opcional)
   - resumo: a chamada curta que aparece no cartão
   - resenha: o texto completo. Separe parágrafos com \n\n.

   >>> As resenhas abaixo estão como RASCUNHO. Os dados (nota, data,
   gênero) são os seus. O trecho entre colchetes [ ... ] é o espaço
   pra VOCÊ escrever com as suas palavras. É só apagar e escrever. <<<
   ============================================================ */

const GENEROS = [
  "Psicologia",
  "Ensaio",
  "Não-ficção",
  "Espiritualidade",
  "Autoconhecimento",
  "Quadrinhos",
  "Memórias",
  "Romance",
  "Ficção",
  "Poesia",
  "Literatura Brasileira",
];

// Meta de leitura do ano (a barra conta os livros lidos em 2026)
const META_ANO = 24;
const ANO_ATUAL = 2026;

const LIVROS = [
  {
    id: "tres-ensaios-sobre-o-amor",
    titulo: "Três ensaios sobre o amor",
    autor: "Sigmund Freud",
    ano: 2016,
    genero: "Psicologia",
    status: "lido",
    nota: 4,
    paginas: 144,
    dataLeitura: "2026-05-25",
    destaque: true,
    cor: ["#b0432b", "#e6a935"],
    frase: "",
    resumo:
      "Freud reunindo três ensaios sobre as escolhas amorosas, o desejo e os impasses da vida amorosa.",
    resenha:
      "Neste volume, Freud reúne três ensaios (das “Contribuições para a psicologia da vida amorosa”) em que investiga como escolhemos quem amamos, as tensões entre desejo e ternura e os nós inconscientes que atravessam a vida a dois.\n\n[✍️ Aqui é a minha resenha. Vou escrever o que esse livro mexeu em mim, as passagens que sublinhei e o que levo comigo.]",
  },
  {
    id: "sobre-o-amor-jung",
    titulo: "Sobre o Amor",
    autor: "C. G. Jung",
    ano: 2013,
    genero: "Psicologia",
    status: "lido",
    nota: 4,
    paginas: 160,
    dataLeitura: "2026-05-24",
    destaque: true,
    cor: ["#223052", "#cf6a34"],
    frase: "",
    resumo:
      "Uma reunião de textos de Jung sobre o amor, a alma e o encontro com o outro.",
    resenha:
      "Uma coletânea que reúne o pensamento de Jung sobre o amor: não o amor romântico apenas, mas o amor como força de individuação, como encontro com a própria alma e com o outro.\n\n[✍️ Aqui é a minha resenha. Vou contar o que esse livro despertou em mim e por que dei quatro estrelas.]",
  },
  {
    id: "eros-e-psique",
    titulo: "Eros e Psiquê",
    autor: "Erich Neumann",
    ano: 1990,
    genero: "Psicologia",
    status: "lido",
    nota: 0,
    paginas: 176,
    dataLeitura: "",
    destaque: false,
    cor: ["#1d2b4a", "#c9843c"],
    frase: "",
    resumo:
      "Uma leitura junguiana do mito de Eros e Psiquê e do desenvolvimento do feminino.",
    resenha:
      "Erich Neumann, discípulo de Jung, parte do mito grego de Eros e Psiquê para falar sobre amor, alma e o processo de individuação no desenvolvimento do feminino.\n\n[✍️ Aqui é a minha resenha. (Não deu pra ver a sua nota no print. Quando abrir o arquivo, coloque o número de estrelas no campo \"nota\".)]",
  },
  {
    id: "a-tradicao-do-budismo",
    titulo: "A Tradição do Budismo",
    autor: "Peter Harvey",
    ano: 1990,
    genero: "Espiritualidade",
    status: "lido",
    nota: 4,
    paginas: 528,
    dataLeitura: "2025-12-26",
    destaque: false,
    cor: ["#9c3b23", "#e0873a"],
    frase: "",
    resumo:
      "Uma introdução ampla à história, à filosofia e às práticas do budismo.",
    resenha:
      "Peter Harvey oferece uma introdução abrangente ao budismo: sua história, seus ensinamentos, suas escolas e suas práticas, num panorama que serve tanto para quem está começando quanto para quem quer aprofundar.\n\n[✍️ Aqui é a minha resenha. O que dessa tradição ficou ressoando em mim?]",
  },
  {
    id: "persepolis-2",
    titulo: "Persépolis 2",
    autor: "Marjane Satrapi",
    ano: 2001,
    genero: "Quadrinhos",
    status: "lido",
    nota: 5,
    paginas: 192,
    dataLeitura: "2022-01-05",
    destaque: false,
    cor: ["#8a3b1f", "#e6b34c"],
    frase: "",
    resumo:
      "A continuação da graphic novel de Marjane: exílio, volta ao Irã e a busca por um lugar no mundo.",
    resenha:
      "No segundo volume de Persépolis, Marjane Satrapi continua sua história em quadrinhos autobiográfica: o exílio na Europa, a volta a um Irã transformado e o trabalho difícil de encontrar a si mesma entre dois mundos.\n\n[✍️ Aqui é a minha resenha. Essa ganhou cinco estrelas, então tenho bastante coisa pra falar!]",
  },
  {
    id: "a-unica-coisa",
    titulo: "A Única Coisa",
    autor: "Gary Keller e Jay Papasan",
    ano: 2013,
    genero: "Autoconhecimento",
    status: "lido",
    nota: 0,
    paginas: 240,
    dataLeitura: "",
    destaque: false,
    cor: ["#22324f", "#e6a935"],
    frase: "",
    resumo:
      "Sobre foco: achar a única coisa que, feita, deixa todo o resto mais fácil ou desnecessário.",
    resenha:
      "Keller e Papasan defendem a ideia de foco radical: em vez de espalhar energia em mil tarefas, descobrir a “única coisa” que faz a maior diferença e proteger o tempo dela.\n\n[✍️ Aqui é a minha resenha. (Não vi a nota nem a data no print. É só preencher os campos \"nota\" e \"dataLeitura\" quando quiser.)]",
  },
];

/* ============================================================
   ARTIGOS & TEXTOS AVULSOS
   ------------------------------------------------------------
   Aqui entram os artigos, papers e textos que você lê fora dos
   livros. O contador "artigos lidos" no topo soma quantos estão
   nesta lista. Cada artigo tem:
   - titulo: o nome do artigo
   - fonte: de onde é (revista, site, autor...). Opcional.
   - data: quando leu ("2026-06-10"). Opcional.
   - link: o endereço do artigo, pra abrir ao clicar. Opcional.

   >>> Os dois abaixo são EXEMPLOS pra você ver o formato. Apague
   e coloque os seus. Cada item que você adicionar aqui soma +1
   no contador de artigos lidos. <<<
   ============================================================ */

const ARTIGOS = [
  {
    titulo: "Exemplo: troque por um artigo que você leu",
    fonte: "Revista ou site",
    data: "2026-06-10",
    link: "",
  },
  {
    titulo: "Exemplo: outro texto avulso",
    fonte: "Autor ou fonte",
    data: "2026-06-02",
    link: "",
  },
];

/* ============================================================
   INSTAGRAM — @iaraemtravessia
   ------------------------------------------------------------
   Como o site não puxa os posts em tempo real, você atualiza a
   mãozinha aqui. Cada post tem:
   - tag: uma palavrinha (aparece no cantinho). Ex: "cinema"
   - legenda: o texto que aparece sobre a imagem
   - cor: as duas cores do fundo do post
   - link: para onde vai ao clicar (o post ou o seu perfil)
   ============================================================ */

const INSTAGRAM_USUARIO = "iaraemtravessia";

const INSTAGRAM = [
  {
    tag: "cinema",
    legenda: "Obsessão: amar ou possuir?",
    cor: ["#2a2a2a", "#5a5a5a"],
    link: "https://instagram.com/iaraemtravessia",
  },
  {
    tag: "travessia",
    legenda: "Voluntariado como travessia: o que fica depois da tragédia",
    cor: ["#9c3b23", "#e0873a"],
    link: "https://instagram.com/iaraemtravessia",
  },
  {
    tag: "sobre mim",
    legenda: "Formalizando as apresentações",
    cor: ["#223052", "#cf6a34"],
    link: "https://instagram.com/iaraemtravessia",
  },
  {
    tag: "leituras",
    legenda: "O que os livros de 2026 andam mexendo em mim",
    cor: ["#b0432b", "#e6a935"],
    link: "https://instagram.com/iaraemtravessia",
  },
];
