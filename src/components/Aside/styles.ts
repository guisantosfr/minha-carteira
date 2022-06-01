import styled, { css } from "styled-components";

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${props => props.theme.color.secondary};
  padding-left: 1.25rem;
  border-right: 1px solid ${props => props.theme.color.gray};

  position: relative;

  @media(max-width: 600px){
    padding-left: .5rem;
    position: fixed;
    z-index: 2;
    width: 10rem;

    height: ${props => props.menuIsOpen ? '100vh' : '5rem'};
    overflow: hidden;

    ${props => !props.menuIsOpen && css`
      border: none;
      border-bottom: 1px solid ${props => props.theme.color.gray};
    `};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;

`;

export const LogImg = styled.img`
  height: 2.5rem;
  width: 2.75rem;

  @media(max-width: 600px){
    height: 1.5rem;
    width: 1.75rem;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.color.white};
  margin-left: .625rem;

  @media(max-width: 600px){
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 3rem;
  flex-direction: column;

  > a {
    color: ${props => props.theme.color.info};
    text-decoration: none;
    margin: .5rem 0;

    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
      opacity: .7;
    }

    > svg{
      font-size: 1.125rem;
      margin-right: .375rem;
    }
  }
`;

export const MenuItemButton = styled.button`
  font-size: 1rem;
  color: ${props => props.theme.color.info};

  border: none;
  background: none;
  margin: .5rem 0;

  display: flex;
  align-items: center;

  transition: opacity .3s;

  &:hover {
    opacity: .7;
  }

  > svg{
    font-size: 1.125rem;
    margin-right: .375rem;
  }
`;
