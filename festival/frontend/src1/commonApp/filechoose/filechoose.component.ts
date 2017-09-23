import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sf-common-filechoose',
    templateUrl: 'filechoose.component.html'
})

export class FileChooseComponent implements OnInit {
    @Output() public fileChooseChange: EventEmitter<FileList> = new EventEmitter<FileList>();
    @ViewChild('filechoose') public filechoose: ElementRef;

    constructor() { }

    ngOnInit() { }

    public reset(): void {
        this.filechoose.nativeElement.value = '';
    }
    public onFileChooseChange(files: FileList) {
        this.fileChooseChange.emit(files);
    }
}
