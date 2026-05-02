# Getting Started with Create React App

## Introdução — Flix Streaming

O Flix Streaming é um projeto pessoal desenvolvido com o objetivo de aprimorar minhas habilidades em React e JavaScript, explorando tanto a construção de interfaces modernas quanto o desenvolvimento lógico de uma aplicação completa.
A plataforma simula um serviço de streaming inspirado em grandes players do mercado, como Netflix, permitindo listar filmes, exibir banners dinâmicos, navegar por categorias e visualizar detalhes de cada título. Ao longo do desenvolvimento, busco reforçar conceitos essenciais do ecossistema React, como:

## Funcionalidades Implementadas

Home com banner dinâmico
Listas em carrossel
Página de Detalhes
Sistema de Favoritos
Páginas de filmes e séries
Cadastro/Login (fake)
UI responsiva

## Visando melhorar o meu conhecimento em:

Organização e arquitetura de pastas
Componentização
Hooks e estados
Consumo de APIs externas
Rotas e navegação
Reutilização e desacoplamento de código
Persistência no localStorage
Boas práticas de UI/UX

### Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **React Router**: Para navegação entre as páginas.
- **JavaScript (ES6+)**: Linguagem principal do projeto.
- **CSS**: Para estilização personalizada.
- **Axios**: Para realizar chamadas à API.
- **TMDB API**: Fonte de dados sobre filmes.


# Seguira essa Estrutura pastas

src/
  api/              isolamento de chamadas HTTP
  assets/           imagens, logos
  components/       Componentes (Navbar, banner, movieRow, Footer)
  pages/            Cada página separada (Home, User, Favorites, MovieDetails)
    Favorites/
    Home/
    MovieDetails/
  routes/           separa navegação
  services/         Pode guardar lógica (GetAllMovies)
  utils/            Funções auxiliares (btnScroll, search, validação)
aquivos raiz


## Fluxo da Aplicação

1️⃣ NAVBAR

Banner dinâmico com o filme de maior relevância
com os filmes em alta

- [x] Navbar fixa
- [x]Logo
- [x] Navegação: Home, Filmes, Séries, Favoritos
- [x]Campo de busca

CADASTRO / LOGIN 

- [x] Página /login
- [x] Validações de campo
- [x] Persistência de usuário (SessionStorage)

-----

2️⃣ HOME

BANNER : 
- [x] Scroll horizontal de filmes
- [ ] grid Reponsivo
- [x] redirecionar ao clickar no filme para pagina de detalhes

AVANÇADOS
- [ ] Filtros por gênero, ano e nota


3️⃣ SÉRIES
- [ ] Mesma lógica que Filmes, porém separando o conteúdo da API.

4️⃣ FAVORITOS
- [x] Salvamento de filmes via localStorage
- [x] Usuário pode adicionar/remover da pagina de favoritos
- [x] Lista com mini-card dos favoritos

5️⃣ DETALHES DO FILME
- [x] Banner com poster
- [x] Título
- [x] Nota
- [x] Sinopse
- [x] botão de trailer que redireciona (YouTube)
- [x] Botão “Adicionar aos Favoritos”

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo .env na raiz do projeto e adicione sua chave da API do TMDB:
   ```
   REACT_APP_API_KEY=seu_api_key_aqui
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

---
