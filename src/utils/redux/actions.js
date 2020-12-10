/**
 * actions creators for redux
 */
export const SET_LOCAL_USER = 'SET_LOCAL_USER';
export const setLocalUser = (user) => ({
  type: SET_LOCAL_USER,
  payload: user,
});

export const RESET_LOCAL_USER = 'RESET_LOCAL_USER';
export const resetLocalUser = () => ({
  type: RESET_LOCAL_USER,
});

export const SET_USER = 'SET_USER';
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
