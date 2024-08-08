"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayAllProduct = displayAllProduct;
exports.displaySpecifcProduct = displaySpecifcProduct;
const __1 = require("..");
function displayAllProduct() {
    console.log('List of restaurants:\nID   Name   Rating   Review');
    for (let i = 0; i < __1.product.length; i++) {
        console.log(__1.product[i].id + "     " + __1.product[i].name + "     " + __1.product[i].rating + "      " + __1.product[i].review);
    }
}
function displaySpecifcProduct(restaurant) {
    console.log('\nID   Name   Rating   Review');
    try {
        let;
        const squareRoot;
        (-1);
        for (let i = 0; i < __1.product.length; i++) {
            if (__1.product[i].name == restaurant) {
                console.log(__1.product[i].id + "     " + __1.product[i].name + "     " + __1.product[i].rating + "      " + __1.product[i].review);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
    console.log('\n');
}
