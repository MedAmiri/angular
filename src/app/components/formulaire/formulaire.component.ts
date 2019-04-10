import {Component, OnInit} from '@angular/core';
import {Product} from '../../../core/class/product';

@Component({
    selector: 'app-formulaire',
    templateUrl: './formulaire.component.html',
    styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

    liste: Array<Product> = [];
    product = new Product();

    button = 'Ajouter';
    isSelected = false;
    index = -1;

    constructor() {

    }

    ngOnInit() {
        // this.liste.push( new Product('Pomme', 12.50) );
    }

    public onSubmit(){
        if(this.isSelected){
            this.liste[this.index] = this.product;
        }else{
            this.liste.push(this.product);
        }

        this.button = 'Ajouter';
        this.isSelected = false;
        this.index = -1;
        this.product = new Product();
    }

    public update(index:number, event:MouseEvent){
        event.preventDefault();
        this.product = new Product(this.liste[index].name, this.liste[index].price)
        this.index = index;
        this.isSelected = true;
        this.button = "Modifier";
    }

    public remove(index:number, event:MouseEvent){
        event.preventDefault();
        event.stopImmediatePropagation();

        this.liste.splice(index, 1);
    }

}
