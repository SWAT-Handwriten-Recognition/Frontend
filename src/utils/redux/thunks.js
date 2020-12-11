import {
  setUser,
  resetLocalUser,
  getSignatures,
} from '../../utils/redux/actions.js';

async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await postData(
      'https://api.jonastronco.xyz/users/signup/',
      data
    ).then((data) => dispatch(setUser(data)));

    if (response) dispatch(resetLocalUser());
  } catch (error) {
    alert(error);
  }
};

export const signinUser = (data) => async (dispatch) => {
  try {
    await postData(
      'https://api.jonastronco.xyz/users/login/',
      data
    ).then((data) => dispatch(setUser(data)));
  } catch (error) {
    alert(error);
  }
};

export const getSigns = ({ status, token }) => async (dispatch) => {
  try {
    const response = await postData('https://api.jonastronco.xyz/signatures/', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ username: status.username }), // body data type must match "Content-Type" header
    }).then((response) => dispatch(getSignatures(response)));

    console.log(await response, token);
  } catch (error) {
    alert(error);
  }
};
