import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../core/class/user";

@Injectable()
export class MockUserService {

    users = [
        {id: 1, name: "John", username: "John Doe", email: "john.doe@fai.fr"},
        {id: 2, name: "Jane", username: "Jane Doe", email: "jane.doe@fai.fr"},
        {id: 3, name: "Eduard", username: "Eduard Doe", email: "eduard.doe@fai.fr"},
        {id: 4, name: "Ronald", username: "Ronald Doe", email: "ronald.doe@fai.fr"},
    ];

    constructor() { }

    public getAllUser(): Observable<User[]>{
        return Observable.create( observer => {
            observer.next(this.users);
        })
    }

    public getUser(id:number): Observable<User>{

        return Observable.create( observer => {
            observer.next(this.users[0]);
        });
    }

}
