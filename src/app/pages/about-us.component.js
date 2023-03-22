import {Component} from "../../library/core/component";

class AboutUsComponent extends Component {
    constructor(config) {
        super(config);
    }

    events() {
        return {
            'click #btn': this.onButtonClick
        }
    }

    onButtonClick(event) {
        console.log(event);
    }
}

export const aboutUsComponent = new AboutUsComponent({
    selector: 'app-about-us',
    template:`<div>
            This is about us
            <button id="btn">Click me</button>
        </div>`
})