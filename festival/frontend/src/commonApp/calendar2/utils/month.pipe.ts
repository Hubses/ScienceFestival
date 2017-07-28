
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'month'
})
export class MonthPipe implements PipeTransform {
    private MONTH_LONG = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };

    private MONTH_SHORT = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    transform(value: number, pattern: string): string {
        let monthName;
        switch (pattern) {
            case pattern = 'MM':
                monthName = this.MONTH_SHORT[value];
                break;
            case pattern = 'MMMM':
                monthName = this.MONTH_LONG[value];
                break;
            default:
                monthName = this.MONTH_LONG[value];
                break;
        }
        return monthName;
    }
};
