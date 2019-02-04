import { createStore } from 'redux';
import * as R          from 'ramda';
import {rootReducer}   from './reducer/index'
import navigatorParamCreator from 'app/utils/navigatorParamCreator/index';

let store = null;

const initStore = () => {
    let initialState = navigatorParamCreator.getInitialStoreState();

    store = createStore(rootReducer, initialState);
    console.log("store", store.getState())
};


const getStore = () => {
    if (R.isNil(store)){
        initStore();
    }

    return store;
};

const getState = () => {
    store = getStore();
    return store.getState();
};

export {
    getStore,
    getState,
    initStore
};

export default {
    getStore,
    getState,
    initStore
}
