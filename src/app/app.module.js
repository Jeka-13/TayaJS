import {TayaModule} from "../library/imports";
import {appComponent} from "./app.component";
import {appHeader} from "./common/header.component";

class AppModule extends TayaModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    rootComponent: appComponent
})