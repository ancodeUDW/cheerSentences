import * as R           from 'ramda';
import data             from 'app/theme';
import appStateActions  from 'app/store/actions/appState'

import HOCIntro from 'app/scenes/intro';
import HOCStart from 'app/scenes/start';

// todo: leave this in a const file?
const INTRO     = 'INTRO';
const START     = 'START';
const ABOUT     = 'ABOUT';
const SENTENCE  = 'SENTENCE';


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
 * @param {function} processRoutingButtons: function that processes the RoutingButtons
 * @param {function} HOCScene: high order component that returns an scene
 * @param {object} routeSpecs: the specs that we will pass to the high order component to make a route
 */
const appendRouteEl = R.curry((baseValues, processRoutingButtons, HOCScene, routeSpecs) => {
    let address = R.prop('route', routeSpecs);
    baseValues = R.assocPath(['RouteConfigs', address], {screen: HOCScene(routeSpecs)}, baseValues);
    baseValues = R.assoc('RoutingButtons', processRoutingButtons(baseValues.RoutingButtons), baseValues)
    console.log("APPEND ROUTE EL", baseValues);
    return baseValues;
});

/**
 * Process a routeSpecs so we can add an element to RouteConfigs
 * @param baseValues
 * @param routeSpecs
 */
const processRoute = (baseValues, routeSpecs) => {

    return R.cond([
        [R.pathEq(['type'], INTRO),     appendRouteEl(baseValues, R.identity, HOCIntro)],
        [R.pathEq(['type'], START),     appendRouteEl(baseValues, R.identity, HOCStart)],
        // [R.pathEq(['type'], SENTENCE),  appendRouteEl(RouteConfigs, processSentenceButtons, HOCSentence)], // todo: remember to add the information to create the bottom navigation button list - icon and route -
        // [R.pathEq(['type'], CONFIG),    appendRouteEl(RouteConfigs, R.identity, HOCConfig)], // todo
        // [R.pathEq(['type'], ABOUT),     appendRouteEl(RouteConfigs, R.identity, HOCAbout)], // todo
        [R.T,                       R.always(baseValues)],                 // by default if we dont have type, we will return the element as we originally had
    ])(routeSpecs);
};

/**
 * Returns 2 objects that can be passed to the React-navigation "createDrawerNavigator" function
 * It generates this objects using the data stored in the "app/theme" folder.
 * @returns {{RouteConfigs, NavigatorConfig: {initialRouteName: string}}}
 */
const createParam = () => {
    let baseValues = {RouteConfigs: {}, RoutingButtons: []};
    let NavigatorConfig = {
        initialRouteName: data.GENERAL.initialRoute
    };

    const go = R.pipe(
        R.prop('SCENES'),
        R.values,
        R.reduce(processRoute, baseValues)
    );

    let {RouteConfigs, RoutingButtons } = go(data);

    console.log('CREATE PARAM', {RouteConfigs, RoutingButtons, NavigatorConfig});

    return {RouteConfigs, RoutingButtons, NavigatorConfig}
};

/**
 * updates the store's data with the theme data
 */
const updateState = (store) => {
    const useAdmob       = data.ADMOB.advertisement;
    const BANNER_ID      = data.ADMOB.BANNER_ID;
    const TEST_BANNER_ID = data.ADMOB.TEST.BANNER_ID;

    store.dispatch(appStateActions.setUseAdmob(BANNER_ID));
    store.dispatch(appStateActions.setAdmobCode(BANNER_ID));
    store.dispatch(appStateActions.setAdmobTestCode(TEST_BANNER_ID));
};

export default {
    createParam,
    updateState,
};