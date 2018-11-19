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
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmpty from 'validator/lib/isEmpty';

import { firebase, db } from '../../utils/firebase';
import { FORMAT_USER_DATA } from '../../utils/helpers';
import './index.scss';

const FormItem = Form.Item;

class RegisterForm extends React.Component {
  state = {
    confirmPassword: false,
    onSubmit: false
  };

  onSubmit = (e) => {
    const { form } = this.props;
    e.preventDefault();

    this.setState({ onSubmit: true });
    form.validateFieldsAndScroll(async (formError, values) => {
      if (!formError) {
        const { email, password } = values;

        try {
          const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
          await response.user.sendEmailVerification();

          this.insertData(FORMAT_USER_DATA(values));
        } catch (error) {
          const { code, message } = error;

          this.setState({ onSubmit: false });
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

  insertData = async (data) => {
    const { history } = this.props;

    try {
      await db.collection('users').add(data);

      this.setState({ onSubmit: false });
      notification.success({
        message: 'Success register',
        description: 'Congratulations, you have successfully registered. Please login to enter the application',
        duration: 1,
        onClose: () => {
          history.push('/');
        }
      });
    } catch (error) {
      // Error
    }
  }

  onConfirmBlur = (e) => {
    const { value } = e.target;
    const { confirmPassword } = this.state;

    this.setState({ confirmPassword: confirmPassword || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value.length < 6) {
      callback('Password konfirmasi minimal 6 karakter!');
    } else if (value && value !== form.getFieldValue('password')) {
      callback('Dua password yang Kamu masukkan tidak konsisten!');
    } else {
      callback();
    }
  }

  validatePhoneNumber = (rule, value, callback) => {
    if (isEmpty(value)) {
      callback('Silahkan masukkan nomor telepon!');
    } else if (!isMobilePhone(value, 'id-ID')) {
      callback('Yang Kamu masukkan bukan nomor telepon yang valid!');
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
    const { onSubmit } = this.state;

    return (
      <div id="form-register">
        <Form onSubmit={this.onSubmit} className="form-register">
          <div id="form-input-register">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Silakan masukkan E-mail Kamu!' },
                  { type: 'email', message: 'Yang kamu masukkan bukan E-mail yang valid!' }
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
                rules: [{ required: true, message: 'Silahkan masukkan nama lengkap kamu!' }]
              })(
                <Input
                  prefix={<Icon type="user" className="input-icon" />}
                  placeholder="Nama Lengkap"
                  size="large"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('phone', {
                rules: [
                  { validator: this.validatePhoneNumber }
                ]
              })(
                <Input
                  prefix={<Icon type="phone" className="input-icon" />}
                  placeholder="Nomor Telepon"
                  size="large"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Silahkan masukkan password kamu!' },
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
                  { required: true, message: 'Silahkan konfirmasi password kamu!' },
                  { validator: this.compareToFirstPassword }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" className="input-icon" />}
                  type="password"
                  autoComplete="off"
                  placeholder="Konfirmasi Password"
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
              loading={onSubmit}
              block
            >
              Daftar
            </Button>
            <div className="login-link">
              Sudah punya akun? <Link to="/">Masuk</Link>
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
