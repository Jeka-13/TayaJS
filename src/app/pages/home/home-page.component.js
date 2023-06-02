import {TayaComponent} from "tayaJS";
import './home.css'

class HomePageComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home',
    template: `<main>
        <section class="section__first">
            <h1 class="section__first-header">TayaJS</h1>
            <h3 class="section__first-subheader">The library for making single-page applications</h3>
            <div class="section__first-button-wrapper">
                <a href="#learn/getting-started">Learn TayaJS</a>
                <a href="https://github.com/Jeka-13">Git</a>
            </div>
        </section>
        <section class="section__two">
            <h3 class="section__two-header">Create application using your components</h3>
            <div class="content-wrapper">
            <div class="section__two-code-wrapper">
                <code class="code-wrapper">
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
                    <span class="code-dark-blue">\`&lt;div&gt;This is home&lt;/div&gt;</span>
                    </div>
                    <div class="ml-1vw">
                    <span>})</span>
                    </div>
                </code>
            </div>
                <div class="code-result-wrapper">
                    <p class="code-result-file-name">Result</p>
            <div class="code-result">
                This is home
            </div>
                </div>
            </div>
            <p class="section__two-paragraph">
                Components are reusable parts of the code that contains variables and HTML code. Components in TayaJS
                are class-based.
            </p>
               <p class="section__two-paragraph">
                   Whatever component you want, whatever style you want, all you need <b>is here</b>.
               </p>

        </section>
        <section class="section__first pd-t-3vh">
            <h3 class="section__two-header">Manipulate easier with your strings using pipes</h3>
            <div class="content-wrapper">
                <div class="section__two-code-wrapper">
                    <code class="code-wrapper">
                        <span class="code-red">export const</span>
                        <span class="code-yellow">homeComponent </span>
                        <span>= </span>
                        <span class="code-red">new</span>
                        <span class="code-purple">HomeComponent</span>
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
                        <span class="code-dark-blue">\`&lt;div&gt;{{5 | multi : 10}}&lt;/div&gt;\`</span>
                        </div>
                        <div class="ml-1vw">
                        <span>})</span>
                        </div>
                    </code>
                </div>
                <div class="code-result-wrapper">
                    <p class="code-result-file-name">Result</p>
                    <div class="code-result">
                        50
                    </div>
                </div>
            </div>
            <div class="content-wrapper">
            <div class="section__two-code-wrapper">
                <code class="code-wrapper">
                    <span class="code-red">export const</span>
                    <span class="code-yellow">multiPipe </span>
                    <span>= </span>
                    <span class="code-red">new</span>
                    <span class="code-purple">MultiPipe</span>
                    <span>({</span>
                    <div class="ml-3vw">
                    <span class="code-blue">name</span>
                    <span>:</span>
                    <span class="code-dark-blue">'multi'</span>
                    <span>,</span>
                    </div>
                    <div class="ml-3vw">
                    <span class="code-yellow">transform</span>
                    <span>(</span>
                    <span class="code-purple">value</span>
                    <span>,</span>
                    <span class="code-purple">number </span>
                    <span>= 2</span>
                    <span>) {</span>
                    </div>
                    <div class="function-body">
                        <span class="code-red">return</span>
                        <span>+</span>
                        <span class="code-purple">value </span>
                        <span>* </span>
                        <span class="code-purple">number</span>
                    </div>
                    <div class="ml-3vw">
                        <span>}</span>
                    </div>
                    <div class="ml-1vw">
                    <span>})</span>
                    </div>
                </code>
            </div>
            </div>
            <p class="section__two-paragraph">Pipes are simple functions that are called directly in HTML code.
                TayaJS has some basic pipes, and it gives the possibility for developers to create and register their own
                pipes in the module.
            </p>
        </section>
        <section class="section__two">
            <h3 class="section__two-header">Conditional rendering is not a problem!</h3>
            <div class="content-wrapper">
                <div class="section__two-code-wrapper">
                    <code class="code-wrapper">
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
                <div class="code-result-wrapper">
                    <p class="code-result-file-name">Result</p>
                    <div class="code-result">
                        I am rendered :)
                    </div>
                </div>
            </div>
            <p class="section__two-paragraph">MakeIf is a special tag provided by TayaJS. The main idea behind this tag is
                like a simple if from modern languages: to verify conditions and to make actions based on them. MakeIf is a
                wrapper for a part of the HTML code and is based on the condition the content inside will be rendered or not.
            </p>
        </section>
    </main>`
})