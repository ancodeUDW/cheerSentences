import { createAction, createActions, handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import storeConstants from '../../constants';




const {
    setBalloon, setButton, setMascot, setMascotTime, setSentencesById, setSource, setTitle,
    addBalloon, addButton, addMascot, addMascotTime, addSentencesById, addSource, addTitle,
    delBalloon, delButton, delMascot, delMascotTime, delSentencesById, delSource, delTitle,
} =  createActions({
    [storeConstants.SENTENCE_STATE.SET_BALLOON]:         undefined, // given undefined, the Identity function will be used. (id, information)
    [storeConstants.SENTENCE_STATE.SET_BUTTON]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.SET_MASCOT]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.SET_MASCOT_TIME]:     undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.SET_SOURCE]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.SET_TITLE]:           undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.SET_SENTENCES_BY_ID]: undefined, // given undefined, the Identity function will be used. (id)

    [storeConstants.SENTENCE_STATE.ADD_BALLOON]:         undefined, // given undefined, the Identity function will be used. (id, information)
    [storeConstants.SENTENCE_STATE.ADD_BUTTON]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.ADD_MASCOT]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.ADD_MASCOT_TIME]:     undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.ADD_SOURCE]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.ADD_TITLE]:           undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.ADD_SENTENCES_BY_ID]: undefined, // given undefined, the Identity function will be used. (id)

    [storeConstants.SENTENCE_STATE.DEL_BALLOON]:         undefined, // given undefined, the Identity function will be used. (id, information)
    [storeConstants.SENTENCE_STATE.DEL_BUTTON]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.DEL_MASCOT]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.DEL_MASCOT_TIME]:     undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.DEL_SOURCE]:          undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.DEL_TITLE]:           undefined, // given undefined, the Identity function will be used.
    [storeConstants.SENTENCE_STATE.DEL_SENTENCES_BY_ID]: undefined, // given undefined, the Identity function will be used. (id)
});


export default {
    setBalloon, setButton, setMascot, setMascotTime, setSentencesById, setSource, setTitle,
    addBalloon, addButton, addMascot, addMascotTime, addSentencesById, addSource, addTitle,
    delBalloon, delButton, delMascot, delMascotTime, delSentencesById, delSource, delTitle,
};

export {
    setBalloon, setButton, setMascot, setMascotTime, setSentencesById, setSource, setTitle,
    addBalloon, addButton, addMascot, addMascotTime, addSentencesById, addSource, addTitle,
    delBalloon, delButton, delMascot, delMascotTime, delSentencesById, delSource, delTitle,
};
