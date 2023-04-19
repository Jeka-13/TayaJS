import {Pipe} from "../../../imports";

class DatePipe extends Pipe {
    constructor(config) {
        super(config);
    }
}

export const datePipe = new DatePipe({
    name: 'datePipe',
    transform(value, format = 'full') {
        const date = new Date(value);
        switch (format) {
            case 'full':
                return date;
            case 'date':
                return date.getDate();
            case 'day':
                return date.getDay();
            case 'year':
                return date.getFullYear();
            case 'month':
                return date.getMonth() + 1;
            case 'shortDate':
                return date.toLocaleDateString('en-GB');
            default:
                return value;
        }
    }
})