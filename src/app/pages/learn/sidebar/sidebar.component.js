import {TayaComponent} from "tayaJS";
import './sidebar.css'

class SidebarComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appSidebar = new SidebarComponent({
    selector: 'app-sidebar',
    template: `
     <div class="learn__sidebar-wrapper">
        <aside>
            <nav>
                <div class="learn-block-wrapper">
                    <a href="#learn/getting-started" class="learn-block-item">Getting started</a>
                    <a href="#learn/modules" class="learn-block-item">Modules</a>
                    <a href="#learn/components" class="learn-block-item">Components</a>
                    <a href="#learn/make-if" class="learn-block-item">Make-If</a>
                    <a href="#learn/make-for" class="learn-block-item">Make-For</a>
                    <a href="#learn/pipes" class="learn-block-item">Pipes</a>
                    <a href="#learn/directives" class="learn-block-item">Directives</a>
                    <a href="#learn/events" class="learn-block-item">Events</a>
                    <a href="#learn/routes" class="learn-block-item">Routes</a>
                    <a href="#learn/taya-xs" class="learn-block-item">TayaXS</a>
                    <a href="#learn/http-service" class="learn-block-item">HTTP Service</a>
                    <a href="#learn/lifecycle-hooks" class="learn-block-item">Lifecycle Hooks</a>
                </div>
            </nav>
        </aside>
    </div>
    `
})