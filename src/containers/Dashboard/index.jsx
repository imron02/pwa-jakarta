import React, { Component } from 'react';
import { Layout } from 'antd';

import Menus from '../../components/Menus';
import HeaderMnu from '../../components/HeaderMenu';
import './index.scss';

const { Content } = Layout;

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <HeaderMnu />
        <Layout>
          <Menus />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
            }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
