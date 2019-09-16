var express = require('express');
var app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Endpoint para validar se usuário existe
app.get('/login', function(req, res) {
    let username = req.param('usuario');
    let password = req.param('senha');

    //Aqui é onde uma conexão com banco de dados para consultar o usuário entra
    let usuarios = [
        { usuario: 'joao', senha: '1234' },
        { usuario: 'teste', senha: '0000' }
    ];

    // Filtra se existe de acordo com o retorno do "banco"
    let usuario = usuarios.find(user => {
        return user.usuario === username && user.senha === password;
    });

    // Retorna o usuário ou erro
    if(usuario && usuario !== null && usuario !== undefined && usuario !== '') {
        res.send({ usuario: usuario.usuario });
    } else {
        res.send({ erro: 'Usuário não encontrado' });
    }
});

// Inicia o server
app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});