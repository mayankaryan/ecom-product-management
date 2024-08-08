"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const product_1 = require("./model/product");
const displayProduct_1 = require("./service/displayProduct");
const searchProduct_1 = require("./service/searchProduct");
exports.product = [];
console.log("welcome to our E-com website...");
let prompt = (0, prompt_sync_1.default)();
const name = prompt('Please enter your name? ');
console.log(`Hello, ${name}!`);
console.log("we have added restaurant management feature...please explore our new section..");
console.log("Enter your choise:\n1. Visit restaurants\n2. Exit");
let choise = prompt('Please select your choise: ');
let product1 = new product_1.Product('IDC', 1, 4, "good");
exports.product.push(product1);
let product2 = new product_1.Product('IDC', 2, 4, "good");
exports.product.push(product2);
let product3 = new product_1.Product('IDC', 3, 4, "good");
exports.product.push(product3);
let product4 = new product_1.Product('IDC', 4, 4, "good");
exports.product.push(product4);
let product5 = new product_1.Product('IDC', 5, 4, "good");
exports.product.push(product5);
let product6 = new product_1.Product('IDC', 6, 4, "good");
exports.product.push(product6);
let product7 = new product_1.Product('may', 7, 4, "good");
exports.product.push(product7);
let product8 = new product_1.Product('IDC', 8, 4, "good");
exports.product.push(product8);
if (choise == '1') {
    (0, displayProduct_1.displayAllProduct)();
    (0, searchProduct_1.searchProduct)();
}
else if (choise == '2') {
    console.log('Thanks for visiting us...plase visit again..');
}
