export const router = {
    render(routes) {
        const currentUrl = window.location.hash.slice(1);
        let route = routes.find(r => r.path === currentUrl);
        if (!route) {
            route = routes.find(r => r.path === '**');
        }
        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        return route.component;
    }
}