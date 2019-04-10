import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/class/user";
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from "../../../core/class/custom-validator";

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    user:User = null;

    genderList: string[] = ['Homme', 'Femme', 'Autre'];

    email: FormControl;
    password: FormControl;
    confirm: FormControl;
    gender: FormControl;
    term: FormControl;

    form: FormGroup;

    private email_regex = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        // FormControl( default value, [validators], [validators asynchrone])
        this.email = new FormControl('', [
            Validators.required, Validators.pattern(this.email_regex)
        ]);

        this.password = new FormControl('', [
            Validators.required, Validators.minLength(8),
            CustomValidator.firstUppercase()
        ]);

        this.confirm = new FormControl('', [
            Validators.required, Validators.minLength(8),
            CustomValidator.confirmPassword(this.password)
        ]);

        this.gender = new FormControl('', [
            Validators.required
        ]);

        this.term = new FormControl('', [
            Validators.requiredTrue
        ]);

        this.form = this.fb.group({
            'email': this.email,
            'password': this.password,
            'confirm': this.confirm,
            'gender': this.gender,
            'term': this.term
        });

    }

}
