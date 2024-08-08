import { product } from "..";
import promptSync from 'prompt-sync';
import { deleteProduct } from "./deleteProduct";

export function searchProduct () {
    let prompt = promptSync();
    let restaurant_name = prompt('enter name of restaurant: ');

    deleteProduct(restaurant_name);
}