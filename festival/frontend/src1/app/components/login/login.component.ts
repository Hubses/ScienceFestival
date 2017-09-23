import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sf-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
    public loginForm: sf.entities.AuthUser;
    @ViewChild('email') public email: sf.common.StringInput;
    @ViewChild('password') public password: sf.common.StringInput;
    @Output() public onSubmitted: EventEmitter<sf.entities.AuthUser> = new EventEmitter<sf.entities.AuthUser>();

    constructor() { }

    ngOnInit() {
        this.loginForm = {
            id: 1,
            email: this.email.value,
            password: this.password.value,
        };
    }

    public onSubmit(): void {
        this.loginForm = {
            id: 1,
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
