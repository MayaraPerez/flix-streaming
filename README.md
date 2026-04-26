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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
