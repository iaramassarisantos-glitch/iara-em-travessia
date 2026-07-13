# 🌊 Iara em Travessia — Diário de Leituras 2026

Um site pessoal, estilo **Substack + Medium**, pra organizar e resenhar as
minhas leituras de 2026. Inspirado na página [@iaraemtravessia](https://instagram.com/iaraemtravessia).

Feito em HTML, CSS e JavaScript puro — **sem instalar nada, sem mensalidade**.

---

## ✨ O que dá pra fazer aqui

- 📚 **Blog de resenhas** com cada livro em formato de artigo (visual de leitura)
- ⭐ **Notas de 0 a 5 estrelas** por livro
- 🔍 **Busca e filtros** por gênero, nota e status (Lido / Lendo / Quero ler)
- 📊 **Painel** com livros lidos, páginas viradas, nota média e progresso da meta do ano
- 🪑 **Estante visual** com as lombadas dos livros
- ✍️ **Botão "Nova resenha"** pra escrever direto no navegador
- 🌙 **Tema claro e escuro**
- 📱 Funciona bem no **celular e no computador**

---

## 🚀 Como colocar o site no ar (grátis, com GitHub Pages)

1. Entre no seu repositório no GitHub
2. Clique em **Settings** (Configurações) → **Pages**
3. Em **Branch**, escolha `main` (ou a branch onde estão os arquivos) e a pasta `/root`
4. Clique em **Save**
5. Espere 1 minuto e o site estará no ar num endereço tipo:
   `https://seu-usuario.github.io/teste-iara-/`

Pronto! É só compartilhar o link. 💛

> Para testar no seu computador antes, é só abrir o arquivo `index.html`
> com dois cliques que ele abre no navegador.

---

## ✍️ Como adicionar as suas próprias resenhas

Existem **dois jeitos**:

### Jeito rápido (rascunho no navegador)
Clique em **"Nova resenha"** no site e preencha o formulário. A resenha
aparece na hora — mas fica salva **só naquele navegador/dispositivo**. Ótimo
pra rascunhar.

### Jeito definitivo (publicar de verdade no site)
Para a resenha aparecer pra todo mundo e em qualquer aparelho, adicione ela
no arquivo **`js/data.js`**. É mais simples do que parece:

1. Abra o arquivo `js/data.js`
2. Copie um bloco de livro inteiro (tudo entre `{` e `},`)
3. Cole logo abaixo e troque as informações
4. Salve e envie pro GitHub (commit)

Exemplo de um bloco:

```js
{
  id: "nome-unico-do-livro",       // sem espaços, tipo "dom-casmurro"
  titulo: "Nome do Livro",
  autor: "Nome do Autor",
  ano: 2024,
  genero: "Romance",              // use um dos gêneros da lista GENEROS
  status: "lido",                 // "lido", "lendo" ou "quero-ler"
  nota: 5,                        // de 0 a 5 (pode ser 4.5)
  paginas: 320,
  dataLeitura: "2026-05-20",      // ano-mês-dia
  destaque: false,                // true = aparece em destaque na home
  cor: ["#1f6f78", "#e9b44c"],    // as duas cores da capa
  frase: "Uma citação que você marcou.",
  resumo: "Uma frase curta que aparece no cartão.",
  resenha: "O texto completo da resenha.\n\nUse \\n\\n para separar parágrafos.",
},
```

Os **gêneros disponíveis** também ficam no topo do `js/data.js` (na lista
`GENEROS`) — pode adicionar novos ali se quiser.

Para mudar a **meta de leituras do ano**, é só alterar o número em
`META_ANO` no mesmo arquivo.

---

## 🗂️ Organização dos arquivos

```
index.html      → a página do site (estrutura)
css/style.css   → as cores e o visual
js/data.js      → SUAS RESENHAS ficam aqui (é o que você edita)
js/app.js       → a parte que faz o site funcionar (não precisa mexer)
```

---

Feito com 💛 pra Iara. Boa travessia! 🌊
