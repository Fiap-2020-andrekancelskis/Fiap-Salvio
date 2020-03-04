function dropProduto() {
    var dropFornecedor = document.getElementById("id_Fornecedor");
    document.getElementById("id_Produto").classList.toggle("show");
    dropFornecedor.classList.remove('show');

}

function dropFornecedor() {
    var dropProduto = document.getElementById("id_Produto");
    document.getElementById("id_Fornecedor").classList.toggle("show");
    dropProduto.classList.remove('show');
}
window.onclick = function(e) {

    if (!e.target.matches('.dropbtn')) {
        var dropProduto = document.getElementById("id_Produto");
        var dropFornecedor = document.getElementById("id_Fornecedor");
        if (dropProduto.classList.contains('show') || dropFornecedor.classList.contains('show')) {
            dropProduto.classList.remove('show');
            dropFornecedor.classList.remove('show');
        }
    }
}