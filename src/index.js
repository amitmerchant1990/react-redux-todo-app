import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import MyApp from './App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>, 
    document.getElementById('root')
);
