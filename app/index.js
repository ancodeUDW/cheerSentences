import React from 'react';
import * as R from 'ramda';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components";
import navParamCreatorService  from './utils/navigatorParamCreator/index';
import {initStore}             from './store/index';

import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';

initStore(); // the store decides where we will start the app. but we should build it first.


// updates the state and the navigator. // todo: maybe we should do that in the store????
let {RouteConfigs, NavigatorConfig} = navParamCreatorService.getRoutingPath();
const CheerioNavigator = createDrawerNavigator(RouteConfigs, NavigatorConfig);


export default createAppContainer(CheerioNavigator);