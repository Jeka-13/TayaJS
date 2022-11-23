// To do
// ? Can we somehow manipulate with styles if variable is true or false (display none/block)
// if not
// 1) Try to get all the children
// 2) put them in appendChild or innerHtml
// 3) Verify the condition of the variable which is came
// 4) Make a general function for verifying conditions
class MakeIf extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log(this.childNodes);
        this.innerHTML = `<h1>Hello</h1>`

    }
}

customElements.define('make-if', MakeIf);