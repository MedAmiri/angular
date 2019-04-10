import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {User} from "../core/class/user";

@Injectable()
export class UserService {

    private url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    /*public getAllUser(): Observable<Object[]>{
        return this.http.get(this.url);
    }*/

    public getAllUser(): Observable<User[]>{
        return this.http.get<User[]>(this.url);
    }

    public getUser(id:number): Observable<User>{
        return this.http.get<User>(`${this.url}/${id}`);
    }


}
