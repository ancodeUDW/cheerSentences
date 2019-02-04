import * as R from "ramda";
import u from "updeep";
import data from "theme/index.js";
import sceneConst from "app/constants/scenes";


/**
 * returns the same base values, but updates the state to add sentence info.
 * @param baseValues
 * @param routeSpecs
 */
const storeSentenceInfo = R.curry((baseValues, routeSpecs) => {
    const {title, route: sentenceId, type, balloon,
        background, mascot, mascotAniTime, sentence,
        buttonIcon, sentenceSource} = routeSpecs;
    // const sentenceId = route;

    const addElement = R.assoc(sentenceId);

    const modification = {
        mascots:         addElement(mascot),
        mascotTimes:     addElement(mascotAniTime),
        balloons:        addElement(balloon),
        sentenceSources: addElement(sentenceSource || sentence),
        titles:          addElement(title),      // todo: maybe we wont use this?
        buttons:         addElement(buttonIcon),
        backgrounds:     addElement(background), // the id will be used in the route,
        sentencesById:   R.append(sentenceId),
    };

    return u(modification, baseValues);

});


const processSentenceStore = (baseValues, routeSpecs) => {

    return R.cond([
        [R.pathEq(['type'], sceneConst.SENTENCE),  storeSentenceInfo(baseValues)], // //appendRouteEl(RouteConfigs, processSentenceButtons, HOCSentence)], // todo: remember to add the information to create the bottom navigation button list - icon and route -
        [R.T,                           R.always(baseValues)],                 // by default if we dont have type, we will return the element as we originally had
    ])(routeSpecs);
};

const getSentenceState = () => {
    let baseValues = {
        mascots:         {},
        mascotTimes:     {},
        balloons:        {},
        sentenceSources: {},
        titles:          {},
        buttons:         {},
        sentencesById:   [], // the id will be used in the route
    };

    const go = R.pipe(
        R.prop('SCENES'),
        R.values,
        R.reduce(processSentenceStore, baseValues)
    );

    return go(data);
};

/**
 * Generates the initial state for the store
 */
const getInitialStoreState = () => {
    const useAdvertisement = R.path(['ADMOB', 'useAdvertisement'], data);
    const adMobCode        = R.path(['ADMOB', 'BANNER_ID'], data);
    const adMobTestCode    = R.path(['ADMOB', 'TEST', 'BANNER_ID'], data);

    const sentenceState    = getSentenceState();

    return {
        appState: {
            adMobCode,
            adMobTestCode, // todo: optional?
            useAdvertisement, // todo: optional?
        },
        sentenceState
    }

};

export default getInitialStoreState;