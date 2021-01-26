import TYPES from './types';

export const updateName = (name) => async (dispatch) => {
  dispatch({
    type: TYPES.UPDATE_USER_NAME,
    payload: name,
  });
};

export const resetUserInfo = () => async (dispatch) => {
  dispatch({
    type: TYPES.RESET_USER,
  });
};
