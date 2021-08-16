function verde(){
    document.querySelector('#exemplo').classList.add('verde');
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.remove('vermelho')

}

function azul(){
    document.querySelector('#exemplo').classList.add('azul');
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('vermelho');

}

function vermelho(){
    document.querySelector('#exemplo').classList.add('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('verde');
}


function trocar(){
    if(document.querySelector('.btn').classList.contains('preto') == true){
        document.querySelector('.btn').classList.remove('preto');
        document.querySelector('.btn').classList.add('verde');
    }else{
        document.querySelector('.btn').classList.remove('verde')
        document.querySelector('.btn').classList.add('preto');
    }
}