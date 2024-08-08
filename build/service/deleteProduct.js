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
        console.log("Restaurant: " + __1.product[index].name + ", ID: " + __1.product[index].id + ", will be deleted!! ");
        let deleteConformation = prompt("please confirm (yes/no): ");
        deleteConformation.toLowerCase;
        // console.log("-------" deleteConformation);
        if (deleteConformation === "y" || deleteConformation === "ye" || deleteConformation === "yes") {
            __1.product.splice(index, 1);
        }
    }
    (0, displayProduct_1.displayAllProduct)();
}
