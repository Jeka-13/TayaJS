import {TayaModule} from "tayaJS";
import {appComponent} from "./app.component";
import {appHeader} from "./common/header/header.component";
import {homePageComponent} from "./pages/home/home-page.component";
import {notFound} from "./common/not-found.component";
import {multiPipe} from "./shared/pipes/multi.pipe";
import {commonTayaJSPipes} from "tayaJS";
import {appHoverDirective} from "./directives/hover.directive";
import {appFooter} from "./common/footer/footer.component";
import {appSidebar} from "./pages/learn/sidebar/sidebar.component";
import {gettingStarted} from "./pages/learn/geting-started/getting-started";
import {appModulesComponent} from "./pages/learn/modules/modules.component";
import {appComponentLearning} from "./pages/learn/components/components.component";

class AppModule extends TayaModule {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
        appFooter,
        appSidebar
    ],
    rootComponent: appComponent,
    routes: [
        {
            path: '', component: homePageComponent
        },
        {
            path: 'learn/getting-started', component: gettingStarted
        },
        {
            path: 'learn/modules', component: appModulesComponent
        },
        {
            path: 'learn/components', component: appComponentLearning
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