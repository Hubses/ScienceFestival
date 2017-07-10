import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safe',
    pure: false
})
export class SafePipe implements PipeTransform {

    constructor(protected _sanitizer: DomSanitizer) {

    }
    public transform(value: any): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
}
