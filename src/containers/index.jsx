import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import Menus from '../components/Menus';
import HeaderMnu from '../components/HeaderMenu';
import './index.scss';

const { Content } = Layout;

class BaseContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <HeaderMnu />
        <Layout>
          <Menus {...this.props} />
          <Layout className="base-container">
            <Content className="content-layout">
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

BaseContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BaseContainer;
