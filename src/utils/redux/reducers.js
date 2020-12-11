/**
 * redux reduce to handle data
 */
import {
  SET_LOCAL_USER,
  SET_USER,
  RESET_LOCAL_USER,
  RESET_USER,
  GET_SIGNATURES
} from './actions';

const initialState = null;

export const localUser = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCAL_USER: {
      const user = payload;

      return { ...state, ...user };
    }

    case RESET_LOCAL_USER: {
      return null;
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

    case RESET_USER: {
      return null;
    }

    case GET_SIGNATURES: {
      const signatures = payload;

      return { ...state, status: { ...state?.status , signatures } };
    }

    default:
      return state;
  }
};
