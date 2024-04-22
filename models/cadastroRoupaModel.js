const database = require('../db/database');

const conexao = new database();

class PedidoModel{
    #id
    #codigo
    #descricao
    #tipo
    #tamanho
    #valor

    constructor(id, codigo, descricao, tipo, tamanho, valor) {
        this.#id = id;
        this.#codigo = codigo;
        this.#descricao = descricao;
        this.#tipo = tipo;
        this.#tamanho = tamanho;
        this.#valor = valor;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(codigo) {
        this.#codigo = codigo;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(descricao) {
        this.#descricao = descricao;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(tipo) {
        this.#tipo = tipo;
    }

    get tamanho() {
        return this.#tamanho;
    }

    set tamanho(tamanho) {
        this.#tamanho = tamanho;
    }

    get valor() {
        return this.#valor;
    }

    set valor(valor) {
        this.#valor = valor;
    }

    async cadastrar(){
        if(this.#id == 0) {
            let sql = "insert into tabe_roupas (roupa_cod, roupa_descricao, tipo_id, tam_id, roupa_valor) values (?,?,?,?,?)";

            let valores = [this.#codigo, this.#descricao, this.#tipo, this.#tamanho, this.#valor];
    
            let result = await conexao.ExecutaComandoNonQuery(sql, valores);
    
            return result;
        } // continuar a implementação para atualizar um pedido
    }

    
}

module.exports = PedidoModel
