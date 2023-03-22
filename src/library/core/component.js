export class Component {
    constructor(config) {
        this.state = config.state;
        this.selector = config.selector;
        this.template = config.template;
        this.element = null;
    }

    render() {
        this.element = document.querySelector(this.selector);
        if (!this.selector)
            throw new Error('Please, introduce the name of the selector')
        else if (!this.template.trim())
            throw new Error('Please, add HTML code for your selector')
        else if (!this.element)
            throw new Error(`Component with ${this.selector} name wasn't found`)

        this.element.innerHTML = this.renderTemplate(this.template, this.state);

        this._initEvents();
    }

    _initEvents() {
        if(!this.events) return;
        let events = this.events();
        Object.keys(events).forEach(key => {
            const [listenerType, selector] = key.split(' ');
            this.element.querySelector(selector).addEventListener(listenerType, events[key].bind(this))
        })
    }

    renderTemplate(template, state) {
        if (!state) return template;

        const regex = /\{{(.*?)}}/g
        template = template.replace(regex, (str, val) => {
             let key = val.trim();
             return state[key]
        })

        return template;
    }
}