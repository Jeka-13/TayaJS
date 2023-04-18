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
        btnName: 'Click me!!',
        testPipe2: 'AAAAAAAA',
        objectPipeTest: {
            name: 'Kirill',
            age: 23,
            occupation: ['coding', 'guitar'],
            friends: {
                name: 'Jeka',
                age: 23,
                occupation: ['coding', 'gym']
            }
        },
        date: new Date(),
        number: 5
    },
    selector: 'app-about-us',
    template:`<div>
            
            {{date | datePipe}},
            {{date | datePipe:full}},
            {{date | datePipe:date}},
            {{date | datePipe:day}},
            {{date | datePipe:month}},
            {{date | datePipe:year}},
            {{date | datePipe:shortDate}},
            {{title | datePipe}}
            <hr>
            <button id="btn">{{btnName}}</button>
            <div>{{number | multi:10}}</div>
        </div>`
})