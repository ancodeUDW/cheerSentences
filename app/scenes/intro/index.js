import * as R        from 'ramda';
import React         from 'react';
import AnimateImages from 'app/components/AnimateImages';
import ImgBackground from 'app/components/ImgBackground';
import styled        from "styled-components";

/**
 * All the elements inside scenes are high order components. they get as a parameter the data, and they return a react
 * element
 **/

const StyledAnimateImages = styled(AnimateImages)`
  width: 90%;
`;


const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 40px;
  color: red;
`;
const StyledLogo = styled.Image`
  width: 60%;
  height: 101px;
  resize-mode: contain;
  margin-top: 20%;
`;

/**
 * High order component that creates an introScene
 * in the specs:
 * {
 *
 * }
 *
 * @param {object} specs: {
 *     {number} waitTime, time we will have to wait for the intro to go to the next path
 *     {array or string} mascot, an array of image addresses that will be animated
 *     {string} logo, image address where the logo is
 *     {number} aniTime, time for the mascot to change frames
 *     {string} nextScene, the navigation address we will go after the time has finished
 * }, has the wait time, the mascot images and the logo
 * @returns {{new(*=): IntroScene, prototype: IntroScene}}
 * @constructor
 */
const HOCIntro = (specs) => {
    let {waitTime, mascot, logo, mascotAniTime, nextScene, background} = specs;
    waitTime        = R.defaultTo(3000, waitTime); // in ms
    mascotAniTime   = R.defaultTo([1000], mascotAniTime); // in ms
    // todo: make a default mascot

    return class IntroScene extends React.Component {

        constructor(props){
            super(props);

            this.mounted = false;
        }

        componentDidMount(){
            this.mounted = true;
            setTimeout(() => this.mounted ? this.goToNextScreen() : null, waitTime)
        }

        componentWillUnmount(){
            this.mounted = false;
        }

        render() {
            return (
                <ImgBackground
                    source={background}
                >
                    <StyledTouchableOpacity
                        onPress={this.goToNextScreen}
                    >
                        <StyledAnimateImages
                            timing   = {mascotAniTime}
                            frameSet = {mascot}
                        />
                        { this.renderLogo() }
                    </StyledTouchableOpacity>
                </ImgBackground>
            );
        }

        /**
         * renders the logo, if it exists
         * @returns {null}
         */
        renderLogo = () => {
            return R.isNil(logo) ? null : (
                <StyledLogo source = { logo }/>
            )
        };

        // todo
        /**
         * goes to the next scene in the line
         */
        goToNextScreen = () => {
            let {navigation} = this.props;
            return navigation.navigate(nextScene);
        };
    }
};

export default HOCIntro;