//importando o express.
const express = require('express');
//importa o cors
const cors = require('cors');
//esta adicionando a funcao express ao objeto para guiar os
//caminhos das rotas e configuração.
const app = express();
//"porta" de acesso que o computador vai rodar o servidor.
const PORT = 3000;

// inicializa o cors para permitir futura conexão com o front
app.use(cors());
//inicializa o express para definirmos rotas da configuração
app.use(express.json());
//a criação de uma lista para guarda os dados
const users = [];

//1. POST /users - Cadastro de Usuario

/*Aqui criamos um post no endereço /users para criar um recurso
req para pedir os dados solicitados e o res para coletar
os dados solicitados*/
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;

    // Validaçao de Todos os campos obrigatorios
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos os campos nome, e-mail e senha) são obrigatórios.'});
    }
    // Verificar emails duplicados
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
    }

    // Cria um codigo de identificação/id para cada usuario
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);

    /* Recupera todas as informaçoes de newUser e separa apenas o
    password.*/
    const { password: _, ...userWithoutPassword } = newUser;
    //retorna todas as informaçoes de newUser menos o passworld
    return res.status(201).json(userWithoutPassword);
});

//2. POST /login - Realizar Login

/*Aqui criamos um post/login para podermos validar a entrada
dos dados anteriormente criados  em post /users no sistema.*/
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    /* Verifica se os campos de email e password
    estão prenchidos para o login*/
    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }

    // procura pelo e-mail solicitado
    const user = users.find(u => u.email === email);

    // Verifica se o usuario e a senha estao corretas
    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }

    /*Login feito com sucesso: retorna os dados do 
    usuário (exceto a senha)*/
    return res.status(200).json({
        message: 'Login realizado com sucesso!',
        user: { name: user.name,
                email: user.email
              }
    });
});

//3. GET /users - Listar usuarios cadastrados

/*Aqui criamos um Get/users para podermos buscar informaçoes do
usuario, exeto pela senha do mesmo*/
app.get('/users', (req, res) => {
    /*cria uma nova lista com todas as informaçoes do usuario exeto
    a senha*/
    const publicUsers = users.map(({ name, email }) => ({ name, email }));
    //retorna a lista sem a senha para os usuarios
    return res.status(200).json(publicUsers);
});

// Inicializaçao do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});