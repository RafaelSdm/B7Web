let pessoa = {
    nome:'rafael',
    sobrenome: 'damasceno',
    idade: '15',
    social: {
        facebok: 'rafael',
        instagram:{
            url: '@rafael',
            seguidores: 2
        }

    },

    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }

    
};


console.log(pessoa.nomeCompleto());

/*
let idade = pessoa.idade;
let nome = pessoa.nome;
let insta = pessoa.social.instagram;

*/


let { nome, sobrenome, idade =0, social:{instagram:{url}}} = pessoa; // vao virar variaveis independentes

 //let {facebok, instagram} = pessoa.social;

console.log(idade, nome, sobrenome, url)

//console.log(facebok, instagram)


function pegarNomeCompleto(obj){
    return `${obj.nome} ${obj.sobrenome}`;

}


console.log(pegarNomeCompleto(pessoa));