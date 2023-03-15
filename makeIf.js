// TO DO
// 1 get values from component
// 2 work with boolean operators
// 3 work with truthy && falsy
class MakeIf extends HTMLElement {
    attribute = null;
    constructor() {
        super();
        try {
            if (!this.hasAttribute("condition"))
                throw new Error('Condition attribute is not written');
            this.attribute = this.getAttribute("condition");
            if (!this.attribute.trim())
                throw new Error('Condition is not written');
            console.log(this.attribute);
        }
        catch (e) {
            console.log(e);
        }

        if (!this.attribute) {
            this.innerHTML = ``;
        }
    }
}

customElements.define('make-if', MakeIf);