import {TayaComponent} from "tayaJS";

class ComponentsComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponentLearning = new ComponentsComponent({
    selector: 'app-learning-component',
    template: `
    <main class="main-wrapper">
    <h1>Components</h1>
    <h3>What are components?</h3>
    <p>Components are reusable parts of the code that contains variables and HTML code. Components in TayaJS are
        class-based and in order to create your own component, you should extend it from the base class TayaComponent.
        It is the first step, before writing any code. </p>
    <p>The parent class is expecting a configuration object in the constructor as a parameter, which contains
        such fields as selector, template, and state.</p>
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
                <span>}</span>
        </code>
    </div>
      <h3>Selector</h3>
    <p>The selector is responsible for the name of the HTML tag which will be used as a reference to generate all the
        component’s logic. Developers should be careful with the selector name as soon as it must be unique, in order
        not to get errors.</p>
    <h3>Template</h3>
    <p>The template is HTML code that will represent the component’s logic. It can contain variables, by writing them
        in a such way: {{variable}}. In this way, TayaJS will consider it not like plain text. TayaJS supports Pipes,
        which can be written in this way: {{variable | pipeName: parameters}}. By writing “|” TayaJS will automatically
        call the pipe and will proceed with the variable based on Pipe’s logic.</p>
    <h3>State</h3>
    <p>The state is an object, which contains all the variables. The key of the state object is the name of the variable
        and the value of the key is the value of a variable.</p>
    <h3>Styles</h3>
    <p>The styles weren’t mentioned, because they are optional. TayaJS, for the moment, supports adding CSS files through
        two approaches. In the first one, a developer is making an import of the CSS file. The second one developer
        implicitly are writing styles using a key-value approach.</p>
    <h3>Binding</h3>
    <p>As it can see there is one-way binding: components are giving to the template variables and the only component can
        change them. Templates are binding only events and components are responsible for logic and manipulations.
        In components, the developers will create a special function called ‘events’. It returns an object which, as a key,
        contains the event name and selector, but as a value, it has a function, which will be used as a callback for the
        event listener.</p>
    <div class="section__two-code-wrapper">
        <code>
            <span class="code-red">export const</span>
            <span class="code-yellow">appComponent</span>
            <span>=</span>
            <span class="code-red">new</span>
            <span class="code-purple">AppComponent</span>
            <span>({</span>
            <div class="ml-1vw">
                <span class="code-blue">selector</span>
                <span>:</span>
                <span class="code-dark-blue">'app-root'</span>
                <span>,</span>
            </div>
           <div class="ml-1vw">
               <span class="code-blue">template</span>
               <span>:</span>
               <span class="code-dark-blue">\`</span>
               <span class="code-yellow">&lt;app-header&gt;&lt;/app-header&gt;</span>
               <div class="ml-13vw">
                   <span class="code-yellow">&lt;div&gt;</span>
                   <span class="code-dark-blue">This text relates to app.component, everything below is rendered depending
                       on the route</span>
                   <span class="code-yellow">&lt;/div&gt;</span>
                   <span class="code-yellow">&lt;router-outlet&gt;&lt;/router-outlet&gt;</span>
                   <span class="code-dark-blue">\`</span>
               </div>
               })
           </div>
        </code>
    </div>
</main>
    `
})