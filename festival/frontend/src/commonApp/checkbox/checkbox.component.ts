import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'sf-common-checkbox',
    templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
    @Input() public label: string;
    @Output() onChanged = new EventEmitter<boolean>();
change(increased){
    this.onChanged.emit(increased);
}
 }
