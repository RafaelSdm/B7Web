type nomeCompleto = string | number;


let nome: nomeCompleto = 'rafael';


function mIade(i:nomeCompleto){
    return i;
}

mIade(1);





type user = {
    nome: string,
    idade: number
}


interface user1 {
    nome: string,
    idade: number;
}

function resumo(usuario: user1){
    return `ola ${usuario.nome} voce tem ${usuario.idade}`; 
}



resumo({
    nome: 'rafael',
    idade: 23
})