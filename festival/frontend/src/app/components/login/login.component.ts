import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.loginForm = {
            email: this.email.value,
            password: this.password.value
        };
    }

    public submit(): void {
        this.loginForm = {
            email: this.email.value,
            password: this.password.value
        };
        console.log(this.loginForm);
        this.onSubmitted.emit(this.loginForm);

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append("Authorization", "Basic " + btoa(this.email.value + ":" + this.password.value));
        this.http.get("http://" + window.location.hostname + ":8080/api/v1/users", { headers: headers }).subscribe(resp => {
            console.log(resp["0"]);
        });
    }

    public reset(): void {
        this.email.value = '';
        this.password.value = '';
    }
}
