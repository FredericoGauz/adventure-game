import { makeAutoObservable, reaction } from 'mobx';
import {makePersistable} from 'mobx-persist-store';

interface ApplicationStateInterface {
    debug: boolean;
}
class ApplicationState implements ApplicationStateInterface {
    debug: boolean = false;

    constructor() {
        makeAutoObservable(this);

        makePersistable(this, { name: 'applicationState', properties: ['debug'], storage: window.localStorage });
    }

    setDebug(debug: boolean) {
        this.debug = debug;
    }

    toggleDebug() {
        this.debug = !this.debug;
    }
}

export const applicationState = new ApplicationState();
