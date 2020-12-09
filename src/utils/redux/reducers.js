/**
 * redux reduce to handle data
 */
import { SET_LOCAL_USER, SET_USER } from './actions';

const initialState = null;

export const localUser = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCAL_USER: {
      const user = payload;

      return { ...state, ...user };
    }

    default:
      return state;
  }
};

export const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER: {
      const user = payload;

      return { ...state, ...user };
    }

    default:
      return state;
  }
};
