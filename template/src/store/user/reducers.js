import TYPES from './types';

const INITIAL_STATE = {
  name: 'John Doe',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.UPDATE_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case TYPES.RESET_USER_INFO:
      return Object.assign({}, INITIAL_STATE);
    default: {
      return state;
    }
  }
}
