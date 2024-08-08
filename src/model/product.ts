export class Product {
    name: string;
    id: number;
    rating: number;
    review: string;

    constructor(name:string, id:number, rating:number, review: string){
        this.name = name;
        this.id = id;
        this.rating = rating;
        this.review = review;
    }
}