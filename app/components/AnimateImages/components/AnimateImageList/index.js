import React from 'react';
import * as R from 'ramda';
import styled from "styled-components";

/**
 * Component that shows an animation with a series of images.
 * it has 2 props that are mandatory to be lists
 *  - timing:   list of times that will be used for animate each frame
 *  - frameSet: list of frames, using the address where the image will be found
 *
 *  note: to be use with HOCanimateTwoImages, so we can adapt the props to be the needed format
 */
class AnimateImageList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentFrame: 0,
            currentSpeed: 0,
            timing: Array.isArray(props.timing) ? props.timing : [props.timing]
        };
        this.mounted = false;

    }

    componentWillUpdate(){

    }

    componentDidMount(){
        this.mounted = true;
        this.initAnimation();
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    render() {
        let {style} = this.props;
        return (
            <StyledView style={style}>
                { this.renderFrames() }
            </StyledView>
        );
    }

    /**
     * renders the list of frames for the animation
     */
    renderFrames = () => {
        let {currentFrame} = this.state;
        let {frameSet}     = this.props;
        let i = 0;
        return R.map(imagePath => {
            let myFrame = this.renderFrame(imagePath, i, currentFrame);
            i =+ 1;
            return myFrame
        }, frameSet);
    };

    renderFrame = (imagePath, key, currentFrame) => {
        return (<AbsolutePosView key = {`${key}`} style={{opacity: key === currentFrame ? 1 : 0}}>
            <StyledImage source={imagePath} />
        </AbsolutePosView>)
    };

    initAnimation = () => {
        const animateCycle = () => {

            if (this.mounted){ // don't repeat the cycle if is not mounted
                let {timing}        = this.props;
                let {currentSpeed}  = this.state;
                setTimeout(() => this.changeFrame(animateCycle), timing[currentSpeed]);
            }
        };

        animateCycle();
    };

    changeFrame = (animateCycle) => {
        let {frameSet, timing}     = this.props;
        let myFrameLength = frameSet.length;
        let myTimingLength = timing.length;

        if (this.mounted) { // if is not mounted, don't set the state
            this.setState(oldState => {
                let nextFrame = oldState.currentFrame + 1;
                let nextSpeed = oldState.currentSpeed + 1;

                return {
                    currentFrame: nextFrame >= myFrameLength  ? 0 : nextFrame,
                    currentSpeed: nextSpeed >= myTimingLength ? 0 : nextSpeed,
                }
            });
            animateCycle();
        }
    };
}

const StyledView = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
`;

const AbsolutePosView = styled.View`
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;    
`;

const StyledImage = styled.Image`
  resize-mode: contain;
  width: 90%;
  height: 100%;
`;

export default AnimateImageList
