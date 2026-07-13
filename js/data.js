/* ============================================================
   IARA EM TRAVESSIA — Base de dados das leituras
   ------------------------------------------------------------
   Este é o único arquivo que você precisa editar para adicionar,
   remover ou alterar as suas resenhas. Cada livro é um objeto
   dentro da lista "LIVROS". Copie um bloco existente, cole abaixo
   e troque as informações.

   Campos de cada livro:
   - id: um código único (sem espaços). Ex: "sobre-o-amor"
   - titulo: nome do livro
   - autor: nome de quem escreveu
   - ano: ano de publicação do livro
   - genero: um dos gêneros da lista GENEROS (lá embaixo)
   - status: "lido", "lendo" ou "quero-ler"
   - nota: de 0 a 5 (aceita meio: 4.5). Use 0 se ainda não avaliou.
   - paginas: número de páginas
   - dataLeitura: quando você terminou (formato "2026-05-25")
   - destaque: true para aparecer em destaque na home (use em 1 ou 2)
   - cor: duas cores para a capa gerada. Ex: ["#1f6f78", "#e9b44c"]
   - frase: uma citação curta que você marcou no livro
   - resumo: 1 ou 2 frases que aparecem no cartão (chamada)
   - resenha: o texto completo da sua resenha. Separe parágrafos
     com \n\n (duas quebras de linha).

   >>> As resenhas abaixo estão como RASCUNHO: os dados (nota, data,
   gênero) são os seus, tirados do seu print. O texto entre colchetes
   [ ... ] é um espaço reservado para VOCÊ escrever com as suas
   palavras. É só apagar e escrever o que o livro mexeu em você. <<<
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

// Meta de leitura do ano (a barra de progresso conta os livros lidos em 2026)
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
    cor: ["#a83a5b", "#e9b44c"],
    frase: "",
    resumo:
      "Freud reúne três ensaios sobre as escolhas amorosas, o desejo e os impasses da vida amorosa.",
    resenha:
      "Neste volume, Freud reúne três ensaios (das “Contribuições para a psicologia da vida amorosa”) em que investiga como escolhemos quem amamos, as tensões entre desejo e ternura e os nós inconscientes que atravessam a vida amorosa.\n\n[✍️ Espaço reservado para a minha resenha. Escreve aqui o que esse livro mexeu em você, as passagens que sublinhou e o que leva com você desta leitura.]",
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
    cor: ["#6a3d2e", "#d9b45f"],
    frase: "",
    resumo:
      "Uma reunião de textos de Jung sobre o amor, a alma e o encontro com o outro.",
    resenha:
      "Uma coletânea que reúne o pensamento de Jung sobre o amor: não só o amor romântico, mas o amor como força de individuação, como encontro com a própria alma e com o outro.\n\n[✍️ Espaço reservado para a minha resenha. Conta aqui o que esse livro despertou em você e por que deu quatro estrelas.]",
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
    cor: ["#1f3a5f", "#5c7fb0"],
    frase: "",
    resumo:
      "Uma leitura junguiana do mito de Eros e Psiquê e do desenvolvimento do feminino.",
    resenha:
      "Erich Neumann, discípulo de Jung, parte do mito grego de Eros e Psiquê para falar sobre amor, alma e o processo de individuação no desenvolvimento do feminino.\n\n[✍️ Espaço reservado para a minha resenha. (Não consegui ver a sua nota no print — quando abrir o arquivo, coloque o número de estrelas em \"nota\".)]",
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
    cor: ["#7a2320", "#c8763f"],
    frase: "",
    resumo:
      "Uma introdução ampla à história, à filosofia e às práticas do budismo.",
    resenha:
      "Peter Harvey oferece uma introdução abrangente ao budismo — sua história, seus ensinamentos, suas escolas e suas práticas — num panorama que serve tanto para quem está começando quanto para aprofundar.\n\n[✍️ Espaço reservado para a minha resenha. O que dessa tradição ficou ressoando em você?]",
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
    cor: ["#1f7a3f", "#a4d65e"],
    frase: "",
    resumo:
      "A continuação da graphic novel de Marjane: exílio, retorno ao Irã e a busca por um lugar no mundo.",
    resenha:
      "No segundo volume de Persépolis, Marjane Satrapi continua a sua história em quadrinhos autobiográfica: o exílio na Europa, o retorno a um Irã transformado e o difícil trabalho de encontrar a si mesma entre dois mundos.\n\n[✍️ Espaço reservado para a minha resenha. Essa ganhou cinco estrelas — conta aqui por quê!]",
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
    cor: ["#0f4c5c", "#5fa8a8"],
    frase: "",
    resumo:
      "Sobre foco: encontrar a única coisa que, feita, torna tudo o resto mais fácil ou desnecessário.",
    resenha:
      "Keller e Papasan defendem a ideia de foco radical: em vez de espalhar energia em mil tarefas, descobrir a “única coisa” que faz a maior diferença e proteger o tempo dela.\n\n[✍️ Espaço reservado para a minha resenha. (Não vi a nota nem a data no print — é só preencher \"nota\" e \"dataLeitura\" quando quiser.)]",
  },
];
