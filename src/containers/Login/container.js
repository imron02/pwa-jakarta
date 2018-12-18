import { connect } from 'react-redux';
import LoginForm from './index';
import login from './action';

const mapStateToProps = state => ({
  user: state.login.user,
  isLoggedIn: state.login.isLoggedIn,
  actionStatus: state.login.actionStatus
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
