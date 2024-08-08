"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const name = prompt('Please enter your name? ');
console.log(`Hello, ${name}!`);
console.log("welcome to our E-com website...");
console.log("we have added restaurant management feature...please explore our new section..");
console.log("Enter your choise:\n1. Visit restaurants\n2. Exit");
let choise = prompt('Please select your choise:');
