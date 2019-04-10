import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputComponent} from './input.component';
import {ProgressBarComponent} from "../progress-bar/progress-bar.component";

describe('InputComponent', () => {
    let component:InputComponent;
    let fixture:ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputComponent, ProgressBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
