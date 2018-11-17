import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = () => { }

  render() {
    const { form: { getFieldDecorator } } = this.props;

    return (
      <div id="form-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div id="form-input-login">
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
                />,
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
          </div>
          <FormItem>
            <Button
              type="primary"
              htmlType="button"
              className="login-form-button"
              size="large"
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
