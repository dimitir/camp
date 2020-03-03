import { Component } from 'react';
import React from 'react'
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPageContainer from './components/mainPage/MainPageContainer';
import Navbar from './components/navbar/Navbar';

export default class App extends Component {

    render() {

        return (
            <>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route component={MainPageContainer} path='/' exact />
                    </Switch>
                </Router>
            </>
        )
    }
}
