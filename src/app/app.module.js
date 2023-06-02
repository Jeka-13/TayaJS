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
import {appMakeifComponentLearning} from "./pages/learn/make-if/make-if.component";
import {appMakeForLearning} from "./pages/learn/make-for/make-for.component";
import {appPipesLearning} from "./pages/learn/pipes/pipes-learning.component";
import {appDirectivesLearning} from "./pages/learn/directives/directives-learning.component";
import {appEventsComponent} from "./pages/learn/events/events.component";
import {appRoutingLearningComponent} from "./pages/learn/routing/routing.component";

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
            path: 'learn/make-if', component: appMakeifComponentLearning
        },
        {
          path: 'learn/make-for', component: appMakeForLearning
        },
        {
            path: 'learn/pipes', component: appPipesLearning
        },
        {
          path: 'learn/directives', component: appDirectivesLearning
        },
        {
          path: 'learn/events', component: appEventsComponent
        },
        {
            path:'learn/routes', component: appRoutingLearningComponent
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