import {TayaComponent, TayaHTTP} from "tayaJS";

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
        TayaHTTP.GET('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });

        TayaHTTP.POST('https://jsonplaceholder.typicode.com/posts', {title: 'Foo', body: 'bar', userId: 1})
            .then(response => {
                console.log(response);
            });

        TayaHTTP.PUT('https://jsonplaceholder.typicode.com/posts/1', {title: 'Foo', body: 'bar', userId: 1})
            .then(response => {
                console.log(response);
            });

        TayaHTTP.PATCH('https://jsonplaceholder.typicode.com/posts/1', {title: 'foo'})
            .then(response => {
                console.log(response);
            });

        TayaHTTP.DELETE('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
            });
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
            <div>
                <h3 appHover="blue">Hover me</h3>
            </div>
        </div>`,
    styles: `
        .about__wrapper {
           display: flex; 
        }
    `
})