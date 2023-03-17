import {Component} from "../../library/core/component";

class HeaderComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new HeaderComponent({
    selector: 'app-header',
    template: `
        <div>
            <h1>Это шапка</h1>
            <h3>да-да она самая</h3>
        </div> 
    `
})