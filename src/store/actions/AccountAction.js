import Auth from '../../services/auth';

const SignInAccountAction = (email, password) => {
  return async (dispatch) => {
    const user = await Auth.SignIn(email, password);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user
      }
    })
  }
}

export default SignInAccountAction;
