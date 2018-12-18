import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Icon,
  Avatar
} from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { MENU } from '../../utils/constants';
import { firebase, db } from '../../utils/firebase';
import './index.scss';

const { Sider } = Layout;

class Menus extends Component {
  state = {
    collapsed: false,
    user: {}
  };

  componentDidMount() {
    this.getUserData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { history } = this.props;
    const { user } = this.state;

    if (user !== nextState.user) {
      return true;
    }

    if (history !== nextProps.history) {
      return true;
    }

    return false;
  }

  getUserData = async () => {
    try {
      const { uid } = firebase.auth().currentUser;
      const user = await db.collection('users').doc(uid).get();

      this.setState({ user: user.data() });
    } catch (error) {
      // Error
    }
  }

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  onClick = (e) => {
    const { history } = this.props;
    const pathname = get(this.props, 'history.location.pathname', MENU.DASHBOARD);

    if (e.key === pathname) return;

    switch (e.key) {
      case MENU.DASHBOARD:
        history.replace(MENU.DASHBOARD);
        break;
      case MENU.MUSEUM:
        history.replace(MENU.MUSEUM);
        break;
      default:
        break;
    }
  }

  render() {
    const { collapsed, user } = this.state;
    const pathname = get(this.props, 'history.location.pathname', MENU.DASHBOARD);

    return (
      <div>
        <div className="avatar-left">
          <Avatar icon="user" size={50} className="avatar-user" />
          <span>{user.fullname}</span>
        </div>
        <Sider
          collapsed={collapsed}
          onCollapse={this.toggle}
          className="sider-container"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            onClick={this.onClick}
            className="menu"
          >
            <Menu.Item key={MENU.DASHBOARD}>
              <Icon type="desktop" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key={MENU.MUSEUM}>
              <Icon type="home" />
              <span>Museum</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

Menus.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Menus;
