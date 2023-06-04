import {TayaComponent} from "tayaJS";

class ModulesComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appModulesComponent = new ModulesComponent({
    selector: 'app-module-learning',
    template:`
        <main class="main-wrapper">
        <h1>Modules</h1>
        <h3>What are modules?</h3>
        <p>Modules are containers for components. They are mainly created for storing components and necessary imports
            for working with them. Modules are class-based, they require to be extended from the base class
            <b>TayaModule.</b></p>
        <div class="section__two-code-wrapper">
            <code>
                <span class="code-red">class</span>
                <span class="code-yellow">AppModule</span>
                <span class="code-red">extends</span>
                <span class="code-blue">TayaModule</span>
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
                <span>}</span>
            </code>
        </div>
        <h3>What is inside?</h3>
        <p>
            The main module which is the entry point of the application, called <b>AppModule</b> must have the <i>‘rootComponent’</i>
            option which references the main wrapper in <i>index.html</i>. Without the ‘rootComponent’ application will not work,
            and it can be declared only once. Modules can contain routes array.</p>
            <p>Each route is represented as an object with a
                path (URL to the page) and component that should be rendered.</p>
        <div class="section__two-code-wrapper">
            <code>
                <span class="code-blue">routes</span>
                <span>: [</span>
                <div class="ml-1vw">
                    <span>{</span>
                    <div class="ml-3vw">
                        <span class="code-red">path</span>
                        <span>: '', </span>
                        <span class="code-red">component</span>
                        <span>: </span>
                        <span class="code-yellow">homePageComponent</span>
                    </div>
                    <span>},</span>
                    <div>
                        <span>{</span>
                    </div>
                    <div class="ml-3vw">
                        <span class="code-red">path</span>
                        <span>: 'about', </span>
                        <span class="code-red">component</span>
                        <span>: </span>
                        <span class="code-yellow">aboutUsComponent</span>
                    </div>
                    <span>},</span>
                    <div>
                        <span>{</span>
                    </div>
                    <div class="ml-3vw">
                        <span class="code-red">path</span>
                        <span>: '**', </span>
                        <span class="code-red">component</span>
                        <span>: </span>
                        <span class="code-yellow">notFound</span>
                    </div>
                    <span>}</span>
                </div>
                <span>]</span>
            </code>
        </div>
        <p><b>Pipes</b> can be registered in the module in the special
            array ‘pipes’. The developer should only write the name of the pipe.</p>
        <div class="section__two-code-wrapper">
            <code>
                <span class="code-blue">pipes</span>
                <span>: [</span>
                <div class="ml-1vw">
                    <span class="code-yellow">multiPipe</span>
                    <span>,</span>
                </div>
                <div class="ml-1vw">
                    <span>...</span>
                    <span class="code-yellow">commonTayaJSPipes</span>
                </div>
                ]
            </code>
        </div>
    </main>
    `
})