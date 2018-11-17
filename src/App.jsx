import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NormalLoginForm from './containers/Login';
import 'antd/dist/antd.css';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={NormalLoginForm} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])).isRequired
};

Topics.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])).isRequired
};

export default App;
