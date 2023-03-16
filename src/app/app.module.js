import {TayaModule} from "../library/imports";
import {appComponent} from "./app.component";

class AppModule extends TayaModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
})