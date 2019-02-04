import { combineReducers }   from 'redux';
import appStateReducer       from './appState/index';
import sentenceStateReducer  from './sentenceState/index';


const rootReducer = combineReducers({
    appState: appStateReducer,
    sentenceState: sentenceStateReducer
});

export {rootReducer};
export default {rootReducer}

