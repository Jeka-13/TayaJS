import {TayaComponent} from "tayaJS";

class PresentationComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appPresentationComponent = new PresentationComponent({
    selector: 'app-presentation-component',
    state: {
      variableText: 'Variable text',
      diploma: false,
      students: ['Eugen', 'Artur', 'Alex'],
      number: 60
    },
    template: `
<!--        <div>-->
<!--          <p>Simple text</p>-->
<!--          <p>{{variableText}}</p>-->
<!--        </div>-->
        
        
<!--        <make-if condition="diploma">-->
<!--            <p>I am happy</p>-->
<!--        </make-if>-->
        
<!--        <make-for cycle="let student of students">-->
<!--            <h3>{{student}}</h3>-->
<!--            <p>Duplicated text</p>-->
<!--        </make-for>-->
       
<!--       <div>-->
<!--            <h3 appHover="blue">Hover me</h3>-->
<!--       </div>-->
<!--       -->
       <div>
            <div>{{number | multi:3}}</div>     
       </div>
        
    `
})