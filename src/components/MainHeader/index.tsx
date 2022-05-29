import React, { useMemo, useState } from 'react';
import { Container, Profile, Welcome, Username } from './styles';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleThemeChange}
      />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Guilherme Santos</Username>
      </Profile>
    </Container>
  );
}

export default MainHeader;
