let telefone = '56789123412341234';

console.log(telefone.padEnd(9,'-'))
console.log(telefone.padStart(9,'*'))


let lastdigitos = telefone.slice(-4);

console.log(lastdigitos)

let mask = lastdigitos.padStart(16, '*');

console.log(mask)