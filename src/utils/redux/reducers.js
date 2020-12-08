/**
 * redux reduce to handle data
 */
import { SET_USER } from './actions';

const initialState = {};

export const User = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER: {
      const user = payload;

      console.log(payload)

      return { ...state, ...user };
    }

    default:
      return state;
  }
};
