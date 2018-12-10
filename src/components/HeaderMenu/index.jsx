import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import './index.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderMenu extends Component {
  state = {}

  renderSubMenu = () => (
    <div className="submenu-title-wrapper" />
  );

  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu mode="horizontal" theme="dark" className="header-menu">
          <SubMenu title={this.renderSubMenu()}>
            <Menu.Item key="1">Log out</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

export default HeaderMenu;
