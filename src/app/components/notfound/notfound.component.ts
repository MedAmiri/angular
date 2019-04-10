import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-notfound',
    template: `
        <header>
            <h2>404 - Not Found</h2>
        </header>
        <p class="lead text-warning text-center">{{ message }}</p>
        <p class="text-center"><a [routerLink]="['/home']">Revenir à l'accueil</a></p>
    `,
    styles: []
})
export class NotfoundComponent implements OnInit {

    message = null;
    url = null;

    constructor(private router: Router) { }

    ngOnInit() {
        this.url = this.router.url;

        this.message = `Il semble que la page "${this.url}" n'existe pas.`;
    }

}
