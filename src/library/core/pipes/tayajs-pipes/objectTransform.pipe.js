import {Pipe} from "../../../imports";

class ObjectTransformPipe extends Pipe {
    constructor(config) {
        super(config);
    }
}

export const objectTransformPipe = new ObjectTransformPipe({
    name: 'objectTransform',
    transform(value) {
        if (typeof value === 'object' || value instanceof Object) {
            return JSON.stringify(value);
        }

        return value;
    }
})