let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');


let botao = document.getElementById('calcular')

let res = document.getElementById('resultado');


function calcular(n1,n2){
    if(typeof n1 == 'number' &&  typeof n2 == 'number'){
        return n1+ n2;
    }else{
        n1 = parseInt(n1)
        n2 = parseInt(n2);

        return n1 + n2;
    }
   
}


botao.addEventListener('click', function(){
    res.innerHTML = calcular(n1.value, n2.value)
})