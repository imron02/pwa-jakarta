import { notification } from 'antd';

import { firebase } from '../../utils/firebase';
import { REDUX, ERROR_CODE } from '../../utils/constants';

const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: REDUX.REQUEST_LOGIN });

  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);

    if (user.emailVerified) {
      dispatch({ type: REDUX.REQUEST_LOGIN_SUCCESS, payload: user });
    } else {
      dispatch({ type: REDUX.REQUEST_LOGIN_FAILED, payload: 'Belum verifikasi email' });

      user.sendEmailVerification();
      notification.warning({
        message: 'Warning!',
        description: 'Silahkan cek E-mail dan verifikasi akun kamu'
      });
    }
  } catch ({ code, message }) {
    if (code === ERROR_CODE['auth/user-not-found']) {
      dispatch({ type: REDUX.REQUEST_LOGIN_FAILED, payload: message });
      notification.warning({
        message: 'Warning!',
        description: 'Pengguna tidak ditemukan, mohon periksa E-mail kamu'
      });
    } else if (code === ERROR_CODE['auth/wrong-password']) {
      dispatch({ type: REDUX.REQUEST_LOGIN_FAILED, payload: message });

      notification.warning({
        message: 'Warning!',
        description: 'Password salah, silahkan perbaiki password kamu'
      });
    } else {
      dispatch({ type: REDUX.REQUEST_LOGIN_FAILED, payload: message });

      notification.warning({
        message: 'Warning!',
        description: 'Mohon maaf sedang terjadi kesalahan teknis, silahkan coba lagi'
      });
    }
  }
};

export default login;
