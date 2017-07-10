import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sf-common-spinner',
    templateUrl: 'spinner.component.html'
})

export class SpinnerComponent implements OnInit {

    @Input() public isShow: boolean;

    constructor() { }

    ngOnInit() { }
}
