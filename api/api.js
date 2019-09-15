var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Endpoint para validar se usuário existe
app.get('/usuario/:user', function(req, res) {
    let usuarios = [
        { usuario: 'joao', senha: '1234' },
        { usuario: 'teste', senha: '0000' }
    ];

    let usuario = usuarios.find(user => {
        return user.usuario === req.params.user && user.senha === req.headers.senha;
    });

    if(usuario && usuario !== null && usuario !== undefined && usuario !== '') {
        res.send(usuario.usuario);
    } else {
        res.send(false);
    }    
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});