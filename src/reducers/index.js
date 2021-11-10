import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

function reducer(state, action) {
  const { type } = action;

  switch (type) {
  case 'log-user':
    return user(state, action);

  default:
    console.log('default');
  }

  console.log(state);
  return state;
}

export default reducer;
