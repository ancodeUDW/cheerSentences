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

console.log("route configs la la", {RouteConfigs, NavigatorConfig})

const CherioNavigator = createDrawerNavigator(RouteConfigs, NavigatorConfig);

// const CherioNavigator = (<Text>hola</Text>)


export default createAppContainer(CherioNavigator);