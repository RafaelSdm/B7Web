"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
console.log(validator_1.default.isEmail('rafaeldamasceno@gmail.com'));
let ip = '192.168.0.1';
console.log(validator_1.default.isIP(ip));
