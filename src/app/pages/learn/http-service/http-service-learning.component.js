import {TayaComponent} from "tayaJS";

class HttpServiceLearningComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appHttpServiceLearning = new HttpServiceLearningComponent({
    selector: 'app-http-service-learning',
    template: `
    <main class="main-wrapper">
    <h1>HTTP Service</h1>
    <p>TayaJS provides the HTTP service that developers can use for making requests to the backend.</p>
<!--    Code snippet-->
</main>
    `
})