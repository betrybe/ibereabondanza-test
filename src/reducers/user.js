// Esse reducer será responsável por tratar as informações da pessoa usuária

function user(state, action) {
  switch (action.type) {
  case 'log-user':
    return { ...state, user: { email: action.payload.email } };

  default:
    return state;
  }
}

export default user;
