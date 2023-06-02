import {TayaComponent} from "tayaJS";

class EventsComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appEventsComponent = new EventsComponent({
    selector: 'app-events',
    template: `
    <main class="main-wrapper">
    <h1>Events</h1>
    <p>TBD</p>
</main>

    `
})