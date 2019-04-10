import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeFr);
registerLocaleData(localeDe);

import {AppComponent} from './app/app.component';
import {HomeComponent} from './components/home/home.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import { RouteComponent } from './components/route/route.component';
import { TodoComponent } from './components/todo/todo.component';
import { TemplateComponent } from './components/template/template.component';
import { CustomComponent } from './components/custom/custom.component';
import { PowerPipe } from './pipes/power/power.pipe';
import { PipelindromePipe } from './pipes/pipelindrome/pipelindrome.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FocusDirective } from './directives/focus/focus.directive';
import { XssComponent } from './components/xss/xss.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {SecureRouteGuard} from "./secure-route.guard";
import { ServiceComponent } from './service/service.component';
import { PromobseComponent } from './components/promobse/promobse.component';
import { HttpComponent } from './components/http/http.component';
import { InputComponent } from './components/input/input.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PresentationComponent,
        RouteComponent,
        TodoComponent,
        TemplateComponent,
        CustomComponent,
        PowerPipe,
        PipelindromePipe,
        HighlightDirective,
        FocusDirective,
        XssComponent,
        FormulaireComponent,
        ReactiveFormComponent,
        ParametersComponent,
        NotfoundComponent,
        ServiceComponent,
        PromobseComponent,
        HttpComponent,
        InputComponent,
        ProgressBarComponent,
        BoutiqueComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [{
        provide: 'SecureRouteGuard',
        useValue: () => { return true; }
    }], //SecureRouteGuard
    bootstrap: [RouteComponent]
})
export class AppModule { }
