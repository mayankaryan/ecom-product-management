"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayProduct = displayProduct;
const __1 = require("..");
function displayProduct() {
    console.log('List of restaurants:\nID     \nName    \nRating    \nReview');
    for (let i = 0; i < __1.product.length; i++) {
        console.log(__1.product[i].id + "     " + __1.product[i].name + "     " + __1.product[i].rating + "   " + __1.product[i].review);
    }
}
