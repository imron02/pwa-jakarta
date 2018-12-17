import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { MENU } from '../../utils/constants';
import './index.scss';

const { Sider } = Layout;

class Menus extends Component {
  state = {
    collapsed: false
  };

  shouldComponentUpdate(nextProps) {
    const { history } = this.props;

    if (history === nextProps.history) {
      return false;
    }

    return true;
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
    const { collapsed } = this.state;
    const pathname = get(this.props, 'history.location.pathname', MENU.DASHBOARD);

    return (
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
    );
  }
}

Menus.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Menus;
