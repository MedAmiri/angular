import {Component} from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
})
export class TemplateComponent {

    maj = 'JE SUIS UN TEXTE EN MAJUSCULE';
    min = 'je suis un texte en minuscule';

    title = 'Je suis un titre';

    date = new Date();

    pi = 3.141592;

    tier = 1/3;
    seize= 1/16;

    price = 9999.99;

    obj = {nom:'Kenobi', prenom:'Obiwan', pseudo:'Ben', profession:'Jedi'};

    liste = ['Jean', 'Arthur', 'Sophie', 'Marie', 'Albert',
        'Mohammed', 'Stéphane', 'Remi', 'Nicolas'];

    lang = 'fr';

    private changeLang(lang: string){
        this.lang = lang;
    }

    public changeLocale(lang: string, event: MouseEvent){
        event.preventDefault();
        this.changeLang(lang);
    }

    user = null;

    isVisible = false;
    hasClass = true;
    mode = 'vertical';

    nbElt = 3;
    start = 0;
    end = this.nbElt;

    index = 1;
    total = Math.ceil(this.liste.length / this.nbElt);

    public prev(){
        if(this.index != 1){
            this.start -= this.nbElt;
            this.end -= this.nbElt;
            this.index--;
        }
    }

    public next(){
        if(this.index != this.total){
            this.start += this.nbElt;
            this.end += this.nbElt;
            this.index++;
        }
    }
}
