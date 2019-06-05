/* eslint-disable no-console */
import { SAVE_USER_INFOR } from '../action/user';

const initialState = {
  userId: null,
  username: 'Hoàng',
  email: '',
};

export default function sentence(oldState = initialState, action) {
  switch (action.type) {
    case SAVE_USER_INFOR: {
      if (!action.data) {
        return oldState;
      }
      return {
        ...oldState,
        username: action.data.username,
      };
    }
    default:
      return oldState;
  }
}
