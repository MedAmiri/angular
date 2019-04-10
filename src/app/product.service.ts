import {Injectable} from '@angular/core';
import {Product} from "../core/class/product";

@Injectable()
export class ProductService {

    products: Array<Product> = [
        new Product('Pomme', 1.50),
        new Product('Poire', 2.80),
        new Product('Cerise', 6.93),
        new Product('Banane', 9.89),
        new Product('Télé Samsung', 1299.99),
    ];

    constructor() { }

    public getProducts(): Array<Product> {
        return this.products;
    }

    public add(p: Product): void {
        this.products.push(p);
    }

}
