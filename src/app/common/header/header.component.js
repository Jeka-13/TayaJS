import {TayaComponent} from "tayaJS";
import './header.css'

class HeaderComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new HeaderComponent({
    selector: 'app-header',
    template: `
            <header class="header">
        <nav class="header__navigation">
            <ul class="header__navigation-list">
                <li class="header__navigation-list-item">
                    <a class="header__navigation-list-item-link" href="#">
                        TayaJS
                    </a>
                </li>
                <li class="header__navigation-list-item">
                    <a class="header__navigation-list-item-link" href="#learn/getting-started">
                        Learn
                    </a>
                </li>
                <li class="header__navigation-list-item">
                    <a class="header__navigation-list-item-link" href="../about.html">
                        About us
                    </a>
                </li>
                <li class="header__navigation-list-item">
                    <a class="header__navigation-list-item-link" href="https://github.com/Jeka-13/TayaJS">
                        Git
                    </a>
                </li>
            </ul>
        </nav>
    </header>
<!--        <div>-->
<!--            <h1>Это шапка</h1>-->
<!--            <h3>да-да она самая</h3>-->
<!--             <a href="#">Home</a>-->
<!--             <a href="#about">About</a>-->
<!--        </div> -->
    `
})