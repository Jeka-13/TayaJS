import {pipesFactory} from "./pipes-factory";

export function applyPipe(pipeData, value) {
    const pipe = pipesFactory.getPipe(pipeData.name)

    if (!pipe) {
        throw new Error(`Pipe with name ${pipeData.name} wasn't found`);
    }

    if (!pipeData.arguments) {
        pipeData.arguments = [];
    }

    return pipe.transform(value, ...pipeData.arguments)
}