import React         from 'react';
import CheerioKernel from './app/index.js'
import {Provider}    from 'react-redux';
import {getStore}       from './app/store';

console.log("start");
export default class App extends React.Component {
    render() {
        console.log("configure")
        return (
            <Provider store={ getStore() }>
                <CheerioKernel/>
            </Provider>
        );
    }
}

