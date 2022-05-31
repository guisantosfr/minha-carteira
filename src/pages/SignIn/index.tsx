import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>

        <Input type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
}

export default SignIn;
