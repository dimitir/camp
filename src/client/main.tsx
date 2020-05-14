import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
  import rootSaga from './store/Saga/sagas';
import { StylesProvider } from "@material-ui/core/styles";
import App from './App';
import reducer from './store/storeConfig/rootReducers';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>

  </Provider>
  ,
  document.getElementById('root')
);