import React from 'react';
import * as R from 'ramda';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components";
import navParamCreatorService  from 'app/utils/navigatorParamCreator';

import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';

let {RouteConfigs, NavigatorConfig} = navParamCreatorService.createParam();

const CherioNavigator = createDrawerNavigator(RouteConfigs, NavigatorConfig);


export default createAppContainer(CherioNavigator);