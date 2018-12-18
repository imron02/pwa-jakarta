import { REDUX } from '../../utils/constants';

const initialState = {
  actionStatus: '',
  isLoggedIn: false,
  user: {},
  error: ''
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case REDUX.REQUEST_LOGIN:
      return {
        ...state,
        actionStatus: REDUX.REQUEST_LOGIN,
        error: ''
      };
    case REDUX.REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        actionStatus: REDUX.REQUEST_LOGIN_SUCCESS,
        isLoggedIn: true,
        user: action.payload
      };
    case REDUX.REQUEST_LOGIN_FAILED:
      return {
        ...initialState,
        actionStatus: REDUX.REQUEST_LOGIN_FAILED,
        error: action.payload
      };
    default:
      return initialState;
  }
};

export default login;
