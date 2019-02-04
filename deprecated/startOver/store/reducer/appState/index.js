import { handleActions }    from 'redux-actions';
import * as R               from 'ramda';
import u                    from 'updeep';
import storeConstants       from '../../constants/index';

let handleSetAction = R.curry((target, state, action) => u({[target]: () => action.payload}, state));


export default handleActions({
    [storeConstants.APP_STATE.SET_ADMOB_CODE]:         handleSetAction('adMobCode'),
    [storeConstants.APP_STATE.SET_ADMOB_CODE_TEST]:    handleSetAction('adMobTestCode'),
    [storeConstants.APP_STATE.SET_USE_ADMOB]: handleSetAction('useAdvertisement'),
}, storeConstants.APP_STATE.INITIAL_STATE);