import { createAction, createActions, handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import storeConstants from '../../constants/index';




const {
    addSentence,
    removeSentence
} =  createActions({
    [storeConstants.SENTENCE_STATE.ADD_SENTENCE]:           undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.REMOVE_SENTENCE]:        undefined, // given undefined, the Identity function will be used.

    // [storeConstants.SENTENCE_STATE.SET_MASCOTS]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.SET_MASCOT_TIMES]:    undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.SET_BALLOONS]:        undefined, // given undefined, the Identity function will be used. (id, information)
    // [storeConstants.SENTENCE_STATE.SET_BUTTONS]:         undefined, // given undefined, the Identity function will be used.
    //
    // [storeConstants.SENTENCE_STATE.SET_SOURCES]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.SET_TITLES]:          undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.SET_SENTENCES_BY_ID]: undefined, // given undefined, the Identity function will be used. (id)
    //
    // [storeConstants.SENTENCE_STATE.ADD_BALLOONS]:        undefined, // given undefined, the Identity function will be used. (id, information)
    // [storeConstants.SENTENCE_STATE.ADD_BUTTONS]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.ADD_MASCOTS]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.ADD_MASCOT_TIMES]:    undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.ADD_SOURCES]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.ADD_TITLES]:          undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.ADD_SENTENCES_BY_ID]: undefined, // given undefined, the Identity function will be used. (id)
    //
    // [storeConstants.SENTENCE_STATE.DEL_BALLOONS]:        undefined, // given undefined, the Identity function will be used. (id, information)
    // [storeConstants.SENTENCE_STATE.DEL_BUTTONS]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.DEL_MASCOTS]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.DEL_MASCOT_TIMES]:    undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.DEL_SOURCES]:         undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.DEL_TITLES]:          undefined, // given undefined, the Identity function will be used.
    // [storeConstants.SENTENCE_STATE.DEL_SENTENCES_BY_ID]: undefined, // given undefined, the Identity function will be used. (id)
});


export default {
    addSentence,
    removeSentence,
};

export {
    addSentence,
    removeSentence,
};
