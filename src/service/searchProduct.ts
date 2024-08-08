import { product } from "..";
import promptSync from 'prompt-sync';
import { deleteProduct } from "./deleteProduct";
import { displaySpecifcProduct } from "./displayProduct";

export function searchProduct () {
    let prompt = promptSync();
    let restaurant_name = prompt('enter name of restaurant: ');

    displaySpecifcProduct(restaurant_name);
    deleteProduct(restaurant_name);
}