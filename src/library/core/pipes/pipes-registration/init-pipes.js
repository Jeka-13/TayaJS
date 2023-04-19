import {pipesFactory} from "./pipes-factory";

export function initPipes(pipes) {
    if (!pipes) return;

    pipes.forEach(p => pipesFactory.registerPipe(p));
}