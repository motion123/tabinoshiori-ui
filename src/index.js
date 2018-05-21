/**
 * Created by tomihei on 17/02/10.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import login from './containers/login';
import CreateBookmark from './containers/Bookmark/createBookmark';
import BookmarkInfo from './containers/Bookmark/bookmarkInfo';
import UserInfo from './containers/user/userInfo';
import rootSaga from './sagas/rootsaga';
import createSagaMiddleware from 'redux-saga';
import { Router,Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import Header from './containers/header';
import App from './containers/app';
import * as Root from './constants/root';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore(sagaMiddleware);
const rootEl = document.getElementById('root');

sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
          <Route path ={Root.login} component={login}/>
          <Route path ={Root.CB} component={CreateBookmark}/>
          <Route path ={Root.bookmarkInfo} component={BookmarkInfo}/>
          <Route path={Root.user} components={UserInfo}>
          </Route>
      </Route>
    </Router>
  </Provider>,
  rootEl
);
