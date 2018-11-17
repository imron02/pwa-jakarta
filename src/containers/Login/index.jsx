import React from 'react';
import {
  Form,
  Icon,
  Input,
  Checkbox,
  Button
} from 'antd';
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
                rules: [{ required: true, message: 'Please input your email!' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
              <a href="#">Sign Up</a>
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
