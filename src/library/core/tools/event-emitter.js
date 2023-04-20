export class EventEmitter {
    constructor() {
        this.listeners = {}
    }

    on(eventName, callbackFunc) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callbackFunc);
    }

    emit(eventName, data) {
        if (!this.listeners[eventName]) {
            return;
        }
        this.listeners[eventName].forEach(listener => listener(data))
    }
}