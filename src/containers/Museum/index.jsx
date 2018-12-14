import React, { Component } from 'react';
import { Avatar } from 'antd';

import BaseContainer from '../index';
import './index.scss';

class Museum extends Component {
  state = {}

  componentDidMount() {
    this.getMuseumList();
  }

  getMuseumList = () => {
    const { getMuseum } = this.props;

    getMuseum();
  }

  render() {
    return (
      <BaseContainer {...this.props}>
        <div>
          <Avatar shape="square" size={150} icon="home" />
        </div>
        <h1>Selamat datang </h1>
      </BaseContainer>
    );
  }
}

export default Museum;
