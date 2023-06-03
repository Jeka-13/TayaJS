import {TayaComponent} from "tayaJS";

class AboutComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appAboutComponent = new AboutComponent({
    selector: 'app-about-component',
    template: `
     <main>
        <h1>About us</h1>
        <p>TayaJS is a library for making single-page applications. TayaJS includes the necessary functionality for building these applications, such as conditional rendering, 
        iterative rendering, and a state management system for component communication. It offers both flexibility and simplicity.</p>
        <p>During the implementation of TayaJS, was used Webpack (a module bundler for JavaScript applications) and npm (Node package manager). 
Learned how to configure Webpack, work with Shadow DOM, and analyze code. Managed to understand how to build libraries, connect modules, and components.</p>
<p>The library contains elements similar to Angular, such as the modular-component approach, the way of implementing conditional 
and iterative rendering, and the way of connecting templates and components. For example, in Angular, conditional rendering 
is written like this: &lt;div *ngIf="true"&gt;&lt;/div&gt;, while in TayaJS: &lt;make-if condition="true"&gt;&lt;/make-if&gt;. From React, adopted the JSX approach and tried to reproduce it.</p>
    </main>
    `
})