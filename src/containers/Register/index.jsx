import React from 'react';
import {
  Form,
  Input,
  Icon,
  Button,
  notification
} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from '../../utils/firebase';

import './index.scss';

const FormItem = Form.Item;

class RegisterForm extends React.Component {
  state = {
    confirmPassword: false
  };

  onSubmit = (e) => {
    const { form } = this.props;
    e.preventDefault();

    form.validateFieldsAndScroll(async (formError, values) => {
      if (!formError) {
        const { email, password } = values;

        try {
          const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
          await user.user.sendEmailVerification();
        } catch (error) {
          const { code, message } = error;

          if (code) {
            notification.warning({
              message: 'Warning!',
              description: message
            });
          }
        }
      }
    });
  }

  onConfirmBlur = (e) => {
    const { value } = e.target;
    const { confirmPassword } = this.state;

    this.setState({ confirmPassword: confirmPassword || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateConfirmPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmPassword } = this.state;

    if (value && confirmPassword) {
      form.validateFields(['confirm'], { force: true });
    }

    callback();
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;

    return (
      <div id="form-register">
        <Form onSubmit={this.onSubmit} className="form-register">
          <div id="form-input-register">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please input your E-mail!' },
                  { type: 'email', message: 'The input is not valid E-mail!' }
                ]
              })(
                <Input
                  prefix={<Icon type="mail" className="input-icon" />}
                  type="email"
                  placeholder="Email"
                  size="large"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('fullname', {
                rules: [{ required: true, message: 'Please input your name!' }]
              })(
                <Input
                  prefix={<Icon type="user" className="input-icon" />}
                  placeholder="Full name"
                  size="large"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your password!' },
                  { validator: this.validateConfirmPassword },
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
            <FormItem>
              {getFieldDecorator('confirm', {
                rules: [
                  { required: true, message: 'Please confirm your password!' },
                  { validator: this.compareToFirstPassword },
                  { min: 6 }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" className="input-icon" />}
                  type="password"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  size="large"
                  onBlur={this.onConfirmBlur}
                />
              )}
            </FormItem>
          </div>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              size="large"
              block
            >
              Log in
            </Button>
            <div className="login-link">
              Already have account? <Link to="/">Log In</Link>
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.func).isRequired
};

export default Form.create()(RegisterForm);
