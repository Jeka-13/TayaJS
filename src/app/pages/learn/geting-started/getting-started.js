import {TayaComponent} from "tayaJS";

class GettingStarted extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const aboutUsComponent = new GettingStarted({
    selector: 'app-getting-started',
    template:`<div>
            <make-for cycle="let item of arrayTest">
            <div class="about__wrapper">
                <h4>Wow</h4>
                <h1>{{item}}</h1>
                <h3>word</h3>
            </div>
            </make-for>
           
            <div>{{number | multi:10}}</div>
            <div>
                <h3 appHover="blue">Hover me</h3>
            </div>
        </div>`,

})