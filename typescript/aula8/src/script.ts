function resumo(usuario: {nome: string, idade?: number}){


    if(usuario.idade !== undefined){
        return `ola ${usuario.nome},voce tem ${usuario.idade}`;
    }else{
        return `ola ${usuario.nome}!`;
    }


    



}









let user = {
    nome:'Rafael',
    idade: 56
}

console.log(resumo(user));