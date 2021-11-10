import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  const currentUser = useAppSelector((state) => {
    if (state) return state.user;
    return {};
  });
  const dispatch = useAppDispatch();
  console.log(currentUser, dispatch);

  return (
    <Switch>
      <Route path="/carteira">
        {currentUser.email !== '' ? <Wallet /> : <Redirect to="/" />}
      </Route>
      <Route path="/">
        <Login />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
