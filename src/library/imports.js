import {Module as TayaModule} from "./core/module";
import {Component as TayaComponent} from "./core/component/component";
import {bootstrap} from "./core/bootstrap";
import {router} from "./core/tools/router";
import {Pipe} from "./core/pipes/pipes-registration/pipe";
import {commonTayaJSPipes} from "./core/pipes/common-tayajs-pipes";
import {Directive as TayaDirective} from "./core/directives/directive";
import {EventEmitter} from "./core/tools/event-emitter";


export {
    TayaModule,
    TayaComponent,
    TayaDirective,
    EventEmitter,
    bootstrap,
    router,
    Pipe,
    commonTayaJSPipes
}