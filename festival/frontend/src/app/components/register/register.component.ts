import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'sf-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {
    public positions: sf.common.DropdownOptions;
    public registerForm: FormGroup;


    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this.positions = {
            placeholder: 'position',
            values: ['user', 'admin'],
            selectedValue: 'user'
        };
    }
    public getPosition(position: string) {
        console.log(position);
        return position;
    }
    public onSubmit(): User {
        const formModel: User = this.registerForm.value;
        console.log(formModel);
        return formModel;
    }

    public onReset(): void {
        this.registerForm.reset();
    }
    private createForm(): void {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            position: ['', Validators.required]
        });
        this.registerForm.patchValue({
            position: ['user']
        }, {
                emitEvent: true
            });
    }
}