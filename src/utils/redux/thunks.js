let user;

export const registerUser = (data) => async (dispatch) => {
  try {
    user = await signup(data);

    dispatch(getUser(user));
  } catch (error) {
    alert(error);
  }

  return user;
};
