import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

    name = 'Jean';
    msg = 'Modifiez ce message !';

    product = { name: 'Banane', price: 15.90 };

    liste = ['Jean', 'Arthur', 'Jeanne', 'Sophie', 'Marie'];

    constructor() {
    }

    ngOnInit() {
    }

    public uppercase(text: string): string{
        return text.toUpperCase();
    }

    public clicked(){
        alert('Bravo !');
    }

    public message(name: string, event: MouseEvent){
        console.log(`hello ${name}`);
        console.log(event);
        /*console.log(event.target.textContent);
        event.target.classList.toggle('btn-outline-danger');*/
    }
}
