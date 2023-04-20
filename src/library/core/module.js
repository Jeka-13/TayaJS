import {initPipes} from "./pipes/pipes-registration/init-pipes";
import {renderComponent} from "./component/render-component";
import {RoutingModule} from "./routing/routing.module";
import {initDirectives} from "./directives/init-directives";
import {EventEmitter} from "tayaJS";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.rootComponent = config.rootComponent;
        this.routes = config.routes;
        this.pipes = config.pipes;
        this.directives = config.directives;

        this.dispatcher = new EventEmitter();
    }

    start() {
        initPipes(this.pipes);
        this.#initComponents();
        if (this.routes) {
            this.#initRoutes(this.dispatcher);
        }
        initDirectives(this.directives);

        this.dispatcher.on('routing.change-page', () => {
            initDirectives(this.directives);
        })
    }

    #initRoutes(dispatcher) {
        const routing = new RoutingModule(this.routes, dispatcher);
        routing.initRoutes();
    }

    #initComponents() {
        if (!this.rootComponent) {
            throw new Error('Root component is not defined');
        }
        [this.rootComponent, ...this.components].forEach(renderComponent);
    }
}