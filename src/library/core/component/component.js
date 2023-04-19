import {parsePipe} from "../pipes/pipes-registration/parse-pipe";
import {applyPipe} from "../pipes/pipes-registration/apply-pipe";
import {makeIf} from "../tools/special-tags/make-if";
import {makeFor} from "../tools/special-tags/make-for";

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

        this.#initEvents();
    }

    #initEvents() {
        if (!this.events) return;
        let events = this.events();
        Object.keys(events).forEach(key => {
            const [listenerType, selector] = key.split(' ');
            if (!this.element.querySelector(selector)) {
                return;
            }
            this.element.querySelector(selector).addEventListener(listenerType, events[key].bind(this))
        })
    }

    renderTemplate(template, state) {
        if (!state) return template;
        if (template.includes('make-for')) {
            template = makeFor(template, state);
        }
        let pipe;
        const regex = /\{{(.*?)}}/g
        template = template.replace(regex, (str, val) => {
             let key = val.trim();
             if (key.includes('|')) {
                 pipe = parsePipe(key);
                 key = key.split('|')[0].trim();
             }
             if(!pipe) return state[key];
             return applyPipe(pipe, state[key]);
        })
        if (template.includes('make-if')) {
            template = makeIf(template, state);
        }
        return template;
    }
}