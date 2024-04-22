const database = require('../db/database');

const conexao = new database();

class tamanhoModel{

    #tamanhoId;
    #tamanhoNome;

    get tamanhoId() { return this.#tamanhoId; } set tamanhoId(tamanhoId) {this.#tamanhoId = tamanhoId;}
    get tamanhoNome() { return this.#tamanhoNome; } set tamanhoNome(tamanhoNome) {this.#tamanhoNome = tamanhoNome;}


    constructor(tamanhoId, tamanhoNome){
        this.#tamanhoId = tamanhoId;
        this.#tamanhoNome = tamanhoNome;
    }

    async listarTamanho() {

        let sql = 'select * from tabe_tamanho';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new tamanhoModel(row['tam_id'], row['tam_nome']));
            }
        }

        return listaRetorno;
    }

}

module.exports = tamanhoModel;