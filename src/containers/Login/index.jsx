import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import './index.scss';
import { REDUX } from '../../utils/constants';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  state = {
    onSubmit: false
  };

  static defaultProps = {
    isLoggedIn: false
  }

  static getDerivedStateFromProps(props) {
    const { actionStatus } = props;

    if (!isEmpty(props.user)) {
      return {
        onSubmit: true
      };
    }

    if (actionStatus === REDUX.REQUEST_LOGIN_FAILED) {
      return {
        onSubmit: false
      };
    }

    return null;
  }

  onSubmit = (e) => {
    const { form, login } = this.props;
    e.preventDefault();

    this.setState({ onSubmit: true });
    form.validateFieldsAndScroll(async (formError, { email, password }) => {
      if (!formError) {
        try {
          login({ email, password });
        } catch (error) {
          // Error
          this.setState({ onSubmit: false });
        }
      } else {
        // Form Error
        this.setState({ onSubmit: false });
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isLoggedIn } = this.props;
    const { onSubmit } = this.state;

    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div id="form-login">
        <Form onSubmit={this.onSubmit} className="login-form">
          <div id="form-input-login">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Silahkan masukkan E-mail kamu!' },
                  { type: 'email', message: 'Yang kamu masukkan bukan E-mail yang valid!' }
                ]
              })(
                <Input
                  prefix={<Icon type="mail" className="input-icon" />}
                  type="email"
                  placeholder="Email"
                  size="large"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Silahkan masukkan password kamu!' },
                  { min: 6 }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" className="input-icon" />}
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                  size="large"
                />
              )}
            </FormItem>
          </div>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
              loading={onSubmit}
            >
              Log in
            </Button>
            <div className="signup-link">
              <Link to="/register">Sign Up</Link>
              <a href="#">Forgot Password?</a>
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
};

export default Form.create()(LoginForm);
