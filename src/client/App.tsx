import { Component } from 'react';
import React from 'react'
import './app.global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContainerNavbar from './components/navbar/ContainerNavbar';
import AuthCallback from './components/authFront/AuthCallback';
import ContainerHikeCreate from './components/pages/going/createHikes/ContainerCreateHike';
import ContainerModalsCreator from './components/modals/ContainerModalsCreator';
import CssBaseline from '@material-ui/core/CssBaseline';
import ContainerHikes from './components/pages/hikes/ContainerHikes';



export default class App extends Component {

    render() {

        return (
            <>
                <CssBaseline />
                <ContainerModalsCreator />
                <Router>
                    <ContainerNavbar />
                    <Switch>
                        <Route component={ContainerHikes} path='/' exact />
                        <Route component={ContainerHikeCreate} path='/going' exact />
                        
                        <Route component={AuthCallback}  />
                    </Switch>
                </Router>
            </>
        )
    }
}
