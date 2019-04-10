import {Component, OnInit} from '@angular/core';
import {PromobseService} from "../../promobse.service";

@Component({
    selector: 'app-promobse',
    templateUrl: './promobse.component.html',
    styleUrls: ['./promobse.component.css'],
    providers: [PromobseService]
})
export class PromobseComponent implements OnInit {

    numbers: Array<number> = [];
    osbNumbers: Array<number> = [];
    message: string = null;
    wait: string = null;

    progressString: string = null;

    constructor(private promobse: PromobseService) { }

    ngOnInit() { }

    public getAsyncNumbers(): void{
        this.numbers = [];

        this.message = null;
        this.wait = 'Synchronisation en cours ...';

        this.promobse.getPromiseNumber().then( (numbers: Array<number>) => {
            this.numbers = numbers;
            this.wait = null;
        } ).catch( (message: string) => {
            this.message = message;
            this.wait = null;
        });
    }

    public getObservableNumbers(): void{

        // subscribe( next(value), error(value), complete() )
        this.promobse.getObservableNumber().subscribe( (numbers: Array<number>) => {
            this.osbNumbers = numbers;
        })

    }

    disabled:boolean = false;

    public download(): void{
        this.progressString = '0%';
        this.disabled = true;

        this.promobse.observableDownload().subscribe( (number: number) => {
            this.progressString = `${number}%`;
        }, ()=>{}, ()=>{
            this.disabled = false;
        });
    }

}
