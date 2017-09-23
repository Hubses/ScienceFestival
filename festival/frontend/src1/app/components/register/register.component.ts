import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'sf-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit { // registerForm
    public positions: sf.common.DropdownOptions<string>; //Input
    public registerForm: sf.entities.AuthUser;
    @ViewChild('email') public email: sf.common.StringInput;
    @ViewChild('password') public password: sf.common.StringInput;
    @ViewChild('phone') public phone: sf.common.NumberInput;
    @ViewChild('position') public position: sf.common.Dropdown<string>;
    @Output() public onSubmitted: EventEmitter<sf.entities.AuthUser> = new EventEmitter<sf.entities.AuthUser>();

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
    public submit(form: sf.entities.AuthUser): void {
        this.registerForm = {
            id: 1,
            email: this.email.value,
            password: this.email.value,
            phone: this.phone.value,
            role: 'admin'
        }
        console.log(this.registerForm);
        form = this.registerForm;
        this.onSubmitted.emit(form);
    }

    public reset(): void {
        this.registerForm = {
            id: 1,
            email: '',
            password: '',
            phone: null,
            role: 'admin'
        }
    }
}
