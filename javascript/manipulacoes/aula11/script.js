let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];


console.log(outros)


let info = {
    nome: 'rafael',
    sobrenome: 'damasceno',
    idade: 34
};


let novainfo = {
    ...info,
    cidade: 'barbacena',
    estado: 'minas gerias',
    pais: 'brasil'
};

console.log(novainfo)


function adicionar(info){

    let novasInfo = {
        ...info,
        status: 0,
        token:'efrfkrofkorfk'

    }

    return novasInfo;


}




console.log(adicionar({nome: 'rafael', sobrenome:'damasceno'}));


