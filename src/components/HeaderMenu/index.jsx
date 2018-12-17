import React, { Component } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { Redirect } from 'react-router-dom';

import userImage from '../../assets/images/user.png';
import logo from '../../assets/images/logo.png';
import { firebase } from '../../utils/firebase';
import './index.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderMenu extends Component {
  state = {
    isLogout: false
  }

  renderSubMenu = () => (
    <Avatar icon="user" className="avatar-user" />
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
        <div className="header-wrapper">
          <div className="logo">
            <img src={logo} alt="logo-jakarta" />
          </div>
          <Menu
            mode="horizontal"
            theme="light"
            className="header-menu"
            onClick={this.onLogout}
          >
            <SubMenu title={this.renderSubMenu()}>
              <Menu.Item key="1">Log out</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    );
  }
}

export default HeaderMenu;
