import React from 'react';
import * as R from 'ramda';
import styled from "styled-components";
import AnimateImageList from "./components/AnimateImageList";


/**
 * high order component that adapts the props so both of them are always arrays. This way the component
 * accept 2 types of values always:
 *  timing: an array of times - in ms - or a time - in ms -
 *  frameSet: an array of image addresses, or just one.
 *
 */
class AnimateImagesHOC extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log("animate images hoc 1", {self: this, props: this.props});
        let {timing, frameSet} = this.props;

        timing   = Array.isArray(timing)   ? timing   : [timing];
        frameSet = Array.isArray(frameSet) ? frameSet : [frameSet];
        //
        let adaptedProps = R.mergeAll([this.props, {timing, frameSet}]);

        // we call the original component and pass all the props, with timing and frameSet modified
        return (
            <AnimateImageList {...adaptedProps}/>
        )
    }

}

export default AnimateImagesHOC
