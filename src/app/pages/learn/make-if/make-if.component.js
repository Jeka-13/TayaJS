import {TayaComponent} from "tayaJS";

class MakeIfComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appMakeifComponentLearning = new MakeIfComponent({
    selector: 'app-make-if-learning',
    template: `
    <main class="main-wrapper">
    <h1>Make-If</h1>
    <p>Make-if is responsible for making conditional rendering. It requires <b>condition</b> and depending on its result
    it will render the content wrapped in it or not. In production mode make-if tag will not be presented in DOM tree</p>
    <div class="section__two-code-wrapper">
        <code>
            <span class="code-red">export const</span>
            <span class="code-yellow">homePageComponent </span>
            <span>= </span>
            <span class="code-red">new</span>
            <span class="code-purple">HomePageComponent</span>
            <span>({</span>
            <div class="ml-3vw">
                <span class="code-blue">selector</span>
                <span>:</span>
                <span class="code-dark-blue">'app-home'</span>
                <span>,</span>
            </div>
            <div class="ml-3vw">
                <span class="code-blue">template</span>
                <span>:</span>
                <span class="code-dark-blue">\`&lt;make-if </span>
                <span class="code-yellow">condition </span>
                <span>= "</span>
                <span class="code-purple">true</span>
                <span>"</span>
                <span class="code-dark-blue">&gt;</span>
                <div class="ml-13vw">
                    <span class="code-dark-blue">&lt;p&gt;I am rendered :)&lt;/p&gt;</span>
                </div>
            </div>
            <div class="ml-14vw">
                <span class="code-dark-blue">&lt;/make-if&gt;\`</span>
            </div>
            <div class="ml-1vw">
                <span>})</span>
            </div>
        </code>
    </div>
</main>
    `
})