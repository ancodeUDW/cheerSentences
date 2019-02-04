import React                   from 'react';
import * as R                  from 'ramda';
import {getState}              from 'app/store/index';
import sentencesStateSelectors from 'app/store/reducer/sentenceState/selectors.js'
import HOCSentence             from './components/HOCSentences/index'

import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';

const processSentenceRouting = (baseValues, routeId) => {
    baseValues  = R.assocPath(['RouteConfigs', routeId], {screen: HOCSentence(routeId)}, baseValues);
    return baseValues;
};

const createSentenceRouting = () => {
    let state = getState();
    let sentencesById = sentencesStateSelectors.sentencesById(state);

    let RouteConfigsBase = {};

    let NavigatorConfig = {
        initialRouteName: "DEFAULT"
    };

    let RouteConfigs = R.reduce(processSentenceRouting, RouteConfigsBase, sentencesById);
    return {NavigatorConfig, RouteConfigs}
};

let {RouteConfigs, NavigatorConfig} = createSentenceRouting();

const CheerioNavigator = createDrawerNavigator(RouteConfigs, NavigatorConfig);


export default createAppContainer(CheerioNavigator);