import promptSync from 'prompt-sync';

console.log("welcome to our E-com website...");

const prompt = promptSync();
const name = prompt('Please enter your name? ');
console.log(`Hello, ${name}!`);

console.log("we have added restaurant management feature...please explore our new section..")

console.log("Enter your choise:\n1. Visit restaurants\n2. Exit")
let choise = prompt('Please select your choise: ');

if(choise == '1'){
    function 
}
else if(choise == '2'){
    console.log('Thanks for visiting us...plase visit again..');
}