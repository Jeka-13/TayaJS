import {initPipes} from "./pipes/pipes-registration/init-pipes";
import {renderComponent} from "./component/render-component";
import {RoutingModule} from "./routing/routing.module";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.rootComponent = config.rootComponent;
        this.routes = config.routes;
        this.pipes = config.pipes;
    }

    start() {
        initPipes(this.pipes);
        this.#initComponents();
        if (this.routes) {
            this.#initRoutes();
        }
    }

    #initRoutes() {
        const routing = new RoutingModule(this.routes);
        routing.initRoutes();
    }

    #initComponents() {
        if (!this.rootComponent) {
            throw new Error('Root component is not defined');
        }
        [this.rootComponent, ...this.components].forEach(renderComponent);
    }
}