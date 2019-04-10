import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateComponent} from './template.component';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeFr);
registerLocaleData(localeDe);

describe('TemplateComponent', () => {
    let component:TemplateComponent;
    let fixture:ComponentFixture<TemplateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TemplateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('lang should be "fr"', () => {
        expect(component.lang).toEqual('fr');
    });

    it('after changeLang("de") lang should be "de" ', ()=>{
        component.changeLang("de");

        expect(component.lang).toEqual('de');
    });
});
