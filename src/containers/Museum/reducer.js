import { REDUX } from '../../utils/constants';

const initialState = {
  status: '',
  count: 0,
  data: [],
  error: ''
};

const museum = (state = initialState, action) => {
  switch (action.type) {
    case REDUX.REQUEST_MUSEUM:
      return {
        ...state,
        status: REDUX.REQUEST_MUSEUM,
        error: ''
      };
    case REDUX.REQUEST_MUSEUM_SUCCESS:
      return {
        ...state,
        status: REDUX.REQUEST_MUSEUM_SUCCESS,
        count: action.payload.count,
        data: action.payload.data
      };
    case REDUX.REQUEST_MUSEUM_FAILED:
      return {
        ...initialState,
        status: REDUX.REQUEST_MUSEUM_FAILED,
        error: action.error
      };
    default:
      return initialState;
  }
};

export default museum;
