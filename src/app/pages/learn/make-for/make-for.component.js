import {TayaComponent} from "tayaJS";

class MakeForComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appMakeForLearning = new MakeForComponent({
    selector: 'app-make-for-learning',
    template: `
        <main class="main-wrapper">
        <h1>Make-For</h1>
        <p>Make-for is responsible for making cycle rendering. It requires <b>cycle</b> where developer should write
            iterator and the array. Depending on the array it will render the content.
            In production mode make-if tag will not be presented in DOM tree</p>
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
                    <span class="code-dark-blue">\`&lt;make-for </span>
                    <span class="code-yellow">cycle </span>
                    <span>= "</span>
                    <span class="code-purple">let item of arrayTest</span>
                    <span>"</span>
                    <span class="code-dark-blue">&gt;</span>
                    <div class="ml-13vw">
                        <span class="code-dark-blue">&lt;p&gt;{{item}}&lt;/p&gt;</span>
                    </div>
                </div>
                <div class="ml-14vw">
                    <span class="code-dark-blue">&lt;/make-for&gt;\`</span>
                </div>
                <div class="ml-1vw">
                    <span>})</span>
                </div>
            </code>
        </div>
    </main>

    `
})