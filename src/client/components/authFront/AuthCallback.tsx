import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContainerCallBackGoogleAuth from './googleAuth/ContainerCallBackGoogleAuth';
import ContainerCallBackFacebookAuth from './facebookAuth/ContainerCallBackFacebookAuth';
import ContainerCallBackEmailAuth from './emailAuth/ContainerCallBackEmailAuth';


const AuthCallback = () => {
  return (
    <>
      <Switch>
        <Route component={ContainerCallBackGoogleAuth} path='/auth/google/callback' exact />
        <Route component={ContainerCallBackEmailAuth} path='/auth/email/callback' exact />
        <Route component={ContainerCallBackFacebookAuth} path='/auth/facebook/callback' exact />
      </Switch>
    </>
  )

}

export default AuthCallback