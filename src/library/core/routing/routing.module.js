import {router} from "tayaJS";
import {renderComponent} from "../component/render-component";

export class RoutingModule {
    constructor(routes) {
        this.routes = routes;
    }

    initRoutes() {
        window.addEventListener('hashchange', this.#renderRoute.bind(this));
        this.#renderRoute();
    }

    #renderRoute() {
        const component = router.render(this.routes)
        renderComponent(component)
    }
}