import { connect } from 'react-redux';
import App from './App';

const AppContainer = connect(
    null,
    null
)(App);

export default AppContainer;


/* (dispatch) => ({
        dispatch,
    }) */