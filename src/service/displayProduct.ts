import { product } from "..";

export function displayProduct () {

    console.log('List of restaurants:\nID     \nName    \nRating    \nReview')

    for(let i=0; i<product.length; i++){
        console.log(product[i].id + "     " + product[i].name + "     " + product[i].rating + "   " + product[i].review);
    }
}