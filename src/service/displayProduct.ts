import { product } from "..";

export function displayAllProduct () {

    console.log('List of restaurants:\nID   Name   Rating   Review')

    for(let i=0; i<product.length; i++){
        console.log(product[i].id + "     " + product[i].name + "     " + product[i].rating + "      " + product[i].review);
    }
}

export function displaySpecifcProduct (restaurant:string) {
    console.log('\nID   Name   Rating   Review')
    try {

        for(let i=0; i<product.length; i++){
            if(product[i].name == restaurant){
                console.log(product[i].id + "     " + product[i].name + "     " + product[i].rating + "      " + product[i].review);
            }
        }
    }
    catch(error){
        console.log(error);
    }
    console.log('\n');
}