import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceComponent} from './service.component';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeFr);
registerLocaleData(localeDe);

describe('ServiceComponent', () => {
    let component:ServiceComponent;
    let fixture:ComponentFixture<ServiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ServiceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
