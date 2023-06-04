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
    <h3>Using GET request</h3>
    <div class="section__two-code-wrapper">
        <code>
        <span class="code-yellow">onInit</span>
        <span>() {</span>
        <div class="ml-1vw">
            <span class="code-red">TayaHTTP.</span>
            <span class="code-purple">GET</span>
            <span>('</span>
            <span class="code-dark-blue">https://jsonplaceholder.typicode.com/posts</span>
            <span>')</span>
        </div>
        <div class="ml-1vw">
            <span>.</span>
            <span class="code-red">then</span>
            <span>(</span>
            <span class="code-dark-blue">response =></span>
            <span>{</span>
            <div class="ml-3vw">
                <span class="code-blue">console.log</span>
                <span>(response);</span>
            </div>
            <span>});</span>
        </div>
            <span>}</span>
        </code>
    </div>
    
    <h3>Using POST request</h3>
    <div class="section__two-code-wrapper">
        <code>
        <span class="code-yellow">onInit</span>
        <span>() {</span>
        <div class="ml-1vw">
            <span class="code-red">TayaHTTP.</span>
            <span class="code-purple">POST</span>
            <span>('</span>
            <span class="code-dark-blue">https://jsonplaceholder.typicode.com/posts</span>
            <span>',{</span>
            <span class="code-blue">title:</span>
            <span>'Foo',</span>
            <span class="code-blue">body:</span>
            <span>'bar',</span>
            <span class="code-blue">userId:</span>
            <span>1</span>
            <span>})</span>
        </div>
        <div class="ml-1vw">
            <span>.</span>
            <span class="code-red">then</span>
            <span>(</span>
            <span class="code-dark-blue">response =></span>
            <span>{</span>
            <div class="ml-3vw">
                <span class="code-blue">console.log</span>
                <span>(response);</span>
            </div>
            <span>});</span>
        </div>
            <span>}</span>
        </code>
    </div>
    
        <h3>Using PUT request</h3>
    <div class="section__two-code-wrapper">
        <code>
        <span class="code-yellow">onInit</span>
        <span>() {</span>
        <div class="ml-1vw">
            <span class="code-red">TayaHTTP.</span>
            <span class="code-purple">PUT</span>
            <span>('</span>
            <span class="code-dark-blue">https://jsonplaceholder.typicode.com/posts/1</span>
            <span>',{</span>
            <span class="code-blue">title:</span>
            <span>'Foo',</span>
            <span class="code-blue">body:</span>
            <span>'bar',</span>
            <span class="code-blue">userId:</span>
            <span>1</span>
            <span>})</span>
        </div>
        <div class="ml-1vw">
            <span>.</span>
            <span class="code-red">then</span>
            <span>(</span>
            <span class="code-dark-blue">response =></span>
            <span>{</span>
            <div class="ml-3vw">
                <span class="code-blue">console.log</span>
                <span>(response);</span>
            </div>
            <span>});</span>
        </div>
            <span>}</span>
        </code>
    </div>
    
            <h3>Using PATCH request</h3>
    <div class="section__two-code-wrapper">
        <code>
        <span class="code-yellow">onInit</span>
        <span>() {</span>
        <div class="ml-1vw">
            <span class="code-red">TayaHTTP.</span>
            <span class="code-purple">PATCH</span>
            <span>('</span>
            <span class="code-dark-blue">https://jsonplaceholder.typicode.com/posts/1</span>
            <span>',{</span>
            <span class="code-blue">title:</span>
            <span>'Foo'</span>
            <span>})</span>
        </div>
        <div class="ml-1vw">
            <span>.</span>
            <span class="code-red">then</span>
            <span>(</span>
            <span class="code-dark-blue">response =></span>
            <span>{</span>
            <div class="ml-3vw">
                <span class="code-blue">console.log</span>
                <span>(response);</span>
            </div>
            <span>});</span>
        </div>
            <span>}</span>
        </code>
    </div>
    
                <h3>Using DELETE request</h3>
    <div class="section__two-code-wrapper">
        <code>
        <span class="code-yellow">onInit</span>
        <span>() {</span>
        <div class="ml-1vw">
            <span class="code-red">TayaHTTP.</span>
            <span class="code-purple">DELETE</span>
            <span>('</span>
            <span class="code-dark-blue">https://jsonplaceholder.typicode.com/posts/1</span>
            <span>')</span>
        </div>
        <div class="ml-1vw">
            <span>.</span>
            <span class="code-red">then</span>
            <span>(</span>
            <span class="code-dark-blue">response =></span>
            <span>{</span>
            <div class="ml-3vw">
                <span class="code-blue">console.log</span>
                <span>(response);</span>
            </div>
            <span>});</span>
        </div>
            <span>}</span>
        </code>
    </div>
</main>
    `
})