/**
 * Created by tomihei on 17/02/10.
 */
import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStoreWithMiddleware(saga) {

  const store = composeEnhancers(applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
    saga,
    routerMiddleware(browserHistory)
  ))(createStore);
  return store(rootReducer);
}
