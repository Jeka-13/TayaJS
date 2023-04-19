import {Pipe} from "tayaJS";

class MultiPipe extends Pipe {
    constructor(config) {
        super(config);

    }

}

export const multiPipe = new MultiPipe({
    name: 'multi',
    transform(value, number = 2) {
        return +value * number
    }
})