import {router} from "./tools/router";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.rootComponent = config.rootComponent;
        this.routes = config.routes;
    }

    start() {
        this.initComponents()
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
        component.render();
    }

    renderRoute() {
        const component = router.render(this.routes)
        this.renderComponent(component)
    }
}