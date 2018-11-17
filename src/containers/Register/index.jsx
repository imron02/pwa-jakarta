import React from 'react';
import {
  Form,
  Input,
  Icon,
  Button
} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

const FormItem = Form.Item;

class RegisterForm extends React.Component {
  handleSubmit = () => { }

  render() {
    const { form: { getFieldDecorator } } = this.props;

    return (
      <div id="form-register">
        <Form onSubmit={this.handleSubmit} className="form-register">
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
              {getFieldDecorator('Full name', {
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
                rules: [{ required: true, message: 'Please input your password!' }]
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
                rules: [{ required: true, message: 'Please confirm your password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" className="input-icon" />}
                  type="password"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  size="large"
                />
              )}
            </FormItem>
          </div>
          <FormItem>
            <Button
              type="primary"
              htmlType="button"
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
