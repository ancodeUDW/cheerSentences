import React from 'react';
import styled from "styled-components";

export default class App extends React.Component {

    render() {
        let {source} = this.props;
        return (
            <StyledImageBackground
                source = {source}
            >
                {this.props.children}
            </StyledImageBackground>
        );
    }
}

const StyledImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


