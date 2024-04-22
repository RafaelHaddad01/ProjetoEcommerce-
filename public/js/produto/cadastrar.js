document.addEventListener("DOMContentLoaded", function(){

    var btnGravar = document.getElementById("btnGravar");

    btnGravar.addEventListener("click", gravarProduto);
})

function gravarProduto() {

    var inputCodigo = document.getElementById("inputCodigo");
    var inputDescricao = document.getElementById("inputDescricao");
    var seleTipo = document.getElementById("selTipo");
    var seleTam = document.getElementById("selTamanho");
    var InputValor = document.getElementById("inputValor");

    //if de validação básica
    if(inputCodigo.value != "" && inputDescricao.value != "" && seleTipo.value != '0' && seleTam.value != '0' && InputValor.value != '0'){

        var data = {
            codigo: inputCodigo.value,
            descricao: inputDescricao.value,
            tipo: seleTipo.value,
            tamanho: seleTam.value,
            valor: InputValor.value,
        }

        fetch('/produto/cadastro', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(r => {
            return r.json();
        })
        .then(r=> {
            if(r.ok) {
                alert("Produto cadastrado!");
            }
            else{
                alert("Erro ao cadastrar produto");
            }
        })
        .catch(e => {
            console.log(e);
        })

    }
    else{
        alert("Preencha todos os campos corretamente!");
        return;
    }
}