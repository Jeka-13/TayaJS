import {TayaComponent} from "tayaJS";
import '../normalize.css'
import './app.component.css'
import './common/code-snippet.css'

class AppComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: ` 
        <app-header></app-header>
        <div class="learn-wrapper">
            <app-sidebar></app-sidebar>
            <router-outlet class="main-wrapper"></router-outlet>
        </div>
        <app-footer></app-footer>
    `
})