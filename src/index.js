import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import history from './history';
import configureStore from './store';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const rootElement = document.getElementById('root');


function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Component/>
        </div>
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
}


if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(require('./containers/app').default);
  })
}

registerServiceWorker();

render(App);
