import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Landing from './Main/Landing';
import Navigation from '../containers/Main/Navigation';
import Home from '../containers/Main/Home';

import Account from '../containers/Account/Account';
import Signup from './Account/Signup';
import Signin from './Account/Signin';
import PasswordForget from './Account/PasswordForget';

import AdminDashboard from './AdminDashboard/Dashboard';

import StudentDashboard from './Student/Dashboard';

import Exam from './Exam/Exam';

import * as routes from '../constants/routes';
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
  adminOrStudent,
} from '../helpers/authHelpers';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.LANDING} component={userIsNotAuthenticated(Landing)} />
      <Route exact path={routes.SIGN_UP} component={userIsNotAuthenticated(Signup)} />
      <Route exact path={routes.SIGN_IN} component={userIsNotAuthenticated(Signin)} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={userIsNotAuthenticated(PasswordForget)}
      />
      <Route exact path={routes.HOME} component={userIsAuthenticated(Home)} />
      <Route exact path={routes.ACCOUNT} component={userIsAuthenticated(Account)} />
      <Route exact path={routes.EXAM} component={userIsAuthenticated(Exam)} />
      <Route
        path={routes.DASHBOARD}
        component={adminOrStudent(AdminDashboard, StudentDashboard)}
      />
    </div>
  </Router>
);

export default App;
