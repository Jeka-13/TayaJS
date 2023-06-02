import {TayaComponent} from "tayaJS";

class PipesLearningComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appPipesLearning = new PipesLearningComponent({
    selector: 'app-pipes-learning',
    template: `
    <main class="main-wrapper">
    <h1>Pipes</h1>
    <h3>What are pipes?</h3>
    <p>Pipes in TayaJS are created for easy manipulation with variables directly in HTML code. Pipes are class-based and
        must be extended from base class Pipe.</p>
    <h3>Configuration</h3>
    <p>Each pipe must have such configuration: name and transform function. The name will be used in HTML for calling it,
        for example {{variable | pipeName}}. The transform function contains the logic of the pipe itself. Developers
        can pass parameters through pipes, for example {{variable | pipeName : parameter}}.</p>
    <div class="section__two-code-wrapper">
        <code>
            <span class="code-red">export const</span>
            <span class="code-yellow">lowercasePipe </span>
            <span>= </span>
            <span class="code-red">new</span>
            <span class="code-purple">LowercasePipe</span>
            <span>({</span>
            <div class="ml-1vw">
                <span class="code-blue">name</span>
                <span>:</span>
                <span class="code-dark-blue">'lowercase'</span>
                <span>,</span>
            </div>
           <div class="ml-1vw">
               <span class="code-yellow">transform</span>
               <span>(</span>
               <span class="code-purple">value</span>
               <span>) {</span>
           </div>
            <div class="ml-3vw">
                <span class="code-red">if</span>
                <span>(</span>
                <span class="code-red">typeof</span>
                <span>value ===</span>
                <span class="code-dark-blue">'string'</span>
                <span class="code-yellow">||</span>
                <span class="code-red">instanceof</span>
                <span class="code-yellow">String</span>
                <span>){</span>
                <div class="ml-3vw">
                    <span class="code-red">return</span>
                    <span class="code-dark-blue">value.toLowerCase();</span>
                </div>
                <span>}</span>
                <span class="code-red">else</span>
                <span>{</span>
                <div class="ml-3vw">
                    <span class="code-red">return</span>
                    <span>value;</span>
                </div>
                <span>}</span>
            </div>
            <div class="ml-1vw">
                <span>}</span>
            </div>
            <span>})</span>
        </code>
    </div>
    <h3>Existing pipes</h3>
    <p>TayaJS already provides existing pipes, they can be found <i>commonTayaJSPipes</i></p>
</main>
    `
})