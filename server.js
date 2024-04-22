const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const homeRoute = require('./routes/homeRoute');
const produtoRoute = require('./routes/produtoRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

//configurando a nossa pasta public como o nosso repositorio de arquivos estáticos (css, js, imagens)
app.use(express.static(__dirname + "/public"))

//configuração das nossas views para utilizar a ferramenta EJS
app.set('view engine', 'ejs');

//Configuração de onde ficará nossas views
app.set('views', './views');
app.set('layout', './layout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(cookieParser());
app.use(expressLayouts);


//definindo as rotas que o nosso sistema vai reconhecer através da url do navegador
app.use('/', homeRoute);
app.use('/produto', produtoRoute);
app.use("/login", loginRoute);







//ponto de inicio do nosso servidor web
const server = app.listen('5000', function() {
    console.log('Servidor web iniciado');
});