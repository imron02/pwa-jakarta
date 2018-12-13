import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import { MENU } from '../../utils/constants';
import './index.scss';

const { Sider } = Layout;

class Menus extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.toggle}
        className="sider-container"
      >
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key={MENU.DASHBOARD}>
            <Icon type="desktop" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key={MENU.MUSEUM}>
            <Icon type="home" />
            <span>Museum</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Menus;
