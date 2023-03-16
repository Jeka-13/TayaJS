// TO DO
// Configure webpack for loading HTML by files not by hardcode HTML
// Or maybe to create special templateUrl and template for two possibilities ?????

import {TayaComponent} from "../library/imports";

class AppComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: ` 
        <div> Wow, your shit is working </div> 
    `
})