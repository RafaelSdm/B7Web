var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(parseInt(n1.value), parseInt(n2.value)).toString();
});
