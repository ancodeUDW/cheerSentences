import * as R from 'ramda';
import data from 'app/theme';
import HOCIntro  from 'app/scenes/intro';

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
 * @param {function} HOCScene: high order component that returns an scene
 * @param {object} routeSpecs: the specs that we will pass to the high order component to make a route
 */
const appendRouteEl = R.curry((RouteConfigs, HOCScene, routeSpecs) => {
    let address = R.prop('route', routeSpecs);
    return R.assoc(address, {screen: HOCIntro(routeSpecs)}, RouteConfigs);
});

/**
 * Process a routeSpecs so we can add an element to RouteConfigs
 * @param RouteConfigs
 * @param routeSpecs
 */
const processRoute = (RouteConfigs, routeSpecs) => {
    return R.cond([
        [R.pathEq(['type'], INTRO),     appendRouteEl(RouteConfigs, HOCIntro)],
        // [R.pathEq(['type'], START),     appendRouteEl(RouteConfigs, HOCStart)], // todo
        // [R.pathEq(['type'], ABOUT),     appendRouteEl(RouteConfigs, HOCAbout)], // todo
        // [R.pathEq(['type'], SENTENCE),  appendRouteEl(RouteConfigs, HOCSentence)], // todo
        // [R.pathEq(['type'], CONFIG),    appendRouteEl(RouteConfigs, HOCConfig)], // todo
        [R.T,                       R.always(RouteConfigs)],                 // by default if we dont have type, we will return the element as we originally had
    ])(routeSpecs);
};

/**
 * Returns 2 objects that can be passed to the React-navigation "createDrawerNavigator" function
 * It generates this objects using the data stored in the "app/theme" folder.
 * @returns {{RouteConfigs, NavigatorConfig: {initialRouteName: string}}}
 */
const createParam = () => {
    let RouteConfigs = {};
    let NavigatorConfig = {
        initialRouteName: data.GENERAL.initialRoute
    };

    const go = R.pipe(
        R.prop('SCENES'),
        R.values,
        R.reduce(processRoute, RouteConfigs)
    );

    RouteConfigs = go(data);

    return {RouteConfigs, NavigatorConfig}
};

export default {
    createParam
};