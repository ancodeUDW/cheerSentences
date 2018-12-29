import React         from 'react';
import CheerioKernel from './app/index.js'
import {Provider}    from 'react-redux';
import {store}       from './app/store';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <CheerioKernel/>
            </Provider>
        );
    }
}

