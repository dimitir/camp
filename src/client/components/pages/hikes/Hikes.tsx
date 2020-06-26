import React from 'react';
import env from '../../../../env';
import ContainerHikesList from './hikesList/ContainerHikeList';
import ContainerCreateHike from './createHikes/ContainerCreateHike';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Hikes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route component={ContainerHikesList} path='/hikes/list' exact />
                    <Route component={ContainerCreateHike} path='/hikes/create' exact />
                    {/*  <Route component={ContainerMyHikes} path={`${env.hostFront}/hikes/list`} exact />
                <Route component={ContainerHikeLead} path={`${env.hostFront}/hikes/list`} exact />
                <Route component={ContainerHistoryHike} path={`${env.hostFront}/hikes/list`} exact /> */}
                </Switch>
            </Router>
        </>
    )
}


export default Hikes;