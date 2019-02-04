import { handleActions }    from 'redux-actions';
import * as R               from 'ramda';
import u                    from 'updeep';
import storeConstants       from '../../constants/index';

const addSentenceHandler = (state, action) => {
    const {
        sentenceId,
        mascot,
        mascotTime,
        balloon,
        sentenceSource,
        title,
        button,
        background,
    } = action.payload;

    let exist = R.any(R.equals(sentenceId), state.sentencesById);

    const modifications = {
        mascots:         R.assoc(sentenceId, mascot),
        mascotTimes:     R.assoc(sentenceId, mascotTime),
        balloons:        R.assoc(sentenceId, balloon),
        sentenceSources: R.assoc(sentenceId, sentenceSource),
        titles:          R.assoc(sentenceId, title),
        buttons:         R.assoc(sentenceId, button),
        backgrounds:     R.assoc(sentenceId, background),
        sentencesById:   exist ? R.identity : R.append(R.equals(sentenceId))
    };

    return u(modifications, state)
};

const removeSentenceHandler = (state, action) => {
    const {
        sentenceId,
    } = action.payload;

    const modifications = {
        mascots:         R.dissoc(sentenceId),
        mascotTimes:     R.dissoc(sentenceId),
        balloons:        R.dissoc(sentenceId),
        sentenceSources: R.dissoc(sentenceId),
        titles:          R.dissoc(sentenceId),
        buttons:         R.dissoc(sentenceId),
        backgrounds:     R.dissoc(sentenceId),
        sentencesById:   R.reject(R.equals(sentenceId))
    };

    return u(modifications, state)
};


export default handleActions({
    [storeConstants.SENTENCE_STATE.ADD_SENTENCE]:     addSentenceHandler,
    [storeConstants.SENTENCE_STATE.REMOVE_SENTENCE]:  removeSentenceHandler,

}, storeConstants.SENTENCE_STATE.INITIAL_STATE);