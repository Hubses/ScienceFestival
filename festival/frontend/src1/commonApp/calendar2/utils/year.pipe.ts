
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'year'
})
export class YearPipe implements PipeTransform {

    transform(value: number, pattern: string): string {
        let year;
        switch (pattern) {
            case pattern = 'YY':
                try {
                    year = +value.toString().substring(2);
                } catch (error) {
                    throw new Error('transforming value is not number');
                }
                break;
            case pattern = 'YYYY':
                year = value;
                break;
            default:
                year = value;
                break;
        }
        return year;
    }
};
