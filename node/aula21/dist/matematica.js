"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtrair = exports.multiplicar = exports.somar = void 0;
let versão = '1.0';
function somar(x, y) {
    return x + y;
}
exports.somar = somar;
function multiplicar(x, y) {
    return x * y;
}
exports.multiplicar = multiplicar;
function subtrair(x, y) {
    return x - y;
}
exports.subtrair = subtrair;
exports.default = {
    somar: somar,
    subtrair: subtrair,
    multiplicar: multiplicar,
    versão
};
