import {router} from "tayaJS";
import {renderComponent} from "../component/render-component";

export class RoutingModule {
    constructor(routes, dispatcher) {
        this.routes = routes;
        this.dispatcher = dispatcher;
    }

    initRoutes() {
        window.addEventListener('hashchange', this.#renderRoute.bind(this));
        this.#renderRoute();
    }

    #renderRoute() {
        const component = router.render(this.routes)
        renderComponent(component)
        this.dispatcher.emit('routing.change-page')
    }
}