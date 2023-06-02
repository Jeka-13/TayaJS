import {TayaComponent} from "tayaJS";

class DirectivesLearningComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appDirectivesLearning = new DirectivesLearningComponent({
    selector: 'app-directives-learning',
    template: `
    <main class="main-wrapper">
    <h1>Directives</h1>
    <h3>What are directives?</h3>
    <p>In TayaJS exist attribute directives. Attribute directives are used to add or remove the behavior from an element,
        without adding or removing the element itself. </p>
    <div class="section__two-code-wrapper">
        <code>
            <span class="code-red">export const</span>
            <span class="code-yellow">appHoverDirective </span>
            <span>= </span>
            <span class="code-red">new</span>
            <span class="code-purple">AppHoverDirective</span>
            <span>({</span>
            <div class="ml-3vw">
                <span class="code-blue">name</span>
                <span>:</span>
                <span class="code-dark-blue">'[appHover]'</span>
                <span>,</span>
            </div>
            <div class="ml-1vw">
                <span class="code-yellow">transform</span>
                <span>(</span>
                <span class="code-purple">element, color</span>
                <span>) {</span>
            </div>
            <div class="ml-3vw">
                <span class="code-red">const</span>
                <span class="code-yellow">defaultColor</span>
                <span>=</span>
                <span class="code-dark-blue">element.style.color;</span>
                <span class="code-dark-blue">element.addEventListener</span>
                <span>('</span>
                <span class="code-yellow">mouseenter</span>
                <span>', () => {</span>
                <div class="ml-3vw">
                    <span class="ml-3vw">element.style.color</span>
                    <span>=</span>
                    <span class="code-yellow">color;</span>
                </div>
                <span>});</span>
                <span class="code-dark-blue">element.addEventListener</span>
                <span>('</span>
                <span class="code-yellow">mouseleave</span>
                <span>', () => {</span>
                <div class="ml-3vw">
                    <span class="ml-3vw">element.style.color</span>
                    <span>=</span>
                    <span class="code-yellow">defaultColor;</span>
                </div>
                <span>});</span>
            </div>
            <div class="ml-1vw">
                <span>}</span>
            </div>
            <span>})</span>
        </code>
    </div>
    <p>For example, tayaHover is a directive that helps users to make hover easier and as a parameter, it takes styles
        that can be used for this specific case. TayaJS provides a variety of directives and gives developers the possibility
        to add their directives.</p>
</main>
    `
})