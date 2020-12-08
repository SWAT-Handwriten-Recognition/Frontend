/**
 * redux reduce to handle data
 */
import { SET_LOCAL_USER } from './actions';

const initialState = {};

export const localUser = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCAL_USER: {
      const user = payload;

      console.log(payload)

      return { ...state, ...user };
    }

    default:
      return state;
  }
};

export const user = (state = initialState, action) => {
  const { type } = action;

  switch (type) {

    default:
      return state;
  }
};
