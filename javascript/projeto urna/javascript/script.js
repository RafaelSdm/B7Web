let seuVoto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let desc = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3')


let etapaAtual  =0;
let numero = '';
let branco1 = false;
let votos = [];


function comecarEtapa(){

    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numero = '';
    branco1 = false;
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
   // window.alert('finalizou o voto');
  // console.log('atualizando interface');
  // console.log(numero);

  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item)=>{
      if(item.numero  == numero){
          return true
      }else{
          return false;
      }

  })

  if(candidato.length >0){
      candidato = candidato[0];
      seuVoto.style.display = 'block';
      aviso.style.display = 'block';
      desc.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

    
    let fotosHTML = '';

    for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
            fotosHTML += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}"alt="">${candidato.fotos[i].legenda}</div>`
        }else{
            fotosHTML += `<div class="d-1-image "><img src="images/${candidato.fotos[i].url}"alt="">${candidato.fotos[i].legenda}</div>`

        }
    }

    lateral.innerHTML = fotosHTML;


  }else{

    seuVoto.style.display = 'block';
    aviso.style.display = 'block';
    desc.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'

  }
  //console.log("candidato:", candidato);

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
    if(numero === ''){
        branco1 = true;
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        desc.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO </div>'
        lateral.innerHTML = '';

        

    }else{
        window.alert("Para votar em branco, nao pode ter digitado numero");
                
    }
  //  alert('clicou em branco')
}

function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;
    if(branco1 === true){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        })
        console.log('confirme')

    }else if(numero.length === etapa.numeros){
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero;
        })
        console.log('cofimrmado numeoss')


    }



    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
           // console.log("FIM");
           document.querySelector('.tela').innerHTML = '<div class="aviso--grande-big pisca">FIM </div>'
        }
        
    }
 //   alert('clicou em confirma')
}

function corrige(){
    comecarEtapa();
}


comecarEtapa();