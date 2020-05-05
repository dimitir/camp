import { Component } from 'react';
import React from 'react'
import './app.global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPageContainer from './components/mainPage/MainPageContainer';
import ContainerCallBackGoogleAuth from './components/authFront/googleAuth/ContainerCallBackGoogleAuth';
import ContainerCallBackFacebookAuth from './components/authFront/facebookAuth/ContainerCallBackFacebookAuth';
import ContainerCallBackEmailAuth from './components/authFront/emailAuth/ContainerCallBackEmailAuth';
import NavbarContainer from './components/navbar/NavbarContainer';
import ContainerModalsCreator from './components/modals/ContainerModalsCreator';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends Component {

    render() {

        return (
            <>
                <CssBaseline />
                <ContainerModalsCreator />
                <Router>
                    <NavbarContainer />
                    <Switch>
                        <Route component={MainPageContainer} path='/' exact />
                        <Route component={ContainerCallBackGoogleAuth} path='/auth/google/callback' exact />
                        <Route component={ContainerCallBackEmailAuth} path='/auth/email/callback' exact />
                        <Route component={ContainerCallBackFacebookAuth} path='/auth/facebook/callback' exact />
                    </Switch>
                </Router>
            </>
        )
    }
}
