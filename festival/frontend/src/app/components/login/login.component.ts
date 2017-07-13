import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'sf-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() { }

    public onSubmit(): User {
        const formModel: User = this.loginForm.value;
        console.log(formModel);
        return formModel;
    }

    public onReset(): void {
        this.loginForm.reset();
    }
    private createForm(): void {
        this.loginForm = this.fb.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
