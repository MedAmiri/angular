import {ValidatorFn, AbstractControl} from "@angular/forms";

export class CustomValidator {

    public static firstUppercase(): ValidatorFn {

        return (control: AbstractControl): {[key: string]: any} => {
            if(control.value != null && control.value !== ''){
                const toUppercase = control.value.substr(0, 1).toUpperCase() !==
                        control.value.substr(0, 1);

                return toUppercase? {'firstUppercase': {value: control.value}}: null;
            }
        }
    }

    public static confirmPassword(password: AbstractControl): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if(control.value != null && control.value !== ''){
                const confirm = password.value == control.value;

                return !confirm? {'confirmPassword': {value: control.value}}: null;
            }
        }
    }

}
