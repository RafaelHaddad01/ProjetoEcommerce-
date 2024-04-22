const database = require('../db/database');

const conexao = new database();

class tipoModel{

    #tipoId;
    #tipoNome

    get tipoId() { return this.#tipoId; } set tipoId(tipoId) {this.#tipoId = tipoId;}
    get tipoNome() { return this.#tipoNome; } set tipoNome(tipoNome) {this.#tipoNome = tipoNome;}

    constructor(tipoId, tipoNome){
        this.#tipoId = tipoId
        this.#tipoNome = tipoNome
    }


    async listarTipo() {

        let sql = 'select * from tabe_tipoRoupa';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new tipoModel(row['tipo_id'], row['tipo_nome']));
            }
        }

        return listaRetorno;
    }


}

module.exports = tipoModel