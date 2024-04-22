const express = require('express');
const produtoController = require('../controllers/produtoController');

const produtoRoute = express.Router();

let ctrl = new produtoController();

produtoRoute.get('/cadastro', ctrl.cadastroView);
produtoRoute.post('/cadastro', ctrl.cadastrarRoupa);


module.exports = produtoRoute;