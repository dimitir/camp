import React from 'react';
import ReactDOM from 'react-dom';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import AppContainer from './appPortal';
import App from './App';
  import { EffectDemo } from './UsesUseEffect';
// import AppContainer from './appContainer';
import Modals from './components/header/modals/portalModals/modalContainer'
import reducer from './store/reducers';
import './app.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Modals />
  </Provider>,
  document.getElementById('root')
);
