export function renderComponent(component) {
    if (component.onInit) {
        component.onInit();
    }
    component.render();
    if (component.afterViewInit) {
        component.afterViewInit();
    }
}