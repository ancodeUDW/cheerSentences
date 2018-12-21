import React from 'react';
import * as R from 'ramda';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components";
import data from './theme';

// import {
//     createDrawerNavigator,
// } from 'react-navigation';
//
//
// const Cherio = createDrawerNavigator(
//     {
//         Intro:      { screen: IntroScreen },
//         Home:       { screen: HomeScreen },
//         Happy:      { screen: HappyScreen },
//         Neutral:    { screen: NeutralScreen },
//         Sad:        { screen: SadScreen },
//         About:      { screen: AboutScreen },
//     },
//     {
//         initialRouteName: 'Intro', // the intro screen will do an animation
//     }
// );

export default class App extends React.Component {
    render() {
        return (
            <Text>
                {'hola 1'}
                <StyledPanelImage source={data.SCENES.INTRO.logo}/>
                <StyledPanelImage source={data.SCENES.INTRO.mascot[0]}/>
                <StyledPanelImage source={data.SCENES.INTRO.mascot[1]} />
                {'adios 2'}
            </Text>
        );
    }
}

const StyledPanelImage = styled.Image`
  flex: 1;
  z-index: 10;
  align-items: center;
  display: ${props => props.hide ? 'none' : 'flex'}
`;