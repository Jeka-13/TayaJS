import {TayaComponent} from "tayaJS";

class LifecycleHooksLearningComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appLifecycleHooks = new LifecycleHooksLearningComponent({
    selector: 'app-lifecycle-hooks-learning',
    template: `
<main class="main-wrapper">
<h1>Lifecycle Hooks</h1>
    TBD
</main>
    `
})