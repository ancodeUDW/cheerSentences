import { createAction, createActions, handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import storeConstants from '../../constants';





const {setAdmobCode, setAdmobTestCode, setUseAdmob} = createActions({
    [storeConstants.APP_STATE.SET_ADMOB_CODE]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.APP_STATE.SET_ADMOB_CODE_TEST]:     undefined,
    [storeConstants.APP_STATE.SET_USE_ADMOB]:  undefined,
});


export default {
    setAdmobCode,
    setAdmobTestCode,
    setUseAdmob,
};

export {
    setAdmobCode,
    setAdmobTestCode,
    setUseAdmob,
};
