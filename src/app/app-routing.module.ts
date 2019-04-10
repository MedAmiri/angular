import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app/app.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {TodoComponent} from './components/todo/todo.component';
import {TemplateComponent} from "./components/template/template.component";
import {CustomComponent} from "./components/custom/custom.component";
import {XssComponent} from "./components/xss/xss.component";
import {FormulaireComponent} from "./components/formulaire/formulaire.component";
import {ReactiveFormComponent} from "./components/reactive-form/reactive-form.component";
import {ParametersComponent} from "./components/parameters/parameters.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {SecureRouteGuard} from "./secure-route.guard";
import {ServiceComponent} from "./service/service.component";
import {PromobseComponent} from "./components/promobse/promobse.component";
import {HttpComponent} from "./components/http/http.component";
import {InputComponent} from "./components/input/input.component";
import {BoutiqueComponent} from "./components/boutique/boutique.component";


const routes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'app', component: AppComponent},
    {path: 'presentation', component: PresentationComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'custom', component: CustomComponent},
    {path: 'xss', component: XssComponent},
    {path: 'formulaire', component: FormulaireComponent},
    {path: 'signup', component: ReactiveFormComponent},
    {
        path: 'parameters',
        component: ParametersComponent,
        data: { 'default': 'World' },
        canActivate: ['SecureRouteGuard'] //, SecureRouteGuard
    },
    {path: 'parameters/:name', component: ParametersComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'promobse', component: PromobseComponent},
    {path: 'http', component: HttpComponent},
    {path: 'input', component: InputComponent},
    {path: 'boutique', component: BoutiqueComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
