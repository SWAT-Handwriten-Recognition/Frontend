import { api, apiCall } from '../axios/request.js'
let user;

export const registerUser = (data) => async (dispatch) => {
  try {
    const usersRoute = apiCall('users')
    user = await api.post(usersRoute('singup'), { data })

    console.log(user)
  } catch (error) {
    alert(error);
  }

  return user;
};
