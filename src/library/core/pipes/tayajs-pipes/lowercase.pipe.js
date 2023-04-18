import {Pipe} from "../../../imports";

class LowercasePipe extends Pipe {
    constructor(config) {
        super(config);
    }
}

export const lowercasePipe = new LowercasePipe({
    name: 'lowercase',
    transform(value) {
        if (typeof value === 'string' || value instanceof String){
            return value.toLowerCase();
        } else {
            return value;
        }
    }
})