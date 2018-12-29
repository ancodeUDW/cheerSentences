import { combineReducers }   from 'redux';
import appStateReducer       from './appState';


const rootReducer = combineReducers({
    appState: appStateReducer
});

export {rootReducer};
export default {rootReducer}

