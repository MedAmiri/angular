import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../core/class/product";

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.css'],
    providers: [ProductService]
})
export class ServiceComponent implements OnInit {

    products: Array<Product> = [];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

}
