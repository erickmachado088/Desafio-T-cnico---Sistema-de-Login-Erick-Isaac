# 🖥️ Desafio Técnico - Sistema de Login e Cadastro

Este é um projeto de back-end desenvolvido em Node.js e Express que simula um sistema de cadastro e autenticação (login) de usuários. Os dados são armazenados temporariamente na memória RAM durante a execução do servidor.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express** (Framework para gerenciamento de rotas e requisições HTTP)
* **CORS** (Middleware para permitir futuras conexões com o front-end)

---

## ⚙️ Como Instalar e Executar o Projeto

Siga os passos abaixo no seu terminal para rodar o projeto localmente:

==========================Command prompt======================

## Na pasta que colocar o projeto digite os codigos no caminho da pasta no command prompt ou cmd:

**Nota:** O comando `npm init -y` não é necessário, pois os arquivos `package.json` e `package-lock.json` já estão inclusos na pasta do projeto.

**npm init -y**: cria o arquivo package.json que vai armazenar e manipular as (bibliotecas) que vamos adicionar.

**npm install express**: para simplifica e acelera a criacao/escrita de códigos complexos do zero, o Express fornece ferramentas para lidar com requisições HTTP (como GET e POST), gerenciamento de rotas e integração com bancos de dados. Criando o arquivo node_modules.

============================VS Code==========================

## explicação superficial do codigo, a explicação de como executar o projeto esta no topico abaixo deste.

criando o arquivo server.js

Explicação de partes do codigo:

**const**: Tranforma em variaveis imutaveis ou melhor constantes.
'const variavel = valor adicionado'

**require('')** é uma função interna do ambiente Node.js usada para importar módulos, ou seja, para carregar arquivos, bibliotecas ou pacotes externos em seu código

**(express)**: Importa o framework Express para dentro do projeto.

**(path)**: Um módulo nativo do Node.js usado para lidar com caminhos de arquivos e pastas.

**app = express()**: Inicializa uma instância do Express. É através desse objeto app que definimos as rotas e configurações.

**PORT = 3000**: Define em qual "porta" do seu computador o servidor vai rodar.

**app.use(biblioteca-importada())**: inicializa as bibliotecas.

**const users = []**: cria a lista que vai armazenar os dados durante o tempo que o server estiver rodando e apagado apos deligalo.

**app.post('/"sala-escolhida"', (req, res) => {}**: usando o post cria a demanda de pedir dados ao usuario e recuperar os mesmos.)
**NOTA**: com if para contornar alguns problemas como informações faltando no cadastro, informações ja existentes, dados incorretos no login.

**app.listen(PORT, () => {console.log('Mensagem escolhida ${PORT}');})**
:Aqui rodamos o servidor e usamos uma mensagem para confirmar se o mesmo foi iniciado.


==========================Insommia========================

## explicação de como executar o projeto:

**1**.no insommia vamos em `New Project`, nomeação ao seu gosto.

**2**.apos no novo projeto criado vamos em `+ Create`, em `Request collection`, nomeação ao seu gosto.

**3**.No `Request Collection` criado, presione `Ctrl + n` ou procure o `HTTP Request`.

**4**.Coloque `http://localhost:3000` no lugar de um link de exemplo chamado `https://api.myproduct.com/v1/users`.

**5**. Va no VScode no `command prompt` ou `Powershell` e coloque `node server.js` para o servidor estar funcional para testes.

## Para os testes de registro, login, e verificação de usuarios cadastrados vamos dividir em 3 partes:

**Importante**:leia sempre as notas para evitar erros no teste.

EX: `http://localhost:3000/users`

* **POST/users**:
Para registrar usuario, no lado esquerdo do link que vc substituiu no passo anterior mude de `GET` para `POST`, apos isso va em `Body` va em `No Body` e selecione `JSON`, no corpo digite name, email e password, para registro clique em send.
**NOTA** Ao lado de `http://localhost:3000` coloque `/users`.

```json
    {
	"name": "", 	
    "email": "", 
    "password": ""
    }
```

* **POST/login**:
Para logar o usuario,  digite email e password para logar na conta criada anteriormente, aperte send.
**NOTA** Ao lado de `http://localhost:3000` coloque `/login`.

```json
    {
    "email": "",
    "password": ""
    }
```

* **GET/users**:
Simplesmente troque o `POST` por `GET`, aperte send.
**NOTA** Ao lado de `http://localhost:3000` coloque `/users`.