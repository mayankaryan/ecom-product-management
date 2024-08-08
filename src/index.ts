import promptSync from 'prompt-sync';
import { Product } from './model/product';
import { displayProduct } from './service/displayProduct';
import { searchProduct } from './service/searchProduct';

export let product: Product[] = [];

console.log("welcome to our E-com website...");

let prompt = promptSync();
const name = prompt('Please enter your name? ');
console.log(`Hello, ${name}!`);

console.log("we have added restaurant management feature...please explore our new section..")

console.log("Enter your choise:\n1. Visit restaurants\n2. Exit")
let choise = prompt('Please select your choise: ');

let product1 = new Product('IDC',1,4,"good");
product.push(product1);
let product2 = new Product('IDC',2,4,"good");
product.push(product2);
let product3 = new Product('IDC',3,4,"good");
product.push(product3);
let product4 = new Product('IDC',4,4,"good");
product.push(product4);
let product5 = new Product('IDC',5,4,"good");
product.push(product5);
let product6 = new Product('IDC',6,4,"good");
product.push(product6);
let product7 = new Product('may',7,4,"good");
product.push(product7);
let product8 = new Product('IDC',8,4,"good");
product.push(product8);

if(choise == '1'){
    displayProduct();
    searchProduct();
}
else if(choise == '2'){
    console.log('Thanks for visiting us...plase visit again..');
}