import {Component} from "../../library/core/component";

class AboutUsComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const aboutUsComponent = new AboutUsComponent({
    selector: 'app-about-us',
    template:`<div>This is about us</div>`
})