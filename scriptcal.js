// Busca o elemento HTML onde serão exibidas as compras
let tabelaCompras = document.getElementById("compras");

// Função para adicionar uma nova compra
function adicionarCompra() {
	// Obtém os valores dos campos de entrada
	let valor = document.getElementById("valor").value;
	let quantidade = document.getElementById("quantidade").value;
	let numero = document.getElementById("numero").value;
let total = 0
total = quantidade*valor
	let compra = {
		valor: valor,
		quantidade: quantidade,
		numero: numero
	};
	let compras = JSON.parse(localStorage.getItem("compras")) || [];
	compras.push(compra);
	localStorage.setItem("compras", JSON.stringify(compras));
	tabelaCompras.innerHTML = "";
	compras.forEach(function(compra) {
        let linha = document.createElement("tr");
        let colunaValor = document.createElement("td");
        let colunaQuantidade = document.createElement("td");
        let colunaNumero = document.createElement("td");
	colunaValor.textContent = compra.valor;
	colunaQuantidade.textContent = compra.quantidade;
	colunaNumero.textContent = compra.numero;
	linha.appendChild(colunaValor);
	linha.appendChild(colunaQuantidade);
	linha.appendChild(colunaNumero);
	tabelaCompras.appendChild(linha);
});

}
window.onload = function() {
adicionarCompra();
};

