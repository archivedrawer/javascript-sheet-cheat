console.log('index.js');
// PROGRAMAÇÃO MODULAR, EXPORTS E IMPORTS
// import {} from './'
import {menor} from './script.js';
import {minimo, maximo, amplitude} from './script.js';
// import * as Stat from './script.js';

const x = 3;
const y = 1;

// const menor = Math.min(x, y);
// const menor = x < y ? x : y
const m = menor(x, y);
console.log(m);

const valores = [23, 45, 10, 33, 66, 77, 80];

// const min = Stat.minimo(valores);
const min = minimo(valores);
console.log(min); // 10
console.log(min === 10); // true <== CASO DE TESTE
const max = maximo(valores);
console.log(max); // 80
console.log(max === 80); // true
const amp = amplitude(valores);
console.log(amp); // 70
console.log(amp === 70); // true

console.log(amplitude([5, 1, 3, 9, 8]) === 8);
