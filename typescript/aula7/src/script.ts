function resumo(usuario: {nome: string, idade: number}){


    return `ola ${usuario.nome},voce tem ${usuario.idade}`;



}









let user = {
    nome:'Rafael',
    idade: 56
}

console.log(resumo(user));