export class Module {
    constructor(config) {
        this.components = config.components;
        this.rootComponent = config.rootComponent;
    }

    start() {
        this.initComponents()
    }

    initComponents() {
        this.rootComponent.render();
        this.components.forEach(component => component.render())
    }
}