//const matematica = require('./matematica');

import * as matematica  from './matematica';

import Matematica from './matematica'

import {somar, multiplicar} from './matematica';

//ex : console.log(`soma: ${somar(n1,n2)} `);


let n1: number = 10;
let n2: number = 30;



console.log(Matematica.versão);

console.log(`soma: ${matematica.somar(n1,n2)} `);
console.log(`multiplicação: ${matematica.multiplicar(n1,n2)} `);
console.log(`subtração: ${matematica.subtrair(n1,n2)}`)
