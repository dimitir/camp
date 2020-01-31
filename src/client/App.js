import { Component } from 'react';
import React from 'react'
import './app.css';
import HeaderContainer from './components/header/HeaderContainer';
import BodyContainer from './components/body/BodyContainer';





export default class App extends Component {

    render() {
        return (
            <>
                <HeaderContainer />
                <BodyContainer />
            </>
        )
    }
}
