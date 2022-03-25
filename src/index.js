import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import { spamWordsMiddleware } from './redux/middleware';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));

reportWebVitals();
