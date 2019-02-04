import React                from 'react';
import * as                 R from "ramda";
import styled               from "styled-components";

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
 * @param {object} specs: {
 *     {number} sentence, the welcome sentence we will use
 *     {array} setnenceSources, the source of all possible sentences we will use
 *     {array or string} mascot, an array of image addresses that will be animated
 *     {number} aniTime, time for the mascot to change frames
 *     {string} background, image that will be shown at the background
 * }, has the wait time, the mascot images and the logo
 * @returns {{new(*=): StartScene, prototype: StartScene}}
 * @constructor
 */
const HOCSentences = (specs) => {
    let {sentence, setnenceSources, mascot, mascotAniTime, background} = specs;

    // sentence is prioritary, if not, we use sentenceSources
    console.log("sentence", sentence);

    return class StartScene extends React.Component {

        constructor(props){
            super(props);
            this.state = {
            };
        }

        render() {
            let {navigation} = this.props;

            return (
                <ConvoScreen
                    mascot        = {mascot}
                    mascotAniTime = {mascotAniTime}
                    background    = {background}
                    textMsg       = {"How are you feeling today?\nUse the buttons below we will tell you something :)"}
                    navigation    = {navigation}
                    enableShare   = { false }
                />
            )
        }
    }
};

export default HOCSentences;