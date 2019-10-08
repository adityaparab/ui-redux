abstract class FrameworkItem {
    key: string;
    value: string;
    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }
}

export class Middleware extends FrameworkItem {
    constructor(key: string, value: string) {
        super(key, value);
    }
}

export class StoreLibrary extends FrameworkItem {
    middlewares: Middleware[];
    constructor(key: string, value: string, middlewares: Middleware[]) {
        super(key, value);
        this.middlewares = middlewares;
    }
}

export class Framework extends FrameworkItem {
    storeModules: StoreLibrary[]
    constructor(key: string, value: string, storeModules: StoreLibrary[]) {
        super(key, value);
        this.storeModules = storeModules;
    }
}

const ReduxThunk = new Middleware('reduxThunk', 'Redux Thunk');
const ReduxPromise = new Middleware('reduxPromise', 'Redux Promise');
const ReduxSaga = new Middleware('reduxSaga', 'Redux Saga');
const ReduxObservable = new Middleware('reduxObservable', 'Redux Observable');
const NgRxEffects = new Middleware('ngrxEffect', '@ngrx/effects');

const ReduxStore = new StoreLibrary('redux', 'Redux', [
    ReduxThunk,
    ReduxPromise,
    ReduxSaga,
    ReduxObservable
]);

const NgRxStore = new StoreLibrary('ngrx', '@ngrx/store', [NgRxEffects]);

const ANGULAR = new Framework('angular', 'Angular', [NgRxStore, ReduxStore]);
const ANGULARJS = new Framework('angularjs', 'Angular JS', [ReduxStore]);
const REACT = new Framework('react', 'React', [ReduxStore]);
const REACT_TS = new Framework('reactTs', 'React with Typescript', [ReduxStore]);

export const FrameworkLibrariesMap = [
    ANGULAR,
    ANGULARJS,
    REACT,
    REACT_TS
];
