import { product } from "..";
import promptSync from 'prompt-sync';
import { displayProduct } from "./displayProduct";

export function deleteProduct(restaurant:string) {  

    const index = product.findIndex(obj => obj.name == restaurant);
    if (index !== -1) {
        let prompt = promptSync();
        console.log("Restaurant: " + product[index].name + " " +product[index].id + " will be deleted!! ");
        let deleteConformation = prompt("please confirm (yes/no): ");
        
        deleteConformation.toLowerCase;
        // console.log("-------" deleteConformation);
        if(deleteConformation === "y" || deleteConformation === "ye" || deleteConformation === "yes"){
            product.splice(index, 1);
        }
    }

    displayProduct();
}