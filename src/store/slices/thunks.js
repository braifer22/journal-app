import { loginProvider, logoutProvider, registerProvider } from '../../firebase/providers';
import { login, logout, startCheckingStatus } from './authSlice';

export function createAccount(displayName, email, password) {
  return async (dispatch) => {
    dispatch(startCheckingStatus());

    const res = await registerProvider(email, password, displayName);

    if (!res.ok) {
      console.log('Resultado de loginProvider:', res);
      return dispatch(logout(res));
    }

    console.log('Resultado de loginProvider:', res);
    return dispatch(login(res));
  };
}

export function logInAccount(email, password) {
  return async (dispatch) => {
    dispatch(startCheckingStatus());

    const res = await loginProvider(email, password);

    if (!res.ok) {
      console.log('Resultado de loginProvider:', res);
      return dispatch(logout(res));
    }

    console.log('Resultado de loginProvider:', res);
    return dispatch(login(res));
  };
}

export function logOutAccount() {
  return async (dispatch) => {
    await logoutProvider();

    dispatch(logout());
  };
}
