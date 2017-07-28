import { Component, Input } from '@angular/core';

@Component({
    selector: 'sf-common-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Input() public color: string;
    constructor() { }
}
