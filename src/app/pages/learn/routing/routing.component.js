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
        the component which will be rendered on this path. For example, {path: ‘about’, component: aboutComponent}.</p>
    <div class="section__two-code-wrapper">
        <code>
            <span class="code-yellow">routes:</span>
            <span>[</span>
            <div class="ml-1vw">
                <span>{</span>
                <div class="ml-1vw">
                    <span class="code-dark-blue">path:</span>
                    <span>'',</span>
                    <span class="code-dark-blue">component:</span>
                    <span>homePageComponent</span>
                </div>
                <span>}</span>
            </div>
        </code>
    </div>
    <p>The navigational link should be created, by using the 'a' tag. As a parameter it takes the link that will
        redirect the user to another URL without reloading the page.</p>
    <div class="section__two-code-wrapper">
        <code>
            <span class="code-yellow">&lt;a <span class="code-dark-blue">href=</span><span class="code-blue">"#learn/modules"</span> <span class="code-red">class=</span><span class="code-purple">"learn-block-item"</span>&gt;</span>
            <span>Modules</span>
            <span class="code-yellow">&lt;/a&gt;</span>
        </code>
    </div>

    <p>Last, but not the least important is the 'router-outlet' tag. It is responsible for rendering the component based 
        on the URL. The “router-outlet” tag is like a canvas for all components, which are depending on the route.</p>
    <div class="section__two-code-wrapper">
        <code>
            <div>
                <span class="code-yellow"> &lt;app-header&gt;&lt;/app-header&gt;</span>
                <span class="code-gray">//content of the header</span>
            </div>
            <div>
                <span class="code-yellow">&lt;router-outlet&gt;&lt;/router-outlet&gt;</span>
                <span class="code-gray">//content based on the route</span>
            </div>  
        </code>
    </div>
</main>
    `
})