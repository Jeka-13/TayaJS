import {router} from "./tools/router";
import {initPipes} from "./pipes/pipes-registration/init-pipes";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.rootComponent = config.rootComponent;
        this.routes = config.routes;
        this.pipes = config.pipes;
    }

    start() {
        initPipes(this.pipes);
        this.initComponents();
        if (this.routes) {
            this.initRoutes();
        }
    }

    initComponents() {
        this.rootComponent.render();
        this.components.forEach(this.renderComponent.bind(this));
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this));
        this.renderRoute();
    }

    renderComponent(component) {
        if (component.onInit) {
            component.onInit();
        }
        component.render();
        if (component.afterViewInit) {
            component.afterViewInit();
        }
    }

    renderRoute() {
        const component = router.render(this.routes)
        this.renderComponent(component)
    }
}