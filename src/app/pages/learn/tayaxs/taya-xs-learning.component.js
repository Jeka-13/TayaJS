import {TayaComponent} from "tayaJS";

class TayaXsLearningComponent extends TayaComponent {
    constructor(config) {
        super(config);
    }
}

export const appTayaXSLearning = new TayaXsLearningComponent({
    selector: 'app-taya-xs-learning',
    template: `
    <main class="main-wrapper">
    <h1>TayaXS</h1>
    <p>TayaXS is a state management library. The architecture of TayaXS is based on three main components: the store,
        the actions, and the reducers.</p>
    <h3>Store</h3>
    <p>he store is the central component of the Redux architecture. It holds the state of the application and provides
        methods for updating the state and notifying any subscribers of changes. The store is created using the createStore
        function provided by TayaXS.</p>
        <p>In addition to holding the state of the application, the store also provides several useful methods for
            interacting with the state: dispatch(action), subscribe(listener) and getState(). Dispatch function dispatches
            an action to the store, triggering a state update. Subscribe – registers a listener function to be called whenever
            the state changes. The listener receives the current state as an argument. GetState – returns the current
            state of the store.</p>

    <h3>Actions</h3>
    <p>Actions are payloads of information that are sent to the store to update the state. They are plain JavaScript
        objects that contain a type property indicating the type of action being performed, as well as any additional
        data needed to perform the action.</p>
    <p>Action types are strings that define the type of action being performed. They are typically defined as constants
        to avoid typos and ensure consistency throughout the application.</p>
    <p>Action creators are functions that create and return action objects. They typically take in any necessary data
        as arguments and return an action object with a type property indicating the type of action being performed,
        along with any additional data.</p>

    <h3>Reducers</h3>
    <p>Reducers are pure functions that take the current state and an action as arguments, and return a new state object based on the action. Reducers are responsible for updating the state in response to actions. Here are some additional details about reducers:</p>
    <p>Reducers should always return a new state object, rather than modifying the existing state object in place. This ensures that the state remains immutable, which helps to prevent bugs and make the application more predictable.</p>
    <p>Reducers should handle any action that is dispatched to the store, even if it’s not relevant to the current state. In this case, the reducer should simply return the current state object unchanged.</p>
    
    <h3>In action</h3>
<!--    Code snippets-->
</main>
    `
})