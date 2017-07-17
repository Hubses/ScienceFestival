import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sf-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
    public loginForm: sf.entities.User;
    @ViewChild('email') public email: sf.common.StringInput;
    @ViewChild('password') public password: sf.common.StringInput;
    @Output() public onSubmitted: EventEmitter<sf.entities.User> = new EventEmitter<sf.entities.User>();

    constructor() { }

    ngOnInit() {
        this.loginForm = {
            email: this.email.value,
            password: this.password.value
        };
    }

    public onSubmit(): void {
        this.loginForm = {
            email: this.email.value,
            password: this.password.value
        };
        console.log(this.loginForm);
        this.onSubmitted.emit(this.loginForm);
    }

    public onReset(): void {
        this.email.value = '';
        this.password.value = '';
    }
}
