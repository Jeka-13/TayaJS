import {Pipe} from "../../../imports";


class UppercasePipe extends Pipe{
    constructor(config) {
        super(config);
    }
}

export const uppercasePipe = new UppercasePipe({
    name: 'uppercase',
    transform(value) {
        if (typeof value === 'string' || value instanceof String){
            return value.toUpperCase();
        } else {
            return value;
        }
    }
})