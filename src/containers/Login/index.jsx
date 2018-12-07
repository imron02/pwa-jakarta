import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  notification
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { firebase } from '../../utils/firebase';
import { ERROR_CODE } from '../../utils/constants';
import './index.scss';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    onSubmit: false,
    isLoggedIn: false
  };

  onSubmit = (e) => {
    const { form } = this.props;
    e.preventDefault();

    this.setState({ onSubmit: true });
    form.validateFieldsAndScroll(async (formError, { email, password }) => {
      if (!formError) {
        try {
          const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
          this.setState({ onSubmit: false });
          if (user.emailVerified) {
            this.setState({ isLoggedIn: true });
          } else {
            notification.warning({
              message: 'Warning!',
              description: 'Silahkan cek E-mail dan verifikasi akun kamu'
            });
          }
        } catch ({ code, message }) {
          if (code === ERROR_CODE['auth/user-not-found']) {
            notification.warning({
              message: 'Warning!',
              description: 'Pengguna tidak ditemukan, mohon periksa E-mail kamu'
            });
          }
          this.setState({ onSubmit: false });
        }
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const { onSubmit, isLoggedIn } = this.state;

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

NormalLoginForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired
};

export default Form.create()(NormalLoginForm);
