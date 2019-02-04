import * as R             from 'ramda';
import { createSelector } from 'reselect'

const sentenceState = R.prop('sentenceState');

const mascots = createSelector(
    sentenceState,
    R.prop('mascots')
);

const mascotTimes = createSelector(
    sentenceState,
    R.prop('mascotTimes')
);

const balloons = createSelector(
    sentenceState,
    R.prop('balloons')
);

const sentenceSources = createSelector(
    sentenceState,
    R.prop('sentenceSources')
);

const titles = createSelector(
    sentenceState,
    R.prop('titles')
);

const buttons = createSelector(
    sentenceState,
    R.prop('buttons')
);

const sentencesById = createSelector(
    sentenceState,
    R.prop('sentencesById')
);

const backgrounds = createSelector(
    sentenceState,
    R.prop('backgrounds')
);


const getElement = R.curry((individualSelector, id, state) => {
    let go = R.pipe(
        individualSelector,
        R.prop(id)
    );

    return go(state);
});

const getMascot         = getElement(mascots);
const getMascotTime     = getElement(mascotTimes);
const getBalloon        = getElement(balloons);
const getSentenceSource = getElement(sentenceSources);
const getTitle          = getElement(titles);
const getButton         = getElement(buttons);
const getBackground     = getElement(backgrounds);

const getAllInfo = R.curry((id, state) => {
    return {
        mascot:         getMascot(id, state),
        mascotTime:     getMascotTime(id, state),
        balloon:        getBalloon(id, state),
        sentenceSource: getSentenceSource(id, state),
        title:          getTitle(id, state),
        background:     getBackground(id, state)
    }
});

const getButtonInfo = createSelector(
    buttons,
    sentencesById,
    (buttons, sentencesById) => R.map(el => ({[el]: R.prop(el, buttons)}), sentencesById)
);



export default {
    mascots,
    mascotTimes,
    balloons,
    sentenceSources,
    titles,
    buttons,
    backgrounds,

    sentencesById,
    getMascot,
    getMascotTime,
    getBalloon,
    getSentenceSource,
    getTitle,
    getButton,
    getAllInfo,
    getButtonInfo
}