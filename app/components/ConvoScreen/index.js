// https://market.mashape.com/andruxnet/random-famous-quotes
import React                from 'react';
import * as R               from 'ramda';
import Expo                 from 'expo';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateImages        from 'app/components/AnimateImages';
import ImgBackground        from "../ImgBackground";
import AdBanner             from 'app/components/adBanner';

// import ImageButton          from 'app/components/ImageButton';
// import ComicPanel           from 'app/components/ComicPanel';



const MAX_NORMAL_CHARS = 114;
const MAX_DRAGGABLE_CHARS = 141; // todo: aprox

const AnimatedChar = styled(AnimateImages)`
  width: 90%;
`;


const GREY_PANEL_MARGINS = 25;



// const GreyPanel = styled.View`
//   width: ${Dimensions.get('window').width - GREY_PANEL_MARGINS*2};
//   margin-left: ${GREY_PANEL_MARGINS}px;
//   margin-right: ${GREY_PANEL_MARGINS}px;
//   margin-bottom: ${GREY_PANEL_MARGINS}px;
//   background-color: #bd8cbf;
//   border-radius: 50px;
//   display: flex;
//   padding: 7px;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
// `;

// const StyledImageButton = styled(ImageButton)`
//   width: 50px;
//   height: 50px;
// `;


async function playSound(){
    // Todo: buggy, lets fix it in the future
    // let soundObject           = new Expo.Audio.Sound();
    // let result = null;
    // try {
    //     await soundObject.loadAsync(require('app/multimedia/sound/clickSound.mp3'));
    //     result = soundObject.playAsync();
    //     // Your sound is playing!
    // } catch (error) {
    //     result = Promise.resolve;
    //     // An error occurred!
    // }
    //
    // return result;
    return Promise.resolve();
}


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

    componentDidMount = () => {
        this.isMonted = true;
        setTimeout(() => this.isMonted ? this.setState({showAd: true}) : null, 5000)
    };

    componentWillUnmount = () => {
        this.isMonted = false;
    };

    render = () => {
        let {
            background,
            mascot,
            mascotAniTime,
            textMsg,
            enableShare,
        } = this.props;

        let {DRAGGABLE, TEXT_SIZE} = R.cond([
           [R.gte(MAX_NORMAL_CHARS),        () => ({DRAGGABLE: false,  TEXT_SIZE: '23px'})],
           [R.gte(MAX_DRAGGABLE_CHARS),     () => ({DRAGGABLE: false,  TEXT_SIZE: '20px'})],
           [R.lt(MAX_DRAGGABLE_CHARS),      () => ({DRAGGABLE: true,   TEXT_SIZE: '20px'})],
           [R.T(),                          () => ({DRAGGABLE: false,  TEXT_SIZE: '20px'})]
        ])(textMsg.length);

        return (
            <ImgBackground
                source={background}
            >
                <AnimatedChar
                    timing   = {mascotAniTime}
                    frameSet = {mascot}
                />

                {this.addDelayBanner()}
            </ImgBackground>

        )
        //
        // return (
        //     <ImgBackground
        //         source={background}
        //     >
        //         {/*<ComicPanel*/}
        //             {/*textMsg = {textMsg}*/}
        //             {/*textSource = {textSource}*/}
        //             {/*style   = {{...panelStyle, width: '90%'}}*/}
        //             {/*onPress = {onPanelPress}*/}
        //             {/*show    = {showTop}*/}
        //             {/*fontSize = {TEXT_SIZE}*/}
        //             {/*draggable = {DRAGGABLE}*/}
        //             {/*enableShare = { enableShare }*/}
        //         {/*/>*/}
        //
        //         <AnimatedChar
        //             timming = {blinkTime}
        //             image1  = {CharImg1}
        //             image2  = {CharImg2}
        //             style   = {imageStyle}
        //         />
        //
        //         {/*<ComicPanel*/}
        //             {/*textMsg = {textSource}*/}
        //             {/*style   = {{...sourceStyle, width: '90%' }}*/}
        //             {/*onPress = {onPanelPress}*/}
        //             {/*panelDirection = {"TOP"}*/}
        //             {/*show    = {showBottom}*/}
        //             {/*enableShare = { enableShare }*/}
        //         {/*/>*/}
        //
        //         {/*<NavigationPanel/> /!* TODO: this panel should get info from somewhere *!/*/}
        //         {/*<GreyPanel>*/}
        //             {/*<StyledImageButton*/}
        //                 {/*source  = {smileHappy}*/}
        //                 {/*onPress = {this.goToHappy}*/}
        //             {/*/>*/}
        //             {/*<StyledImageButton*/}
        //                 {/*source  = {smileNeutral}*/}
        //                 {/*onPress = {this.goToNeutral}*/}
        //             {/*/>*/}
        //             {/*<StyledImageButton*/}
        //                 {/*source  = {smileSad}*/}
        //                 {/*onPress = {this.goToSad}*/}
        //             {/*/>*/}
        //         {/*</GreyPanel>*/}
        //         {this.addDelayBanner()}
        //
        //     </ImgBackground>
        // );
    };

    addDelayBanner = () => {
        let {showAd} = this.state;
        return <AdBanner type={'relative'}/>;
    };
    //
    // goToHappy = () => {
    //     // this.props.goToHappy();
    //     playSound()
    //         .then(() => {
    //             let {navigation, goToHappy} = this.props;
    //             R.isNil(goToHappy) ? navigation.navigate('Happy')
    //                                : goToHappy();
    //         });
    // };
    //
    // goToNeutral = () => {
    //     // this.props.goToNeutral();
    //     playSound()
    //         .then(() => {
    //             let {navigation, goToNeutral} = this.props;
    //             R.isNil(goToNeutral) ? navigation.navigate('Neutral')
    //                 : goToNeutral();
    //         });
    //
    // };
    //
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
    // CharImg1,
    // CharImg2,
    // blinkTime,
    textMsg: "test message",
    panelStyle: {},
    imageStyle: {},
    sourceStyle: {},
    onPanelPress: () => {},
    showTop: true,
    showBottom: false,
    enableShare: true,
    // goToHappy: () => {},
    // goToNeutral: () => {},
    // goToSad: () => {}
};


export default ConvoScreen


