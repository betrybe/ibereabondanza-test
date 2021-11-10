import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as emailValidator from 'email-validator';
import { useAppDispatch } from '../store';
import Input from '../components/Input';

const MINIMUM_PASSWORD_LENGTH = 6;

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexForm = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  width: 300px;
  height: 300px;
`;

const LoginButton = styled.button`
  color: white;
  text-align: center;
  background-color: rgb(47, 193, 140);
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgb(47, 223, 140);
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  cursor: pointer;
  display: block;
`;

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [allowButton, setAllowButton] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isPasswordValid = password.length >= MINIMUM_PASSWORD_LENGTH;
    const isEmailValid = emailValidator.validate(email);
    setAllowButton(isPasswordValid && isEmailValid);
  }, [password, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'log-user', payload: { email } });
    history.push('/carteira');
  };

  return (
    <Container>
      <IndexForm>
        <h2 style={ { textAlign: 'center' } }>Trybe</h2>
        <form onSubmit={ handleSubmit }>
          <Input
            label="Email"
            id="email-input"
            type="email"
            value={ email }
            onChange={ (text) => setEmail(text) }
          />
          <Input
            label="Senha"
            id="password-input"
            type="password"
            value={ password }
            onChange={ (text) => setPassword(text) }
          />
          <LoginButton disabled={ !allowButton } type="submit">Entrar</LoginButton>
        </form>
      </IndexForm>
    </Container>);
}

export default Login;
