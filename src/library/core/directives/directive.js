export class Directive {
    constructor(config) {
        this.directiveName = config.name;
        this.transform = config.transform;
    }

    init() {
        const elements = document.querySelectorAll(this.directiveName);
        if (elements && this.transform) {
            elements.forEach(element => {
                this.transform(element, this.#getDirectiveValue(element));
            })
        }
    }

    #getDirectiveValue(element) {
        return element.getAttribute(this.directiveName.slice(1).slice(0, this.directiveName.length - 2))
    }
}