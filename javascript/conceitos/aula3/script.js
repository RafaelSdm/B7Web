function azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
    document.getElementById('titulo').classList.remove('verde');
    document.getElementById('titulo').classList.remove('vermelho');
    
}


function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add("vermelho");
    document.getElementById('titulo').classList.add( 'vermelho');

}


function verde(){
    limpar();
    document.getElementById("titulo").classList.add("verde")
}


function limpar(){

    document.getElementById('titulo').classList.remove('verde');
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('azul');

}


function mostrar(e){
    e.style.display = 'none'
    document.getElementById("telefone").style.display = 'block';

   
}