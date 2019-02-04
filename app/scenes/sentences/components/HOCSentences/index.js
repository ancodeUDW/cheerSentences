import React                from 'react';
import * as                 R from "ramda";
import styled               from "styled-components";

import { Button, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';

import ConvoScreen          from './components/ConvoScreen/index';

const GREY_PANEL_MARGINS = 25;



/**
 * High order component that creates an introScene
 * in the specs:
 * {
 *
 * }
 *
 * @param {string} sentenceId
 * @constructor
 */
const HOCSentences = (sentenceId) => {


    return class SentencesScene extends React.Component {

        constructor(props){
            super(props);
            this.state = {
            };
        }

        render() {
            return (
                <ConvoScreen
                    sentenceId = {sentenceId}
                />
            )
        }
    }
};

export default HOCSentences;