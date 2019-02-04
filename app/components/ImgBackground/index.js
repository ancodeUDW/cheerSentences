import React       from 'react';
import {StatusBar} from 'react-native';
import styled      from "styled-components";
import Background  from './components/Background/index';

export default class ImgBackground extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        let {source, children} = this.props;
        return (
            <StyledView>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    hidden={true}
                />
                <Background source = {source}>
                    {children}
                </Background>
            </StyledView>
        );
    }
}

const StyledView = styled.View`
  background-color: #ffbeb8;
  align-items: center;
  justify-content: center;        
  flex: 1;
`;
