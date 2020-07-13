import AuthService from '../../services/auth';

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';

const SignInAccountAction = (email, password) => {
  return async (dispatch) => {
    const user = await AuthService.SignIn(email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user
      }
    })
  }
}

const SetUserData = () => {
  return async (dispatch) => {
    const user = await AuthService.SignInWithToken();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user
      }
    })
  }
}

export { SignInAccountAction,SetUserData };
