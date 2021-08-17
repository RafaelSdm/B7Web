let carros = [
    'fox',
    'palio',
    'corolla',
    'ferrari'
];

let carro = {
    nome: 'fiat',
    modelo: 'uno',
    peso: '900kg',
    ligado: false,
    ligar: function(){
        this.ligado = true;
        console.log("ligouu o " + this.modelo);
    },

    acelerar:function(){
        if(this.ligado == true){
             console.log("acelerouu")
        }else{
            console.log("carro desligado")
        }
    }

};

console.log(carro['nome']);
console.log(carro.nome);

carro.ligar();
carro.acelerar();



let carros1 = [

    {nome1: 'fiat', modelo1: 'palio' },
    {nome1: 'wolks', modelo1:'fox'},
    {nome1: 'toyota', modelo1: 'corolla'}
];

console.log(carros1)

console.log(carros1[2].modelo1)