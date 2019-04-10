import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../../core/class/product";

@Component({
    selector: 'app-parameters',
    templateUrl: './parameters.component.html',
    styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

    name = null;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {

        //this.name = this.route.data.value.default;

        this.route.params.subscribe( (params: Params) => {
            if(params['name'] != null){
                this.name = this.capitalize(params['name']);
            }
        });

    }

    private capitalize(text: string): string {

        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    public navigateToMarie(){
        this.router.navigate(['/parameters', 'marie']);
    }
}
