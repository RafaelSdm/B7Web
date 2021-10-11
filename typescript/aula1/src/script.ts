let n1 = document.getElementById('n1') as HTMLInputElement;
let n2 = document.getElementById('n2') as HTMLInputElement;


let botao = document.getElementById('calcular')

let res = document.getElementById('resultado');


function calcular(n1: number,n2: number){
   
        return n1+ n2;
   
   
}


botao.addEventListener('click', function(){
    res.innerHTML = calcular( parseInt(n1.value), parseInt( n2.value)).toString();
})