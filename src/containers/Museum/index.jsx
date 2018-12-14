import React, { Component } from 'react';

import BaseContainer from '../index';
import './index.scss';

class Museum extends Component {
  state = {}

  render() {
    return (
      <BaseContainer {...this.props}>
        <h1>Selamat datang </h1>
      </BaseContainer>
    );
  }
}

export default Museum;
