import {TayaModule} from "tayaJS";
import {appComponent} from "./app.component";
import {appHeader} from "./common/header.component";
import {homePageComponent} from "./pages/home-page.component";
import {aboutUsComponent} from "./pages/about-us.component";
import {notFound} from "./common/not-found.component";
import {multiPipe} from "./shared/pipes/multi.pipe";
import {commonTayaJSPipes} from "tayaJS";

class AppModule extends TayaModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    rootComponent: appComponent,
    routes: [
        {
            path: '', component: homePageComponent
        },
        {
            path: 'about', component: aboutUsComponent
        },
        {
            path: '**', component: notFound
        }
    ],
    pipes: [
        multiPipe,
        ...commonTayaJSPipes
    ]
})