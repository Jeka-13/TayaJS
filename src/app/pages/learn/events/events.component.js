import {TayaComponent} from "tayaJS";

class EventsComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appEventsComponent = new EventsComponent({
    selector: 'app-events',
    template: `
    <main class="main-wrapper">
    <h1>Events</h1>
    <p>TayaJS provides another way of making events binding. First, the developer should create a special function
     <b>events</b>. It should return an object that contains the key type of the event listener and the id of the button. 
     As the value, it takes the function - event handler. Below you can see the example. </p>
     <div class="section__two-code-wrapper">
        <code>
        <span class="code-yellow">events</span>
        <span>() {</span>
        <div class="ml-1vw">
        <span class="code-red">return</span>
        <span>{</span>
        <div class="ml-1vw">
            <span class="code-dark-blue">'click #btn':</span>
            <span class="code-purple">this.onButtonClick</span>
        </div>
        <span>}</span>
        </div>
        <span>}</span>
        <br><br>
        <span class="code-yellow">onButtonClick</span>
        <span>(event) {</span>
        <div class="ml-1vw">
        <span class="code-red">console.log</span>
        <span>(event);</span>
        </div>
        <span>}</span>
        <br><br>
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
               <div class="ml-3vw">
                   <span class="code-yellow">&lt;div&gt;</span>
                   <div class="ml-1vw">
                   <span class="code-yellow">&lt;button <span class="code-dark-blue">id=</span><span class="code-red">"btn"</span>&gt;</span>
                   <span>Click me</span>
                   <span class="code-yellow">&lt;/button&gt;</span>
                   </div>
                   <span class="code-yellow">&lt;/div&gt;</span>
           </div>
           <span>})</span>
        </code>
    </div>
</main>

    `
})