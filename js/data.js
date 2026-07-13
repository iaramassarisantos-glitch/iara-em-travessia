/* ============================================================
   IARA EM TRAVESSIA — Base de dados das leituras
   ------------------------------------------------------------
   Este é o único arquivo que você precisa editar para adicionar,
   remover ou alterar as suas resenhas. Cada livro é um objeto
   dentro da lista "LIVROS". Copie um bloco existente, cole abaixo
   e troque as informações.

   Campos de cada livro:
   - id: um código único (sem espaços). Ex: "torto-arado"
   - titulo: nome do livro
   - autor: nome de quem escreveu
   - ano: ano de publicação do livro
   - genero: um dos gêneros da lista GENEROS (lá embaixo)
   - status: "lido", "lendo" ou "quero-ler"
   - nota: de 0 a 5 (aceita meio: 4.5). Use 0 se ainda não leu.
   - paginas: número de páginas
   - dataLeitura: quando você terminou (formato "2026-03-14")
   - destaque: true para aparecer em destaque na home (use em 1 ou 2)
   - cor: duas cores para a capa gerada. Ex: ["#1f6f78", "#e9b44c"]
   - frase: uma citação curta que você marcou no livro
   - resumo: 1 ou 2 frases que aparecem no cartão (chamada)
   - resenha: o texto completo da sua resenha. Separe parágrafos
     com \n\n (duas quebras de linha).
   ============================================================ */

const GENEROS = [
  "Literatura Brasileira",
  "Romance",
  "Ficção",
  "Não-ficção",
  "Poesia",
  "Ensaio",
  "Fantasia",
  "Autoconhecimento",
  "Contos",
  "Memórias",
];

// Meta de leitura do ano
const META_ANO = 24;
const ANO_ATUAL = 2026;

