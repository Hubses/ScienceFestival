import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'sf-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit { // registerForm
    public positions: sf.common.DropdownOptions<string>; //Input
    public registerForm: sf.entities.User;
    @ViewChild('email') public email: sf.common.StringInput;
    @ViewChild('password') public password: sf.common.StringInput;
    @ViewChild('phone') public phone: sf.common.NumberInput;
    @ViewChild('position') public position: sf.common.Dropdown<string>;
    @Output() public onSubmitted: EventEmitter<sf.entities.User> = new EventEmitter<sf.entities.User>();

    constructor() { }

    ngOnInit() {
        this.positions = {
            placeholder: 'position',
            values: ['user', 'admin'],
            selectedValue: 'user',
        };
    }
    public getPosition(position: string): string {
        console.log(position);
        return position;
    }
    public submit(form: sf.entities.User): void {
        this.registerForm = {
            email: this.email.value,
            password: this.email.value,
            phone: this.phone.value,
            // position: this.position.selectedValue
        }
        console.log(this.registerForm);
        form = this.registerForm;
        this.onSubmitted.emit(form);
    }

    public reset(): void {
        this.registerForm = {
            email: '',
            password: '',
            phone: 0,
            // position: ''
        }
    }
}
