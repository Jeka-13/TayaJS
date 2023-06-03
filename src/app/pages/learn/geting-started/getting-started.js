import {TayaComponent} from "tayaJS";

class GettingStarted extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const gettingStarted = new GettingStarted({
    selector: 'app-getting-started',
    template:`
        <main class="main-wrapper">
        <h1>Getting started</h1>
        <h3>This paragraph will help you with the installation of the library and will explain what is TayaJS.</h3>
        <p>TayaJS is a class-based library on JavaScript that will help you in making simple single-page applications. It has component-module architecture.
            To use the TayaJS, you should be familiar with the following:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <h3>To install TayaJS on your local system, you need the following:</h3>
        <ul>
            <li>Node.js version <b>17.4.0 or higher</b>. <i>(You can check the version, by typing in console 'node -v')</i></li>
            <li>npm version <b>8.3.1 or higher.</b> <i>(You can check the version, by typing in console 'npm -v')</i></li>
        </ul>
        <h3>Installation</h3>
        <p>To install the library, you should visit the main GitHub page:
            <a href="https://github.com/Jeka-13/TayaJS">Link</a></p>
        <p>Download the repository, using the command:
            <i>"git clone https://github.com/Jeka-13/TayaJS.git"</i></p>
            <p>Run the command: <i>"npm install"</i></p>
        <h3>Run the application</h3>
        <p><i>npm start</i> - will run the application in the development mode on 4200 port</p>
        <p><i>npm run dev</i> - will build the application in the development mode</p>
        <p><i>npm run build</i> - will build the application in the production mode</p>
    </main>
`,

})