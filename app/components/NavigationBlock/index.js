// https://market.mashape.com/andruxnet/random-famous-quotes
import React                from 'react';
import * as R               from 'ramda';
import Expo                 from 'expo';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateImages        from 'app/components/AnimateImages/index';
import ImgBackground        from "../ImgBackground/index";
import AdBanner             from 'app/components/adBanner/index';
import NavigationBlock      from 'app/components/NavigationBlock/index'

import ImageButton          from 'app/components/ImageButton/index';



const MAX_NORMAL_CHARS = 114;
const MAX_DRAGGABLE_CHARS = 141; // todo: aprox

const AnimatedChar = styled(AnimateImages)`
  width: 90%;
`;


const GREY_PANEL_MARGINS = 25;



const GreyPanel = styled.View`
  width: ${Dimensions.get('window').width - GREY_PANEL_MARGINS*2};
  margin-left: ${GREY_PANEL_MARGINS}px;
  margin-right: ${GREY_PANEL_MARGINS}px;
  margin-bottom: ${GREY_PANEL_MARGINS}px;
  background-color: #bd8cbf;
  border-radius: 50px;
  display: flex;
  padding: 7px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const StyledImageButton = styled(ImageButton)`
  width: 50px;
  height: 50px;
`;





/**
 * Represents the Conversation Screens.
 *
 * {object} props: {
 *     {array or string} mascot, an array of image addresses that will be animated
 *     {array or number} mascotAniTime, time for the mascot to change frames
 *     {string} background, image that will be shown at the background
 *     {string} textMsg, message to be shown in the page
 *     {boolean} enableShare, let the user share the message when clicking in the bubble
 * }, has the wait time, the mascot images and the logo
 */
class ConvoScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showAd: false
        };

        this.isMonted = false;
    }

    render = () => {


        return (
            <ImgBackground
                source={background}
            >
                <GreyPanel>
                    <StyledImageButton
                        source  = {smileHappy}
                        onPress = {this.goToHappy}
                    />
                    <StyledImageButton
                        source  = {smileNeutral}
                        onPress = {this.goToNeutral}
                    />
                    <StyledImageButton
                        source  = {smileSad}
                        onPress = {this.goToSad}
                    />
                </GreyPanel>

            </ImgBackground>
        );
    };

    renderButtons = () => {

    };

    // goToSad = () => {
    //     // this.props.goToSad();
    //     playSound()
    //         .then(() => {
    //             let {navigation, goToSad} = this.props;
    //             R.isNil(goToSad) ? navigation.navigate('Sad')
    //                 : goToSad();
    //         });
    // };
}

ConvoScreen.defaultProps = {

};


export default ConvoScreen


