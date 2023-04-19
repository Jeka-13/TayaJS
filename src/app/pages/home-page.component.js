import {TayaComponent} from "tayaJS";

class HomePageComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home',
    template: `<div>This is home</div>`
})