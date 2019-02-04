import * as R               from 'ramda';
import u                    from 'updeep';
import data                 from 'theme';

import createSecondaryRoutingValues from './utils/createSecondaryRoutingValues.js'
import HOCIntro     from 'app/scenes/intro/index';
import HOCSentences from 'app/utils/navigatorParamCreator/index';
import sceneConst from "app/constants/scenes";

// it is in sceneConst now
// const INTRO     = 'INTRO';
// const ABOUT     = 'ABOUT';
// const SENTENCE  = 'SENTENCE';
// const DEFAULT   = 'DEFAULT';

// {
//     Intro:      { screen: IntroScreen },
//     Home:       { screen: HomeScreen },
//     Happy:      { screen: HappyScreen },
//     Neutral:    { screen: NeutralScreen },
//     Sad:        { screen: SadScreen },
//     About:      { screen: AboutScreen },
// },
// {
//     initialRouteName: 'Intro', // the intro screen will do an animation
// }



/**
 * returns a copy of RouteConfigs with another path appended to it. The path will
 * be defined by the routeSpec. The scene will be defined by the HOCScene parameter
 * @param {object} RouteConfigs: an object that is composed by key (that is a route) and acomponent
 * @param {function} HOCScene: high order component that returns an scene
 * @param {object} routeSpecs: the specs that we will pass to the high order component to make a route
 */
const appendRouteEl = R.curry((baseValues, HOCScene, routeSpecs) => {
    let address = R.prop('route', routeSpecs);
    return R.assocPath(['RouteConfigs', address], {screen: HOCScene(routeSpecs)}, baseValues);
});



const appendSentences = R.curry((baseValues, HOCSentences, routeSpecs) => {
    console.log("enter in appendSentences");
    let address = R.prop('route', routeSpecs);
    let hocParameters = HOCSentences(createSecondaryRoutingValues(R.prop('data', routeSpecs)));

    return R.assocPath(['RouteConfigs', address], {screen: HOCSentences(hocParameters)}, baseValues);
});


/**
 * Process a routeSpecs so we can add an element to RouteConfigs
 * the routes we will process will be of 3 types: INTRO, SENTENCE, CONFIG, ABOUT
 * @param baseValues
 * @param routeSpecs
 */
const processRoute = (baseValues, routeSpecs) => {
    console.log("route specs", {routeSpecs, resultSentence: R.pathEq(['route'], sceneConst.SENTENCES, routeSpecs) });
    return R.cond([
        [R.pathEq(['route'], sceneConst.INTRO),         appendRouteEl(baseValues,    HOCIntro)],
        [R.pathEq(['route'], sceneConst.SENTENCES),     appendSentences(baseValues), HOCSentences],
        // [R.pathEq(['type'], CONFIG),    appendRouteEl(RouteConfigs, HOCConfig)], // todo
        // [R.pathEq(['type'], ABOUT),     appendRouteEl(RouteConfigs, HOCAbout)], // todo
        [R.T,                       R.always(baseValues)],                 // by default if we don't have type, we will return the element as we originally had
    ])(routeSpecs);
};


/**
 * Creates the base routing for the app
 * @returns {{RouteConfigs, NavigatorConfig}}
 */
const getRoutingPath = () => {
    let baseValues = {RouteConfigs: {}};
    let NavigatorConfig = {
        initialRouteName: data.GENERAL.initialRoute
    };

    const go = R.pipe(
        R.prop('SCENES'),
        R.values,
        R.reduce(processRoute, baseValues)
    );

    let {RouteConfigs} = go(data);

    console.log("final routing", {RouteConfigs, NavigatorConfig});

    return {RouteConfigs, NavigatorConfig}
};

export default {
    getRoutingPath,
};