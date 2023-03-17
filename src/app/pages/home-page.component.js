import {Component} from "../../library/core/component";

class HomePageComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home',
    template: `<div>This is home</div>`
})