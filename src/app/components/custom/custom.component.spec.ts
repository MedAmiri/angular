import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomComponent} from './custom.component';
import {PowerPipe} from "../power.pipe";
import {PipelindromePipe} from "../pipelindrome.pipe";
import {HighlightDirective} from "../highlight.directive";
import {FocusDirective} from "../focus.directive";
import {FormsModule} from "@angular/forms";

describe('CustomComponent', () => {
    let component:CustomComponent;
    let fixture:ComponentFixture<CustomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CustomComponent, PowerPipe, PipelindromePipe,
                HighlightDirective, FocusDirective
            ],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
