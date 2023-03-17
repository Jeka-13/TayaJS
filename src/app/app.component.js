// TO DO
// Configure webpack for loading HTML by files not by hardcode HTML
// Or maybe to create special templateUrl and template for two possibilities ?????

import {TayaComponent} from "../library/imports";
import './app.component.css'

class AppComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: ` 
        <app-header></app-header>
        <div> Wow, your library is working </div> 
        <router-outlet></router-outlet>
    `
})