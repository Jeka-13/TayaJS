import {uppercasePipe} from "./tayajs-pipes/uppercase.pipe";
import {lowercasePipe} from "./tayajs-pipes/lowercase.pipe";
import {objectTransformPipe} from "./tayajs-pipes/objectTransform.pipe";
import {datePipe} from "./tayajs-pipes/date.pipe";

export const commonTayaJSPipes = [
    uppercasePipe,
    lowercasePipe,
    objectTransformPipe,
    datePipe
]