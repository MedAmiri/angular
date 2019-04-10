import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {NotfoundComponent} from './notfound.component';

describe('NotfoundComponent', () => {
    let component:NotfoundComponent;
    let fixture:ComponentFixture<NotfoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotfoundComponent],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotfoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
