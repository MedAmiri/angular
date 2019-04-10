import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormComponent} from './reactive-form.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('ReactiveFormComponent', () => {
    let component:ReactiveFormComponent;
    let fixture:ComponentFixture<ReactiveFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReactiveFormComponent],
            imports: [ReactiveFormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactiveFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
