import {TayaComponent} from "tayaJS";

class HeaderComponent extends TayaComponent {
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
             <a href="#">Home</a>
             <a href="#about">About</a>
        </div> 
    `
})