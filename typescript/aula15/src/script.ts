function  removerElemento(el: HTMLElement): void{
    // processo de remocao do elemento

//    el.remove();
    
    if(el.classList){
        return;
    }


    el.remove();
}



removerElemento(document.getElementById('teste'));


type retorno = () => void;


const algo: retorno = () =>{
    return 'teste'
}

algo();