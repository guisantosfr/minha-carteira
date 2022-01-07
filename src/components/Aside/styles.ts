import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.color.secondary};
  padding-left: 1.25rem;
  border-right: 1px solid ${props => props.theme.color.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 5rem;
`;

export const LogImg = styled.img`
  height: 2.5rem;
  width: 2.75rem;
`;

export const Title = styled.h3`
  color: ${props => props.theme.color.white};
  margin-left: .625rem;
`;

export const MenuContainer = styled.nav`
  margin-top: 3rem;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
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
`;
