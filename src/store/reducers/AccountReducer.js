const INITIAL_STATE = {
  user: { }
}

const AccountReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      user: action.payload.user
    }
  }

  return state;
}

export default AccountReducer;
