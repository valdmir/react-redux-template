/*eslint-disable import/default*/
// console.log("hi!");
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadExpenses} from './actions/expenseActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap-social.css';
import './styles/sb-admin-2.css'; //import sb admin css
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/react-metismenu.css';
import './styles/timeline.css'; //Webpack can import css files too!
import '../node_modules/toastr/build/toastr.min.css';
import './styles/app.css'; //Webpack can import css files too!
import './styles/nprogress.css';
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadExpenses());
render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
