import { Component } from 'react';
import React from 'react'
import './app.global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPageContainer from './components/pages/mainPage/MainPageContainer';
import ContainerNavbar from './components/navbar/ContainerNavbar';
import AuthCallback from './components/authFront/AuthCallback';
import ContainerTrailsCreate from './components/pages/trails/createTrail/ContainerCreateTrail';
import ContainerModalsCreator from './components/modals/ContainerModalsCreator';
import CssBaseline from '@material-ui/core/CssBaseline';



export default class App extends Component {

    render() {

        return (
            <>
                <CssBaseline />
                <ContainerModalsCreator />
                <Router>
                    <ContainerNavbar />
                    <Switch>
                        <Route component={MainPageContainer} path='/' exact />
                        
                        <Route component={ContainerTrailsCreate} path='/trails/create' exact />

                        <Route component={AuthCallback} path='/auth' />
                    </Switch>
                </Router>
            </>
        )
    }
}
