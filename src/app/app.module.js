import {TayaModule} from "tayaJS";
import {appComponent} from "./app.component";
import {appHeader} from "./common/header/header.component";
import {homePageComponent} from "./pages/home/home-page.component";
import {aboutUsComponent} from "./pages/learn/geting-started/getting-started";
import {notFound} from "./common/not-found.component";
import {multiPipe} from "./shared/pipes/multi.pipe";
import {commonTayaJSPipes} from "tayaJS";
import {appHoverDirective} from "./directives/hover.directive";
import {appFooter} from "./common/footer/footer.component";

class AppModule extends TayaModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
        appFooter
    ],
    rootComponent: appComponent,
    routes: [
        {
            path: '', component: homePageComponent
        },
        {
            path: 'learn/getting-started', component: aboutUsComponent
        },
        {
            path: '**', component: notFound
        }
    ],
    pipes: [
        multiPipe,
        ...commonTayaJSPipes
    ],
    directives: [
        appHoverDirective
    ]
})