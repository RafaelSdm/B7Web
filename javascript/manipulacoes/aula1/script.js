let nome = '  rafael   daMASceno     '

let resultado = nome.length


// metodos de extrair da string

let pos = nome.indexOf('damasceno');

let extrair = nome.slice(0, 5);

let subs = nome.substring(2);

let subtr = nome.substr(-4, 2);

// metodos de extrair string



// modificar string

let rpl = nome.replace('rafael', 'RAFAEL');

let up = nome.toUpperCase();

let lo = nome.toLowerCase();

let concatenacao = nome.concat(' Souza');

let spaco = nome.trim();

let chat = nome.charAt(3);


let spl = nome.split(' ');


console.log(resultado);

console.log(pos)

console.log(extrair)

console.log(subs)

console.log(subtr);

console.log(rpl);

console.log(up);

console.log(lo);

console.log(concatenacao)

console.log(spaco)

console.log(chat)

console.log(spl);