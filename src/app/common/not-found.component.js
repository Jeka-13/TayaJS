import {Component} from "../../library/core/component";

class NotFoundComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const notFound = new NotFoundComponent({
    selector: 'app-not-found',
    template: `<h1>Ooops. Not found!</h1>`
})