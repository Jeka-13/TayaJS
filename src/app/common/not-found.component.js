import {TayaComponent} from "tayaJS";

class NotFoundComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const notFound = new NotFoundComponent({
    selector: 'app-not-found',
    template: `<h1>Ooops. Not found!</h1>`
})