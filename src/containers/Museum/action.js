import { REDUX, RESPONSE_CODE } from '../../utils/constants';
import { MUSEUM } from '../../utils/api';
import fetch from '../../utils/fetch';

const getMuseum = () => async (dispatch) => {
  dispatch({ type: REDUX.REQUEST_MUSEUM });

  try {
    const url = await fetch(MUSEUM);
    const response = await url.json();

    if (response.status === RESPONSE_CODE.success) {
      dispatch({ type: REDUX.REQUEST_MUSEUM_SUCCESS, payload: { ...response } });
    } else {
      throw response;
    }
  } catch (error) {
    dispatch({ type: REDUX.REQUEST_MUSEUM_FAILED, error: error.data || 'Get museum list failed' });
  }
};

export default getMuseum;
