import React, { useState } from 'react';
import Toggle from '../Toggle';

import logoImg from '../../assets/logo.svg';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md';

import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemButton,
  ToggleMenu,
  FooterToggle
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [toggleOpened, setToggleOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


  const handleToggle = () => {
    setToggleOpened(!toggleOpened);
  }

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <Container menuIsOpen={toggleOpened}>
      <Header>
        <ToggleMenu onClick={handleToggle}>
          {toggleOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

        <LogImg src={logoImg} alt="Logo minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <Link to="/">
          <MdDashboard />
          Dashboard
        </Link>

        <Link to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Link>

        <Link to="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </Link>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>

      <FooterToggle menuIsOpen={toggleOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleThemeChange}
        />
      </FooterToggle>
    </Container>
  );
}

export default Aside;