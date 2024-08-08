"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = deleteProduct;
const __1 = require("..");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const displayProduct_1 = require("./displayProduct");
function deleteProduct(restaurant) {
    const index = __1.product.findIndex(obj => obj.name == restaurant);
    if (index !== -1) {
        let prompt = (0, prompt_sync_1.default)();
        let deleteConformation = prompt("Restaurant: " + __1.product[index].name + " " + __1.product[index].id + " will be deleted!! please confirm\n(yes/no): ");
        deleteConformation.toLowerCase;
        console.log("-------" + deleteConformation);
        if (deleteConformation === "y" || deleteConformation === "yes" || deleteConformation === "yes") {
            __1.product.splice(index, 1);
        }
        else {
        }
    }
    (0, displayProduct_1.displayProduct)();
}
