import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import { firebase } from './utils/firebase';
import { MENU } from './utils/constants';
import store from './utils/store';
import NormalLoginForm from './containers/Login';
import RegisterForm from './containers/Register';
import Dashboard from './containers/Dashboard';
import Museum from './containers/Museum/container';

import './app.scss';
import pwaImage from './assets/images/pwa.png';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  if (authed) {
    return (
      <Route {...rest} render={props => <Component {...props} />} />
    );
  }

  return (
    <Route
      {...rest}
      render={props => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  if (authed) {
    return (
      <Route render={() => <Redirect to="/dashboard" />} />
    );
  }

  return (
    <Route {...rest} render={props => <Component {...props} />} />
  );
};

class App extends React.Component {
  state = {
    isLoggedIn: false,
    loading: true
  }

  componentDidMount() {
    this.authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, loading: false });
      } else {
        this.setState({ isLoggedIn: false, loading: false });
      }
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  renderLoader = () => (
    <div className="route-loader">
      <img src={pwaImage} alt="pwa loader" className="image-loader" />
    </div>
  );

  render() {
    const { loading, isLoggedIn } = this.state;

    if (loading) { return this.renderLoader(); }

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <PublicRoute exact authed={isLoggedIn} path="/" component={NormalLoginForm} />
              <PublicRoute authed={isLoggedIn} path={MENU.LOGIN} component={NormalLoginForm} />
              <PublicRoute authed={isLoggedIn} path={MENU.REGISTER} component={RegisterForm} />
              <PrivateRoute authed={isLoggedIn} path={MENU.DASHBOARD} component={Dashboard} />
              <PrivateRoute authed={isLoggedIn} path={MENU.MUSEUM} component={Museum} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
