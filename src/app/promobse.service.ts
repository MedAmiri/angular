import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

@Injectable()
export class PromobseService {

    numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor() { }

    public getPromiseNumber(): Promise<number[]> {

        const randError = Math.floor( (Math.random() * 3) + 1);
        const randTime = Math.floor( (Math.random() * 5000) + 1000);

        return new Promise( (resolve, reject) => {

            setTimeout( () => {

                if(randError > 1){
                    resolve( this.numbers );
                }else{
                    reject('Serveur indisponible pour le moment ...');
                }

            }, randTime);

        } );

    }

    public getObservableNumber(): Observable<number[]> {
        return Observable.create( (observer: Subscriber<number[]> ) => {

            observer.next(this.numbers);

            setTimeout(() => {
                observer.next(this.numbers.map( (number) => {
                    return number*10;
                }))
            }, 2000);

        });
    }

    public observableDownload(): Observable<number> {
        let value = 0;

        return Observable.create( (observer: Subscriber<number>) => {
            const interval = setInterval( () => {
                value += ( value < 95 )? Math.floor( ( Math.random() * 5 ) + 1 ) : 1;

                if( value <= 100) {
                    observer.next(value);
                }else{
                    observer.complete();
                    clearInterval(interval);
                }
            }, 250);
        });
    }

}
