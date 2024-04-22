const tipoRoupaModel = require("../models/tipoRoupaModel");
const tamanhoRoupaModel = require("../models/tamanhoRoupaModel");
const cadastroRoupaModel = require("../models/cadastroRoupaModel");


class produtoController{

    async cadastroView(req,res) {

        let listaTipo = [];
        let listaTamanho = [];


        let tipo = new tipoRoupaModel();
        listaTipo = await tipo.listarTipo();

        let tamanho = new tamanhoRoupaModel();
        listaTamanho = await tamanho.listarTamanho();
        
        res.render('produto/cadastro', { listaTipo: listaTipo, listaTamanho: listaTamanho});
    }


        async cadastrarRoupa(req, res){
        
            if(req.body.codigo != "" && req.body.descricao != "" && req.body.tipo != "" &&
            req.body.tamanho != "" && req.body.valor != "") {
                let cadastro = new cadastroRoupaModel(0, req.body.codigo, req.body.descricao, req.body.tipo, req.body.tamanho, req.body.valor);
    
                let result = await cadastro.cadastrar();
    
                if(result) {
                    res.send({
                        ok: true,
                        msg: "produto cadastrado com sucesso!"
                    });
                }   
                else{
                    res.send({
                        ok: false,
                        msg: "Erro ao cadastrar pedido!"
                    });
                }
            }
            else
            {
                res.send({
                    ok: false,
                    msg: "Parâmetros preenchidos incorretamente!"
                });
            }
    }

}

module.exports = produtoController;