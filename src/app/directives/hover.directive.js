import {TayaDirective} from "tayaJS";

class AppHoverDirective extends TayaDirective {
    constructor(props) {
        super(props);
    }
}

export const appHoverDirective = new AppHoverDirective({
    name: '[appHover]',
    transform (element, color) {
        const defaultColor = element.style.color;
        element.addEventListener('mouseenter', () => {
            element.style.color = color;
        });
        element.addEventListener('mouseleave', () => {
            element.style.color = defaultColor;
        });
    }
})