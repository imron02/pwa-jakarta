import React, { Component } from 'react';

import BaseContainer from '../index';
import './index.scss';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <BaseContainer {...this.props}>
        <h1>Selamat datang di aplikasi smart city Jakata</h1>
      </BaseContainer>
    );
  }
}

export default Dashboard;
