import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import history from './history';
import reducers from './reducers';
import sagas from './sagas';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));

  const store = createStore(reducers, middleware);
  sagaMiddleware.run(sagas);

  return store;
}
