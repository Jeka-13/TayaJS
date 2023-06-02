import {TayaComponent} from "tayaJS";

class RoutingLearningComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appRoutingLearningComponent = new RoutingLearningComponent({
    selector: 'app-routing-learning',
    template: `
    <main class="main-wrapper">
    <h1>Routing</h1>
    <p>First of all, in order to make a routing system, the developer should create the routes array which contains objects
        with two keys: path and component. The path is responsible for the URL, and the component contains a reference for
        the component which will be rendered on this path. For example, {path: ‘/about’, component: aboutComponent}.</p>
<!--    Code snippet-->
    <p>The navigational link should be created, by using the 'route' tag. As a parameter it takes the link that will
        redirect the user to another URL without reloading the page. For example, 'route link=”about”'.</p>
<!--    Code snippet-->
    <p>Last, but not the least important is the 'router-outlet' tag. It is responsible for rendering the component based 
        on the URL. The “router-outlet” tag is like a canvas for all components, which are depending on the route.</p>
<!--    Code snippet-->
</main>
    `
})