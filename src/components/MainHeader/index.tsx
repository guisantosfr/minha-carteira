import React, { useMemo } from 'react';
import { Container, Profile, Welcome, Username } from './styles';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Guilherme Santos</Username>
      </Profile>
    </Container>
  );
}

export default MainHeader;
