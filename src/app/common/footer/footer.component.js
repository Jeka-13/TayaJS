import {TayaComponent} from "tayaJS";
import './footer.css'

class FooterComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appFooter = new FooterComponent({
    selector: 'app-footer',
    template: `
      <footer class="footer">
        <div class="footer__header-wrapper">
            <h4 class="footer__header">Made by Chetrar Eugeniu</h4>
            <h6 class="footer__header">2023</h6>
        </div>
        <div class="footer__link-wrapper">
            <a href="https://github.com/Jeka-13">GitHub</a>
            <a href="https://www.linkedin.com/in/eugeniu-chetrar/">LinkedIn</a>
        </div>
    </footer> 
    `
})