import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router-dom';

import userImage from '../../assets/images/user.png';
import { firebase } from '../../utils/firebase';
import './index.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderMenu extends Component {
  state = {
    isLogout: false
  }

  renderSubMenu = () => (
    <div className="submenu-title-wrapper">
      <img src={userImage} alt="user menu" className="logo-user-submenu" />
    </div>
  );

  onLogout = (e) => {
    if (Number(e.key) === 1) {
      firebase.auth().signOut().then(() => {
        this.setState({ isLogout: true });
      }).catch(() => {
        // An error happened.
      });
    }
  }

  render() {
    const { isLogout } = this.state;

    if (isLogout) {
      return <Redirect to="/login" />;
    }

    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          mode="horizontal"
          theme="dark"
          className="header-menu"
          onClick={this.onLogout}
        >
          <SubMenu title={this.renderSubMenu()}>
            <Menu.Item key="1">Log out</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

export default HeaderMenu;
