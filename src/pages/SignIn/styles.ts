import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.color.primary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;

  > h2{
    color: ${props => props.theme.color.white};
    margin-left: .5rem;
  }

  > img{
    width: 50px;
    height: 50px;
  }

`;

export const Form = styled.form`
  width: 20rem;
  height: 20rem;

  padding: 2rem;
  border-radius: 10px;

  background-color: ${props => props.theme.color.tertiary};
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.color.white};
  margin-bottom: 2rem;

  &::after{
    content: '';
      display: block;
      width: 3.5rem;
      border-bottom: 10px solid ${props => props.theme.color.warning};
  }
`;