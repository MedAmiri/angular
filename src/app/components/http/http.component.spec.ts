import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpComponent} from './http.component';
import {UserService} from "../user.service";
import {MockUserService} from "../mock-user.service";

describe('HttpComponent', () => {
    let component:HttpComponent;
    let fixture:ComponentFixture<HttpComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HttpComponent]
        }).overrideComponent(HttpComponent, {
            set: {
                providers: [
                    { provide: UserService, useClass: MockUserService }
                ]
            }
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HttpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getUsers() should return 4 users', () => {

        component.getUsers();

        expect(component.users.length).toEqual(4);

    });
});