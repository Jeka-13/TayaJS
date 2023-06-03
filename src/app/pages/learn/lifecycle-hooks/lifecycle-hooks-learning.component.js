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
    <p>Lifecycle hooks are a feature of many SPA libraries, including React, Angular, and Vue.js. 
    They are methods that are called at specific points in the lifecycle of a component or directive, 
    and can be used to perform actions such as setting up data, updating the DOM, or cleaning up resources.</p>
    <p>TayaJS contains <b>OnInit</b> lifecycle hook. In order to call it, create a special function in your components.</p>
    <p>See the example below</p>
     <div class="section__two-code-wrapper">
        <code>
            <span class="code-red">class</span>
            <span class="code-yellow">AppComponent</span>
            <span class="code-red">extends</span>
            <span class="code-blue">TayaComponent</span>
            <span>{</span>
            <div class="ml-1vw">
                <span class="code-purple">constructor</span>
                <span>(</span>
                <span class="code-purple">config</span>
                <span>) {</span>
            </div>
                <div class="ml-3vw">
                    <span class="code-yellow">super</span>
                    <span>(</span>
                    <span class="code-purple">config</span>
                    <span>);</span>
                </div>
                <div class="ml-1vw">
                    <span>}</span>
                </div>
                <div class="ml-1vw">
                    <span class="code-red">onInit</span>
                    <span>() {</span>
                    <span class="code-dark-blue">// your logic</span>
                    <span>}</span>
                </div>
                <span>}</span>
        </code>
        </div>
        <p>This lifecycle hook is called when the component started initialization</p>
        <p>Also in TayaJS exists hook called <b>afterViewInit</b>. It is called when the component finished render phase</p>
        <div class="section__two-code-wrapper">
        <code>
            <span class="code-red">class</span>
            <span class="code-yellow">AppComponent</span>
            <span class="code-red">extends</span>
            <span class="code-blue">TayaComponent</span>
            <span>{</span>
            <div class="ml-1vw">
                <span class="code-purple">constructor</span>
                <span>(</span>
                <span class="code-purple">config</span>
                <span>) {</span>
            </div>
                <div class="ml-3vw">
                    <span class="code-yellow">super</span>
                    <span>(</span>
                    <span class="code-purple">config</span>
                    <span>);</span>
                </div>
                <div class="ml-1vw">
                    <span>}</span>
                </div>
                <div class="ml-1vw">
                    <span class="code-red">afterViewInit</span>
                    <span>() {</span>
                    <span class="code-dark-blue">// your logic</span>
                    <span>}</span>
                </div>
                <span>}</span>
        </code>
        </div>
</main>
    `
})