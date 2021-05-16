<h1 align="center">
  <br>
  <br>
  Finanças APP
</h1>

<h4 align="center">
   App desenvolvido com React Native + NodeJS + Android Studio + FireBase 
</h4>

<h6 align="center">
  bootcamp SujeitoProgramador
</h6>

<br/>

<p align="center">
  <a href="#Pre-Requisitos">Pre-requisitos</a> |
  <a href="#Instalação">Instalação</a> |
  <a href="#Usabilidade">Usabildiade</a>
</p>

# Pre-Requisitos

* [React-Native](https://reactnative.dev/)
* [Android Studio](https://developer.android.com/studio) 
* [Node.JS](https://nodejs.org/)
* [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/get-npm)
* [Firebase](https://firebase.google.com/?hl=pt-br)

# Instalação
```
# Primeiro clone o repositorio do Git para seu computador. Execute o comando; 
git clone https://github.com/SandroFrazaoS/AppFin.git

# Acesse a pasta criado atraves do comando; 
cd AppFin

# Instale todas as dependencias do projeto, acesse a pasta AppFin e execute o comando;
yarn

# Para start do App execute dentro da pasta AppFin o comando;
npx react-native run-android
```

# Usabilidade

O Financeiro APP registra o lançamento de despesas e receita de um usuario. É possivel consultar os laçamentos por data.
Neste aplicativo foi utilizado o banco de dados da google, o firebase. Alem do banco de dados foi implementado controle de autenticação de usuario,
cadastro de usuario, async-storage para salvar a usuaro e senha logado.

Tela de Login.

![1][tela1]

Tela para criar uma nova conta.

![5][tela5]

Tela Principal onde é mostrados os lançamentos. Nesta tela é possivel filtrar por data, excluir lançamentos.

![2][tela2]
 
Menu do APP.

![3][tela3]

Tela de registrar as despesas e receitas.

![4][tela4]

[tela1]: Tela1.png
[tela2]: Tela2.png
[tela3]: Tela3.png
[tela4]: Tela4.png
[tela5]: Tela5.png