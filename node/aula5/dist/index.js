"use strict";
//const matematica = require('./matematica');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matematica = __importStar(require("./matematica"));
const matematica_1 = __importDefault(require("./matematica"));
//ex : console.log(`soma: ${somar(n1,n2)} `);
let n1 = 10;
let n2 = 30;
console.log(matematica_1.default.versão);
console.log(`soma: ${matematica.somar(n1, n2)} `);
console.log(`multiplicação: ${matematica.multiplicar(n1, n2)} `);
console.log(`subtração: ${matematica.subtrair(n1, n2)}`);
