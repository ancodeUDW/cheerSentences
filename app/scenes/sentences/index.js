import React                from 'react';
import * as                 R from "ramda";
import styled               from "styled-components";
import createRouting        from './routing.js';

import { Button, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';

import ConvoScreen from 'app/components/ConvoScreen/index';

const GREY_PANEL_MARGINS = 25;



/**
 * High order component that creates an introScene
 * in the specs:
 * {
 *
 * }
 *
 * @param {object} sentenceArray
 * @returns {{new(*=): StartScene, prototype: StartScene}}
 * @constructor
 */
const HOCSentences = ({RouteConfigs, NavigatorConfig}) => {

    // sentence is priority, if not, we use sentenceSources
    return createRouting(RouteConfigs, NavigatorConfig)
    // return class StartScene extends React.Component {
    //
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //         };
    //     }
    //
    //     render() {
    //         let {navigation} = this.props;
    //
    //         return (
    //             <ConvoScreen
    //                 mascot        = {mascot}
    //                 mascotAniTime = {mascotAniTime}
    //                 background    = {background}
    //                 textMsg       = {"How are you feeling today?\nUse the buttons below we will tell you something :)"}
    //                 navigation    = {navigation}
    //                 enableShare   = { false }
    //             />
    //         )
    //     }
    // }
};

export default HOCSentences;