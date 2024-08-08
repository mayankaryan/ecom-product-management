"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = searchProduct;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const deleteProduct_1 = require("./deleteProduct");
const displayProduct_1 = require("./displayProduct");
function searchProduct() {
    let prompt = (0, prompt_sync_1.default)();
    let restaurant_name = prompt('enter name of restaurant: ');
    (0, displayProduct_1.displaySpecifcProduct)(restaurant_name);
    (0, deleteProduct_1.deleteProduct)(restaurant_name);
}
