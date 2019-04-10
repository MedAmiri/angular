import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../../core/class/user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.css'],
    providers: [UserService]
})
export class HttpComponent implements OnInit {

    users = [];
    user = null;

    constructor(private service: UserService) { }

    ngOnInit() { }

    public getUsers(){
        this.service.getAllUser().subscribe( (users: User[])=> {

            this.users = users.map( (user) => {
                return new User(user.id, user.name, user.username, user.email);
            });

        }, (error: HttpErrorResponse) => {
            alert(error.message);
        } );
    }

    public getUser(){
        this.service.getUser(1).subscribe( (user: User)=> {

            /*this.user = user.map( (user) => {
                return new User(user.id, user.name, user.username, user.email);
            });*/

        }, (error: HttpErrorResponse) => {
            alert(error.message);
        } );
    }
}
