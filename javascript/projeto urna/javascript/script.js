let seuVoto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desc = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3')


let etapaAtual  =0;
let numero = '';


function comecarEtapa(){

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    for(let i =0; i< etapa.numeros;i++){
        if(i==0){
            numeroHTML += '<div class="numero pisca"></div>'
        }else{
            numeroHTML += '<div class="numero"></div>'
        }
    }

    seuVoto.style.display = 'none';

    cargo.innerHTML = etapa.titulo;
    desc.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}


function atualizarInterface(){
    window.alert('finalizou o voto');
}


function clicou(n){
   // alert(`clicou em ${n}`)
   let elNumero = document.querySelector('.numero.pisca');
   if(numero !== null){
       elNumero.innerHTML = n;
       numero = `${numero}${n}`

       elNumero.classList.remove('pisca');
       if(elNumero.nextElementSibling !== null){
        elNumero.nextElementSibling.classList.add('pisca');
       }else{
           atualizarInterface();
       }

   }
}

function branco(){
    alert('clicou em branco')
}

function confirma(){
    alert('clicou em confirma')
}

function corrige(){
    alert('clicou em corrige')
}


comecarEtapa();