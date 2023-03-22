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
    state: {
        title: 'Dynamic title',
        btnName: 'Click me!!'
    },
    selector: 'app-about-us',
    template:`<div>
            {{title}}
            <button id="btn">{{btnName}}</button>
        </div>`
})