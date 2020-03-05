import { Component } from 'react';
import React from 'react'
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPageContainer from './components/mainPage/MainPageContainer';
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
                    </Switch>
                </Router>
            </>
        )
    }
}
