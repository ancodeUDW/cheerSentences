import React                from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled               from "styled-components";

export default class ImageButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        let {source, styleImage, onPress, style} = this.props;

        return (
            <StyledTouchableOpacity
                onPress={onPress}
                style={style || {}}
            >
                <StyledImg
                    source = {source}
                    style  = {styleImage || {}}
                />
            </StyledTouchableOpacity>
        );
    }

}

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;