const LIVROS = [
  {
    id: "torto-arado",
    titulo: "Torto Arado",
    autor: "Itamar Vieira Junior",
    ano: 2019,
    genero: "Literatura Brasileira",
    status: "lido",
    nota: 5,
    paginas: 264,
    dataLeitura: "2026-01-22",
    destaque: true,
    cor: ["#7a3b2e", "#e9b44c"],
    frase: "A gente é feito a terra: mesmo torta, ainda dá fruto.",
    resumo:
      "Uma travessia pelo sertão baiano que começa com uma faca e não larga mais a gente.",
    resenha:
      "Comecei 2026 com esse livro e já sei que ele vai ser difícil de superar. Itamar Vieira Junior escreve com uma delicadeza que corta — literalmente, já que tudo começa com uma faca velha guardada dentro de uma mala embaixo da cama da avó.\n\nBibiana e Belonísia são duas irmãs que dividem um segredo e, a partir dele, uma vida inteira. A relação delas com a terra, com o trabalho na Fazenda Água Negra, com o sagrado do jarê — tudo isso me atravessou de um jeito que poucos livros conseguem.\n\nO que mais me marcou foi como o Itamar dá voz a quem quase nunca fala nos livros: as mulheres do campo, as trabalhadoras, as encantadas. A terceira parte, narrada por uma entidade, me deixou sem chão no melhor sentido possível.\n\nSe você só for ler um livro brasileiro esse ano, que seja esse. É travessia pura.",
  },
  {
    id: "a-vida-invisivel",
    titulo: "A Vida Invisível de Eurídice Gusmão",
    autor: "Martha Batalha",
    ano: 2016,
    genero: "Romance",
    status: "lido",
    nota: 4.5,
    paginas: 208,
    dataLeitura: "2026-02-10",
    destaque: false,
    cor: ["#1f6f78", "#f2c14e"],
    frase: "Toda mulher carrega uma vida que ninguém vê.",
    resumo:
      "Sobre as vidas que as mulheres não puderam viver — e as que inventaram escondidas.",
    resenha:
      "Li esse num fim de semana só, daqueles em que a gente esquece de comer porque o livro não deixa. A Martha Batalha tem um humor ácido que faz a gente rir e, na página seguinte, apertar o peito.\n\nEurídice é uma mulher genial presa dentro de uma casa e de um casamento onde ninguém percebe o tamanho dela. Ela vira cozinheira excepcional, escritora, empreendedora — tudo dentro de casa, tudo invisível.\n\nO livro fala de uma época, mas eu enxerguei muita mulher de hoje ali dentro. Minha avó, minhas tias. Terminei pensando em todas as travessias que ficaram invisíveis na minha própria família.",
  },
  {
    id: "o-avesso-da-pele",
    titulo: "O Avesso da Pele",
    autor: "Jeferson Tenório",
    ano: 2020,
    genero: "Literatura Brasileira",
    status: "lendo",
    nota: 0,
    paginas: 176,
    dataLeitura: "",
    destaque: true,
    cor: ["#2b2d42", "#8d99ae"],
    frase: "",
    resumo:
      "Estou no meio dessa carta de um filho para o pai. Já sei que vou chorar no fim.",
    resenha:
      "Ainda estou lendo, então essa resenha vai crescer conforme eu avanço. Mas já preciso registrar: o Jeferson Tenório escreve como quem cutuca uma ferida com cuidado.\n\nÉ um filho tentando remontar o pai depois que ele morre — de um jeito violento, do jeito que o Brasil costuma matar homens pretos. A prosa vai e volta no tempo e a cada capítulo eu preciso parar pra respirar.\n\n(volto aqui quando terminar)",
  },
  {
    id: "pequeno-manual",
    titulo: "Pequeno Manual Antirracista",
    autor: "Djamila Ribeiro",
    ano: 2019,
    genero: "Ensaio",
    status: "lido",
    nota: 4,
    paginas: 136,
    dataLeitura: "2026-01-08",
    destaque: false,
    cor: ["#3d348b", "#e0aaff"],
    frase: "Não basta não ser racista, é preciso ser antirracista.",
    resumo:
      "Curto, direto e necessário. Comecei o ano querendo ler com mais consciência.",
    resenha:
      "Escolhi esse pra abrir o ano de propósito. São onze capítulos curtos, cada um com uma provocação prática. A Djamila não te acusa — ela te convida a fazer melhor.\n\nGostei de como cada capítulo termina com algo concreto pra levar pra vida. Reli algumas partes duas vezes. É desses livros que a gente empresta e nunca recebe de volta, e tá tudo bem.",
  },
  {
    id: "a-hora-da-estrela",
    titulo: "A Hora da Estrela",
    autor: "Clarice Lispector",
    ano: 1977,
    genero: "Ficção",
    status: "quero-ler",
    nota: 0,
    paginas: 96,
    dataLeitura: "",
    destaque: false,
    cor: ["#6a040f", "#ffba08"],
    frase: "",
    resumo:
      "Prometi pra mim mesma que 2026 é o ano em que eu finalmente entendo a Clarice.",
    resenha:
      "Ainda na estante, esperando o momento certo. Todo mundo fala da Macabéa e eu quero conhecer ela sem pressa. Deixo essa resenha reservada pra quando chegar a hora.",
  },
  {
    id: "quarto-de-despejo",
    titulo: "Quarto de Despejo",
    autor: "Carolina Maria de Jesus",
    ano: 1960,
    genero: "Memórias",
    status: "lido",
    nota: 5,
    paginas: 200,
    dataLeitura: "2026-03-02",
    destaque: false,
    cor: ["#005f73", "#94d2bd"],
    frase: "A favela é o quarto de despejo da cidade.",
    resumo:
      "O diário de Carolina é soco no estômago e aula de literatura ao mesmo tempo.",
    resenha:
      "Como esse livro é de 1960 e ainda descreve tão bem o Brasil de hoje? Carolina Maria de Jesus catava papel pra sobreviver e, nos cadernos que encontrava no lixo, escrevia o diário mais poderoso que já li.\n\nNão é literatura 'bonitinha'. É fome, é despejo, é criança chorando com sede. Mas é também uma mulher que sabia exatamente o valor da própria escrita, num tempo em que ninguém achava que ela tinha valor nenhum.\n\nLi de uma vez e fiquei em silêncio depois. Precisa ser leitura obrigatória. Ponto.",
  },
];
