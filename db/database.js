var mysql = require('mysql2');

class dataBase {

    #conexao;

    get conexao() { return this.#conexao; }
    set conexao(conexao) { this.#conexao = conexao; }


    constructor() {

        this.#conexao = mysql.createPool({
            host: '132.226.245.178', 
            database: 'PFS1_10442313190', 
            user: '10442313190', 
            password: '10442313190',
        });

    }

    ExecutaComando(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results);
            });
        })
    }
    
    ExecutaComandoNonQuery(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results.affectedRows > 0);
            });
        })
    }

    ExecutaComandoLastInserted(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results.insertId);
            });
        })
    }
}

module.exports = dataBase