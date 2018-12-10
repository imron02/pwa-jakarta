import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

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
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
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
