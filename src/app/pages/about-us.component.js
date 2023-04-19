import {TayaComponent} from "tayaJS";

class AboutUsComponent extends TayaComponent {
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

    onInit() {
        console.log('OnInit lifecycle hook is called');
    }

    afterViewInit() {
        console.log('After view init lifecycle hook is called');
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
        number: 5,
        arrayTest: ['Jeka', 'Kirill', 'Artur', 'Alex']
    },
    selector: 'app-about-us',
    template:`<div>
            <make-for cycle="let item of arrayTest">
            <div class="about__wrapper">
                <h4>Wow</h4>
                <h1>{{item}}</h1>
                <h3>word</h3>
            </div>
            </make-for>
           
            <div>{{number | multi:10}}</div>
        </div>`,
    styles: `
        .about__wrapper {
           display: flex; 
        }
    `
})