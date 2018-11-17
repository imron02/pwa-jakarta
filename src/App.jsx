import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import NormalLoginForm from './containers/Login';
import RegisterForm from './containers/Register';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={NormalLoginForm} />
      <Route exact path="/register" component={RegisterForm} />
    </div>
  </Router>
);

export default App;
