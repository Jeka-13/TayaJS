import {Module as TayaModule} from "./core/module";
import {Component as TayaComponent} from "./core/component/component";
import {bootstrap} from "./core/bootstrap";
import {router} from "./core/tools/router";
import {Pipe} from "./core/pipes/pipes-registration/pipe";
import {commonTayaJSPipes} from "./core/pipes/common-tayajs-pipes";


export {
    TayaModule,
    TayaComponent,
    bootstrap,
    router,
    Pipe,
    commonTayaJSPipes
}