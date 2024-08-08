import { product } from "..";
import promptSync from 'prompt-sync';
import { displayProduct } from "./displayProduct";

export function deleteProduct(restaurant:string) {  

    const index = product.findIndex(obj => obj.name == restaurant);
    if (index !== -1) {
        let prompt = promptSync();
        let deleteConformation = prompt("Restaurant: " + product[index].name + " " +product[index].id + " will be deleted!! please confirm\n(yes/no): ")

        deleteConformation.toLowerCase;
        console.log("-------" + deleteConformation);
        if(deleteConformation === "y" || deleteConformation === "yes" || deleteConformation === "yes"){
            product.splice(index, 1);
        }
        else {
            
        }
    }

    displayProduct();
}